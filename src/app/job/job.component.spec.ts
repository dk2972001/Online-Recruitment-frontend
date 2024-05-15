import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobComponent } from './job.component';

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobComponent] // Declare the component to be tested
    })
    .compileComponents(); // Compile the component

    fixture = TestBed.createComponent(JobComponent); // Create an instance of the component
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger initial data binding and lifecycle hooks
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Test if the component is created successfully
  });
});
