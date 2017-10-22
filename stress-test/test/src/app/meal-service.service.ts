import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class MealServiceService {
  private searchUrl: string;

  constructor(private _http:Http) { }

  searchLoc(str:string, type='firstName'){
    this.searchUrl = 'http://localhost:4000/graphql?query={Customers('+type+':\"'+str+'\"){id email}}';
    return this._http.get(this.searchUrl)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    /*return this._http.get(this.searchUrl)
    .map(
      (res: Response)=>{
        const rxData = res.json();
        console.log(rxData);
      }
    )*/
  
  
  }

}
