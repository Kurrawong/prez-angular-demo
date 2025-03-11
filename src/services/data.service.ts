import { Injectable } from '@angular/core';
import { getList, literal, node } from 'prez-lib';
import { Observable, from, map } from 'rxjs';
import type { PrezNode } from 'prez-lib';
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


@Injectable({
  providedIn: 'root',
})

export class DataService {
  private baseUrl =
    'https://prez.niceforest-128e6d31.australiaeast.azurecontainerapps.io';

  getListData(path: string, page: number = 1, limit: number = 10): Observable<PrezDataListWithFacets> {
    const pathWithFilter = path + '?_profile=prez:OGCSchemesListProfile&filter=' + encodeURIComponent(JSON.stringify(sampleFilter));
    return from(getList(this.baseUrl, path)).pipe(
      map(data => ({
        ...data,
        facets: this.getMockFacets()
      }))
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

