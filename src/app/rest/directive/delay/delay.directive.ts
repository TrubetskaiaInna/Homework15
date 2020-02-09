import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({selector: '[appDelay]'})
export class DelayDirective implements OnInit {
  constructor(private template: TemplateRef<any>,
              private view: ViewContainerRef) {
  }

  @Input() appDelay: number;

  ngOnInit(): void {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
    }, this.appDelay);
  }
}
