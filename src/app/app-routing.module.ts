import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { JobseekerDashboardComponent } from './jobseeker-dashboard/jobseeker-dashboard.component';
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
import { EmployerComponent } from './employer/employer.component';
import { JobComponent } from './job/job.component';
import { CompanyComponent } from './company/company.component';
import { AppointmentSchComponent } from './appointment-sch/appointment-sch.component';
// Import other components you want to route to

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Redirect to the login page by default
  {path: 'admin', component: AdminComponent, children:[
    {path: 'emp-dashboard', component: EmpDashboardComponent},
  {path: 'jobseeker-dashboard', component: JobseekerDashboardComponent},
  {path:'job-list/:userId', component:JobListComponent}
  ]
  },
  
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'otpverification', component: OtpVerificationComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'job-availability', component: JobAvailabilityComponent },
  { path: 'student/:userId', component: StudentComponent },
  { path: 'college/:userId', component: CollegeComponent },
  { path: 'job-list/:userId', component: JobListComponent },
  { path: 'job-details/:jobId', component: JobDetailsComponent },
  { path: 'employer/:userId', component: EmployerComponent },
  { path: 'job/:userId', component: JobComponent },
  { path: 'appointment-sch', component: AppointmentSchComponent},
  { path: 'company/:userId', component: CompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
