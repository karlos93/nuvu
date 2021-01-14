import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consejos-gastos',
  templateUrl: './consejos-gastos.component.html',
  styleUrls: ['./consejos-gastos.component.css']
})
export class ConsejosGastosComponent implements OnInit {

  consejo=[{'titulo':'10 gastos que debes evitar',
  'descripcion':'Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.'},
  {'titulo':'10 gastos que debes evitar',
  'descripcion':'Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.'},
  {'titulo':'10 gastos que debes evitar',
  'descripcion':'Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.'}
];
  constructor() { }

  ngOnInit(): void {
  }
  getimagen(numImagen:any){
    let path="";
  switch(numImagen){
    case 0:
    path="assets/img/c1.png";
    break;
    case 1:
    path="assets/img/c2.png";
    break;
    case 2:
    path="assets/img/c3.png";
    break;
  }

  return path;
  }

}
