import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-job-availability',
  templateUrl: './job-availability.component.html',
  styleUrl: './job-availability.component.css',
})
export class JobAvailabilityComponent {
  jobAvailabilityForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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
      email: ['', Validators.required, Validators.email],
      phoneno: ['', [Validators.pattern('[6789][0-9]{9}')]],
      yearofpassing: ['', [Validators.required]],
      percentage: [
        '',
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      language: ['', Validators.pattern('([a-zA-Z]+,?)*')],
      skills: ['', Validators.pattern('([a-zA-Z]+,?)*')],
      project: ['', Validators.pattern('([a-zA-Z]+,?)*')],
      resume: ['', [Validators.required, this.validateFile]],
    });
  }
  submit() {
    console.log(this.jobAvailabilityForm.value);
  }
}
