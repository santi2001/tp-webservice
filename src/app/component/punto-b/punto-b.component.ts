import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-punto-b',
  templateUrl: './punto-b.component.html',
  styleUrls: ['./punto-b.component.css']
})
export class PuntoBComponent implements OnInit {
  categoria : string;
  noticia : Noticia;
  noticias : Array<Noticia>;
  constructor(private noticiaservice :NoticiaService) {
    this.noticia=new Noticia();
    this.noticias = new Array<Noticia>();
   }

  ngOnInit(): void {
  }
  public cargarNoticias()
  {
    this.noticiaservice.listNoticia(this.categoria).subscribe(
      (result)=> {
        this.noticias = new Array<Noticia>();
        result['arts'].forEach(element =>{
          this.noticia =new Noticia();
          Object.assign(this.noticia,element);
          this.noticias.push(this.noticia);
        });
      //  console.log(this.noticias);
      },
      error =>{alert("error en la peticion");})
  }
}
