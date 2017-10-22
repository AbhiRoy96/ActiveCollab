import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.components';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";
import { Http, Headers, HttpModule } from '@angular/http';
import { MealServiceService } from './meal-service.service';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule 
  ],
  providers: [
    MealServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
