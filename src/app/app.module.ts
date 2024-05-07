import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';


//configuracion del locale de la app
import localeEsMX from '@angular/common/locales/es-MX'
import localeFrCA from '@angular/common/locales/fr-CA'


import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEsMX);
registerLocaleData(localeFrCA);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule
  ],
  providers: [
    {
      //establece el español de Mexico por defecto en toda la app
      provide: LOCALE_ID,useValue:'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
