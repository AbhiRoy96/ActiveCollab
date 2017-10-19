import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { UserAuthService } from '../../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {
  errors:any;
  userid: string = window.localStorage.getItem('user');
  body:string;


  
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
    				

    				this.authService.todoInfo(this.projectList[i].projectId, "Everyone")
    					.subscribe(res => {
    						const feeds = res;
    						for (var i = feeds.data.getTodos.length - 1; i >= 0; i--) {
    							this.testarr.push(feeds.data.getTodos[i]);
    						}
							
							
    					},
				    		error => {
				            this.errors = error;
				            this.router.navigate(['forbidden']);
    					});

    				this.authService.todoInfo(this.projectList[i].projectId, window.localStorage.getItem('user'))
    					.subscribe(res => {
    						const feeds = res;
    						for (var i = feeds.data.getTodos.length - 1; i >= 0; i--) {
    							this.testarr.push(feeds.data.getTodos[i]);
    						}
							
							
    					},
				    		error => {
				            this.errors = error;
				            this.router.navigate(['forbidden']);
    					});

    				this.authService.todoInfo(this.projectList[i].projectId, "Me")
    					.subscribe(res => {
    						const feeds = res;
    						for (var i = feeds.data.getTodos.length - 1; i >= 0; i--) {
    							this.testarr.push(feeds.data.getTodos[i]);
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