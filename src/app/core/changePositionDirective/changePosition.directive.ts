import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appChangePosition]'
})
export class ChangePositionDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('click') changePosition() {
    this.shiftElement('relative', '400px');
  }

  private shiftElement(position, shiftLeft) {
    this.el.nativeElement.style.position = position;
    this.el.nativeElement.style.left = shiftLeft;
  }
}
