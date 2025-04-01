import { Injectable, NgZone } from '@angular/core';
import { getList, getProfiles, literal, node } from 'prez-lib';
import { Observable, from, map, BehaviorSubject } from 'rxjs';
import type { PrezDataList, PrezNode, PrezProfiles, PrezProfileHeader, PrezFocusNode, PrezDataSearch } from 'prez-lib';
import type { PrezDataListWithFacets, PrezDataSearchWithFacets, PrezFacet, PrezFacetValue, RequestInfo } from '../types';
import { filterToJson, type Filter } from '../cql';
import { PageInfo } from './page-info.service';
import { DebugService } from './debug.service';

export type SimpleProfile = {
  id: string;
  properties: string[];
}

export interface Profile {
  token: string;
  title: string;
  description: string;
  current: boolean;
  default: boolean;
  uri: string;
}

@Injectable({
  providedIn: 'root',
})

export class DataService {
  private baseUrl =
    'https://prez.niceforest-128e6d31.australiaeast.azurecontainerapps.io';

  public getBaseUrl() {
    return this.baseUrl;
  }

  private requestInfo = new BehaviorSubject<RequestInfo | null>(null);
  requestInfo$ = this.requestInfo.asObservable();

  constructor(private ngZone: NgZone, private debugService: DebugService) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getListData(path: string, pageInfo: PageInfo): Observable<PrezDataListWithFacets> {
    const params = new URLSearchParams();
    if (pageInfo.profile) {
      params.set('_profile', pageInfo.profile);
    }
    if (pageInfo.page) {
      params.set('page', pageInfo.page.toString());
    }
    if (pageInfo.limit) {
      params.set('limit', pageInfo.limit.toString());
    }
    if (pageInfo.filter) {
      params.set('filter', pageInfo.filter);
    }
    const pathWithFilter = path + '?' + params.toString();
    
    // Emit request info within Angular's zone
    this.ngZone.run(() => {
      this.debugService.logRequest(this.baseUrl + pathWithFilter, Object.fromEntries(params.entries()));
    });

    return from(getList(this.baseUrl, pathWithFilter)).pipe(
      map(data => ({
        ...data,
        facets: this.generateFacetsFromData(data.data)
      }))
    );
  }

  getGlobalProfiles(): Observable<SimpleProfile[]> {
    const profiles = getProfiles(this.baseUrl);
    const profilesArray = from(profiles);
    return profilesArray.pipe(
      map(profiles => 
        Object.keys(profiles).map(profileKey => ({
          id: profileKey,
          properties: profiles[profileKey].flatMap(val => 
            val.list && !val.node.value ? val.list.map(val2 => val2.node.value) : [val.node.value]
          )
        }))
      )
    );
  }

  public addFacetsToDataList(data: PrezDataList): PrezDataListWithFacets {
    return {
      ...data,
      facets: this.generateFacetsFromData(data.data)
    };
  }

  public addFacetsToDataSearch(data: PrezDataSearch): PrezDataSearchWithFacets {
    return {
      ...data,
      facets: []//this.generateFacetsFromData(data.data)
    };
  }

  private generateFacetsFromData(data: PrezFocusNode[]): PrezFacet[] {
    const facetGroups = new Map<string, Map<string, { value: string, label?: string, count: number }>>();
    
    // Collect all property values and their counts
    data.forEach(item => {
      Object.entries(item.properties || {}).forEach(([propertyUri, property]) => {
        const propertyLabel = property.predicate?.label?.value || propertyUri;
        if (!facetGroups.has(propertyLabel)) {
          facetGroups.set(propertyLabel, new Map());
        }
        
        property.objects.forEach(obj => {
          const value = obj.value;
          const valueKey = value; // Use value as key for the Map
          const existingEntry = facetGroups.get(propertyLabel)!.get(valueKey);
          
          facetGroups.get(propertyLabel)!.set(valueKey, {
            value,
            label: (obj as PrezNode).label?.value || obj.value,
            count: (existingEntry?.count || 0) + 1
          });
        });
      });
    });

    // Convert to PrezFacet array, filtering out single-occurrence values
    return Array.from(facetGroups.entries())
      .map(([propertyUri, values]) => {
        // Get the property's predicate label if available
        const predicate = data[0]?.properties?.[propertyUri]?.predicate;
        const facetLabel = predicate?.label?.value || propertyUri;

        return {
          facetName: facetLabel,
          facetValues: Array.from(values.entries())
            .filter(([_, entry]) => entry.count > 1)
            .map(([_, entry]): PrezFacetValue => ({
              term: node({
                value: entry.value,
                label: literal(entry.label || entry.value)
              }),
              count: entry.count
            }))
        };
      })
      .filter(facet => facet.facetValues.length > 0);
  }
}

