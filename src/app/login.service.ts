import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  uname: string;
  pass: string;
  loginCheck(loginform): boolean {
    this.uname = loginform.value.uname;
    this.pass = loginform.value.pswd;

    if (this.uname == "accenture" && this.pass == "accenture123") {
      sessionStorage.setItem("username", this.uname);
      sessionStorage.setItem("password", this.pass);
      alert("Login Success");
      return true;
    }
    else {
      alert("Enter Valid Credentials");
      return false;
    }
  }
  logoutCheck(): boolean {
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("password");
      alert("Logout Success");
      return false;
   
  }
  //localstorage session storage 

}
