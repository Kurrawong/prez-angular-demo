import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Observable, of } from 'rxjs';
import type { PrezFocusNode, PrezNode } from 'prez-lib';
import type { PrezDataListWithFacets } from '../../types';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { FacetsComponent } from '../facets/facets.component';
import { SortPipe } from '../../pipes/sort.pipe';


// const x:PrezNode;
// x.label.

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PaginationComponent, FacetsComponent, SortPipe],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @Input() columns?: PrezNode[];
  tableData$: Observable<PrezDataListWithFacets> | null = null;
  displayColumns: string[] = [];
  apiPath: string = '';
  defaultPath: string = '/catalogs';
  errorMessage: string | null = null;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.apiPath = params['path'] || this.defaultPath;
      this.loadData();
    });
  }

  loadData(path?: string) {
    this.errorMessage = null;
    if (path) {
      this.apiPath = path;
    }
    try {
      const page = Number(this.route.snapshot.queryParams['page']) || 1;
      const limit = Number(this.route.snapshot.queryParams['limit']) || 10;
      const profile = this.route.snapshot.queryParams['_profile'] || null;
      this.tableData$ = this.dataService.getListData(this.apiPath, profile, page, limit);
    } catch (error) {
      this.errorMessage = 'Failed to load data. Please check your API path and try again.';
    }

  }

  getItemLink(item: PrezFocusNode): string {
    return (item.links || [])[0]?.value || '';
  }

  getItemLabel(item: PrezFocusNode): string {
    return item.label?.value || 'N/A';
  }

  getPropertyValue(item: PrezFocusNode, column: string): string {
    const objects = item.properties?.[column]?.objects || [];
    objects[0]
    return (
      objects.map((o: any) => o.label?.value || o.value).join(', ') || 'N/A'
    );
  }

  getItemMembers(item: PrezFocusNode): string {
    return item.members?.value || 'N/A';
  }

  hasMembersLink(item: PrezFocusNode): boolean {
    return !!item.members?.value;
  }

  onSubmit() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { path: this.apiPath },
      queryParamsHandling: 'merge'
    });
  }

  selectProfile(token: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { _profile: token },
      queryParamsHandling: 'merge'
    });
  }

  getDisplayColumns(data: PrezFocusNode[]): PrezNode[] {
    if (this.columns?.length) {
      return this.columns;
    }
    
    if (!data.length) {
      return [];
    }

    const firstRow = data[0];
    return Object.keys(firstRow.properties || {}).map(uri => firstRow.properties![uri].predicate);
  }

  getColumnLabel(column: PrezNode): string {
    return column.label?.value || column.value;
  }

}
