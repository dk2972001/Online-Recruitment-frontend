import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      student_id: ['', Validators.required],
      student_name: ['', Validators.required],
      student_mobile: ['', Validators.required],
      student_email: ['', [Validators.required, Validators.email]],
      student_address: ['', Validators.required],
      student_gender: ['', Validators.required]  // Added gender control
    });
  }

  addStudent() {
    if (this.studentForm.valid) {
      console.log('Student added:', this.studentForm.value);
      // You can add additional logic here to handle the submission of the form,
      // such as sending the data to a backend server.
    } else {
      console.log('Form is not valid');
    }
  }

  navigateBack() {
    console.log('Navigating back');
    // Here you could navigate back to a previous page or perform other navigation actions.
  }
}
