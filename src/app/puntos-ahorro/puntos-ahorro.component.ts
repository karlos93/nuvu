import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-puntos-ahorro',
  templateUrl: './puntos-ahorro.component.html',
  styleUrls: ['./puntos-ahorro.component.css']
})
export class PuntosAhorroComponent extends AppComponent implements OnInit {
 url="assets/img/Vector 6.png"
 url2="https://www.youtube.com/watch?v=FolBFI3ZQ0s&ab_channel=RossanaDeSouza"
 poster="assets/img/thumb.png"
 valorV=true
  constructor() {super(); }

  ngOnInit(): void {
    $(function(){
      $("#cir1").css("background-color","#54D1ED");
      
      $(".circleSlide").click(function(){
        $(".circleSlide").css("background-color","#D7C7FF");
        $(this).css("background-color","#54D1ED");
      
      }
        
        )//
    
    })
  }

  public ImagenesCarrusel(){
     return this.url;
  }

  public videoCarrusel(){
    return this.url2;
 }

  setUrl(url,url2,elemento){
this.url=url;
if(url2!=''){
this.url2=url2;
this.valorV=true;
}
else
this.valorV=false;


  }

}
