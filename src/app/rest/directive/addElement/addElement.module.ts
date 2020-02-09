import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddElementDirective} from './addElement.directive';

@NgModule({
  declarations: [
    AddElementDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddElementDirective
  ]
})
export class AddElementModule {
}
