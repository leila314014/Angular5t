import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {
  show = true;
  @Input() grade = 0;

  @Output() gradeOut:EventEmitter<number> = new EventEmitter<number>();

  constructor(private bimService:BmiService) { }

  ngOnInit() {
    this.bimService.pub_temp1=99;
  }

  xxxx(){
    this.show = !this.show;
  }

  change(event:any){
    this.gradeOut.emit(event);
  }


}
