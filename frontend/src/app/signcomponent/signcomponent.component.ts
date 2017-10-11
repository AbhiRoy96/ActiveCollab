import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../http-web-api.service';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';



@Component({
  moduleId: module.id,
  selector: 'signcomponent',
  templateUrl: './signcomponent.component.html',
  styleUrls: ['./signcomponent.component.css']
})
export class SigncomponentComponent{

username: string;
password: string;
errors: any;
 
private obtainedUserName: string;
private obtainedPassword: string;



  constructor(private _httpWebService: HttpWebApiService, private authService: UserAuthService, private router: Router) {
  	this._httpWebService = _httpWebService;
  }


  validateSignIn(){


    	this._httpWebService.getSignInConfirmation(this.username, this.password)
    		.subscribe(resp => {
    			const userData = resp;	
    			this.obtainedUserName = userData.data.signInAuth[0].email;
    			this.obtainedPassword = userData.data.signInAuth[0].password;

    			//console.log(userData);
    			//console.log(this.obtainedUserName);   
          //console.log("Sign In validated! Welcome "+ userData.data.signInAuth[0].firstName +" !");


    			if((this.username == this.obtainedUserName)&&(this.password == this.obtainedPassword)){
            if(this.authService.getAuthUser()==true){
              alert(" You cannot Login At this moment as another user is already signed in! Try signing out from the account and then Sign In with this account!");
            }else{
              this.authService.userLoggedIn(this.username, userData.data.signInAuth[0].userType);
              if(userData.data.signInAuth[0].userType == "Admin"){
                this.router.navigate(['cpanel']);
              }else{
                this.router.navigate(['dashboard']);  
              }
              
            }
    			}

    		},
        error => {
            this.errors = error;
            this.router.navigate(['forbidden']); 
        });	
    

// end of function    

  }



}