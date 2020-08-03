import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSchedulerComponent } from './plan-scheduler.component';

describe('PlanSchedulerComponent', () => {
  let component: PlanSchedulerComponent;
  let fixture: ComponentFixture<PlanSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
