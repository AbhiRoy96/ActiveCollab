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


  updateProject(pid, projectId, name, description, company, budget, manager, startDate, endDate){
    const newUser = "http://localhost:4000/graphql?query=mutation{ updateProjectSettings(id: "+pid+", projectId: \""+projectId+"\" name: \""+name+"\" description: \""+description+"\" company: \""+company+"\" budget: "+budget+" manager: \""+manager+"\" startDate: \""+startDate+"\" endDate: \""+endDate+"\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  updateProjectStatus(pid, projectId, status){
    const newUser = "http://localhost:4000/graphql?query=mutation{ updateProjectStatus(id: "+pid+", projectId: \""+projectId+"\" status: \""+status+"\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();  
  }


  updateProjectCompl(pid, projectId, completion){
    const newUser = "http://localhost:4000/graphql?query=mutation{ updateProjectCompletion(id: "+pid+", projectId: \""+projectId+"\" percentCompletion: "+completion+") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  newTask(projectId,title,description,department,createdBy,createDate,broadcastTo,deadline){
    const newUser = "http://localhost:4000/graphql?query=mutation{createTodo(projectId: \""+projectId+"\", title: \""+title+"\", description: \""+description+"\", department: \""+department+"\", createdBy: \""+createdBy+"\", createDate: \""+createDate+"\", broadcastTo: \""+broadcastTo+"\", deadline: \""+deadline+"\", status: \"Pending\", resolvedBy: \"Pending\", resolvedOn: \""+deadline+"\"){ id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }

  todoInfo(projectId, broadCast){
    const teamData = this._Http.get('http://localhost:4000/graphql?query=query{getTodos(projectId: "'+projectId+'" broadcastTo: "'+broadCast+'"){id projectId title description department deadline createdBy createDate status} }')
      .map((res:Response) => res.json());

     return teamData;  
  } 
  

  pendingtodo(projectId, broadCast){
    const teamData = this._Http.get('http://localhost:4000/graphql?query=query{getTodos(projectId: "'+projectId+'" broadcastTo: "'+broadCast+'" status: "pending"){id projectId title description department deadline createdBy createDate status } }')
      .map((res:Response) => res.json());

     return teamData;  
  }


  updateTodos(todoid, userid, resdate){
    const newUser = "http://localhost:4000/graphql?query=mutation{todoResponse(id: "+todoid+", status: \"resolved\", resolvedBy: \""+userid+"\", resolvedOn: \""+resdate+"\"){ id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }

  newBug(title, description, department, projectId, rtype, bookedBy, bookedOn){
    const newUser = "http://localhost:4000/graphql?query=mutation{createTickit(title: \""+title+"\",description: \""+description+"\",department: \""+department+"\",projectId: \""+projectId+"\",type: \""+rtype+"\",status: \"pending\",bookedBy: \""+bookedBy+"\",bookedOn: \""+bookedOn+"\",resolvedBy: \"pending\",verificationStatus:\"pending\",verifiedBy: \"pending\",verifiedOn: \""+bookedOn+"\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  respondtoBugs(id,resolvedBy){
    const newUser = "http://localhost:4000/graphql?query=mutation{tickitResponse(id: "+id+", status: \"waiting\", resolvedBy: \""+resolvedBy+"\", verificationStatus: \"booked\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  closeBugReport(id,verifiedBy,verifiedOn){
    const newUser = "http://localhost:4000/graphql?query=mutation{tickitClose(id: "+id+", status: \"resolved\" verificationStatus: \"verified\" verifiedBy: \""+verifiedBy+"\" verifiedOn: \""+verifiedOn+"\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  viewBug(projectId){
    const teamData = this._Http.get('http://localhost:4000/graphql?query=query{getTickits(projectId: "'+projectId+'"){ id title description department projectId type bookedBy bookedOn status} }')
      .map((res:Response) => res.json());

     return teamData; 
  }

  viewPendingBug(projectId){
    const teamData = this._Http.get('http://localhost:4000/graphql?query=query{getTickits(projectId: "'+projectId+'", status: "pending"){ id title description department projectId type bookedBy bookedOn status} }')
      .map((res:Response) => res.json());

     return teamData;
  }

  verifyBug(projectId){
    const teamData = this._Http.get('http://localhost:4000/graphql?query=query{getTickits(projectId: "'+projectId+'", verificationStatus: "booked"){id title description department projectId type bookedBy bookedOn status} }')
      .map((res:Response) => res.json());

     return teamData; 
  }


  updateProfile(id, email, firstName, lastName, dob, phoneNumber, company, department, address, city, state, country, zip){
    const newUser = "http://localhost:4000/graphql?query=mutation{profileUpdate(id:"+id+" ,email: \""+email+"\", firstName: \""+firstName+"\", lastName: \""+lastName+"\", dob: \""+dob+"\", phoneNumber: \""+phoneNumber+"\", company: \""+company+"\", department: \""+department+"\",  address: \""+address+"\", city: \""+city+"\", state: \""+state+"\", country: \""+country+"\", zip: \""+zip+"\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


}


