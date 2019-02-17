import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDefinitionFormComponent } from './report-definition-form.component';

describe('ReportDefinitionFormComponent', () => {
  let component: ReportDefinitionFormComponent;
  let fixture: ComponentFixture<ReportDefinitionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDefinitionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDefinitionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
