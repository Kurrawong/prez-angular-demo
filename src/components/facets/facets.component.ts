import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import type { PrezFacet, PrezFacetValue } from 'prez-lib';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { PageInfoService } from '../../services/page-info.service';
import { Filter, parseFilterQuery } from '../../cql';

@Component({
  selector: 'app-facets',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="w-64 bg-white p-4 mt-6 border border-gray-200 rounded-lg">
      <div class="flex justify-between items-center mb-4">
        <!-- add info about the current filters from the filter param in the current url -->
        <div class="text-sm text-gray-500">
          Current filters: {{ currentFilters }}
        </div>
      </div>
      <h3 class="text-lg font-semibold mb-4">Facets</h3>
      
      <div *ngFor="let group of getFacetGroups()" class="mb-6">
        <fieldset class="border border-gray-200 rounded p-3">
          <legend class="text-sm font-medium text-gray-700 px-2">
            {{ group.facetName }}
          </legend>
          <div class="space-y-2">
            <div *ngFor="let facet of group.facetValues" 
                 class="flex items-center justify-between hover:bg-gray-50 p-1 rounded">
              <a 
                [routerLink]="[]"
                [queryParams]="{ filter: facet.term.value }"
                queryParamsHandling="merge"
                class="text-sm text-left flex-grow"
                [class.text-blue-600]="isSelected(facet)"
              >
                {{ getFacetLabel(facet) }}
              </a>
              <span class="text-xs text-gray-500">{{ facet.count }}</span>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  `
})
export class FacetsComponent {
  @Input() facets: PrezFacet[] = [];
  currentFilters: string | null = null;
  filter: Filter | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private pageInfoService: PageInfoService
  ) {
    const pageInfo = this.pageInfoService.getPageInfo();
    this.filter = pageInfo.filter ? parseFilterQuery(pageInfo.filter) : null;
    this.currentFilters = pageInfo.filter;
  }

  getFacetGroups(): PrezFacet[] {
    return this.facets;
  }

  isSelected(facet: PrezFacetValue): boolean {
    const params = new URLSearchParams(window.location.search);
    const selectedFacets = params.getAll(facet.term.value);
    return selectedFacets.includes(facet.term.value);
  }

  toggleFacet(facet: PrezFacetValue) {
    const currentParams = new URLSearchParams(window.location.search);
    const selectedFacets = currentParams.getAll(facet.term.value);
    
    const params = Array.from(currentParams.entries()).reduce((acc, [key, value]) => {
      if (key !== facet.term.value) {
        if (acc[key]) {
          acc[key] = Array.isArray(acc[key]) ? [...acc[key], value] : [value];
        } else {
          acc[key] = value;
        }
      }
      return acc;
    }, {} as Record<string, string | string[]>);

    if (selectedFacets.includes(facet.term.value)) {
      params[facet.term.value] = selectedFacets.filter(v => v !== facet.term.value);
    } else {
      params[facet.term.value] = [...selectedFacets, facet.term.value];
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge'
    });
  }

  getFacetLabel(facet: PrezFacetValue): string {
    if ('label' in facet.term) {
      return facet.term.label?.value || facet.term.value;
    }
    return facet.term.value;
  }
} 