import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from './test.component';
import {NameInitialsPipe} from '../../core/pipe/nameInitials.pipe';
import {AgePipe} from '../../core/pipe/age.pipe';
import {WeekDayPipe} from '../../core/pipe/weekDay.pipe';
import {ChangePositionModule} from '../../core/changePositionDirective/changePosition.directive.module';

@NgModule({
  declarations: [
    TestComponent,
    NameInitialsPipe,
    AgePipe,
    WeekDayPipe
  ],
  imports: [
    CommonModule,
    ChangePositionModule
  ],
  exports: [
    TestComponent
  ]
})
export class TestModule {
}
