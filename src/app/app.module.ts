// app.module.ts
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Import your LoginComponent
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { EmailService } from './signup/Email.service';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { JobAvailabilityComponent } from './job-availability/job-availability.component';
import { SignupService } from './signup.service';
import { HttpClientModule, HttpClient, withFetch } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobItemComponent } from './job-list/job-item/job-item.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { EmployerComponent } from './employer/employer.component';
import { JobComponent } from './job/job.component';
import { CompanyComponent } from './company/company.component';
import { AppointmentSchComponent } from './appointment-sch/appointment-sch.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    ForgotPasswordComponent,
    OtpVerificationComponent,
    ResetpasswordComponent,
    JobAvailabilityComponent,
    CollegeComponent,
    StudentComponent,
    JobListComponent,
    JobItemComponent,
    JobDetailsComponent,
    EmployerComponent,
    JobComponent,
    CompanyComponent,
    AppointmentSchComponent,
    // Declare LoginComponent here
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule, // Import FormsModule here
    BrowserAnimationsModule, // Add if not already imported
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [EmailService, SignupService, provideHttpClient(), 
    { provide: HttpClient, useFactory: () => provideHttpClient(withFetch()) }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
