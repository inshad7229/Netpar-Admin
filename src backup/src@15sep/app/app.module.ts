import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdProgressBarModule,MdCheckboxModule,MdProgressSpinnerModule,MdSelectModule ,MdInputModule} from "@angular/material";

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
    AppRoutingModule,
    DashboardModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdProgressBarModule,
    MdCheckboxModule,
    MdProgressSpinnerModule,
    MdSelectModule ,
    MdInputModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
