import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  template: `
    <nav class="bg-gray-800 text-white">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-14">
          <div class="flex space-x-8 items-center">
            <a 
              routerLink="/" 
              routerLinkActive="text-white"
              [routerLinkActiveOptions]="{exact: true}"
              class="hover:text-gray-300"
            >
              Home
            </a>
            <a 
              routerLink="/simple" 
              routerLinkActive="text-white"
              class="hover:text-gray-300"
            >
              Simple
            </a>
            <a 
              routerLink="/data-list" 
              routerLinkActive="text-white"
              class="hover:text-gray-300"
            >
              Data List
            </a>
            <a 
              routerLink="/profiles" 
              routerLinkActive="text-white"
              class="hover:text-gray-300"
            >
              Profiles
            </a>
          </div>

          <div class="flex items-center gap-2">
            <label for="baseUrl" class="text-sm font-medium text-white-700">Base URL:</label>
            <input
              type="text"
              [(ngModel)]="baseUrl"
              placeholder="Enter Base URL"
              class="px-3 py-1 rounded text-sm w-96 text-gray-900"
            />
            <button
              (click)="updateBaseUrl()"
              class="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
            >
              Set
            </button>
            <button
              (click)="resetBaseUrl()"
              class="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavComponent implements OnInit {
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
    window.location.reload();
  }

  resetBaseUrl() {
    localStorage.removeItem('baseUrl');
    this.baseUrl = this.defaultBaseUrl;
    this.dataService.setBaseUrl(this.defaultBaseUrl);
    window.location.reload();
  }
} 