import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAvailabilityComponent } from './job-availability.component';

describe('JobAvailabilityComponent', () => {
  let component: JobAvailabilityComponent;
  let fixture: ComponentFixture<JobAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobAvailabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
