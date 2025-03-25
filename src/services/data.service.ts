import { Injectable } from '@angular/core';
import { getList, getProfiles, literal, node } from 'prez-lib';
import { Observable, from, map } from 'rxjs';
import type { PrezDataList, PrezNode, PrezProfiles, PrezProfileHeader } from 'prez-lib';
import type { PrezDataListWithFacets, PrezFacet, PrezFacetValue } from '../types';

const sampleFilter = {
  "op": "and",
  "args": [
    {
      "op": "=",
      "args": [
        {
          "property": "http://purl.org/linked-data/registry#status"
        },
        "https://linked.data.gov.au/def/reg-statuses/experimental"
      ]
    }
  ]
}

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

  getListData(path: string, profile: string, page: number = 1, limit: number = 10): Observable<PrezDataListWithFacets> {
    const params = new URLSearchParams();
    if(profile) {
      params.set('_profile', profile);
    }
    if(page) {
      params.set('_page', page.toString());
    }
    if(limit) {
      params.set('_limit', limit.toString());
    }
    const filter = false;
    if(filter) {
      params.set('_filter', JSON.stringify(filter));
    }
    const pathWithFilter = path + '?'  + params.toString();
    // _profile=prez:OGCSchemesListProfile&filter=' + encodeURIComponent(JSON.stringify(sampleFilter));
    return from(getList(this.baseUrl, pathWithFilter)).pipe(
      map(data => ({
        ...data,
        facets: this.getMockFacets()
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

  private getMockFacets(): PrezFacet[] {
    return [
      {
        facetName: "type",
        facetValues: [{
          term: node({value: "http://www.w3.org/ns/dcat#Catalog", label: literal("Catalog")}),
          count: 5
        },
        {
          term: node({value: "http://www.w3.org/ns/dcat#Dataset", label: literal("Dataset")}),
          count: 3
        }
        ] as PrezFacetValue[]
      },
      {
        facetName: "publisher",
        facetValues: [{
          term: node({value: "http://example.org/org/ga", label: literal("Geoscience Australia")}),
          count: 4
        },
        {
          term: node({value: "http://example.org/org/csiro", label: literal("CSIRO")}),
          count: 2
        }
        ] as PrezFacetValue[]
      }
    ];
  }
}

