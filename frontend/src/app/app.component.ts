import { Component } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { SigncomponentComponent } from './signcomponent/signcomponent.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
