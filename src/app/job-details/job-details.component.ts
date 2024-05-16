import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
})
export class JobDetailsComponent implements OnInit {
  jobId: string = '';
  job = {
    jobName: 'HTML Designer',
    salary: 'No disclosed',
    applyLink: '#',
    jobType: 'Software',
    jobDescription: 'HTML tech stack',
    jobVaccancy: 'Almost Full',
    companyName: 'Webex',
    companyType: 'Online',
    companyDescr: 'we make website for people',
    companyAddress: 'Remote',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get('jobId')!;
  }
}