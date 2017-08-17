import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { headercomponent } from './header2/header2.component';
import { courses } from './directives/header3.component';
import { bodycomponent } from './body1/body1.component';
import { FooterComponent } from './footer/footer.component';
import { Body3Component } from './body3/body3.component';
//import { FirstappComponent } from './firstapp/firstapp.component';

@NgModule({
  declarations: [
    AppComponent,
    headercomponent,
    FooterComponent,
    bodycomponent,
    courses,
    Body3Component
    //FirstappComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
