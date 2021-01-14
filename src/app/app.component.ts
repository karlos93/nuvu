import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cliente';
  saldo:number=1000000000;
  inversion:number=0;
  rendimineto:number=0;
  font:string='Open Sans';
  style:string='normal';
  f_weight:string='0px';
  f_size:string='0px';
  color:string='#FFFFFF'
  imagen1="assets/img/notifications_24px.png"
  imagen2="assets/img/IMG.png"
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
public flexCSS(justificar:string){

  return {
    'position': 'relative',
    'display': 'flex',
    'justify-content': justificar,
    'align-items': 'center'
    
  }
}

   
}
