import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { UserAuthService } from '../../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-res-bug-tickit',
  templateUrl: './res-bug-tickit.component.html',
  styleUrls: ['./res-bug-tickit.component.css']
})
export class ResBugTickitComponent implements OnInit {


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
    				

    				this.authService.viewPendingBug(this.projectList[i].projectId)
    					.subscribe(res => {
    						const feeds = res;
    						for (var i = feeds.data.getTickits.length - 1; i >= 0; i--) {
    							this.testarr.push(feeds.data.getTickits[i]);
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


    acceptRequest(item){
    this._httpWebService.respondtoBugs(item.id, window.localStorage.getItem('user'));
    this._httpWebService.createNews(window.localStorage.getItem('user'),item.projectId,this.formattedDate,"Response to Bug Report: "+item.title, "A possible fix has been applied! Guys please test it!");
   	document.getElementById("notify_"+item.id).classList.add("notification-seen");
  }




}