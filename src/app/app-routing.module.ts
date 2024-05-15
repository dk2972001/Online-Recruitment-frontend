import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { JobAvailabilityComponent } from './job-availability/job-availability.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
// Import other components you want to route to

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Redirect to the login page by default
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'otpverification', component: OtpVerificationComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'job-availability', component: JobAvailabilityComponent },
  { path: 'student', component: StudentComponent },
  { path: 'college', component: CollegeComponent },
  { path: 'job-list', component: JobListComponent },
  { path: 'job-details/:jobId', component: JobDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
