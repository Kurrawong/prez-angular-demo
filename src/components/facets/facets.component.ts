import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { PrezFacet, PrezFacetValue } from '../../types';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facets',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-64 bg-white p-4 mt-6 border border-gray-200 rounded-lg">
      <h3 class="text-lg font-semibold mb-4">Filters</h3>
      
      <div *ngFor="let group of getFacetGroups()" class="mb-6">
        <h4 class="text-sm font-medium text-gray-700 mb-2 capitalize">{{ group.facetName }}</h4>
        <div class="space-y-2">
          <div *ngFor="let facet of group.facetValues" 
               class="flex items-center justify-between hover:bg-gray-50 p-1 rounded">
            <button
              class="text-sm text-left flex-grow"
              [class.text-blue-600]="isSelected(facet)"
              (click)="toggleFacet(facet)"
            >
              {{ getFacetLabel(facet) }}
            </button>
            <span class="text-xs text-gray-500">{{ facet.count }}</span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FacetsComponent {
  @Input() facets: PrezFacet[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

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