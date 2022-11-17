import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  orgName: string = "Angular";
  uname: string;
  pass: string;

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }
  validate(loginform: any) {
    this.service.loginCheck(loginform);
  }
}
