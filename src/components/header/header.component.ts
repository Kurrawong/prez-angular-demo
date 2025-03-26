import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white border-b border-gray-200 px-4 py-2">
      <div class="container mx-auto flex justify-end items-center">
        <div class="flex items-center gap-2">
          <input
            type="text"
            [(ngModel)]="baseUrl"
            placeholder="Enter Base URL"
            class="px-3 py-1 border border-gray-300 rounded text-sm w-96"
          />
          <button
            (click)="updateBaseUrl()"
            class="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
          >
            Set
          </button>
          <button
            (click)="resetBaseUrl()"
            class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  `
})
export class HeaderComponent implements OnInit {
  baseUrl: string = '';
  private defaultBaseUrl = 'https://prez.niceforest-128e6d31.australiaeast.azurecontainerapps.io';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.baseUrl = localStorage.getItem('baseUrl') || this.defaultBaseUrl;
    this.dataService.setBaseUrl(this.baseUrl);
  }

  updateBaseUrl() {
    localStorage.setItem('baseUrl', this.baseUrl);
    this.dataService.setBaseUrl(this.baseUrl);
    window.location.reload(); // Refresh to apply new base URL
  }

  resetBaseUrl() {
    localStorage.removeItem('baseUrl');
    this.baseUrl = this.defaultBaseUrl;
    this.dataService.setBaseUrl(this.defaultBaseUrl);
    window.location.reload(); // Refresh to apply default URL
  }
} 