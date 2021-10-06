import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class MyHttpInterceptorInterceptor implements HttpInterceptor {
  constructor() {}
  public count: boolean = false;
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.count = true;

    return next.handle(request).pipe(
      tap(),
      // (event) => console.log(event),

      // (error) => console.log(error)
      finalize(() => {
        this.count = false;
      })
    );
  }
}
