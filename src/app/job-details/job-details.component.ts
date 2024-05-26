import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'], // Ensure this is 'styleUrls'
})
export class JobDetailsComponent implements OnInit {
  jobId: string = '';
  job = {
    jobName: 'HTML Designer',
    salary: 'Not disclosed',
    applyLink: '#',
    jobType: 'Software',
    jobDescription: 'HTML tech stack',
    jobVaccancy: 'Almost Full',
    companyName: 'Webex',
    companyType: 'Online',
    companyDescr: 'We make websites for people',
    companyAddress: 'Remote',
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get('jobId')!;
  }

  onSubmit() {
    console.log('Form Submission', this.job);
    alert('Successfully Added Job Details');
    this.redirectToJobAvailability();
  }

  redirectToJobAvailability() {
    this.router.navigate(['/job-availability']);
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
