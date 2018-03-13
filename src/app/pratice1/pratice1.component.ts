import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratice1',
  templateUrl: './pratice1.component.html',
  styleUrls: ['./pratice1.component.css']
})
export class Pratice1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  filter:string
  
  zzz:EnglishDic ={
    English:'',
    Chinese:''
  }

  ppp:EnglishDic[] = []

  save(){
    console.log(this.zzz);
    let _dic:EnglishDic = Object.assign({},this.zzz);

    this.ppp.push(_dic);
    console.log(this.ppp);
  }


}


export interface EnglishDic{
  English:string,
  Chinese:string
}