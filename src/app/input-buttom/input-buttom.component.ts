import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-buttom',
  templateUrl: './input-buttom.component.html',
  styleUrls: ['./input-buttom.component.css']
})
export class InputButtomComponent implements OnInit {


  @Input() buttontag:string = "This is simple Button"

  @Output() onClick:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  check(){
    this.onClick.emit();
  }
  

}
