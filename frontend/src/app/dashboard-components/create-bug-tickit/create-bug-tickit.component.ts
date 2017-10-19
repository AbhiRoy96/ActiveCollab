import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



@Component({
  selector: 'app-create-bug-tickit',
  templateUrl: './create-bug-tickit.component.html',
  styleUrls: ['./create-bug-tickit.component.css']
})
export class CreateBugTickitComponent {

constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router) { }


projectid: string;
tname: string;
description: string;
dept: string;
deadline: string;
prior: string;


d:any = new Date();
formattedDate:any = this.d.toISOString();
email: any;
action:string;
details:string;
body:string;
validate = true;

  	validateSignUp(){

  		this.validate = true;


  		document.getElementById("tname").classList.remove("invalid-input");
  		document.getElementById("description").classList.remove("invalid-input");
  		document.getElementById("projectid").classList.remove("invalid-input");
  		document.getElementById("dept").classList.remove("invalid-input");
      document.getElementById("deadline").classList.remove("invalid-input");
      document.getElementById("prior").classList.remove("invalid-input");
  		


  		if(this.projectid == null || this.projectid == ""){
  			document.getElementById("projectid").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your Project Handle and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  		}
  		if(this.tname == null || this.tname == ""){
  			document.getElementById("tname").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your To-do Title and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}
  		if(this.description == null || this.description == ""){
  			document.getElementById("description").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your to-do description and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}
  		if(this.dept == null || this.dept == ""){
  			document.getElementById("dept").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your department and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}
  		if(this.deadline == null || this.deadline == ""){
  			document.getElementById("deadline").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your joining date and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}
      if(this.prior == null || this.prior == ""){
        document.getElementById("prior").classList.add("invalid-input");

        this.action = "Oh snap!";
      this.details = "Enter your joining date and try submitting again."; 
        document.getElementById("message").classList.remove("alert-success");
        document.getElementById("message").classList.add("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
        this.validate = false;
        this.validate = false;
      }



  		if(this.validate){
             
        this.body = "@"+" --- "+this.description+". Deadline: "+this.deadline+". "+this.prior+" priority";
        this.httpService.newBug(this.tname,this.description,this.dept,this.projectid,this.prior,window.localStorage.getItem('user'),this.formattedDate);
        this.httpService.createNews(window.localStorage.getItem('user'),this.projectid,this.formattedDate,"New Bug Found: "+this.tname, this.body);

        this.action = "Well done!";
        this.details = "You successfully registered team member."; 
        document.getElementById("message").classList.add("alert-success");
        document.getElementById("message").classList.remove("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
  			
  		}
  	  	
  }

}
