import { Component, OnInit } from '@angular/core';
import { Convert } from 'src/app/models/convert';
import { ConvertService } from 'src/app/service/convert.service';
@Component({
  selector: 'app-punto-a',
  templateUrl: './punto-a.component.html',
  styleUrls: ['./punto-a.component.css']
})
export class PuntoAComponent implements OnInit {
   objeto1 : Convert;
   r : String;
   listaconver :Array<Convert>;
   conversiones: Array<string>;
   constructor(private convertidorservice: ConvertService) { 
    this.objeto1= new Convert();
  this.listaconver =new Array<Convert>();
  this.conversiones=new Array<string>();
  this.conversiones.push("ARS");
  this.conversiones.push("USD");
  this.conversiones.push("EUR");
  this.conversiones.push("JPY");
  this.obtenerconversiones();
  }
 

  ngOnInit(): void {
  }
  public convertirMoneda()
  {
    this.convertidorservice.agregar_conversion(this.objeto1.from_type,this.objeto1.to_type,this.objeto1.from_value).subscribe(
      (result) =>{
        this.objeto1=new Convert();
        this.objeto1 =result;
      },
      (error) =>{alert("error")}
    )
    console.log(this.objeto1);
  }
  
  obtenerconversiones()
  { 
  
    
    for(let i=0;i <this.conversiones.length;i++)
    {
      for(let j=0;j<this.conversiones.length;j++)
      {
        this.convertidorservice.agregar_conversion(this.conversiones[i],this.conversiones[j],"1").subscribe(//se supone que esto carga usando el metodo de ordenacion seleccion o algo asi.
          (result) =>{
            this.objeto1=new Convert();
            this.objeto1 =result;
            this.listaconver.push(this.objeto1);
          },
          (error) =>{alert("error")}
        )
      }
      
    }
  }
}
