import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {
  show = true;
  grade = 0;
  xxxx(){
    this.show = !this.show;
  }
  constructor() { }

  ngOnInit() {
  }

}
