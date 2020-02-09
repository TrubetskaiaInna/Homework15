import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({selector: '[appAddElement]'})
export class AddElementDirective {
  constructor(private template: TemplateRef<any>,
              private view: ViewContainerRef) {
  }

  @Input() set appAddElement(action) {
    if (action) {
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }
}
