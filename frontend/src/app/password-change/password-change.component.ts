import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  private userId: any;
  private data: string;
  email:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.userId = this.route.params.subscribe(params=> {this.data = params['id']});
  	this.email = this.data;
  }

}
