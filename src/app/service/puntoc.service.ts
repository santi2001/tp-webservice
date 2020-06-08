import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class PuntocService {

  constructor(private _http : HttpClient) {}
   
   public obternersigno(date :string):Observable <any>{
    const headers= new HttpHeaders({
      "x-rapidapi-host": "zodiac-sign.p.rapidapi.com",
      "x-rapidapi-key": "c6dbc0110emshfb3c028413c6efdp176342jsn44478fee8982",
      "useQueryString": 'true'
    })
 
  return this._http.get(  "https://zodiac-sign.p.rapidapi.com/sign?date="+date, {headers, responseType:'text'});
   }
}
