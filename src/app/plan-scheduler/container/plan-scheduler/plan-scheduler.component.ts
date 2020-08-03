import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ScheduleComponent, WorkHoursModel, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService, } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './../../data/data';
import { Draggable, Droppable, DropEventArgs } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-plan-scheduler',
  templateUrl: './plan-scheduler.component.html',
  styleUrls: ['./plan-scheduler.component.scss'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService],
  encapsulation: ViewEncapsulation.None
})
export class PlanSchedulerComponent implements OnInit {

  @ViewChild('scheduleObj') public scheduleObj: ScheduleComponent;

  public today: Date = new Date();
  public dateFormat = "yyyy/MM/dd";
  public scheduleHours: WorkHoursModel = { highlight: true, start: '11:00', end: '20:00' };

  public eventSettings: EventSettingsModel = {
    dataSource: scheduleData,
    enableTooltip: true
  };

  @ViewChild('droppable') element: any;
  @ViewChild('draggable') element1: any;

  ngAfterViewInit() {
    let draggable: Draggable = new Draggable(document.getElementById('draggable'), { clone: false });
    let droppable: Droppable = new Droppable(document.getElementById('droppable'), {
      drop: (e: DropEventArgs) => {
        let obj = (document.querySelector('.e-schedule') as any).ej2_instances[0];
        let data = obj.getCellDetails(e.target);
        let Appointment = { Id: 100, Subject: "New Event", StartTime: data.startTime, EndTime: data.endTime, IsAllDay: data.isAllDay };
        obj.openEditor(Appointment, 'Add', true);
        document.querySelector('#draggable').remove();
      }
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
