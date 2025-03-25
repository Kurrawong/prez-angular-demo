import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, SimpleProfile } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profiles-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Profiles</h2>
      
      <div *ngIf="profiles$ | async as profiles; else loading" class="mt-6">
        <table class="w-full border-collapse border border-gray-300 text-left text-sm">
          <thead class="bg-gray-100">
            <tr>
              <th class="border border-gray-300 p-2">Profile ID</th>
              <th class="border border-gray-300 p-2">Properties</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let profile of profiles" class="hover:bg-gray-50">
              <td class="border border-gray-300 p-2">{{ profile.id }}</td>
              <td class="border border-gray-300 p-2">
                <pre class="whitespace-pre-wrap">{{ profile.properties | json }}</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ng-template #loading>
        <p class="text-gray-500 mt-4">Loading profiles...</p>
      </ng-template>
    </div>
  `
})
export class ProfilesTableComponent implements OnInit {
  profiles$: Observable<SimpleProfile[]> | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.profiles$ = this.dataService.getGlobalProfiles();
  }

  getProfileEntries(profiles: SimpleProfile[]): SimpleProfile[] {
    return profiles;
  }
} 