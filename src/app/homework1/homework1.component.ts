import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.css']
})
export class Homework1Component implements OnInit {
  tp:Grade = {
      name:'',
      grade:0
    }

    er:string='';
    filter:string;

    grades:Grade []=[]
    
  constructor() { }

  ngOnInit() {
  }
  save(){
    this.er='';
    console.log(this.tp);
    if(this.tp.grade<=100 &&this.tp.grade>0 ){
      let _dic:Grade=Object.assign({},this.tp);
      this.grades.push(_dic);
    }else{
      this.er="分數必須大於0小於100";
    }
    

    
  }
  


}



export interface Grade{
  name:string,
  grade:number
}
