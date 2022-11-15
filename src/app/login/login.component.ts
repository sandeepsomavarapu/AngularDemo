import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  
  
  <p>Am from Login component : {{orgName}}</p>

  
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  orgName:string="Angular";

  constructor() { }

  ngOnInit(): void {
  }

}
