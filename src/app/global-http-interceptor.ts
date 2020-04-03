import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Inject, Injectable} from '@angular/core';
import {GlobalService} from './global.service';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {

  constructor(
    private globalService: GlobalService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req)
      .pipe(
       takeUntil(this.globalService.destroy$));

  }
}
