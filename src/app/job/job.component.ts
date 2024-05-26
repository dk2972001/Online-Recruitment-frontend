import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  jobForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private jobService: JobService
  ) {}

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
      const job = new Job(
        this.jobForm.value.job_id,
        this.jobForm.value.job_name,
        this.jobForm.value.salary,
        this.jobForm.value.job_type,
        this.jobForm.value.job_description,
        this.jobForm.value.job_vacancy
      );

      this.jobService.addJob(job).subscribe(
        (data) => {
          console.log('Job added:', data);
          alert('Added new Job');
          this.proceedingToJobList();
        },
        (error) => {
          console.log('Error:', error);
        }
      );
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
