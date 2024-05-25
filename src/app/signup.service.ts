import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User.model';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private baseUrl = 'http://localhost:8080/user'; // Base URL of your Spring Boot backend
  private baseUrl1 = 'http://localhost:8080/users'; // Base URL of your Spring Boot backend

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl1, user);
  }
}
