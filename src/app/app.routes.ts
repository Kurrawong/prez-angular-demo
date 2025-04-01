import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { DataTableComponent } from '../components/data-table/data-table.component';
import { ProfilesTableComponent } from '../components/profiles-table/profiles-table.component';
import { SimpleComponent } from '../components/simple/simple.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'simple',
    component: SimpleComponent
  },
  {
    path: 'data-list',
    component: DataTableComponent
  },
  {
    path: 'profiles',
    component: ProfilesTableComponent
  }
]; 