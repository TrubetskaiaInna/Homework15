import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from './test.component';
import {NameInitialsPipe} from '../../rest/pipe/nameInitials.pipe';
import {AgePipe} from '../../rest/pipe/age.pipe';
import {WeekDayPipe} from '../../rest/pipe/weekDay.pipe';
import {ChangePositionModule} from '../../rest/directive/changePosition/changePosition.module';
import {ChangeColorModule} from '../../rest/directive/changeColor/changeColor.module';
import {ChangeSizeModule} from '../../rest/directive/changeSize/changeSize.module';
import {DelayModule} from '../../rest/directive/delay/delay.module';
import {AddElementModule} from '../../rest/directive/addElement/addElement.module';
import {SearchModule} from '../../rest/directive/search/search.module';

@NgModule({
  declarations: [
    TestComponent,
    NameInitialsPipe,
    AgePipe,
    WeekDayPipe
  ],
  imports: [
    CommonModule,
    ChangePositionModule,
    ChangeColorModule,
    ChangeSizeModule,
    DelayModule,
    AddElementModule,
    SearchModule
  ],
  exports: [
    TestComponent
  ]
})
export class TestModule {
}
