import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  companyForm!: FormGroup;
  userId: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.companyForm = this.formBuilder.group({
      companyId: ['', Validators.required],
      companyType: ['', Validators.required],
      companyName: ['', Validators.required],
      companyDescription: ['', Validators.required],
      companyAddress: ['', Validators.required],
    });
  }

  addCompany() {
    if (this.companyForm.valid) {
      const company: Company = this.companyForm.value;
      this.companyService.addCompany(company).subscribe(
        (data) => {
          console.log('Company added:', data);
          alert('Company added successfully');
          // this.navigateToJobs();
          this.PreventBackNavigation()
          this.navigateToLogin();
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }

  navigateToLogin() {
    // Navigate to the login page
    this.router.navigate(['/login']);
    }
  navigateToJobs() {
    // Navigate to the login page
    this.router.navigate(['/job', this.userId]);
  }

  navigateBack() {
    this.router.navigate(['/']);
  }

  PreventBackNavigation() {
    this.authService.logout();
  }

}
