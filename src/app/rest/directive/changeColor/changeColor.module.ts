import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangeColorDirective} from './changeColor.directive';

@NgModule({
  declarations: [
    ChangeColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChangeColorDirective
  ]
})
export class ChangeColorModule {
}
