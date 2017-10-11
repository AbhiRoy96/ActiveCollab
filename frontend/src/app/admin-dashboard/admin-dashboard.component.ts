import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent{

    constructor(private authservice: UserAuthService, private router: Router) { }

	logout(){
		this.authservice.userLoggedOut(window.localStorage.getItem('user'));
		this.router.navigate(['']);
	}
}
