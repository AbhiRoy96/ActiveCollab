import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



@Component({
  selector: 'app-update-project-sett',
  templateUrl: './update-project-sett.component.html',
  styleUrls: ['./update-project-sett.component.css']
})
export class UpdateProjectSettComponent implements OnInit {

constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router, private route: ActivatedRoute) { }


projectid: string;
projectname: string;
description: string;
company: string;
budget: number;
manager: string;
startDate: string;
endDate: string;
pid: number;
pstatus: string;
pecntCompletion: number;

d:any = new Date();
formattedDate:any = this.d.toISOString();
action:string;
details:string;
validate = true;

private projectData: any;
private data: string;



	ngOnInit(){
		this.projectData = this.route.params.subscribe(params=> {this.data = params['id']});
	  	this.projectid = this.data;

	  	this._httpWebService.projectInfo(this.projectid)
	  		.subscribe(resp => {
	  			const projectDetail = resp;
	  			this.projectname = projectDetail.data.projectDetails[0].name;
	  			this.description = projectDetail.data.projectDetails[0].description;
	  			this.company = projectDetail.data.projectDetails[0].company;
	  			this.budget = projectDetail.data.projectDetails[0].budget;
	  			this.manager = projectDetail.data.projectDetails[0].manager;
	  			this.startDate = projectDetail.data.projectDetails[0].startDate;
	  			this.endDate = projectDetail.data.projectDetails[0].endDate;

	  			this.pid = projectDetail.data.projectDetails[0].id;
	  			this.pstatus = projectDetail.data.projectDetails[0].status;
	  			this.pecntCompletion = projectDetail.data.projectDetails[0].percentCompletion;
	  		},
	  		error =>{
	  			this.router.navigate(['forbidden']);
	  		});
	}


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

                this.httpService.updateProject(this.pid, this.projectid, this.projectname, this.description, this.company, this.budget, this.manager, this.startDate, this.endDate);
                this.httpService.createNews(window.localStorage.getItem('user'),this.projectid,this.formattedDate,"Project Settings Updated: "+this.projectname, "Hey teammates have a look at the new project settings!"); 

                this.action = "Well done!";
                this.details = "You successfully updated your project settings."; 
                document.getElementById("message").classList.add("alert-success");
                document.getElementById("message").classList.remove("alert-danger");
                document.getElementById('message').style.visibility = 'visible';
               
            },
	  		error =>{
	  			this.router.navigate(['forbidden']);
	  		});


  			
  		}
  	  	
  }

}