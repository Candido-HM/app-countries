import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
   }

   getCountries(): Observable <any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    return this._http.get(this.url+'all', {headers: headers});
   }

   getCountrie(name: string): Observable <any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url+`name/${ name }`, {headers: headers});
   }

   getCountrieCode(code : string): Observable <any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url+`alpha/${ code }`, {headers: headers});
   }

   getCountrieRegion(region: string): Observable <any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url+`region/${ region }`, {headers: headers});
   }
  
}
