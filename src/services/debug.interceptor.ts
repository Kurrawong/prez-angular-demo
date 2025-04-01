import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { DebugService } from './debug.service';

@Injectable()
export class DebugInterceptor implements HttpInterceptor {
  constructor(private debugService: DebugService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const clonedRequest = req.clone();
    this.debugService.logRequest(clonedRequest.urlWithParams, clonedRequest.params.keys().reduce((acc, key) => {
      acc[key] = clonedRequest.params.get(key);
      return acc;
    }, {} as Record<string, any>));

    return next.handle(clonedRequest);
  }
} 