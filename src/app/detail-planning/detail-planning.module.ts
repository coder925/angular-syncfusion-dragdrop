import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPlanningComponent } from './container/detail-planning/detail-planning.component';
import { PlanSchedulerModule } from '../plan-scheduler/plan-scheduler.module';



@NgModule({
  declarations: [DetailPlanningComponent],
  imports: [
    CommonModule,
    PlanSchedulerModule
  ],
  exports: [DetailPlanningComponent]
})
export class DetailPlanningModule { }
