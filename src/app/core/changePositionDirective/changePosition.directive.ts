import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appChangePosition]'
})
export class ChangePositionDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('click') changePosition() {
    this.shiftElement('relative', '400px', 'line-through');
  }
  private shiftElement(position, shiftLeft, decor) {
    this.el.nativeElement.style.position = position;
    this.el.nativeElement.style.left = shiftLeft;
    this.el.nativeElement.style.textDecoration = decor;
  }
}
