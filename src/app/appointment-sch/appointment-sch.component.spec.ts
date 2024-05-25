
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AppointmentSchComponent } from './appointment-sch.component';

describe('AppointmentSchComponent', () => {
  let component: AppointmentSchComponent;
  let fixture: ComponentFixture<AppointmentSchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentSchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentSchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
