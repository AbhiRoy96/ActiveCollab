import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpWebApiService } from '../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  private userId: any;
  private data: string;
  email:string;
  password: string;
  cpassword: string;
  validate:any = true;
  errorDetl:any;

  constructor(private route: ActivatedRoute, private httpservice: HttpWebApiService) { }

  ngOnInit() {
  	this.userId = this.route.params.subscribe(params=> {this.data = params['id']});
  	this.email = this.data;
  }

  resolved(captchaResponse: string) {
    if(captchaResponse != null){
      document.getElementById("signin").classList.remove("hidebutt");
    }else{
      document.getElementById("signin").classList.add("hidebutt");
    }
  }


  verifyUser(){

    if(this.password == null || this.password == ""){
        
        this.errorDetl = "Enter a Valid password.";
        this.validate = false;
      }else{
          if(this.cpassword == null || this.cpassword == ""){
          this.errorDetl = "Enter a Valid password.";
          this.validate = false;
          }else{
            if(this.password != this.cpassword){
              this.errorDetl = "Enter a Valid password.";
              this.validate = false;
            }
          }
      }

      if(this.validate){
          this.httpservice.updatePassword(this.email, this.password);
          this.errorDetl = "Well done! You successfully updated your profile!";
      }        
  }


}