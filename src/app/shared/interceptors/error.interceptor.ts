import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '@shared/services/auth.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(catchError((error) => {
        if (error) {
          switch (error.status) {
            case 401: {
              break;
            }
            default: {
              break;
            }
          }
        }
        const notification = error.error.message || error.statusText;
        // TODO: If Notification (toast) service is present we can show current error notification
        return throwError(notification);
      }));
  }
}
