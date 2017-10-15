import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent{

	username:string;
	password:string;
	confirm:string;
	userid:string;
	usertype:string;
	department:string;
	company:string;
	firstname:string;
	lastname:string;
	dob:string;
	phone:string;
	address:string;
	city:string;
	state:string;
	country:string;
	zip:string;
 
	constructor(private _httpWebService: HttpWebApiService, private router: Router) { }




  	validateSignUp(){

  		this.router.navigate(['signupsuccess']);

  	  	//this._httpWebService.createNewUser(this.userid, this.username, this.password, this.firstname, this.lastname, this.dob, this.phone, this.company, this.department, this.usertype, this.address, this.city, this.state, this.country, this.zip);
  }
}
