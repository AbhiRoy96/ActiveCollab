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


  getRequests(receiver){
    const teamData = this._Http.get('http://localhost:4000/graphql?query={myRequests(receiverUserId: "'+receiver+'", status: \"pending\") {id senderUserId receiverUserId projectId } }')
      .map((res:Response) => res.json());

     return teamData;
  }


  updateRequest(id, status){
    const newUser = "http://localhost:4000/graphql?query=mutation{requestResponse(id:"+id+", status: \""+status+"\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();

  }


  createNews(sender, projectid, timest, title, body){
    const newUser = "http://localhost:4000/graphql?query=mutation{createFeed(senderUserId: \""+sender+"\", projectId: \""+projectid+"\", sTimestamp: \""+timest+"\", title: \""+title+"\", body: \""+body+"\", status: \"unread\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  updateFeeds(id){
    const newUser = "http://localhost:4000/graphql?query=mutation{feedsResponse(id:"+id+", status: \"read\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  newsFeeds(projectid){
    const teamData = this._Http.get('http://localhost:4000/graphql?query={newsFeeds(projectId: \"'+projectid+'\" status: \"unread\"){id senderUserId projectId sTimestamp title body} }')
      .map((res:Response) => res.json());

     return teamData;
  }


  myProjects(userid){
    const teamData = this._Http.get('http://localhost:4000/graphql?query={teamDetails(userId: \"'+userid+'\"){projectId} }')
      .map((res:Response) => res.json());

     return teamData;
  }


  deleteTeamRequest(teamid, userid, projectid){
    const newUser = "http://localhost:4000/graphql?query=mutation{deleteTeamJoin(teamId: \""+teamid+"\", userId: \""+userid+"\", projectId: \""+projectid+"\"){ id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  userInfo(username){
    const teamData = this._Http.get('http://localhost:4000/graphql?query={profile(email: \"'+username+'\"){id email firstName lastName dob phoneNumber company department userType address city state country zip } }')
      .map((res:Response) => res.json());

     return teamData;
  }


  newProject(projectId, name, description, company, budget, manager, startDate, endDate, status){
    const newUser = "http://localhost:4000/graphql?query=mutation{ createProject(projectId: \""+projectId+"\", name: \""+name+"\", description: \""+description+"\", company: \""+company+"\", budget: "+budget+", manager: \""+manager+"\", startDate: \""+startDate+"\", endDate: \""+endDate+"\", status: \""+status+"\", percentCompletion: 0.0) { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }

  validateProject(projectId){
    const teamData = this._Http.get('http://localhost:4000/graphql?query=query{ projectDetails(projectId: \"'+projectId+'\"){ projectId } }')
      .map((res:Response) => res.json());

     return teamData;
  }


  projectInfo(projectId){
    const teamData = this._Http.get('http://localhost:4000/graphql?query=query{ projectDetails(projectId: \"'+projectId+'\"){id projectId name description company budget manager startDate endDate status percentCompletion } }')
      .map((res:Response) => res.json());

     return teamData;  
  }

  


}


