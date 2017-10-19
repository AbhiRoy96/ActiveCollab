import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



@Component({
  selector: 'app-update-project-status',
  templateUrl: './update-project-status.component.html',
  styleUrls: ['./update-project-status.component.css']
})
export class UpdateProjectStatusComponent implements OnInit {

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
  		document.getElementById("pstatus").classList.remove("invalid-input");
  		document.getElementById("pecntCompletion").classList.remove("invalid-input");
  		

  		if(this.projectid == null || this.projectid == ""){
  			document.getElementById("projectid").classList.add("invalid-input");
  			
  			this.action = "Oh snap!";
			  this.details = "Provide an Project Handle id and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';

  			this.validate = false;
  		}
  		if(this.pstatus == null || this.pstatus == ""){
  			document.getElementById("pstatus").classList.add("invalid-input");

  			this.action = "Oh snap!";
			  this.details = "Enter your Project Status and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  		}
  		if(this.pecntCompletion == null){
  			document.getElementById("pecntCompletion").classList.add("invalid-input");

  			this.action = "Oh snap!";
			  this.details = "Enter your Project Completion and try submitting again."; 
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

                this.httpService.updateProjectStatus(this.pid, this.projectid, this.pstatus);
                this.httpService.updateProjectCompl(this.pid, this.projectid, this.pecntCompletion);


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
