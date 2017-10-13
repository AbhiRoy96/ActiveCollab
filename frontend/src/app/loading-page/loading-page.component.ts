import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { HttpWebApiService } from '../http-web-api.service';
import { Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {

  constructor(private authService: UserAuthService,private _httpWebService:HttpWebApiService, private router: Router) {}

  ngOnInit() {
  	this._httpWebService.verifyDualLogin(window.localStorage.getItem('user'))
        .subscribe(resp => {
          const userData = resp;
          	window.sessionStorage.setItem('usertype', userData.data.signInAuth[0].userType);
          });
    
    window.localStorage.removeItem('valid');
    window.localStorage.setItem('valid', 'checking');
    document.getElementById('but').style.visibility = 'hidden';
   	document.getElementById("old").innerHTML = "Loading user ...";

    this.runanimate();
  }

  runanimate(){
  	var elem = document.getElementById("loading-bar"); 
  	var width = 1;
  	var id = setInterval(frame, 10);

  	function frame() {
        if (width >= 100) {
            clearInterval(id);
            document.getElementById("old").innerHTML = "Welcome "+ window.localStorage.getItem('user') +"!";
            document.getElementById('but').style.visibility = 'visible';
          
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }

  }

  onboard(){
  	this.router.navigate(['']);  	
  }


}
