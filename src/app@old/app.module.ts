import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCroppieModule } from 'ngx-croppie';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCroppieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
