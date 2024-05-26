import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { User } from '../models/User.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
})
export class JobListComponent implements OnInit {
  userId: any;
  userList: User[] = [];
  enableApply: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private signupservice: SignupService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.getUser();
    this.setEnableApply();
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
      .some((user) => this.getIdFromRoleStringifiedObject(user.role) === 'student');
    
    this.enableApply = Boolean(result);
  }

  jobId: string = '1';
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
