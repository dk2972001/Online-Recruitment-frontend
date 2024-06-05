import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface JobAvailability {
  id: number;
  name: string;
  email: string;
  phoneno: string;
  yearofpassing: string;
  percentage: number;
  language: string;
  skills: string;
  project: string;
  resumeData: Blob;
  resumeFilename: string;
  resumeFileType: string;
  user: any; // Modify according to the User structure
}

@Injectable({
  providedIn: 'root'
})
export class JobAvailabilityService {

  private apiUrl = 'http://localhost:8080/api/jobavailability';
  private apiUrl1 = 'http://localhost:8080/api/notifications';
  private baseUrl='http://localhost:8080/jobavailability';
  constructor(private http: HttpClient) {}

  submitJobApplication(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData).pipe(
      catchError(this.handleError)
    );
  }

  getJobAvailabilities(): Observable<JobAvailability[]> {
    return this.http.get<JobAvailability[]>(`${this.baseUrl}`);
  }

  downloadResume(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${id}/resume`, { responseType: 'blob' });
  }

  getNotifications(): Observable<any> {
    return this.http.get(this.apiUrl1).pipe(
      catchError(this.handleError)
    );
  }

  sendReply(notificationId: string, reply: string): Observable<any> {
    const url = `${this.apiUrl1}/${notificationId}/reply`;
    return this.http.post(url, { reply }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
