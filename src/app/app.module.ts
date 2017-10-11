import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, JsonpModule } from "@angular/http";
import { MatProgressBarModule } from "@angular/material";
import {MatCheckboxModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { NgxCroppieModule } from 'ngx-croppie';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {ToastModule} from 'ng2-toastr';
import {AppProvider} from './providers/app.provider'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,


  ],
  imports: [
    BrowserModule,
     NgxCroppieModule, 
    AppRoutingModule,
    DashboardModule,
    HttpModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([]),
    
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule ,
    MatCheckboxModule,
    ReactiveFormsModule,
    ToastModule.forRoot()
   
  ],
  providers: [AppProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
