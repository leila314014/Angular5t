import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.css']
})
export class Lesson6Component implements OnInit {

  g=0;
  constructor() { }

  ngOnInit() {
  }

  gradeGet(event:any){
    this.g=event;
  }

  click1(){
    console.log("123456");
  }

  click2(){
    alert("789");
  }

  click3(){
    alert("123456789");
  }
}
