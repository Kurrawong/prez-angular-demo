import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DebugInterceptor } from '../services/debug.interceptor';
import { NgModule } from '@angular/core';
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DebugInterceptor, multi: true },
  ],
})
export class AppModule {} 