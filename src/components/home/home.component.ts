import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="home-container">
      <h1>Angular Prez-lib Demo Application</h1>
      <a routerLink="/data-list">View Data List</a>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 2rem;
      text-align: center;
    }
    
    h1 {
      margin-bottom: 2rem;
    }

    a {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
    }

    a:hover {
      background-color: #0056b3;
    }
  `]
})
export class HomeComponent {} 