import * as Email from '@emailjs/browser';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class EmailService implements OnInit {
  userEmail: string = '';
  generatedOTP: string = 'null';
  generatedRoleID: string = '';
  selectedRole: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the email address from query parameters
    this.route.queryParams.subscribe((params) => {
      this.selectedRole = params['selectedRole'];
      console.log(this.selectedRole);
    });
  }

  receiveRole(selectedRole: string) {
    this.selectedRole = selectedRole;
    // console.log(selectedRole);
  }
  generateRoleID() {
    // Generate a random 6-digit OTP
    // this.generatedRoleID = Math.floor(100000 + Math.random() * 900000).toString();

    if (this.selectedRole === 'student') {
      // Generate a random 6-digit OTP prefixed with "STD"
      this.generatedRoleID =
        'STD' + Math.floor(100000 + Math.random() * 900000).toString();
    } else {
      // Generate a random 6-digit OTP for other roles
      this.generatedRoleID =
        'EMP' + Math.floor(100000 + Math.random() * 900000).toString();
    }
  }

  sendRole(recipientEmail: string) {
    this.generateRoleID();

    const templateParams = {
      from_name: 'Online Recruitment System',
      to_name: recipientEmail,
      subject: 'OTP Verification',
      message_html: `Your RoleID is: ${this.generatedRoleID}`,
    };

    const publicKey = 'putPbNfjUPBbICWr1'; // Replace with your EmailJS public key
    Email.send('service_yknabnr', 'template_xxlzugr', templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('RoleID has been sent successfully. Please check your email.');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  }

  generateOTP() {
    // Generate a random 6-digit OTP
    this.generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  }

  sendEmail(recipientEmail: string) {
    this.generateOTP(); // Generate OTP before sending the email

    const templateParams = {
      from_name: 'Online Recruitment System',
      to_name: recipientEmail,
      subject: 'OTP Verification',
      message_html: `Your OTP for registration is: ${this.generatedOTP}`,
    };

    const publicKey = 'putPbNfjUPBbICWr1'; // Replace with your EmailJS public key
    Email.send('service_yknabnr', 'template_xxlzugr', templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('OTP sent successfully. Please check your email.');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  }

  getGeneratedOTP(): string {
    return this.generatedOTP;
  }
}
