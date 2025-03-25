import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="bg-gray-800 text-white mb-6">
      <div class="container mx-auto px-4">
        <div class="flex space-x-8 h-14 items-center">
          <a 
            routerLink="/" 
            routerLinkActive="text-white"
            [routerLinkActiveOptions]="{exact: true}"
            class="hover:text-gray-300"
          >
            Home
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
      </div>
    </nav>
  `
})
export class NavComponent {} 