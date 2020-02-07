import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangePositionDirective} from './changePosition.directive';

@NgModule({
  declarations: [
    ChangePositionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChangePositionDirective
  ]
})
export class ChangePositionModule {
}
