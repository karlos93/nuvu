import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-conoce-tu-portafolio',
  templateUrl: './conoce-tu-portafolio.component.html',
  styleUrls: ['./conoce-tu-portafolio.component.css']
})
export class ConoceTuPortafolioComponent implements OnInit {
metas={'Meta':[{'id':'1','nom':'Viaje a islas Canarias','ahorro':'1630000','total':'8000000'},
                {'id':'2','nom':'Mackbook Pro','ahorro':'0','total':'7000000'}]};
  constructor() { }
  title: string;
  saldo: number;
  inversion: number;
  rendimineto: number;
  font: string;
  style: string;
  f_weight: string;
  f_size: string;
  color: string;
  imagen1: string;
  imagen2: string;
  estilos(font,style,f_weight,f_size,lineHeigth:boolean,lineHeightval:string,ColorBoo:boolean,color:string){
    
    let estilo={
      'font-family':font,
      'font-style': style,
      'font-weight': f_weight,
      'font-size': f_size,
      'line-height': lineHeigth?lineHeightval:!lineHeigth,
      /* White */
      'color': ColorBoo?color:this.color 
    }
    return estilo;
     }

  ngOnInit(): void {
  }
imagenes(recurso:string){
  let imagenurl:string;
  switch(recurso){
   case "1":
    imagenurl= "assets/img/playa.png";
    break;
    case "2":
      imagenurl= "assets/img/mac.png"; 

  }
  return imagenurl;
}

graficoGoogle(){
let styles={
  'position': 'absolute',
  'width': '90px',
  'height': '90px',
  'border':'5px blue white'
};
return styles;

}

}


