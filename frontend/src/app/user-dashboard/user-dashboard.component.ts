import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../http-web-api.service';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{

user:string;
errors:any;

    constructor(private authservice: UserAuthService, private httpService:HttpWebApiService,  private router: Router) { }

    ngOnInit(){
    	this.httpService.userInfo(window.localStorage.getItem('user'))
    		.subscribe(res => {
    			const userData = res;
    			this.user = userData.data.profile[0].firstName;

   			},
	    		error => {
	            this.errors = error;
		        this.router.navigate(['forbidden']);
    		});

    }



	logout(){
		this.authservice.userLoggedOut(window.localStorage.getItem('user'));
		this.router.navigate(['']);
	}
}