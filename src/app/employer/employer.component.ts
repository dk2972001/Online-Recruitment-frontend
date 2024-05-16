import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css'],
})
export class EmployerComponent implements OnInit {
  employerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.employerForm = this.formBuilder.group({
      employer_id: ['', Validators.required],
      employer_name: ['', Validators.required],
      employer_post: ['', Validators.required],
      employer_address: ['', Validators.required],
      employer_mobile: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+$')],
      ], // Added simple regex for mobile number validation
      employer_email: ['', [Validators.required, Validators.email]],
    });
  }

  addEmployer() {
    if (this.employerForm.valid) {
      console.log('Employer added:', this.employerForm.value);
      alert('Added employeer details');
      this.proceedingToCompany();
    } else {
      console.log('Form is not valid');
    }
  }

  proceedingToCompany() {
    this.router.navigate(['/company']);
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
