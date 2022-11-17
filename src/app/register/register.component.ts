import { Component, OnInit } from '@angular/core';
import { filter, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
private subscription:Subscription;
  ngOnInit() {
    //promise
    const promise = new Promise(resolve => {
      console.log("promise call.....");
      setTimeout(() => {
        resolve('promise is working');
        resolve('promise is working1');
        resolve('promise is working2');
        resolve('promise is working3');

      }, 1000
      )
    });
    promise.then(result => console.log(result))
    //Observable
    const observable = new Observable(sub => {
      console.log("observable call...")
      let counter=0;
      setInterval(() => {
        counter=++counter;
        sub.next(counter);
         }, 1000
      )
    });
   this.subscription= observable.subscribe(result => console.log("subscriber counte"+result))

  }

ngOnDestroy(){
this.subscription.unsubscribe();
}

}
