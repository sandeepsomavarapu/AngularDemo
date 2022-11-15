import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emp2way',
  templateUrl: './emp2way.component.html',
  styleUrls: ['./emp2way.component.css']
})
export class Emp2wayComponent implements OnInit {


  employee:any;
  result:boolean=false;//input type  value={{employee.FirstName}}
  constructor() {
    this.employee = {
      FirstName : "qwerty",
      LastName : "Kumar",
      Gender : "Male"
  };
 }
  ngOnInit(): void {
  }

}
