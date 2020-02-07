import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from './test.component';
import {NameInitialsPipe} from '../../core/nameInitials.pipe';

@NgModule({
  declarations: [
    TestComponent,
    NameInitialsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestComponent
  ]
})
export class TestModule {
}
