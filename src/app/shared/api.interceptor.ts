import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders, HttpParams
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = new HttpHeaders().append('Accept', 'application/json');
    const params = request.params.append('api_key', '49ae942cbba83a111b63cdf5c7cd2aa5cd1b2bf3');
    return next.handle(request.clone({params, headers}));
  }
}
