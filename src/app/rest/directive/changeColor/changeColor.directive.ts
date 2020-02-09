import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  constructor(private el: ElementRef) {
  }

  @Input('appChangeColor') changeColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.change(this.changeColor);
  }
  private change(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
