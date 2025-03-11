import { PrezDataList, PrezDataSearch, PrezLiteral, PrezNode } from "prez-lib";

export type PrezFacetValue = {
    term: (PrezLiteral | PrezNode);
    count: number;
}

export type PrezFacet = {
    facetName: string;
    facetValues: PrezFacetValue[];
}
  
export type PrezDataListWithFacets = PrezDataList & {
    facets: PrezFacet[];
}

export type PrezDataSearchWithFacets = PrezDataSearch & {
    facets: PrezFacet[];
}
 
  