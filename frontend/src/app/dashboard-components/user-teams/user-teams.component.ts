import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { UserAuthService } from '../../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-user-teams',
  templateUrl: './user-teams.component.html',
  styleUrls: ['./user-teams.component.css']
})
export class UserTeamsComponent implements OnInit {

  errors:any;
  userid: string = window.localStorage.getItem('user');
  body:string;

  d:any = new Date();
  formattedDate:any = this.d.toISOString();
  testarr : any[] = [];

  constructor(private _httpWebService: HttpWebApiService, private authService: UserAuthService, private router: Router) { }

  ngOnInit() {
    document.getElementById('message').style.visibility = 'hidden';
    document.getElementById('message').classList.remove("mess");


  		this._httpWebService.myTeams(this.userid)
    		.subscribe(resp => {
    			const userData = resp;
    			this.testarr = userData.data.teamDetails;

          if(this.testarr.length == 0){
            document.getElementById('message').classList.add("mess");
            document.getElementById('cardss').style.visibility = 'hidden';
            document.getElementById('message').style.visibility = 'visible';
          }
    		},
    		error => {
            this.errors = error;
            this.router.navigate(['forbidden']); 
        });
  }

  quitRequest(item){
    this.body = this.userid + " Left the team!";
    this._httpWebService.deleteTeamRequest(item.teamId, this.userid, item.projectId);
    this._httpWebService.createNews(this.userid, item.projectId, this.formattedDate, "Team Status", this.body);
  }

}