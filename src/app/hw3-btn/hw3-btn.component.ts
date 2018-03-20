import { Component, OnInit } from '@angular/core';
import { Hw3Service } from '../hw3.service';

@Component({
  selector: 'app-hw3-btn',
  templateUrl: './hw3-btn.component.html',
  styleUrls: ['./hw3-btn.component.css']
})
export class Hw3BtnComponent implements OnInit {

  constructor(private hw3service:Hw3Service) { }

  ngOnInit() {
  }

  cal(){
    this.hw3service.n3=this.hw3service.cal();
  }

}
