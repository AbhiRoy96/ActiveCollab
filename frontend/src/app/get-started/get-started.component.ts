import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { HttpWebApiService } from '../http-web-api.service';
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

  constructor(private authService: UserAuthService,private _httpWebService:HttpWebApiService, private router: Router) { }

  ngOnInit(){
  	if(this.authService.getAuthUser() == true){

      if(window.localStorage.getItem('valid') == "true"){
        this.router.navigate(['loading']);
      }else{		
          if(window.sessionStorage.getItem('usertype') == "Admin"){
      			this.router.navigate(['cpanel']);
      		}
      		else this.router.navigate(['dashboard']);

          window.localStorage.removeItem('valid');
          window.localStorage.setItem('valid', 'true');
  	  }

    }
  }


}
