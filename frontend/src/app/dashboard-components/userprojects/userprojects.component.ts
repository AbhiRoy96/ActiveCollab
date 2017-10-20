import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { UserAuthService } from '../../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-userprojects',
  templateUrl: './userprojects.component.html',
  styleUrls: ['./userprojects.component.css']
})
export class UserprojectsComponent implements OnInit {


  errors:any;
  userid: string = window.localStorage.getItem('user');
  body:string;

  d:any = new Date();
  formattedDate:any = this.d.toISOString();
  
  projectList: any[] =[];
  testarr : any[] = [];

  constructor(private _httpWebService: HttpWebApiService, private authService: HttpWebApiService, private router: Router) { }

  ngOnInit() {
  	document.getElementById('message').style.visibility = 'hidden';
    document.getElementById("message").classList.remove("mess");

  	this._httpWebService.myProjects(this.userid)
    		.subscribe(resp => {
    			const userData = resp;
    			this.projectList = userData.data.teamDetails;

    			
    			for (var i = this.projectList.length - 1; i >= 0; i--) {
    				

    				this.authService.projectInfo(this.projectList[i].projectId)
    					.subscribe(res => {
    						const feeds = res;
    						for (var i = feeds.data.projectDetails.length - 1; i >= 0; i--) {
    							this.testarr.push(feeds.data.projectDetails[i]);
    						}
							
							
    					},
				    		error => {
				            this.errors = error;
				            this.router.navigate(['forbidden']);
    					});
    				
    			}
    			
    			if(this.projectList.length == 0){
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


}