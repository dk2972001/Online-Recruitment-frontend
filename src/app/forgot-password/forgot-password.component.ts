import { Component, OnInit } from '@angular/core';
import { EmailService } from '../signup/Email.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
[x: string]: any;
enteredOtp:string='';
storedOTP:string='';
email: string='';
emailOrMobilenumber: string = '';
  otp: string ='';
  otpSent: boolean = false;

  person: any = {};
  
  constructor(private route: ActivatedRoute, private router: Router ,private emailService: EmailService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email= params['email'];
    });
    this.storedOTP = this.emailService.getGeneratedOTP();
    console.log(this.storedOTP)
  }

  sendOTP() {
    // Implement logic to send OTP
    this.otpSent = true;
    this.emailService.sendEmail(this.emailOrMobilenumber);
   
  }

  resetPassword() {
    // Implement logic to reset password
    if (this.otp === this.emailService.getGeneratedOTP()) {
      // Correct OTP, perform further actions if needed
      console.log('Correct OTP');
      this.navigateToreset();

    } else {
      // Incorrect OTP, display error message
      console.log('Incorrect OTP');
      alert('Incorrect OTP');
    }
  }
  navigateToreset() {
    // Navigate to the login page
    this.router.navigate(['/resetpassword']);
  }
}