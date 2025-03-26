import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { RequestInfo } from '../../types';

@Component({
  selector: 'app-debug-overlay',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-16 right-4 z-50 bg-gray-800 text-white rounded-lg shadow-lg p-3 max-w-xl text-xs">
      <div class="flex justify-between items-center mb-1">
        <h3 class="font-semibold text-xs">Last Request</h3>
        <button 
          (click)="isExpanded = !isExpanded"
          class="text-gray-400 hover:text-white text-xs"
        >
          {{ isExpanded ? '▼' : '▶' }}
        </button>
      </div>
      
      <div *ngIf="isExpanded">
        <div class="mb-1">
          <span class="text-gray-400 text-xs">URL:</span>
          <a 
            [href]="request?.url"
            target="_blank"
            rel="noopener noreferrer"
            class="font-mono bg-gray-700 p-1.5 rounded mt-0.5 break-all text-xs block hover:bg-gray-600 transition-colors"
          >
            {{ request?.url }}
          </a>
        </div>

        <div>
          <span class="text-gray-400 text-xs">Parameters:</span>
          <table class="w-full mt-0.5">
            <tbody>
              <tr *ngFor="let param of getParams()" class="border-t border-gray-700">
                <td class="py-0.5 pr-3 text-gray-400 text-xs">{{ param.key }}</td>
                <td class="py-0.5">
                  <ng-container *ngIf="isJson(param.value); else plainValue">
                    <pre class="bg-gray-700 p-1.5 rounded whitespace-pre-wrap text-xs">{{ formatJson(param.value) }}</pre>
                  </ng-container>
                  <ng-template #plainValue>
                    <span class="text-xs">{{ param.value }}</span>
                  </ng-template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
})
export class DebugOverlayComponent {
  @Input() request: RequestInfo | null = null;
  isExpanded = true;

  getParams(): { key: string, value: any }[] {
    if (!this.request?.params) return [];
    return Object.entries(this.request.params).map(([key, value]) => ({ key, value }));
  }

  isJson(value: any): boolean {
    try {
      return typeof value === 'object' && value !== null;
    } catch {
      return false;
    }
  }

  formatJson(value: any): string {
    return JSON.stringify(value, null, 2);
  }
} 