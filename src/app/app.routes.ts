import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { DataTableComponent } from '../components/data-table/data-table.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'data-list',
    component: DataTableComponent
  }
]; 