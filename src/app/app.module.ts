import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ListadoPersonasComponent } from './Consulta/listado-personas/listado-personas.component';
import { ModificarPage} from './modificar/modificar.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,ListadoPersonasComponent, ModificarPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
