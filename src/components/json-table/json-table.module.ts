import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonTableComponent } from './json-table.component';

@NgModule({
  declarations: [JsonTableComponent],
  imports: [CommonModule],
  exports: [JsonTableComponent]
})
export class JsonTableModule {} 