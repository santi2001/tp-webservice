import { Component, OnInit } from '@angular/core';
import { PuntocService } from 'src/app/service/puntoc.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-punto-c',
  templateUrl: './punto-c.component.html',
  styleUrls: ['./punto-c.component.css']
})
export class PuntoCComponent implements OnInit {

  fecha: string;
  signo :string;
  control: number=0;
  constructor(private puntocservice : PuntocService) {
    
   }

  ngOnInit(): void {
  }
  public mostrarfecha(a :number)
  {
   
    if(a==0)
    {
      this.puntocservice.obternersigno(this.fecha).subscribe(
        (result) =>{
          this.signo=result;
          switch(this.signo)
          {
            case "Capricorn" : this.control=1;break;
            case "Aquarius" : this.control=2;break;
            case "Pisces" : this.control=3;break;
            case "Aries" : this.control=4;break;
            case "Taurus" : this.control=5;break;
            case "Gemini" : this.control=6;break;
            case "Cancer" : this.control=7;break;
            case "Leo" : this.control=8;break;
            case "Virgo" : this.control=9;break;
            case "Libra" : this.control=10;break;
            case "Scorpio" : this.control=11;break;
            case "Sagittarius" : this.control=12;break;
          }
          console.log(this.control);
        },
        (error) => {alert ("error de peticion")})
    }
    else{

      switch(a)
      {
        case 1 : this.control=1;break;
        case 2 : this.control=2;break;
        case 3 : this.control=3;break;
        case 4 : this.control=4;break;
        case 5 : this.control=5;break;
        case 6 : this.control=6;break;
        case 7 : this.control=7;break;
        case 8 : this.control=8;break;
        case 9 : this.control=9;break;
        case 10 : this.control=10;break;
        case 11 : this.control=11;break;
        case 12 : this.control=12;break;
      }
      a=0;
    }
    
  }

}
