import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

//not working


@Injectable()
export class AppHttpService implements HttpInterceptor{

    constructor(private tokenSer: TokenStorageService){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      let authReq = req;
      const token = this.tokenSer.getToken();
        
      if (token!= null) {
          const token = this.tokenSer.getToken();
          authReq = req.clone({ setHeaders:{'x-auth-token': token}});
        }
        return next.handle(authReq).pipe(
          map((event: HttpEvent<any>)=>{
            if(event instanceof HttpResponse){
              console.log('httpInterceptor-event--->', event);
            }
            return event;
          })
        );
      }

}

