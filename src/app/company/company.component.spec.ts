import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyComponent } from './company.component';

describe('CompanyComponent', () => {
  let component: CompanyComponent;
  let fixture: ComponentFixture<CompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyComponent] 
    })
    .compileComponents(); // Compile the component

    fixture = TestBed.createComponent(CompanyComponent); // Create an instance of the component
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger initial data binding and lifecycle hooks
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Test if the component is created successfully
  });
});
