import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private router : Router,private toast : HotToastService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse) => {
        if(error.status === 401){
          this.router.navigate(['/user/signIn']);
          this.toast.warning('Please Login');
        }else{
          this.toast.error('Something Went Wrong');
        }
        return throwError(()=> new Error('Server Failed'));
      })
    )
  }
}
