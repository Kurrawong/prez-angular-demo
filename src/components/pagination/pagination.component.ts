import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrezDataList } from 'prez-lib';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="tableData" class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ ((currentPage - 1) * pageLimit) + 1 }}</span>
          to
          <span class="font-medium">{{ Math.min(currentPage * pageLimit, tableData.count) }}</span>
          of
          <span class="font-medium">{{ tableData.count }}</span>
          results
        </p>
      </div>
      <!-- Mobile version -->
      <div class="flex flex-1 justify-between sm:hidden">
        <button
          (click)="onPrevious()"
          [disabled]="!hasPrevious"
          class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          [class.opacity-50]="!hasPrevious"
        >
          Previous
        </button>
        <button
          (click)="onNext()"
          [disabled]="!hasNext"
          class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          [class.opacity-50]="!hasNext"
        >
          Next
        </button>
      </div>

      <!-- Desktop version -->
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              (click)="onFirst()"
              [disabled]="!hasPrevious"
              class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              [class.opacity-50]="!hasPrevious"
            >
              <span class="sr-only">First</span>
              <svg class="size-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M15.78 14.78a.75.75 0 0 1-1.06 0L9.47 9.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 1 1 1.06 1.06L11.06 9l4.72 4.72a.75.75 0 0 1 0 1.06z M9.78 14.78a.75.75 0 0 1-1.06 0L3.47 9.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 1.06L5.06 9l4.72 4.72a.75.75 0 0 1 0 1.06z" clip-rule="evenodd" />
              </svg>
            </button>
            <button
              (click)="onPrevious()"
              [disabled]="!hasPrevious"
              class="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              [class.opacity-50]="!hasPrevious"
            >
              <span class="sr-only">Previous</span>
              <svg class="size-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
              </svg>
            </button>
            <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0">
              {{ currentPage }}
            </span>
            <button
              (click)="onNext()"
              [disabled]="!hasNext"
              class="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              [class.opacity-50]="!hasNext"
            >
              <span class="sr-only">Next</span>
              <svg class="size-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </button>
            <button
              (click)="onLast()"
              [disabled]="!hasNext"
              class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              [class.opacity-50]="!hasNext"
            >
              <span class="sr-only">Last</span>
              <svg class="size-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.22 14.78a.75.75 0 0 1 0-1.06L8.94 9 4.22 5.28a.75.75 0 0 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0z M10.22 14.78a.75.75 0 0 1 0-1.06L14.94 9l-4.72-3.72a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  `
})
export class PaginationComponent implements OnInit {
  @Input() tableData: PrezDataList | null = null;
  
  currentPage: number = 1;
  pageLimit: number = 10;
  Math = Math; // Make Math available in template

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentPage = Number(params['page']) || 1;
      this.pageLimit = Number(params['limit']) || 10;
    });
  }

  private updateUrl(newPage: number) {
    // Get current query params
    const currentParams = new URLSearchParams(window.location.search);
    const params = Array.from(currentParams.entries()).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    // Update page and limit
    params['page'] = newPage.toString();
    params['limit'] = this.pageLimit.toString();

    // Navigate with updated params
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge'
    });
  }

  hasNext(): boolean {
    if (!this.tableData) return false;
    const numResults = ((this.currentPage - 1) * this.pageLimit) + this.tableData.data.length;
    const resultsLessThanLimitSize = this.tableData.data.length < this.pageLimit;
    return numResults < this.tableData.count && !resultsLessThanLimitSize;
  }

  hasPrevious(): boolean {
    return this.currentPage > 1;
  }

  onNext() {
    if (this.hasNext()) {
      this.updateUrl(this.currentPage + 1);
    }
  }

  onPrevious() {
    if (this.hasPrevious()) {
      this.updateUrl(this.currentPage - 1);
    }
  }

  onFirst() {
    if (this.hasPrevious()) {
      this.updateUrl(1);
    }
  }

  onLast() {
    if (this.hasNext()) {
      const lastPage = Math.ceil((this.tableData?.count || 0) / this.pageLimit);
      this.updateUrl(lastPage);
    }
  }
} 