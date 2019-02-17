import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportExecutionComponent } from './report-execution.component';

describe('ReportExecutionComponent', () => {
  let component: ReportExecutionComponent;
  let fixture: ComponentFixture<ReportExecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportExecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
