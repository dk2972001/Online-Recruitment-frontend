import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  "username": string = '';
  "password": string = '';
  showUniqueIdInput: boolean = false;
  uniqueId: string = '';

email: any;
selectedRole: any;
  constructor(private router: Router) { }

  onRoleChange() {
    // Show the unique ID input box if "Employee" or "Student" is selected
    this.showUniqueIdInput = this.selectedRole === 'emp' || this.selectedRole === 'std';
  }

  login() {
    // Here you can perform authentication logic
    

    console.log('Username:', this['username']);
    console.log('Password:', this['password']);
    if (this.selectedRole === 'std') {
      this.navigateToJoblist();
    } else {
      this.navigateToPostjob();
    }

  }
  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }

  navigateToPostjob(){
    this.router.navigate(['/job']);
  }

  navigateToJoblist(){
    this.router.navigate(['/job-list']);
  }
}