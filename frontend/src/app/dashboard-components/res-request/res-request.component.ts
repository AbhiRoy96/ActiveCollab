import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { UserAuthService } from '../../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';




@Component({
  selector: 'app-res-request',
  templateUrl: './res-request.component.html',
  styleUrls: ['./res-request.component.css']
})
export class ResRequestComponent implements OnInit {

  errors:any;
  userid: string = window.localStorage.getItem('user');
  body:string;

  d:any = new Date();
  formattedDate:any = this.d.toISOString();
  
  testarr : any[] = [];

  constructor(private _httpWebService: HttpWebApiService, private authService: UserAuthService, private router: Router) { }

  ngOnInit() {
  	document.getElementById('message').style.visibility = 'hidden';
    document.getElementById("message").classList.remove("mess");

  	this._httpWebService.getRequests(this.userid)
    		.subscribe(resp => {
    			const userData = resp;
    			this.testarr = userData.data.myRequests;
    			if(this.testarr.length == 0){
            document.getElementById("message").classList.add("mess");
    				document.getElementById('requ').style.visibility = 'hidden';
    				document.getElementById('message').style.visibility = 'visible';
    			}


    		},
    		error => {
            this.errors = error;
            this.router.navigate(['forbidden']); 
        });

  }


  acceptRequest(item){

    this.body = this.userid + " Joined team" + item.projectId;
    this._httpWebService.updateTeam(item.teamId, "joined")
    this._httpWebService.updateRequest(item.id, "accepted");
    this._httpWebService.createNews(this.userid,item.projectId,this.formattedDate,"Team Joining", this.body);
    document.getElementById("notify_"+item.id).classList.add("notification-seen");
  }

  rejectRequest(item){
    this.body = this.userid + " Rejected team joining request!" + item.projectId;
    this._httpWebService.updateTeam(item.teamId, "left");
    this._httpWebService.updateRequest(item.id, "rejected");
    this._httpWebService.deleteTeamRequest(item.teamId, this.userid, item.projectId);
    this._httpWebService.createNews(this.userid,item.projectId,this.formattedDate,"Team Joining", this.body);
    document.getElementById("notify_"+item.id).classList.add("notification-seen");
  }





}
