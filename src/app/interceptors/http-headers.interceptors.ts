import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class HttpHeadersInceptor implements HttpInterceptor 
{
    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req= req.clone({
            setHeaders:{
                'x-rapidapi-key':'bae05aad098e4ea58fa97579e662822d',
                'x-rapidapi-host':'rawg-video-games-database.p.rapidapi.com',
            },
            setParams:{
                key:''
            }
        });
        return next.handle(req);
    }
}