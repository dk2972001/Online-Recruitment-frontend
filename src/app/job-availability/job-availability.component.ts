import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-job-availability',
  templateUrl: './job-availability.component.html',
  styleUrls: ['./job-availability.component.css'], // Ensure this is 'styleUrls'
})
export class JobAvailabilityComponent implements OnInit {
  jobAvailabilityForm!: FormGroup;
  jobId: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router // Inject the Router service
  ) {}

  validateFile(control: AbstractControl): { [key: string]: any } | null {
    const file = control.value;
    const extension = file && file.name.split('.')[1].toLowerCase();
    const validExtensions = ['docx', 'pdf', 'doc'];
    return validExtensions.includes(extension)
      ? null
      : { invalidExtension: true };
  }

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
      resume: ['', [Validators.required, this.validateFile]],
    });
    this.jobId = this.route.snapshot.paramMap.get('jobId')!;
  }

  onSubmit() {
    if (this.jobAvailabilityForm.valid) {
      console.log('Form Submission', this.jobAvailabilityForm.value);
      alert('Successfully Added');
      this.redirectToJobsList();
    }
  }

  redirectToJobsList() {
    this.router.navigate(['/appointment-sch']);
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
