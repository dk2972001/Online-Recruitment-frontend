// resetpassword.component.ts

import { Component, OnInit } from '@angular/core';
import { AbstractControl,ValidationErrors,Validators,FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { strongPasswordValidator } from '../signup/custom-validators';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit{
  signupForm!: FormGroup;
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private router: Router,private fb: FormBuilder) { }

  
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      password: ['', [Validators.required,  strongPasswordValidator()]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }


  Submit() {
    if (this.signupForm.valid) {
      console.log('Form submitted successfully!');
      this.navigateToLogin();
      // Add your signup logic here
    } else {
      console.log('Form is invalid. Please check the fields.');
  
    }
  }

  navigateToLogin() {
    // Navigate to the login page
    this.router.navigate(['/login']);
  }


  }
  

