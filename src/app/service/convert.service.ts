import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, fromEventPattern, ObjectUnsubscribedError, observable} from 'rxjs'; 
import { Convert } from '../models/convert';
@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  de : Array<string>;
  constructor(private _http : HttpClient) {
  this.de= new Array<string>();
  this.de.push("ARS");
  this.de.push("USD");
  this.de.push("EUR");
  this.de.push("JPY");
  this.de.push("BRL");
   }
   public agregar_conversion (a: string,b:string,c : string ): Observable<any>
   {
     const httpoptions = {
       headers :new  HttpHeaders ({
        'X-RapidAPI-Host':  'community-neutrino-currency-conversion.p.rapidapi.com', 
        'X-RapidAPI-Key': 'c6dbc0110emshfb3c028413c6efdp176342jsn44478fee8982',
        'content-type': 'application/x-www-form-urlencoded',
        'useQueryString' : 'true'
       }),
       params :{
         'from-type' : a,
         'to-type' : b,
         'from-value': c
       }
     };
     return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",'from-type/to-type/from-value' , httpoptions);
   }
}
