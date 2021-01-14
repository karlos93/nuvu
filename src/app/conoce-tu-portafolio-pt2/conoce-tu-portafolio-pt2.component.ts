import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-conoce-tu-portafolio-pt2',
  templateUrl: './conoce-tu-portafolio-pt2.component.html',
  styleUrls: ['./conoce-tu-portafolio-pt2.component.css']
})
export class ConoceTuPortafolioPt2Component extends AppComponent implements OnInit {
title_1='Skandia';
producto='FIC Old Mutual Efectivo'
valor=240000
tipoactivo='Renta fija Depósito a la fija'
valorPorcentage=0.15;
  constructor() {super(); }

  ngOnInit(): void {
  }
  enlaceEstrategia(){
    let obj={
      'position':'absolute',
      'font-family':this.font,
    'border':'0.5px #41CF69 solid',
    'background-color':'#E4FFEE',
    'text-align':'center',
    'border-radius':'20px',
    'padding':'5px' ,
    'width':'10%',
    'right':'1%'
    
  }
  return obj;
  }
  titulo(){
    return {
      'position':'relative',
      'display':'flex',
     'justify-content':'space-around',
     'align-items':'center',
     'height':'50px'
    };
  }
  seccionPortafolio(posicionLateral:string){
    let pos;

    if(posicionLateral=='right'){
    pos= {
      'position':'absolute',
      'width': '50%',
      'height': '70%',
      'right':'20px'
    };
  }
  else{
    pos= {
      'position':'absolute',
      'width': '50%',
      'height': '70%',
      'left':'20px'
    };
  }
  
    return pos;
  }
  flexDivs(){
    return {
      'display':'flex',
      'justify-content':'space-around',
      'align-items': 'center'
    };
  }
  porcPortafolio(){
    return{
      'position':'absolute',
      'font-family':this.font,
    'border':'0.5px #41CF69 solid',
    'background-color':'#41CF69',
    'border-radius':'20px',
    'width':'36px',
    'height':'15px',
    'right':'1%',
    'top':'-2%',
    'font-size':'10px',
    'color':'white',
    'text-align':'center'

    }
  }

} 
