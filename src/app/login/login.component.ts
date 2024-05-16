// login.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  'email': string = '';
  'password': string = '';
  'roleId': string = '';
  roleType: string = '';
  showUniqueIdInput: boolean | undefined;
  selectedRole: string | undefined;
  constructor(private router: Router) {}

  onRoleChange() {
    // Show the unique ID input box if "Employee" or "Student" is selected
    this.showUniqueIdInput =
      this.selectedRole === 'emp' || this.selectedRole === 'std';
  }

  login() {
    // Here you can perform authentication logic
    console.log('Email:', this['email']);
    console.log('Password:', this['password']);
    if (this['roleId'].includes('STD')) {
      this.router.navigate(['/student']);
    } else if (this['roleId'].includes('EMP')) {
      this.router.navigate(['/employer']);
    } else {
      alert('Invalid roleId, Try again!');
      this.router.navigate(['/']);
    }
  }
  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
}

// login.component.ts
// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent {
//   'username': string = '';
//   'password': string = '';
//   email: any;
//   roleType: string = '';
//   constructor(private router: Router) {}

//   login() {
//     // Here you can perform authentication logic
//     console.log('Username:', this['username']);
//     console.log('Password:', this['password']);
//     if (this.roleType === 'job-availability') {
//       this.router.navigate(['/job-availability']);
//     }
//   }
//   navigateToSignUp() {
//     this.router.navigate(['/signup']);
//   }
// }
