import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor( private _http: HttpClient) {
    
   }
   public obtenerconsulta(pais :String): Observable<any>{
     
    const httpoptions = {
     headers :new  HttpHeaders ({
      'X-RapidAPI-Host':'covid-19-tracking.p.rapidapi.com', 
      'X-RapidAPI-Key': '83abffd6e6mshc12229a39fe09a1p17635ejsn2f4f731b5416',
      'useQueryString': 'true'
     })
   };
   return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1/"+pais, httpoptions);
  }
  public obtenerlistado()
  {
    const httpoptions = {
      headers :new  HttpHeaders ({
       'X-RapidAPI-Host':'covid-19-tracking.p.rapidapi.com', 
       'X-RapidAPI-Key': '83abffd6e6mshc12229a39fe09a1p17635ejsn2f4f731b5416',
      })
    };
    return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1", httpoptions);
  }
}
