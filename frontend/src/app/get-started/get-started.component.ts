import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';


import { NavbarComponent } from '../navbar/navbar.component';
import { SigncomponentComponent } from '../signcomponent/signcomponent.component';
import { HomeComponent } from '../home/home.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';


@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit{

  constructor(private authService: UserAuthService, private router: Router) { }

  ngOnInit(){
  	if(this.authService.getAuthUser()==true){
  		if(this.authService.getUserLogin()=="Admin"){
  			this.router.navigate(['cpanel']);
  		}
  		else this.router.navigate(['dashboard']);
  	}
  }

}
