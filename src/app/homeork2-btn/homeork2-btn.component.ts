import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-homeork2-btn',
  templateUrl: './homeork2-btn.component.html',
  styleUrls: ['./homeork2-btn.component.css']
})
export class Homeork2BtnComponent implements OnInit {

  @Input() num = 0;
  @Input() num2 = 0;
  num3 =0;

  @Output() numOut:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  cu(){
    this.num3=this.num+this.num2;
    this.numOut.emit(this.num3);
  }


}
