import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component';
import { DebugOverlayComponent } from '../components/debug-overlay/debug-overlay.component';
import { DataService } from '../services/data.service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, DebugOverlayComponent, AsyncPipe],
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `
})
//    <app-debug-overlay></app-debug-overlay>

export class AppComponent {
  constructor(private dataService: DataService) {}
} 