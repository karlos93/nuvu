import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TusMetasComponent } from './tus-metas/tus-metas.component';
import { ConoceTuPortafolioComponent } from './conoce-tu-portafolio/conoce-tu-portafolio.component';
import { PuntosAhorroComponent } from './puntos-ahorro/puntos-ahorro.component';
import { FooterComponent } from './footer/footer.component';
import { ConoceTuPortafolioPt2Component } from './conoce-tu-portafolio-pt2/conoce-tu-portafolio-pt2.component';
import { GoogleChartComponentComponent } from './google-chart-component/google-chart-component.component';
import { ConsejosGastosComponent } from './consejos-gastos/consejos-gastos.component';


@NgModule({
  declarations: [
    AppComponent,
    TusMetasComponent,
    ConoceTuPortafolioComponent,
    PuntosAhorroComponent,
    FooterComponent,
    ConoceTuPortafolioPt2Component,
    GoogleChartComponentComponent,
    ConsejosGastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
