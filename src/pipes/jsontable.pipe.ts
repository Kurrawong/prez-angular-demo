import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonTable',
  standalone: true
})
export class JsonTablePipe implements PipeTransform {
  transform(value: any): string {
    if (value === null || value === undefined) {
      return '';
    }
    return this.renderTable(value);
  }

  private renderTable(data: any): string {
    if (typeof data !== 'object') {
      return `<textarea readonly class="w-full h-24 p-2 border rounded">${JSON.stringify(data, null, 2)}</textarea>`;
    }

    if (Array.isArray(data)) {
      return this.renderArray(data);
    } else {
      return this.renderObject(data);
    }
  }

  private renderArray(array: any[]): string {
    if (array.every(item => typeof item === 'object' && !Array.isArray(item))) {
      const allKeys = Array.from(new Set(array.flatMap(item => Object.keys(item))));
      const headers = allKeys.map(key => `<th class="border px-4 py-2">${key}</th>`).join('');
      const rows = array.map((item, index) => {
        const rowValues = allKeys.map(key => {
          const value = item[key];
          if (typeof value === 'object') {
            if (Array.isArray(value)) {
              return `<span class="cursor-pointer text-blue-500" onclick="toggleNestedTable(this, ${index}, '${key}')">Array[${value.length}]</span>`;
            } else {
              return `<span class="cursor-pointer text-blue-500" onclick="toggleNestedTable(this, ${index}, '${key}')">Object</span>`;
            }
          } else {
            return value !== undefined ? value.toString() : '';
          }
        }).map(val => `<td class="border px-4 py-2">${val}</td>`).join('');
        return `<tr>${rowValues}</tr><tr id="nested-${index}-${allKeys.join('-')}" style="display: none;"><td colspan="${allKeys.length}"></td></tr>`;
      }).join('');

      return `
        <table class="min-w-full bg-white border-collapse">
          <thead>
            <tr class="bg-gray-200">${headers}</tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      `;
    } else {
      return `Array[${array.length}]`;
    }
  }

  private renderObject(obj: Record<string, any>): string {
    const headers = Object.keys(obj).map(key => `<th class="border px-4 py-2">${key}</th>`).join('');
    const values = Object.entries(obj).map(([key, value]) => {
      if (typeof value === 'object') {
        if (Array.isArray(value)) {
          return `<span class="cursor-pointer text-blue-500" onclick="toggleNestedTable(this, '${key}', '${key}')">Array[${value.length}]</span>`;
        } else {
          return `<span class="cursor-pointer text-blue-500" onclick="toggleNestedTable(this, '${key}', '${key}')">Object</span>`;
        }
      } else {
        return value.toString();
      }
    }).map(val => `<td class="border px-4 py-2">${val}</td>`).join('');

    return `
      <table class="min-w-full bg-white border-collapse">
        <thead>
          <tr class="bg-gray-200">${headers}</tr>
        </thead>
        <tbody>
          <tr>${values}</tr>
        </tbody>
      </table>
    `;
  }
}
