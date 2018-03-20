import { Injectable } from '@angular/core';

@Injectable()
export class Hw3Service {

  n1:number=0;
  n2:number=0;
  n3:number=0;
  constructor() { }

  cal():number{
    this.n3=this.n1+this.n2;
    return this.n3;
  }

}
