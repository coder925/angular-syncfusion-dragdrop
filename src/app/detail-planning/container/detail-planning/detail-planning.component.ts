import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { Draggable } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-detail-planning',
  templateUrl: './detail-planning.component.html',
  styleUrls: ['./detail-planning.component.scss']
})
export class DetailPlanningComponent implements OnInit {

  @ViewChildren('ele') element: ElementRef[];

  data = [{ id: '1', startTime: new Date(2020, 6, 21, 9, 22, 15), endTime: new Date(2020, 6, 21, 10, 22, 15), descr: 'descr 1' },
  { id: '2', startTime: new Date(2020, 6, 22, 9, 22, 15), endTime: new Date(2020, 6, 22, 10, 22, 15), descr: 'descr 2' },
  { id: '3', startTime: new Date(2020, 6, 23, 9, 22, 15), endTime: new Date(2020, 6, 23, 10, 22, 15), descr: 'descr 3' },
  { id: '4', startTime: new Date(2020, 6, 24, 9, 22, 15), endTime: new Date(2020, 6, 24, 10, 22, 15), descr: 'descr 4' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    for (const item of this.element) {
      console.log('attaching an item as draggable', item);

      let draggable: Draggable =
        new Draggable(item.nativeElement, { clone: false });

    }

  }
}
