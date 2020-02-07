import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from './test.component';
import {NameInitialsPipe} from '../../core/nameInitials.pipe';
import {AgePipe} from '../../core/age.pipe';
import {WeekDayPipe} from '../../core/weekDay.pipe';

@NgModule({
  declarations: [
    TestComponent,
    NameInitialsPipe,
    AgePipe,
    WeekDayPipe
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
