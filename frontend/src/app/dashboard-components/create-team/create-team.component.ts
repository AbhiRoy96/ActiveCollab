import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit{

constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router) { }

teamid: string;
username: string;
projectid: string;
doj: string;

d:any = new Date();
formattedDate:any = this.d.toISOString();
action:string;
details:string;
validate = true;

  	
    ngOnInit(){
      this.doj = this.formattedDate; 
    }


    validateSignUp(){

  		this.validate = true;

  		document.getElementById("username").classList.remove("invalid-input");
  		document.getElementById("teamid").classList.remove("invalid-input");
  		document.getElementById("projectid").classList.remove("invalid-input");
  		document.getElementById("doj").classList.remove("invalid-input");

  		if(this.username == null || this.username == ""){
  			document.getElementById("username").classList.add("invalid-input");
  			
  			this.action = "Oh snap!";
			  this.details = "Provide an Email id and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';

  			this.validate = false;
  		}

  		if(EMAIL_REGEX.test(this.username)&&(this.validate))
  			this.validate = true;
  		
  		else{
  			document.getElementById("username").classList.add("invalid-input");
  			
  			this.action = "Oh snap!";
			  this.details = "Change your email id and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  		}


  		if(this.teamid == null || this.teamid == ""){
  			document.getElementById("teamid").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your Team Handle and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  		}
  		if(this.projectid == null || this.projectid == ""){
  			document.getElementById("projectid").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your Project Handle and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}
  		if(this.doj == null || this.doj == ""){
  			document.getElementById("doj").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your joining date and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}

  		if(this.validate){

        this._httpWebService.validateTeamRegistration(this.teamid)
          .subscribe(res => {
              const teamData = res;

              
              if(teamData.data.teamDetails[0] == null){
                this.httpService.createNewTeam(this.teamid,this.username,this.projectid,this.doj);
                this.httpService.sendRequest(window.localStorage.getItem('user'),this.username,this.projectid,this.teamid,"pending");

                this.action = "Well done!";
                this.details = "You successfully registered team member."; 
                document.getElementById("message").classList.add("alert-success");
                document.getElementById("message").classList.remove("alert-danger");
                document.getElementById('message').style.visibility = 'visible';
               
              }else{
                if(teamData.data.teamDetails[0].teamId == this.teamid){
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
