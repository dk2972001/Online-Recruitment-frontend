import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      student_id: ['', Validators.required],
      student_name: ['', Validators.required],
      student_mobile: ['', Validators.required],
      student_email: ['', [Validators.required, Validators.email]],
      student_address: ['', Validators.required],
      student_gender: ['', Validators.required],
    });
  }

  addStudent() {
    if (this.studentForm.valid) {
      console.log('Student added:', this.studentForm.value);
      this.proceedToCollege();
    } else {
      console.log('Form is not valid');
    }
  }

  proceedToCollege() {
    alert('Successfully added Student details');
    console.log('Proceeding to College');
    this.router.navigate(['/college']);
  }

  navigateBack(){
    console.log('Navigating back');
    this.router.navigate(['/home']);
  };
}
