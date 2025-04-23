import { Injectable, NgZone } from '@angular/core';
import { getList, getProfiles, literal, node } from 'prez-lib';
import { Observable, from, map, BehaviorSubject } from 'rxjs';
import type { PrezDataList, PrezNode, PrezProfiles, PrezProfileHeader, PrezFocusNode, PrezDataSearch, PrezFacet, PrezFacetValue } from 'prez-lib';
import type { RequestInfo } from '../types';
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

  getListData(path: string, pageInfo: PageInfo): Observable<PrezDataList> {
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

    return from(getList(this.baseUrl, pathWithFilter))
    /*.pipe(
      map(data => ({
        ...data,
        facets: this.generateFacetsFromData(data.data)
      }))
    );*/
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


}

