import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employer } from '../models/employer.model'; 

@Injectable({
  providedIn: 'root',
})
export class EmployerService {
  private apiUrl = 'http://localhost:8080/employer';

  constructor(private http: HttpClient) {}

  getAllEmployers(): Observable<Employer[]> {
    return this.http.get<Employer[]>(this.apiUrl);
  }

  addEmployer(employer: Employer): Observable<Employer> {
    return this.http.post<Employer>(this.apiUrl, employer);
  }
}
