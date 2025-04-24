import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getItem, getList, PrezDataItem, search, PrezDataList, PrezDataSearch } from 'prez-lib';
import { JsonTableComponent } from '../json-table/json-table.component';
import { JsonPipe } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { JsonTablePipe } from '../../pipes/jsontable.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple',
  standalone: true,
  imports: [JsonTableComponent, CommonModule, JsonPipe, JsonTablePipe, FormsModule],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.css'
})
export class SimpleComponent implements OnInit {
  baseUrl = '';
  baseUiUrl = 'https://demo.dev.kurrawong.ai';
  result: any;
  dataLists: Record<string, {url: string, type: 'list' | 'search' | 'item', params?: Record<string, any>, description: string, noUIUrl?: boolean, response?: PrezDataList | PrezDataSearch | PrezDataItem | null}> = {};
  dataListNames: string[] = [];
  filteredDataListNames: string[] = [];
  detailsVisible: boolean[] = [];
  loading: boolean[] = [];
  types = ['list', 'search', 'item'];
  selectedType = 'list';
  customUrl = '';
  customType: 'list' | 'search' | 'item' = 'list';
  customResponse: PrezDataList | PrezDataSearch | PrezDataItem | { error: string; details?: any } | null = null;
  customLoading: boolean = false;

  constructor(private sanitizer: DomSanitizer) {
    this.baseUrl = 'http://localhost:8000';
    this.dataLists = {
      "catalogs list": {
        type: 'list',
        description: 'Listing endpoint to get all catalogs, just passes limit and page', 
        url: '/catalogs', 
        params: {limit: '10', page: '1'}
      },
      "collections list": {
        type: 'list',
        description: 'Listing endpoint to get all collections, just passes limit and page', 
        url: '/catalogs/codelists:/collections', 
        params: {limit: '10', page: '1'}
      },
      "text search collections list": {
        type: 'list',
        description: 'Simple test search for "geometry" applied to the listing endpoint to get all collections, just passes limit and page',
        url: '/catalogs/codelists:/collections', 
        params: {limit: '10', page: '1', q: 'code'}
      },
      "text search catalog list": {
        type: 'list',
        description: 'Search for "icsm" applied to the listing endpoint to get all catalogs, just passes limit and page', 
        url: '/catalogs', params: {limit: '10', page: '1', q: 'icsm'}
      },
      "cql search collections list": {
        type: 'list',
        description: 'CQL filter applied to the listing endpoint to get all collections, adds a filter to the query', 
        url: '/catalogs/codelists:/collections', 
        params: {limit: '10', page: '1', _profile: 'prez:OGCSchemesListProfile', filter: JSON.stringify({
          "op": "and",
          "args": [
            {
              "op": "=",
              "args": [
                {
                  "property": "http://purl.org/linked-data/registry#status"
                },
                "http://def.isotc211.org/19135/-1/2015/CoreModel/code/RE_ItemStatus/stable"
              ]
            }
          ]
        })}
      },
      "list - member profile": {
        type: 'list',
        description: 'Get a collection list using the default list profile',
        url: '/catalogs/codelists:/collections',
        params: {limit: '10', page: '1', _profile: 'ns39:mem'}
      },
      "list - using a custom profile": {
        type: 'list',
        description: 'Get a collection list using a custom list profile',
        url: '/catalogs/codelists:/collections',
        params: {limit: '10', page: '1', _profile: 'prez:OGCSchemesListProfile'}
      },
      "top concepts": {
        type: 'list',
        description: 'Get the top concepts from the catalog',
        url: '/concept-hierarchy/ns8:MD_ClassificationCode/top-concepts',
        params: {limit: '20', page: '1'},
        noUIUrl: true
      },
      "simple search": {
        type: 'search',
        description: 'Simple search for "geometry" applied to the search endpoint to get all collections, just passes limit and page', 
        url: '/search', 
        params: {limit: '10', page: '1', q: 'geometry'}
      },
      "simple search profile": {
        type: 'search',
        description: 'Simple search for "geometry" applied to the search endpoint to get all collections, just passes limit and page', 
        url: '/search', 
        params: {limit: '5', page: '1', q: 'geometry', _profile: 'openobj'}
      },
      "simple search profile with facets": {
        type: 'search',
        description: 'Simple search for "monkey" applied to the search endpoint with a custom facet profile', 
        url: '/search', 
        params: {limit: '5', page: '1', q: 'monkey', facet_profile: 'animal-facets'}
      },
      "item by path": {
        type: 'item',
        description: 'Get collection item by path',
        url: '/catalogs/codelists:/collections/ns8:MD_ClassificationCode'
      },
      "item by id": {
        type: 'item',
        description: 'Get collection item by id. The data attribute contains the main metadata for the collection, and the data.properties attribute contains the main properties about the collection.',
        url: '/object',
        params: {uri: 'http://def.isotc211.org/19115/-1/2014/ConstraintInformation/code/MD_ClassificationCode'}
      }
    };
    this.dataListNames = Object.keys(this.dataLists);
    this.detailsVisible = new Array(this.dataListNames.length).fill(false);
    this.loading = new Array(this.dataListNames.length).fill(false);
    this.filteredDataListNames = this.dataListNames.filter(name => this.dataLists[name].type === this.selectedType);
  }

