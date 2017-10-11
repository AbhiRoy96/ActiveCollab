import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent{

  constructor(private authservice: UserAuthService, private router: Router) { }

	logout(){
		this.authservice.userLoggedOut(window.localStorage.getItem('user'));
		this.router.navigate(['']);
	}



}
