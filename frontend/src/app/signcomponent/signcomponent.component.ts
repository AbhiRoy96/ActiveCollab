import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../http-web-api.service';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


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
validateStatus: boolean
errorDetl: string;


private obtainedUserName: string;
private obtainedPassword: string;



  constructor(private _httpWebService: HttpWebApiService, private authService: UserAuthService, private router: Router) {
    this.validateStatus = false;
    this.errorDetl = "";
  }



  validateSignIn(){


      if(this.username != null){
        if(EMAIL_REGEX.test(this.username)){
          this.validateStatus = true;
        }else{
          document.getElementById("username").classList.add("invalid-input");
          document.getElementById("password").classList.add("invalid-input");
          this.validateStatus = false;
          this.errorDetl = "Enter a valid email";
        }
      }else{
        document.getElementById("username").classList.add("invalid-input");
        document.getElementById("password").classList.add("invalid-input");
        this.validateStatus = false;
        this.errorDetl = "Email is required";        
      }

      if(this.validateStatus){
        if(this.password == null){
          document.getElementById("username").classList.add("invalid-input");
          this.errorDetl = "Password is required";
          this.validateStatus = false;
        }else{ 
          this.validateStatus = true;
        }
      }
      
      //end of validation!!!!

    if(this.validateStatus){
    	this._httpWebService.getSignInConfirmation(this.username, this.password)
    		.subscribe(resp => {
    			const userData = resp;	
    			
          if(userData.data.signInAuth[0] == null){
            this.errorDetl = "We could not verify you! Please try again with a valid email"; 
          }else{
            this.obtainedUserName = userData.data.signInAuth[0].email;
      			this.obtainedPassword = userData.data.signInAuth[0].password;

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
          }

// endo of subscribtion

    		},
        error => {
            this.errors = error;
            this.router.navigate(['forbidden']); 
        });	
      }


// end of function
    }
    


  }