  ngOnInit() {
    // Log initial data
    console.log('Initial dataListNames:', this.dataListNames);
    console.log('Initial filteredDataListNames:', this.filteredDataListNames);
  }

  selectType(type: string) {
    this.selectedType = type;
    this.filteredDataListNames = this.dataListNames.filter(name => this.dataLists[name].type === type);
    console.log(`Filtered dataListNames for type "${type}":`, this.filteredDataListNames);
    // Reset visibility when changing types? Optional, but might be cleaner UX.
    // this.detailsVisible.fill(false); 
  }

  getCountByType(type: string): number {
    return this.dataListNames.filter(name => this.dataLists[name].type === type).length;
  }

  getUrl(name: string, path: string, params?: Record<string, any>) {
    const queryString = params ? `?${paramsToQueryString(params)}` : '';
    return `${this.baseUrl}${path}${queryString}`;
  }

  getUIUrl(name: string, path: string, params?: Record<string, any>) {
    const queryString = params ? `?${paramsToQueryString(params)}` : '';
    return `${this.baseUiUrl}${path}${queryString}`;
  }

  async runTest(name: string, path: string, params?: Record<string, any>) {
    const originalIndex = this.dataListNames.indexOf(name);
    if (originalIndex === -1) return;

    this.loading[originalIndex] = true;
    const queryString = params ? `?${paramsToQueryString(params)}` : '';
    
    try {
      if (this.dataLists[name].type === 'list') {
        const data = await getList(this.baseUrl, `${path}${queryString}`);
        this.dataLists[name].response = data;
      } else if (this.dataLists[name].type === 'search') {
        const data = await search(this.baseUrl, `${path}${queryString}`);
        this.dataLists[name].response = data;
      } else if (this.dataLists[name].type === 'item') {
        const data = await getItem(this.baseUrl, `${path}${queryString}`);
        this.dataLists[name].response = data;
      }
    } catch (error) {
      console.error('Error fetching data for', name, ':', error);
      this.dataLists[name].response = { error: `Failed to fetch data: ${error}` } as any;
    } finally {
      this.loading[originalIndex] = false;
    }
  }

  toggleDetails(name: string): void {
    const originalIndex = this.dataListNames.indexOf(name);
    if (originalIndex === -1) return;

    this.detailsVisible[originalIndex] = !this.detailsVisible[originalIndex];

    if (this.detailsVisible[originalIndex] && !this.dataLists[name].response) {
      this.runTest(name, this.dataLists[name].url, this.dataLists[name].params);
    }
  }

