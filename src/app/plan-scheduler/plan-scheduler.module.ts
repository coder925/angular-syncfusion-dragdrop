import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanSchedulerComponent } from './container/plan-scheduler/plan-scheduler.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';



@NgModule({
  declarations: [PlanSchedulerComponent],
  imports: [
    CommonModule,
    ScheduleModule
  ],
  exports: [PlanSchedulerComponent]
})
export class PlanSchedulerModule { }
