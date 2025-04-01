import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface DebugInfo {
  url: string;
  params: Record<string, any>;
}

@Injectable({
  providedIn: 'root',
})
export class DebugService {
  private debugInfo = new BehaviorSubject<DebugInfo | null>(null);
  debugInfo$ = this.debugInfo.asObservable();

  logRequest(url: string, params: Record<string, any>) {
    this.debugInfo.next({ url, params });
  }
} 