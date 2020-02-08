import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appChangeSize]'
})
export class ChangeSizeDirective {
  constructor(private el: ElementRef) {
  }

  @Input('appChangeSize') changeSize: string;

  @HostListener('mouseenter') onChangeSize() {
    this.change(this.changeSize);
  }

  @HostListener('mouseleave') onRemoveSize() {
    this.change(null);
  }

  private change(size: string) {
    this.el.nativeElement.style.fontSize = size;
  }
}
