import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:any="https://api.nytimes.com/svc/books/v3/";
  apikey:any="api-key=94i3kTEAQNoqBmFIMfvXL9iBzRMq2cTQ";
  
  constructor(private http: HttpClient) { }

  bestsellers(): Observable<any> {
    return this.http.get<any>(this.url+'lists/best-sellers/history.json?'+ this.apikey);
  }

  names(): Observable<any> {
    return this.http.get<any>(this.url+'lists/names.json?'+ this.apikey);
  }

  overview(): Observable<any> {
    return this.http.get<any>(this.url+'lists/overview.json?'+ this.apikey);
  }

}
