import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/service/covid.service';
import { Covid } from 'src/app/models/covid';

@Component({
  selector: 'app-punto-d',
  templateUrl: './punto-d.component.html',
  styleUrls: ['./punto-d.component.css']
})
export class PuntoDComponent implements OnInit {
  nombre_pais: String;
  informe2 : any;
  informes : Array<any>;
  paisesdestacados: Array<string>;
  check1: boolean=false;
  check2: boolean=false;
  check3: boolean=false;
  check4: boolean=false;
  constructor(private serviciocovid : CovidService) {
    this.informe2 ={
      "Active Cases_text": "",
      "Country_text" :"",    
      "Total Cases_text": "",
      "Total Deaths_text" : "",
      "Total Recovered_text" : ""
    };
    this.informes = new Array<any>();
    this.paisesdestacados= new Array<string>();
    this.paisesdestacados.push("World");
    this.paisesdestacados.push("Argentina");
    this.paisesdestacados.push("USA");
    this.paisesdestacados.push("Spain");
    this.paisesdestacados.push("Italy");
    this.paisesdestacados.push("France");
    this.paisesdestacados.push("Germany");
    this.paisesdestacados.push("Russia");
    this.paisesdestacados.push("Brazil");
    this.paisesdestacados.push("China");
    this.paisesdestacados.push("Canada");
    this.paisesdestacados.push("Peru");
    this.cargarlista();
   }

  ngOnInit(): void {
  }
public cargarconsulta()
{
 

   this.serviciocovid.obtenerconsulta(this.nombre_pais).subscribe(
    (result) =>
    {
      Object.assign(this.informe2, result);
      this.check4=true;
    },
    (error)=> { alert("eror de peticion")}
  )
  console.log(this.check4);
  console.log(this.check1);
  console.log(this.check2);
  console.log(this.check3);
 
}
public cargarlista()
{
  this.serviciocovid.obtenerlistado().subscribe(
    (result) =>
    {
      for(let j in this.paisesdestacados ) 
      {
        for (let i in result)
        {
          if(result[i]['Country_text']==this.paisesdestacados[j] )
          {
            this.informe2=new Covid();
            Object.assign(this.informe2,result[i]);
            this.informes.push(this.informe2);
          }
        
        }
      }
 

    },
    (error) => {alert("eror de peticion");}
  );
}
}
