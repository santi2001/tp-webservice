import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http : HttpClient) {

   }
   public listNoticia(categoria :string): Observable<any>{
     
     const httpoptions = {
      headers :new  HttpHeaders ({
       'X-RapidAPI-Host':  'livescore6.p.rapidapi.com', 
       'X-RapidAPI-Key': '83abffd6e6mshc12229a39fe09a1p17635ejsn2f4f731b5416'
      })
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category="+categoria, httpoptions);
   }
}
