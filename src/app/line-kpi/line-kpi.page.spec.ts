import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineKPIPage } from './line-kpi.page';

describe('LineKPIPage', () => {
  let component: LineKPIPage;
  let fixture: ComponentFixture<LineKPIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineKPIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineKPIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
