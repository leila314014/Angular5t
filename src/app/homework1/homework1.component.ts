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

    filter:string;

    grades:Grade []=[]
    
  constructor() { }

  ngOnInit() {
  }
  save(){
    console.log(this.tp);
    if(this.tp.grade<=100 &&this.tp.grade>0 ){
      let _dic:Grade=Object.assign({},this.tp);
      this.grades.push(_dic);
    }else{
      console.log("error");
    }
    

    
  }
  


}



export interface Grade{
  name:string,
  grade:number
}
