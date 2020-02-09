import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangeSizeDirective} from './changeSize.directive';

@NgModule({
  declarations: [
    ChangeSizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChangeSizeDirective
  ]
})
export class ChangeSizeModule {
}
