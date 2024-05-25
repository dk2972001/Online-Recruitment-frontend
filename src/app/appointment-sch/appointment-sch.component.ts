import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-sch',
  templateUrl: './appointment-sch.component.html',
  styleUrls: ['./appointment-sch.component.css']
})
export class AppointmentSchComponent implements OnInit {
  appointmentForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneno: ['', [Validators.pattern('[6789][0-9]{9}')]],
      yearofpassing: ['', [Validators.required]],
      cgpa: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      language: ['', [Validators.pattern('([a-zA-Z]+,?)*')]],
      keyskill: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      console.log('Form Submission', this.appointmentForm.value);
      alert('Successfully Added Appointment Details');
      this.redirectToJobsList();
    }
  }

  redirectToJobsList() {
    this.router.navigate(['/welcome']);
  }


  navigateBack() {
    this.router.navigate(['/']);
  }
}
