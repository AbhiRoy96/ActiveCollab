import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.css']
})
export class CreateProjectsComponent {

constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router) { }


projectid: string;
projectname: string;
description: string;
company: string;
budget: number;
manager: string;
startDate: string;
endDate: string;


action:string;
details:string;
validate = true;

  	validateSignUp(){

  		this.validate = true;

  		document.getElementById("projectid").classList.remove("invalid-input");
  		document.getElementById("projectname").classList.remove("invalid-input");
  		document.getElementById("description").classList.remove("invalid-input");
  		document.getElementById("company").classList.remove("invalid-input");
  		document.getElementById("budget").classList.remove("invalid-input");
  		document.getElementById("manager").classList.remove("invalid-input");
  		document.getElementById("startDate").classList.remove("invalid-input");
  		document.getElementById("endDate").classList.remove("invalid-input");

  		if(this.projectid == null || this.projectid == ""){
  			document.getElementById("projectid").classList.add("invalid-input");
  			
  			this.action = "Oh snap!";
			  this.details = "Provide an Project Handle id and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';

  			this.validate = false;
  		}
  		if(this.projectname == null || this.projectname == ""){
  			document.getElementById("projectname").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your Project Title and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  		}
  		if(this.description == null || this.description == ""){
  			document.getElementById("description").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your Project Description and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}
  		if(this.company == null || this.company == ""){
  			document.getElementById("company").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your developer information and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}
  		if(this.budget == null || this.budget == 0.0){
  			document.getElementById("budget").classList.add("invalid-input");
  			
  			this.action = "Oh snap!";
			  this.details = "Budget must be specified and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';

  			this.validate = false;
  		}
  		if(this.manager == null || this.manager == ""){
  			document.getElementById("manager").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your Project Manager name and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  		}
  		if(this.startDate == null || this.startDate == ""){
  			document.getElementById("startDate").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter the project starting date and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}
  		if(this.endDate == null || this.endDate == ""){
  			document.getElementById("endDate").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter the project deadline and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}




  		if(this.validate){

        this._httpWebService.validateProject(this.projectid)
          .subscribe(res => {
              const teamData = res;

              
              if(teamData.data.projectDetails[0] == null){
                this.httpService.newProject(this.projectid, this.projectname, this.description, this.company, this.budget, this.manager, this.startDate, this.endDate, "Open");
               

                this.action = "Well done!";
                this.details = "You successfully registered team member."; 
                document.getElementById("message").classList.add("alert-success");
                document.getElementById("message").classList.remove("alert-danger");
                document.getElementById('message').style.visibility = 'visible';
               
              }else{
                if(teamData.data.projectDetails[0].projectId == this.projectid){
                  document.getElementById("teamid").classList.add("invalid-input");
                  this.action = "Oh snap!";
                  this.details = "Change your Team Handle it is already taken, and try submitting again."; 
                  
                  document.getElementById("message").classList.remove("alert-success");
                  document.getElementById("message").classList.add("alert-danger");
                  document.getElementById('message').style.visibility = 'visible';
                  
                  this.validate = false;
                }
               }

          });


  			
  		}
  	  	
  }

}