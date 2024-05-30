import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobseeker-dashboard',
  templateUrl: './jobseeker-dashboard.component.html',
  styleUrl: './jobseeker-dashboard.component.css'
})
export class JobseekerDashboardComponent {

  students: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchStudents();
  }

  fetchStudents() {
    this.http.get<any[]>('http://localhost:8080/student').subscribe(
      (response) => {
        this.students = response;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }
}
