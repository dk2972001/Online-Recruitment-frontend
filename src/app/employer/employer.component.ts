import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  employerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.employerForm = this.formBuilder.group({
      employer_id: ['', Validators.required],
      employer_name: ['', Validators.required],
      employer_post: ['', Validators.required],
      employer_address: ['', Validators.required],
      employer_mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Added simple regex for mobile number validation
      employer_email: ['', [Validators.required, Validators.email]]
    });
  }

  addEmployer() {
    if (this.employerForm.valid) {
      console.log('Employer added:', this.employerForm.value);
      // Implement logic to handle the form submission, like sending data to a backend.
    } else {
      console.log('Form is not valid');
    }
  }

  navigateBack() {
    console.log('Navigating back');
    // Implement navigation logic if necessary.
  }
}
