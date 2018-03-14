import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework2',
  templateUrl: './homework2.component.html',
  styleUrls: ['./homework2.component.css']
})
export class Homework2Component implements OnInit {
  n1=0;
  n2=0;
  n3=0;


  constructor() { }

  ngOnInit() {
  }

  nGet(num3:any){
    this.n3 = num3;
  }

}
