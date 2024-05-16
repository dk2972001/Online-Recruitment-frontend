import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  jobForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.jobForm = this.formBuilder.group({
      job_id: ['', Validators.required],
      job_name: ['', Validators.required],
      salary: ['', Validators.required],
      job_type: ['', Validators.required],
      job_description: ['', Validators.required],
      job_vacancy: ['', [Validators.required, Validators.min(1)]],
    });
  }

  addJob() {
    if (this.jobForm.valid) {
      console.log('Job added:', this.jobForm.value);
      alert('Added new Job');
      this.proceedingToJobList();
    } else {
      console.log('Form is not valid');
    }
  }

  proceedingToJobList() {
    this.router.navigate(['/job-list']);
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
