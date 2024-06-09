import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { User } from '../models/User.model';
import { Role } from '../models/Role.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  'userName': string = '';
  'password': string = '';
  showUniqueIdInput: boolean = false;
  roleId: string = '';
  email: string = '';
  userList: User[] = [];

  constructor(private router: Router, private signupservice: SignupService) {}

  ngOnInit():void {
    this.getUser();
  }

  login() {
    this.getUser();

    console.log('Username:', this['userName']);
    console.log('Email:', this.email);
    console.log('Password:', this['password']);
    console.log('UnqiueId:', this.roleId);


    if (this['email'] === 'admin@gmail.com' && this['password'] === 'admin123') {
      this.navigateToAdminDashboard();
      return; // Exit the method
    }

    const user = this.userList.find(
      (user) => user.email === this.email && user.password === this.password
    );

    if (user) {
      if (this.roleId.slice(0, 3).toLowerCase() === 'std') {
        this.navigateToStudent(this.getIdFromUserObject(user));
      } else if (this.roleId.slice(0, 3).toLowerCase() === 'emp') {
        // this.navigateToEmployer(this.getIdFromUserObject(user));
        this.navigateToEmployerDashboard();
      } else {
        alert('Invalid Role, Please try again.');
        this.navigateToHome();
      }
    } else {
      alert('User not found. please regsiter yourself.');
      this.navigateToSignUp();
    }
  }

  navigateToAdminDashboard() {
    this.router.navigate(['/admin']);
  }

  getIdFromRoleStringifiedObject(user: string) {
    return JSON.parse(JSON.stringify(user)).roleId;
  }

  getIdFromUserObject(user: User) {
    return JSON.parse(JSON.stringify(user)).userId;
  }

  getUser() {
    this.signupservice.getAllUsers().subscribe({
      next: (userList) => {
        this.userList = userList;
        console.log('userList:', this.userList);
      },
      error: (error) => {
        console.error('Error fetching the users:', error);
      },
    });
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }

  navigateToPostjob() {
    this.router.navigate(['/job']);
  }

  navigateToJoblist() {
    this.router.navigate(['/job-list']);
  }

  navigateToStudent(userId: number | undefined) {
    this.router.navigate(['/student', userId]);
  }

  navigateToEmployer(userId: number | undefined) {
    this.router.navigate(['/employer', userId]);
  }

  navigateToEmployerDashboard(){
    this.router.navigate(['/emp-login'])
  }
}
