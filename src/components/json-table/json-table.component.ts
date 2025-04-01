import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonTablePipe } from '../../pipes/jsontable.pipe';

@Component({
  selector: 'app-json-table',
  standalone: true,
  templateUrl: './json-table.component.html',
  imports: [CommonModule, JsonTablePipe]
})
export class JsonTableComponent {
  @Input() data: any;
  expanded: { [key: string]: boolean } = {};

  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }

  isObjectOrArray(value: any): boolean {
    return this.isObject(value) || this.isArray(value);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  isFunction(value: any): boolean {
    return typeof value === 'function';
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj).filter(key => !this.isFunction(obj[key]));
  }

  getAllKeys(array: any[]): string[] {
    const keySet = new Set<string>();
    array.forEach(item => {
      if (this.isObject(item)) {
        Object.keys(item).forEach(key => {
          if (!this.isFunction(item[key])) {
            keySet.add(key);
          }
        });
      }
    });
    return Array.from(keySet);
  }

  typeOf(value: any): string {
    return typeof value;
  }

  toggle(event: Event, key: string | number): void {
    event.stopPropagation();
    this.expanded[key] = !this.expanded[key];
  }
} 