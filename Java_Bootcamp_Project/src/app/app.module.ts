import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActitiviyComponent } from './model/actitiviy/actitiviy.component';
import { BootcampComponent } from './model/bootcamp/bootcamp.component';
import { HackhatonComponent } from './model/hackhaton/hackhaton.component';
import { InHouseEducationComponent } from './model/in-house-education/in-house-education.component';

@NgModule({
  declarations: [
    AppComponent,
    ActitiviyComponent,
    BootcampComponent,
    HackhatonComponent,
    InHouseEducationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
