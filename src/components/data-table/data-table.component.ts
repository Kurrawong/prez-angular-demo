import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { PageInfoService } from '../../services/page-info.service';
import { Observable } from 'rxjs';
import type { PrezFocusNode, PrezNode, PrezDataList } from 'prez-lib';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { FacetsComponent } from '../facets/facets.component';
import { SortPipe } from '../../pipes/sort.pipe';
import { Filter, filterToJson, parseFilterQuery } from '../../cql';


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
  tableData$: Observable<PrezDataList> | null = null;
  displayColumns: string[] = [];
  apiPath: string = '';
  defaultPath: string = '/catalogs';
  errorMessage: string | null = null;

  constructor(
    private dataService: DataService,
    private pageInfoService: PageInfoService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(() => {
      this.apiPath = this.route.snapshot.queryParams['path'] || this.defaultPath;
      this.loadData();
    });
  }

  loadData() {
    const pageInfo = this.pageInfoService.getPageInfo();
    this.tableData$ = this.dataService.getListData(this.apiPath, pageInfo);
    console.log('Data loaded:', this.tableData$.subscribe(data => console.log('Data:', data)));
  }

  getCurrentFilters(): Filter | null {
    return null;
    // const filter = this.route.snapshot.queryParams['filter'];
    // if (!filter) {
    //   return null;
    // }
    // return parseFilterQuery(filter);
  }

  addFilter() {
    // const filter:Filter = this.getCurrentFilters() || {expression: []}
    // if (!filter) {
      
    //   addToFilter
    // }
    // this.router.navigate([], {
    //   relativeTo: this.route,
    //   queryParams: { filter: filterToJson(filter) },
    //   queryParamsHandling: 'merge'
    // });
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
