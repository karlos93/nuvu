import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
iconos(posicion:string,derecha:string){
  let ic={
    'position':posicion,
    /*'right':derecha,*/
    'height':'50%',
    'width':'10%',
    //'border':'1px red solid',
    'align-items': 'center'

  }
return ic;
}

}
