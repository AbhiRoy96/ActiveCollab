import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { UserAuthService } from '../../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {



  errors:any;
  userid: string = window.localStorage.getItem('user');
  
  testarr : any[] = [];

  constructor(private _httpWebService: HttpWebApiService, private authService: HttpWebApiService, private router: Router) { }

  ngOnInit() {

  	this._httpWebService.userInfo(this.userid)
    		.subscribe(resp => {
    			const userData = resp;
    			this.testarr = userData.data.profile;

    		},
    		error => {
            this.errors = error;
            this.router.navigate(['forbidden']); 
        });

  }
}