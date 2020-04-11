import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class HeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthInterceptorService implements HttpInterceptor {
//   constructor(private authService: AuthService) { }
//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     const authToken = this.authService.getToken();
//     const authRequest = req.clone({
//       headers: req.headers.set('Authorization', 'Bearer' + authToken)
//       // ('Authorization', 'Bearer' + authToken)
//     });
//     return next.handle(authRequest);
//   }
// }
