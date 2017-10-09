import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigncomponentComponent } from './signcomponent/signcomponent.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { SignUpComponent } from './sign-up/sign-up.component';


import { HttpWebApiService } from './http-web-api.service';




const appRoutes:Routes=[
  {  path: '',  component: GetStartedComponent  },
  {  path: 'signup',  component: SignUpComponent  },
  {  path: 'forgotpassword',  component: ForgotPasswordComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigncomponentComponent,
    HomeComponent,
    ForgotPasswordComponent,
    GetStartedComponent,
    SignUpComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, 
    HttpModule,
    FormsModule,
  ],
  providers: [HttpWebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
