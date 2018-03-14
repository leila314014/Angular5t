import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  _el:HTMLBaseElement;

  @Input() setColor = 'yellow';
  
  constructor(el:ElementRef) {
    this._el= el.nativeElement;
  }

  @HostListener('mouseenter') onmouseenter(){
    console.log(this.setColor);
    this._el.style.backgroundColor = this.setColor;
  }

  @HostListener('mouseleave') 
  onmouseleave(){
    this._el.style.backgroundColor='red';
  }

}
