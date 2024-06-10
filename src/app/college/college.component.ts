import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CollegeService } from '../services/college.service';
import { College } from '../models/college.model'; // Ensure you have a College model
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css'],
})
export class CollegeComponent implements OnInit {
  collegeForm!: FormGroup;
  userId: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private collegeService: CollegeService,
    private authService: AuthService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
  }

  createForm() {
    this.collegeForm = this.fb.group({
      college_id: ['', Validators.required],
      college_name: ['', [Validators.required, Validators.minLength(3)]],
      college_description: [
        '',
        [Validators.required, Validators.minLength(10)],
      ],
      college_address: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.collegeForm.valid) {
      const collegeData: College = {
        collegeId: this.collegeForm.value.college_id,
        collegeName: this.collegeForm.value.college_name,
        collegeAddress: this.collegeForm.value.college_address,
        collegeDescp: this.collegeForm.value.college_description,
      };

      this.collegeService.addCollege(collegeData).subscribe(
        (response) => {
          console.log('College added:', response);
          alert('Successfully Added College Details');
          // this.redirectToJobsList();
          this.PreventBackNavigation();
          this.navigateToLogin();

        },
        (error) => {
          console.error('Error adding college:', error);
        }
      );
    }
  }

navigateToLogin() {
  // Navigate to the login page
  this.router.navigate(['/login']);
  }
  redirectToJobsList() {
    this.router.navigate(['/job-list', this.userId]);
  }

  navigateBack() {
    this.router.navigate(['/']);
  }

  PreventBackNavigation() {
    this.authService.logout();
  }

}
