import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { College } from '../models/college.model';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8080/college';

  addCollege(college: College): Observable<College> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<College>(this.apiUrl, college, { headers });
  }

  getCollege(): Observable<College[]> {
    return this.http.get<College[]>(`${this.apiUrl}`);
  }

}
