import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../signup/Email.service';


@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {

  email: string='';
  enteredOtp: string='';
  storedOTP:string='' // Assume you have the generated OTP stored somewhere
  role:string='';

  constructor(private route: ActivatedRoute, private router: Router , private emailService: EmailService ) { }

  ngOnInit(): void {
    // Get the email address from query parameters
    this.route.queryParams.subscribe((params: { [x: string]: string; }) => {
      this.email = params['email'];
      this.role = params['role'];
      console.log('Role:', this.role);

    });
   
    this.storedOTP = this.emailService.getGeneratedOTP();
  }

  


  verifyOtp() {
    // Compare the entered OTP with the stored OTP
    if (this.enteredOtp === this.storedOTP) {
      // Correct OTP, perform further actions if needed
      console.log('Correct OTP');
      this.emailService.sendRole(this.email);
      if (this.role === 'student') {
        this.navigateToStudent();
      } else {
        this.navigateToEmployer();
      }
      // this.navigateToRoleId(this.email);
      alert('email verify');
      // this.navigateToLogin();
      

    } else {
      // Incorrect OTP, display error message
      console.log('Incorrect OTP');
      alert('Incorrect OTP');
    }
  }

  resendOtp() {
    // Get the email address from the form
    this.emailService.sendEmail(this.email); // Call the sendEmail method from the EmailService
    console.log('OTP resent successfully!');
    
}

navigateToLogin() {
  // Navigate to the login page
  this.router.navigate(['/login']);
  }

navigateToStudent() {
  // Navigate to the login page
  this.router.navigate(['/student']);
  }
navigateToEmployer() {
  // Navigate to the login page
  this.router.navigate(['/employer']);
  }
}
