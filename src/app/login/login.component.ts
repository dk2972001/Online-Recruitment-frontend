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
  'username': string = '';
  'password': string = '';
  email: any;
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
    console.log('Username:', this['username']);
    console.log('Password:', this['password']);
    if (this.roleType === 'job-availability') {
      this.router.navigate(['/job-availability']);
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
