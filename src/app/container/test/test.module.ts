import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from './test.component';
import {NameInitialsPipe} from '../../core/nameInitials.pipe';
import {AgePipe} from '../../core/age.pipe';

@NgModule({
  declarations: [
    TestComponent,
    NameInitialsPipe,
    AgePipe
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
