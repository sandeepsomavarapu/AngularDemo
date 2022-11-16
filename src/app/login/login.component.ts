import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  orgName:string="Angular";
  uname:string;
  pass:string;

  constructor() { }

  ngOnInit(): void {
  }
  validate(loginform:any){
     this.uname=loginform.value.uname;
     this.pass=loginform.value.pswd;
     if(this.uname=="accenture"&& this.pass=="accenture123")
     {
      alert("Login Success");
     }
     else{
      alert("Enter Valid Credentials");
     }
  }
}
