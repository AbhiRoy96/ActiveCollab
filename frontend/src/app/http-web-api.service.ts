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


  verifyDualLogin(username){
    const dualData = this._Http.get('http://localhost:4000/graphql?query={signInAuth(email: \"'+ username +'\"){ userType } }')
      .map((res:Response) => res.json());

    return dualData;
  }


  createNewTeam(teamid,username,projectid,doj){
    const newUser = "http://localhost:4000/graphql?query=mutation { createTeam(teamId: \""+teamid+"\", userId: \""+username+"\", projectId: \""+projectid+"\", joiningDate: \""+doj+"\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  myTeams(userid){
    const teamData = this._Http.get('http://localhost:4000/graphql?query={teamDetails(userId: \"'+userid+'\"){teamId projectId joiningDate} }')
      .map((res:Response) => res.json());

     return teamData;
  }


  validateTeamRegistration(teamid){
    const teamData = this._Http.get('http://localhost:4000/graphql?query={teamDetails(teamId: \"'+teamid+'\"){teamId} }')
      .map((res:Response) => res.json());

     return teamData;
  }


  sendRequest(sender, receiver, projectId, status){
    const newUser = "http://localhost:4000/graphql?query=mutation { createRequest(senderUserId: \""+sender+"\", receiverUserId: \""+receiver+"\", projectId: \""+projectId+"\", status: \""+status+"\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


}


