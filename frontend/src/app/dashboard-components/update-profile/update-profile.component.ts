import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit{

constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router) { }

id: any;
username: string;
password: any;
usertype: string;
company: string;

department: string;
firstname: string;
lastname: string;
dob: string;
phone: string;
address: string;
city: string;
state: string;
country: string;
zip: string;


d:any = new Date();
formattedDate:any = this.d.toISOString();
  
action:string;
details:string;
validate = true;
errors:any;




    ngOnInit(){

      this._httpWebService.userInfo(window.localStorage.getItem('user'))
        .subscribe(res => {
          const userData = res;
          this.id = userData.data.profile[0].id;
          this.username = userData.data.profile[0].email;
          this.usertype = userData.data.profile[0].userType;
          this.company = userData.data.profile[0].company;
          this.department = userData.data.profile[0].department;
          this.firstname = userData.data.profile[0].firstName;
          this.lastname = userData.data.profile[0].lastName;
          this.dob = userData.data.profile[0].dob;
          this.phone = userData.data.profile[0].phoneNumber;
          this.address = userData.data.profile[0].address;
          this.city = userData.data.profile[0].city;
          this.state = userData.data.profile[0].state;
          this.country = userData.data.profile[0].country;
          this.zip = userData.data.profile[0].zip;
        },
        error => {
            this.errors = error;
            this.router.navigate(['forbidden']); 
        });

    }


  	validateSignUp(){

  		this.validate = true;

  		document.getElementById("username").classList.remove("invalid-input");
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

  		


  		if(this.department == null || this.department == ""){
  			document.getElementById("department").classList.add("invalid-input");

  			this.action = "Oh snap!";
			  this.details = "Enter your department and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  		}
  		if(this.firstname == null || this.firstname == ""){
  			document.getElementById("firstname").classList.add("invalid-input");

  			this.action = "Oh snap!";
			  this.details = "Enter your first name and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}
  		if(this.lastname == null || this.lastname == ""){
  			document.getElementById("lastname").classList.add("invalid-input");

  			this.action = "Oh snap!";
			  this.details = "Enter your last name and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}
      if(this.dob == null || this.dob == ""){
        document.getElementById("dob").classList.add("invalid-input");

        this.action = "Oh snap!";
        this.details = "Enter your date of birth and try submitting again."; 
        document.getElementById("message").classList.remove("alert-success");
        document.getElementById("message").classList.add("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
        this.validate = false;
      }
      if(this.phone == null || this.phone == ""){
        document.getElementById("phone").classList.add("invalid-input");

        this.action = "Oh snap!";
        this.details = "Enter your phone number and try submitting again."; 
        document.getElementById("message").classList.remove("alert-success");
        document.getElementById("message").classList.add("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
        this.validate = false;
      }
      if(this.address == null || this.address == ""){
        document.getElementById("address").classList.add("invalid-input");

        this.action = "Oh snap!";
        this.details = "Enter your address and try submitting again."; 
        document.getElementById("message").classList.remove("alert-success");
        document.getElementById("message").classList.add("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
        this.validate = false;
      }
      if(this.city == null || this.city == ""){
        document.getElementById("city").classList.add("invalid-input");

        this.action = "Oh snap!";
        this.details = "Enter your city and try submitting again."; 
        document.getElementById("message").classList.remove("alert-success");
        document.getElementById("message").classList.add("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
        this.validate = false;
      }
      if(this.state == null || this.state == ""){
        document.getElementById("state").classList.add("invalid-input");

        this.action = "Oh snap!";
        this.details = "Enter your state and try submitting again."; 
        document.getElementById("message").classList.remove("alert-success");
        document.getElementById("message").classList.add("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
        this.validate = false;
      }
      if(this.country == null || this.country == ""){
        document.getElementById("country").classList.add("invalid-input");

        this.action = "Oh snap!";
        this.details = "Enter your country and try submitting again."; 
        document.getElementById("message").classList.remove("alert-success");
        document.getElementById("message").classList.add("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
        this.validate = false;
      }
      if(this.zip == null || this.zip == ""){
        document.getElementById("zip").classList.add("invalid-input");

        this.action = "Oh snap!";
        this.details = "Enter your zip and try submitting again."; 
        document.getElementById("message").classList.remove("alert-success");
        document.getElementById("message").classList.add("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
        this.validate = false;
      }
  		if(this.validate){
        this._httpWebService.updateProfile(this.id, this.username, this.firstname, this.lastname, this.dob, this.phone, this.company, this.department, this.address, this.city, this.state, this.country, this.zip);
        this._httpWebService.createNews(window.localStorage.getItem('user'),this.firstname,this.formattedDate,"Profile Update ", "Updated profile");

        this.action = "Well done!";
        this.details = "You successfully updated your project settings."; 
        document.getElementById("message").classList.add("alert-success");
        document.getElementById("message").classList.remove("alert-danger");
        document.getElementById('message').style.visibility = 'visible';

  		}
  	  	
  }

}