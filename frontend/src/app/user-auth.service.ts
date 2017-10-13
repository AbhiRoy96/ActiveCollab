import { Injectable } from '@angular/core';

@Injectable()
export class UserAuthService {

private isAuthenticated: Boolean;

  constructor() { 
  	this.isAuthenticated = false;
  }

  userLoggedIn(username, types){
  	this.isAuthenticated = true;
  	window.localStorage.setItem('auth_key', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJveWFiaGlzaGVrOTY3QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJhZG1pbiI6dHJ1ZX0.g0fqSph5JNreEYpnwfzG2g4YLHEYnxrayd0dPxL4Vb8");
  	window.localStorage.setItem('user', username);
  	window.localStorage.setItem('valid', 'true');
  }

  getAuthUser(){

    if((window.localStorage.getItem('valid')=='true') || window.localStorage.getItem('valid') == 'checking') return true;
    else  	return false;
  }

  userLoggedOut(username){
  	this.isAuthenticated = false;
  	window.localStorage.removeItem('auth_key');
  	window.localStorage.removeItem('user');
  	window.localStorage.removeItem('valid');
  }

  forgotPasswordOpenSession(){
    window.sessionStorage.setItem('session-id', '18242BA32EDFBDD34296142ADDF7D3D8')
    window.sessionStorage.setItem('session-status', 'open');
  }

  forgotPasswordSessionAuth(){
    if(window.sessionStorage.getItem('session-id') == "18242BA32EDFBDD34296142ADDF7D3D8")
      return true;
    else
      return false;
  }

}