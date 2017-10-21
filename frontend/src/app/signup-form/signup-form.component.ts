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

	d:any = new Date();
  	formattedDate:any = this.d.toISOString();
	action:string;
	details:string;
	validate = true;
	errors:any;
 
	constructor(private _httpWebService: HttpWebApiService, private router: Router) {
		this.action = "";
	}



	resolved(captchaResponse: string) {
    	if(captchaResponse != null){
      		document.getElementById("signup").classList.remove("hidebutt");
    	}else{
      		document.getElementById("signup").classList.add("hidebutt");
    	}
  	}




  	validateSignUp(){

  	  	document.getElementById("username").classList.remove("invalid-input");
  	  	document.getElementById("password").classList.remove("invalid-input");
  	 	document.getElementById("cpassword").classList.remove("invalid-input");
  	  	document.getElementById("userid").classList.remove("invalid-input");
  	  	document.getElementById("usertype").classList.remove("invalid-input");
  	  	document.getElementById("company").classList.remove("invalid-input");
      
      	document.getElementById("department").classList.remove("invalid-input");
      	document.getElementById("firstname").classList.remove("invalid-input");
      	document.getElementById("lastname").classList.remove("invalid-input");
      	document.getElementById("dob").classList.remove("invalid-input");
      	document.getElementById("phone").classList.remove("invalid-input");
      	document.getElementById("address").classList.remove("invalid-input");
      	document.getElementById("city").classList.remove("invalid-input");
      	document.getElementById("state").classList.remove("invalid-input");
      	document.getElementById("country").classList.remove("invalid-input");
      	document.getElementById("zip").classList.remove("invalid-input");


      
      if(this.username == null || this.username == ""){
  			document.getElementById("username").classList.add("invalid-input");
  			
  			this.action = "Oh snap! Provide an Email id and try submitting again."; 
  			this.validate = false;
  		}
  	  else{
  	  	if(EMAIL_REGEX.test(this.username))
  			this.validate = true;
  		
  		else{
  			document.getElementById("username").classList.add("invalid-input");
  			
  			this.action = "Oh snap! Change your email id and try submitting again.";
  			this.validate = false;
  		}
  	  }
  		
  	  console.log(this.username);
  		
  		if(this.password == null || this.password == ""){
        document.getElementById("password").classList.add("invalid-input");
        this.action = "Enter a Valid password.";
        this.validate = false;
      	}else{
          if(this.confirm == null || this.confirm == ""){
          document.getElementById("cpassword").classList.add("invalid-input");
          this.action = "Enter a Valid password.";
          this.validate = false;
          }else{
            if(this.password != this.confirm){
              document.getElementById("password").classList.add("invalid-input");
              document.getElementById("cpassword").classList.add("invalid-input");
              this.action = "The passwords do not match.";
              this.validate = false;
            }
          }
      }


      if(this.department == null || this.department == ""){
  			document.getElementById("department").classList.add("invalid-input");

  		this.action = "Oh snap! Enter your department and try submitting again.";
  		this.validate = false;
  	  }
  	  if(this.firstname == null || this.firstname == ""){
  		  document.getElementById("firstname").classList.add("invalid-input");

  		this.action = "Oh snap! Enter your first name and try submitting again.";
  		this.validate = false;
  	  }
  	  if(this.lastname == null || this.lastname == ""){
  		document.getElementById("lastname").classList.add("invalid-input");

  		this.action = "Oh snap! Enter your last name and try submitting again.";
  		this.validate = false;
  	  }
      if(this.dob == null || this.dob == ""){
        document.getElementById("dob").classList.add("invalid-input");

        this.action = "Oh snap! Enter your date of birth and try submitting again.";
        this.validate = false;
      }
      if(this.phone == null || this.phone == ""){
        document.getElementById("phone").classList.add("invalid-input");

        this.action = "Oh snap! Enter your phone number and try submitting again.";
        this.validate = false;
      }
      if(this.address == null || this.address == ""){
        document.getElementById("address").classList.add("invalid-input");

        this.action = "Oh snap! Enter your address and try submitting again.";
        this.validate = false;
      }
      if(this.city == null || this.city == ""){
        document.getElementById("city").classList.add("invalid-input");

        this.action = "Oh snap! Enter your city and try submitting again.";
        this.validate = false;
      }
      if(this.state == null || this.state == ""){
        document.getElementById("state").classList.add("invalid-input");

        this.action = "Oh snap! Enter your state and try submitting again.";
        this.validate = false;
      }
      if(this.country == null || this.country == ""){
        document.getElementById("country").classList.add("invalid-input");

        this.action = "Oh snap! Enter your country and try submitting again.";
        this.validate = false;
      }
      if(this.zip == null || this.zip == ""){
        document.getElementById("zip").classList.add("invalid-input");

        this.action = "Oh snap! Enter your zip and try submitting again.";
        this.validate = false;
      }

      if(this.userid == null || this.userid == ""){
        document.getElementById("userid").classList.add("invalid-input");

        this.action = "Oh snap! Enter your userid and try submitting again.";
        this.validate = false;
      }
      if(this.usertype == null || this.usertype == ""){
        document.getElementById("usertype").classList.add("invalid-input");

        this.action = "Oh snap! Enter your usertype and try submitting again.";
        this.validate = false;
      }
      if(this.company == null || this.company == ""){
        document.getElementById("company").classList.add("invalid-input");

        this.action = "Oh snap! Enter your company and try submitting again.";
        this.validate = false;
      }


      if(((<HTMLInputElement>document.getElementById('chek')).checked == false)&&(this.validate == true)){
      	this.action = "Oh snap! Please accept the terms and conditions.";
        this.validate = false;
      }


  	if(this.validate){
    
      this._httpWebService.createNewUser(this.userid, this.username, this.password, this.firstname, this.lastname, this.dob, this.phone, this.company, this.department, this.usertype, this.address, this.city, this.state, this.country, this.zip);
      this._httpWebService.createNews(window.localStorage.getItem('user'),this.firstname,this.formattedDate,"Profile Update ", "Updated profile");
      this.router.navigate(['signupsuccess']);
      
	}
  }
}
