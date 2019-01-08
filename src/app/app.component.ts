import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   dis: String = '';
   num1: number;
   num2: number;
   count: number;
   state: String;
   constructor() {
     this.count = 0;
}
   butonclick(a: String) {
     this.dis = this.dis + a;
   }
  multification(b: String) {
    this.count = this.count + 1;
    if (this.count === 1) {
      this.myfun();
    } else if (this.count === 2) {
      this.num2 = parseFloat(this.dis);
      this.dis = (this.num1 * this.num2).toString();
      this.num1 = parseFloat(this.dis);
    } else if ( this.count  > 2 ) {
      // noinspection JSAnnotator
      if ((this.count % 2) === 1) {
        this.dis = '';
      } else if ((this.count % 2 === 0)) {
        this.num2 = parseFloat(this.dis);
        this.dis = ( this.num1 * this.num2 ).toString();
        this.num1 = parseFloat(this.dis);
      }
    }
     this.state = b;
  }
  adding(b: String) {
     this.count = this.count + 1;
     if (this.count === 1) {
       this.myfun();
     } else if (this.count === 2) {
       this.num2 = parseFloat(this.dis);
       this.dis = (this.num2 + this.num1).toString();
       this.num1 = parseFloat(this.dis);
     } else if ( this.count  > 2 ) {
       // noinspection JSAnnotator
       if ((this.count % 2) === 1) {
         this.dis = '';
       } else if ((this.count % 2 === 0)) {
         this.num2 = parseFloat(this.dis);
         this.dis = ( this.num2 + this.num1 ).toString();
         this.num1 = parseFloat(this.dis);
       }
    }
     this.state = b;
  }
  subtraction(b: String) {
    this.count = this.count + 1;
    if (this.count === 1) {
      this.myfun();
    } else if (this.count === 2) {
      this.num2 = parseFloat(this.dis);
      this.dis = (this.num1 - this.num2).toString();
      this.num1 = parseFloat(this.dis);
    } else if ( this.count  > 2 ) {
      // noinspection JSAnnotator
      if ((this.count % 2) === 1) {
        this.dis = '';
      } else if ((this.count % 2 === 0)) {
        this.num2 = parseFloat(this.dis);
        this.dis = ( this.num1 - this.num2 ).toString();
        this.num1 = parseFloat(this.dis);
      }
    }
     this.state = b;
  }
  division(b: String) {
    this.count = this.count + 1;
    if (this.count === 1) {
      this.myfun();
    } else if (this.count === 2) {
      this.num2 = parseFloat(this.dis);
      this.dis = (this.num1 / this.num2).toString();
      this.num1 = parseFloat(this.dis);
    } else if ( this.count  > 2 ) {
      // noinspection JSAnnotator
      if ((this.count % 2) === 1) {
        this.dis = '';
      } else if ((this.count % 2 === 0)) {
        this.num2 = parseFloat(this.dis);
        this.dis = ( this.num1 / this.num2 ).toString();
        this.num1 = parseFloat(this.dis);
      }
    }
     this.state = b;
  }
  myfun() {
     this.num1 = parseFloat(this.dis);
     this.dis = '';
  }
  equala() {
    console.log(this.state);
     if ( this.state === '+') {
       this.adding( this.state);
      } else if (this.state === '-') {
       this.subtraction(this.state);
     } else if (this.state === '/') {
       this.division(this.state);
     } else if (this.state === '*') {
       this.multification(this.state);
     }
  }
}
