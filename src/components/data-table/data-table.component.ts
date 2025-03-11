import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Observable, of } from 'rxjs';
import type { PrezDataSearch, PrezDataList, PrezFocusNode, PrezNode, PrezProperties, PrezProperty, PrezTerm, PrezLiteral } from 'prez-lib';
import type { PrezDataListWithFacets } from '../../types';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { FacetsComponent } from '../facets/facets.component';


@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PaginationComponent, FacetsComponent],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  tableData$: Observable<PrezDataListWithFacets> | null = null;
  columns = [
    'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
    'http://purl.org/dc/terms/publisher',
  ];
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
      this.tableData$ = this.dataService.getListData(this.apiPath, page, limit);
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

}
