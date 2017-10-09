import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../http-web-api.service';
import { Observable } from 'rxjs/Rx';



@Component({
  moduleId: module.id,
  selector: 'signcomponent',
  templateUrl: './signcomponent.component.html',
  styleUrls: ['./signcomponent.component.css']
})
export class SigncomponentComponent{

username: string;
password: string;
 
private obtainedUserName: string;
private obtainedPassword: string;



  constructor(private _httpWebService: HttpWebApiService) {
  	this._httpWebService = _httpWebService;
  }


  validateSignIn():void{
  	this._httpWebService.getSignInConfirmation(this.username, this.password)
  		.subscribe(resp => {
  			const userData = resp;	
  			this.obtainedUserName = userData.data.signInAuth[0].email;
  			this.obtainedPassword = userData.data.signInAuth[0].password;

  			//console.log(userData);
  			//console.log(this.obtainedUserName);

  			if((this.username == this.obtainedUserName)&&(this.password == this.obtainedPassword)){
  				console.log("Sign In validated! Welcome "+ userData.data.signInAuth[0].firstName +" !");
  			}else{
  				console.log("Sign In could not be validated at the moment! ");
  			}
  		});	
  }



}