import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobAvailabilityService } from '../services/job-availability.service';

@Component({
  selector: 'app-job-availability',
  templateUrl: './job-availability.component.html',
  styleUrls: ['./job-availability.component.css']
})
export class JobAvailabilityComponent implements OnInit {
  jobAvailabilityForm!: FormGroup;
  resumeFile!: File;

  constructor(
    private fb: FormBuilder,
    private jobAvailabilityService: JobAvailabilityService
  ) {}

  ngOnInit(): void {
    this.jobAvailabilityForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneno: ['', [Validators.pattern('[6789][0-9]{9}')]],
      yearofpassing: ['', [Validators.required]],
      percentage: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      language: ['', [Validators.pattern('([a-zA-Z]+,?)*')]],
      skills: ['', [Validators.pattern('([a-zA-Z]+,?)*')]],
      project: ['', [Validators.pattern('([a-zA-Z]+,?)*')]],
      resume: [null, [Validators.required]]
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.resumeFile = event.target.files[0];
      this.jobAvailabilityForm.patchValue({
        resume: this.resumeFile
      });
    }
  }

  onSubmit() {
    if (this.jobAvailabilityForm.valid) {
      const formData = new FormData();
      Object.keys(this.jobAvailabilityForm.controls).forEach(key => {
        formData.append(key, this.jobAvailabilityForm.get(key)?.value);
      });

      this.jobAvailabilityService.submitJobApplication(formData).subscribe(
        response => {
          console.log('Form Submission', response);
          alert('Successfully Added');
        },
        error => {
          console.error('Error during form submission', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
