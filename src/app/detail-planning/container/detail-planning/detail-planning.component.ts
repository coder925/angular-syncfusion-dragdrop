import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-planning',
  templateUrl: './detail-planning.component.html',
  styleUrls: ['./detail-planning.component.scss']
})
export class DetailPlanningComponent implements OnInit {


  data = [{id: '1', startTime: new Date(2020, 6, 21, 9, 22, 15), endTime: new Date(2020, 6, 21, 10, 22, 15), descr: 'descr 1'},
    {id: '1', startTime: new Date(2020, 6, 22, 9, 22, 15), endTime: new Date(2020, 6, 22, 10, 22, 15), descr: 'descr 2'},
    {id: '1', startTime: new Date(2020, 6, 23, 9, 22, 15), endTime: new Date(2020, 6, 23, 10, 22, 15), descr: 'descr 3'},
    {id: '1', startTime: new Date(2020, 6, 24, 9, 22, 15), endTime: new Date(2020, 6, 24, 10, 22, 15), descr: 'descr 4'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
