import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogletranslateModule } from 'projects/googletranslate/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogletranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
