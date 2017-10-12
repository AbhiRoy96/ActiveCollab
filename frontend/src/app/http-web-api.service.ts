import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class HttpWebApiService {



  constructor(private _Http: Http) { }

  getSignInConfirmation(username, password){
  	return this._Http.get('http://localhost:4000/graphql?query={signInAuth(email: \"'+ username +'\", password: \"'+ password +'\"){ email password firstName userType} }')
  		.map((res:Response) => res.json());


  }

  createNewUser(userId, email, password, firstName, lastName, dob, phoneNumber, company, department, userType, address, city, state, country, zip){

  	const newUser = "http://localhost:4000/graphql?query=mutation{signUpUser(userId: \""+userId+"\",email: \""+email+"\",password: \""+password+"\", firstName: \""+firstName+"\", lastName: \""+lastName+"\", dob: \""+dob+"\", phoneNumber: \""+phoneNumber+"\", company: \""+company+"\", department: \""+department+"\", userType: \""+userType+"\", address: \""+address+"\", city: \""+city+"\", state: \""+state+"\", country: \""+country+"\", zip: \""+zip+"\") { id } }";
  	const reqBody = "";
  	
    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  verifyUserInfo(username){
    const userData = this._Http.get('http://localhost:4000/graphql?query={forgotPassword(email: \"'+ username +'\"){ email } }')
      .map((res:Response) => res.json());
 
      return userData;
  }


}
