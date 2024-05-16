import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
})
export class JobListComponent {
  jobId:string = '1';
  // dummy data
  jobs = [
    {
      jobName: 'HTML Designer',
      salary: 'No disclosed',
      applyLink: '#',
      jobType: 'Software',
      jobDescription: 'HTML tech stack',
      jobVaccancy: 'Almost Full',
    },
    {
      jobName: 'CSS Designer',
      salary: 'No disclosed',
      applyLink: '#',
      jobType: 'Software',
      jobDescription: 'CSS tech stack',
      jobVaccancy: 'Full',
    },
    {
      jobName: 'JS Designer',
      salary: 'No disclosed',
      applyLink: '#',
      jobType: 'Software',
      jobDescription: 'JS tech stack',
      jobVaccancy: 'Almost Full',
    },
    {
      jobName: 'It Support',
      salary: 'No disclosed',
      applyLink: '#',
      jobType: 'IT',
      jobDescription: 'Support',
      jobVaccancy: 'Free',
    },
    {
      jobName: 'IT Consultant',
      salary: 'No disclosed',
      applyLink: '#',
      jobType: 'IT',
      jobDescription: 'consult',
      jobVaccancy: 'Free',
    },
    {
      jobName: 'HR Trainee',
      salary: 'No disclosed',
      applyLink: '#',
      jobType: 'HR',
      jobDescription: 'HR',
      jobVaccancy: 'Half Filled',
    },
  ];
}
