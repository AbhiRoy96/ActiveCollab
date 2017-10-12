import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../http-web-api.service';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({

  moduleId: module.id,
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  username: string;
  private obtainedUsername: string;
  errors: any;
  validateStatus: boolean
  errorDetl: string;


  constructor(private _httpWebService: HttpWebApiService, private authService: UserAuthService, private router: Router) {
    this.validateStatus = false;
    this.errorDetl = "";
  }


  verifyUser(){

  	if((this.username != null)&&(EMAIL_REGEX.test(this.username))){
        this.validateStatus = true;
  	}else{
  		this.errorDetl = "Invalid Email";
        this.validateStatus = false;
  	}
  	if(this.validateStatus){
  		this._httpWebService.verifyUserInfo(this.username)
  			.subscribe(res =>{
  				const userData = res;
  				if(userData.data.forgotPassword[0] == null){
  					this.errorDetl="We could not verify you! Please try again with a valid email";
  				}else{
	  				this.obtainedUsername = userData.data.forgotPassword[0].email;
	  				if(this.username == this.obtainedUsername){
	  					this.authService.forgotPasswordOpenSession();
	  					this.router.navigate(['']);
	  				}
  				}
			});
  		}
  }  


}
