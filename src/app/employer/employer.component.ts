import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployerService } from '../services/employer.service'; 
import { Employer } from '../models/employer.model';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css'],
})
export class EmployerComponent implements OnInit {
  employerForm!: FormGroup;
  userId:any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private employerService: EmployerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.employerForm = this.formBuilder.group({
      employerId: ['', Validators.required],
      employerName: ['', Validators.required],
      employerPost: ['', Validators.required],
      employerAddress: ['', Validators.required],
      employerMobile: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+$')],
      ],
      employerEmail: ['', [Validators.required, Validators.email]],
    });
  }

  addEmployer() {
    if (this.employerForm.valid) {
      const employer: Employer = this.employerForm.value;
      this.employerService.addEmployer(employer).subscribe(
        (response) => {
          console.log('Employer added successfully', response);
          this.proceedingToCompany();
        },
        (error) => {
          console.log('Error while adding employer', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }

  proceedingToCompany() {
    this.router.navigate(['/company', this.userId]);
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
