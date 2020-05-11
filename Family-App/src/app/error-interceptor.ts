import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from './error/error.component';
import {MatDialogModule} from '@angular/material/dialog';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // alert(error.error.error.message);
        let errorMessage = 'An unknown error occured!';
        if (error.error.message) {
          errorMessage = error.error.message;
        }
        this.dialog.open(ErrorComponent, {data: {message: errorMessage}});
        return throwError(error);
      })
    );
  }
}
