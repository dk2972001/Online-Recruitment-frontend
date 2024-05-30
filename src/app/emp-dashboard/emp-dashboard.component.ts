import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent {

  employers: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchEmployers();
  }

  fetchEmployers() {
    this.http.get<any[]>('http://localhost:8080/employer').subscribe(
      (response) => {
        this.employers = response.map(emp => ({ ...emp, employerId: String(emp.employerId) }));
      },
      (error) => {
        console.error('Error fetching employers:', error);
      }
    );
  }
}
