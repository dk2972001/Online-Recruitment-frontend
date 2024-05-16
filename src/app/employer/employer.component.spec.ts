import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerComponent } from './employer.component';

describe('EmployerComponent', () => {
  let component: EmployerComponent;
  let fixture: ComponentFixture<EmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployerComponent] // Declare the component to be tested
    })
    .compileComponents(); // Compile the component
    
    fixture = TestBed.createComponent(EmployerComponent); // Create an instance of the component
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger initial data binding and lifecycle hooks
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Test if the component is created successfully
  });
});
