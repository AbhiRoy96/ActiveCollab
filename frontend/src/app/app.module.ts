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
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';


import { HttpWebApiService } from './http-web-api.service';
import { UserAuthService } from './user-auth.service';
import { AuthGuard } from './auth.guard';
import { AdminAuthGuard } from './admin-auth.guard';








const appRoutes:Routes = [
  {  path: '',  component: GetStartedComponent  },
  {  path: 'signup',  component: SignUpComponent  },
  {  path: 'forgotpassword',  component: ForgotPasswordComponent },
  {  path: 'forbidden', component: ErrorComponentComponent },
  {  path: 'dashboard',  canActivate: [AuthGuard],  component: UserDashboardComponent },
  {  path: 'cpanel',  
     canActivate: [AdminAuthGuard],  
     component: AdminDashboardComponent, 
     children: [
       {
         path: '',
         component: ProfileViewComponent
       },

     ]
  },


];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigncomponentComponent,
    HomeComponent,
    ForgotPasswordComponent,
    GetStartedComponent,
    SignUpComponent,
    UserDashboardComponent,
    ErrorComponentComponent,
    AdminDashboardComponent,
    ProfileViewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, 
    HttpModule,
    FormsModule,
  ],
  providers: [HttpWebApiService, UserAuthService, AuthGuard, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
