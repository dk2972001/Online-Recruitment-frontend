import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService
  ) {}

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

  addStudent(): void {
    if (this.studentForm.valid) {
      const studentData: Student = {
        studentId: this.studentForm.value.student_id,
        studentName: this.studentForm.value.student_name,
        studentMobile: this.studentForm.value.student_mobile,
        studentEmail: this.studentForm.value.student_email,
        studentAddress: this.studentForm.value.student_address,
        studentGender: this.studentForm.value.student_gender,
      };
      this.studentService.addStudent(studentData).subscribe(
        response => {
          console.log('Student added:', response);
          alert('Successfully added Student details');
          this.router.navigate(['/college']);
        },
        error => {
          console.error('Error adding student:', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }

  navigateBack(): void {
    this.router.navigate(['/home']);
  }
}
