import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dyclass',
  templateUrl: './dyclass.component.html',
  styleUrls: ['./dyclass.component.css']
})
export class DyclassComponent implements OnInit {
  @ViewChild('pc') pc:ElementRef;

  num:any;
  num2:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.num = +this.route.snapshot.params.num;
    this.num2 = +this.route.snapshot.params.num2;
  }

  addc(){
    this.pc.nativeElement.classList.add('add');
  }

  addc2(){
    this.pc.nativeElement.classList.add('add2');
  }

  addc3(){
    this.pc.nativeElement.classList.add('add3');
  }
  

}
