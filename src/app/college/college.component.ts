import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrl: './college.component.css',
})
export class CollegeComponent {
  collegeForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
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
      console.log('Form Submission', this.collegeForm.value);
      alert('Successfully Added College Details');
      this.redirectToJobsList();
    }
  }
  redirectToJobsList() {
    this.router.navigate(['/job-list']);
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
