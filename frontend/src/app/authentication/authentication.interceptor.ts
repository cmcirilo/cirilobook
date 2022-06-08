import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token/token.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.tokenService.hasToken()) {
      const token = this.tokenService.getToken();
      const headers = new HttpHeaders().append('x-access-token', token);
      request = request.clone({ headers });
    }
    return next.handle(request);
  }
}
