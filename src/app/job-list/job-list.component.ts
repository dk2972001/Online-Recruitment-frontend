import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../services/job.service';
import { SignupService } from '../services/signup.service';
import { User } from '../models/User.model';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
})
export class JobListComponent implements OnInit {
  userId: any;
  userList: User[] = [];
  jobsList: Job[] =[];
  enableApply: boolean = false;
  filteredJobsList: Job[] = [];
  searchQuery: string = '';

  constructor(
    private route: ActivatedRoute,
    private signupservice: SignupService,
    private jobservice: JobService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.getUser();
    this.getAllJobs();
    this.setEnableApply();
  }

  getAllJobs() {
    this.jobservice.getAllJobs().subscribe({
      next: (jobs) => {
        this.jobsList = jobs.length !== 0 ? jobs : this.dummyJobsList;
        this.filteredJobsList = this.jobsList;
        console.log('jobsList:', this.jobsList);
      },
      error: (error) => {
        console.error('Error fetching the jobs:', error);
      },
    });
  }

  getUser() {
    this.signupservice.getAllUsers().subscribe({
      next: (userList) => {
        this.userList = userList;
        console.log('userList:', this.userList);
      },
      error: (error) => {
        console.error('Error fetching the users:', error);
      },
    });
  }

  getIdFromUserObject(user: User) {
    return JSON.parse(JSON.stringify(user)).userId;
  }

  getIdFromRoleStringifiedObject(role: string) {
    return JSON.parse(JSON.stringify(role)).roleId;
  }

  // not working as expected
  setEnableApply() {
    const result = this.userList
      .filter((user) => this.getIdFromUserObject(user).userId == this.userId)
      .some(
        (user) => this.getIdFromRoleStringifiedObject(user.role) === 'student'
      );

    this.enableApply = Boolean(result);
  }


  filterJobs() {
    const query = this.searchQuery.toLowerCase();
    this.filteredJobsList = this.jobsList.filter(job => {
      return (
        job.jobName.toLowerCase().includes(query) ||
        job.jobDescription.toLowerCase().includes(query) ||
        job.salary.toLowerCase().includes(query) ||
        job.jobType.toLowerCase().includes(query) ||
        job.jobVaccancy.toLowerCase().includes(query)
      );
    });
  }

  clearSearch() {
    this.searchQuery = '';
    this.filterJobs();
  }
  

  jobId: string = '1';
  // dummy data
  dummyJobsList: Job[] = [
    {
      jobID: 1,
      jobName: 'HTML Designer',
      salary: 'No disclosed',
      jobType: 'Software',
      jobDescription: 'HTML tech stack',
      jobVaccancy: 'Free',
    },
    {
      jobID: 2,
      jobName: 'CSS Designer',
      salary: 'No disclosed',
      jobType: 'Software',
      jobDescription: 'CSS tech stack',
      jobVaccancy: 'Free',
    },
    {
      jobID: 3,
      jobName: 'JS Designer',
      salary: 'No disclosed',
      jobType: 'Software',
      jobDescription: 'JS tech stack',
      jobVaccancy: 'Free',
    },
    {
      jobID: 4,
      jobName: 'It Support',
      salary: 'No disclosed',
      jobType: 'IT',
      jobDescription: 'Support',
      jobVaccancy: 'Free',
    },
    {
      jobID: 5,
      jobName: 'IT Consultant',
      salary: 'No disclosed',
      jobType: 'IT',
      jobDescription: 'consult',
      jobVaccancy: 'Free',
    },
    {
      jobID: 6,
      jobName: 'HR Trainee',
      salary: 'No disclosed',
      jobType: 'HR',
      jobDescription: 'HR',
      jobVaccancy: 'Half Filled',
    },
  ];
}
