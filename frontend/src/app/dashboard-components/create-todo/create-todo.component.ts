import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {

  constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router) { }


projectid: string;
tname: string;
description: string;
dept: string;
share: string;
deadline: string;


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
      document.getElementById("share").classList.remove("invalid-input");
      document.getElementById("deadline").classList.remove("invalid-input");

  		


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
  		if(this.share == "Everyone" || this.share == "Me"){
  			this.validate = true;
  		}else{
  			if(this.share == null || this.share == ""){
  			document.getElementById("share").classList.add("invalid-input");
  			
  			this.action = "Oh snap!";
			  this.details = "Provide an Email id and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';

  			this.validate = false;
  			}

  			if(EMAIL_REGEX.test(this.share)&&(this.validate))
  				this.validate = true;
  		
  			else{
  				document.getElementById("share").classList.add("invalid-input");
  			
  				this.action = "Oh snap!";
			  	this.details = "Change your email id and try submitting again."; 
  				document.getElementById("message").classList.remove("alert-success");
  				document.getElementById("message").classList.add("alert-danger");
  				document.getElementById('message').style.visibility = 'visible';
  				this.validate = false;
  			}
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



  		if(this.validate){
             
        this.body = "@"+this.share+" --- "+this.description+". Deadline: "+this.deadline;
        this.httpService.newTask(this.projectid,this.tname,this.description,this.dept,window.localStorage.getItem('user'),this.formattedDate,this.share,this.deadline);
        this.httpService.createNews(window.localStorage.getItem('user'),this.projectid,this.formattedDate,"New To-do: "+this.tname, this.body);

        this.action = "Well done!";
        this.details = "You successfully registered team member."; 
        document.getElementById("message").classList.add("alert-success");
        document.getElementById("message").classList.remove("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
  			
  		}
  	  	
  }

}
