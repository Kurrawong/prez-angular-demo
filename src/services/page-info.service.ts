import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface PageInfo {
  profile: string | null;
  page: number;
  filter: string | null;
  limit: number;
}

@Injectable({
  providedIn: 'root',
})
export class PageInfoService {
  constructor(private route: ActivatedRoute) {}

  getPageInfo(): PageInfo {
    const page = Number(this.route.snapshot.queryParams['page']) || 1;
    const limit = Number(this.route.snapshot.queryParams['limit']) || 10;
    const profile = this.route.snapshot.queryParams['_profile'] || null;
    const filter = this.route.snapshot.queryParams['filter'] || null;
    return { page, limit, profile, filter };
  }
} 