  async runCustomTest(): Promise<void> {
    if (!this.customUrl) {
      console.error('Custom URL is required.');
      this.customResponse = { error: 'Custom URL is required.' };
      return;
    }

    this.customLoading = true;
    this.customResponse = null;

    let parsedBaseUrl: string;
    let pathAndQuery: string;

    try {
      // Parse the full URL provided by the user
      const fullUrl = new URL(this.customUrl);
      parsedBaseUrl = fullUrl.origin; // e.g., "https://example.com"
      pathAndQuery = fullUrl.pathname + fullUrl.search; // e.g., "/api/items?q=test"

      // Ensure path starts with '/' (should be handled by URL parsing, but good practice)
      if (!pathAndQuery.startsWith('/')) {
          pathAndQuery = `/${pathAndQuery}`;
      }

    } catch (e) {
      console.error('Invalid Custom URL:', e);
      this.customResponse = { error: 'Invalid Custom URL provided.', details: this.customUrl };
      this.customLoading = false; // Stop loading on parsing error
      return;
    }

    console.log(`Running custom test: Type=${this.customType}, BaseURL=${parsedBaseUrl}, Path=${pathAndQuery}`);

    try {
      let data: PrezDataList | PrezDataSearch | PrezDataItem;
      // Call the appropriate function based on the selected type, using parsed URL parts
      switch (this.customType) {
        case 'list':
          data = await getList(parsedBaseUrl, pathAndQuery);
          break;
        case 'search':
          data = await search(parsedBaseUrl, pathAndQuery);
          break;
        case 'item':
          data = await getItem(parsedBaseUrl, pathAndQuery);
          break;
        default:
          throw new Error(`Unsupported custom type: ${this.customType}`);
      }
      console.log('Custom response received:', data);
      this.customResponse = data;
    } catch (error: any) {
      console.error('Error fetching custom data:', error);
      this.customResponse = { error: 'Failed to fetch data', details: error?.message || error };
    } finally {
      this.customLoading = false;
    }
  }

  // getSafeHtml(data: any): SafeHtml {
  //   const html = new JsonTablePipe().transform(data);
  //   return this.sanitizer.bypassSecurityTrustHtml(html);
  // }

  // toggleNestedTable(element: HTMLElement, index: number, key: string) {
  //   console.log(`toggleNestedTable called for index: ${index}, key: ${key}`);
  //   const nestedRow = document.getElementById(`nested-${index}`);
  //   if (nestedRow) {
  //     console.log(`Nested row found for index: ${index}`);
  //     if (nestedRow.style.display === 'none') {
  //       console.log(`Expanding nested row for index: ${index}`);
  //       nestedRow.style.display = 'table-row';
  //       const dataItem = this.dataLists['catalogs'].response?.data[index];
  //       if (dataItem && key in dataItem) {
  //         const nestedData = dataItem[key as keyof typeof dataItem];
  //         if (nestedData) {
  //           console.log(`Rendering nested data for key: ${key}`);
  //           nestedRow.children[0].innerHTML = this.getSafeHtml(nestedData) as string;
  //         } else {
  //           console.log(`No nested data found for key: ${key}`);
  //         }
  //       } else {
  //         console.log(`Key ${key} not found in data item`);
  //       }
  //     } else {
  //       console.log(`Collapsing nested row for index: ${index}`);
  //       nestedRow.style.display = 'none';
  //     }
  //   } else {
  //     console.log(`No nested row found for index: ${index}`);
  //   }
  // }
}

function paramsToQueryString(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();

  function addParams(prefix: string, obj: any) {
    if (typeof obj === 'object' && obj !== null) {
      Object.entries(obj).forEach(([key, value]) => {
        const newPrefix = prefix ? `${prefix}[${key}]` : key;
        addParams(newPrefix, value);
      });
    } else {
      searchParams.append(prefix, obj);
    }
  }

  addParams('', params);
  return searchParams.toString();
}
