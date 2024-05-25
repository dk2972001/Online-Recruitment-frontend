import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  companyForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      company_id: ['', Validators.required],
      company_type: ['', Validators.required],
      company_name: ['', Validators.required],
      company_description: ['', Validators.required],
      company_address: ['', Validators.required],
    });
  }

  addCompany() {
    if (this.companyForm.valid) {
      console.log('Company added:', this.companyForm.value);
      alert('login successful');
      // this.proceedingToJobs();
      this.navigateToLogin();

    } else {
      console.log('Form is not valid');
    }
  }
navigateToLogin() {
    // Navigate to the login page
    this.router.navigate(['/login']);
  }

  proceedingToJobs() {
    this.router.navigate(['/job']);
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
