import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  constructor(private el: ElementRef) {
  }

  @Input('appChangeColor') appChangeColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.change(this.appChangeColor || 'red');
  }
  private change(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
