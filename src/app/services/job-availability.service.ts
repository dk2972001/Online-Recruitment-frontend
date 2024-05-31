import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobAvailabilityService {

  private apiUrl = 'http://localhost:8080/api/jobavailability';

  constructor(private http: HttpClient) 
  {}

    submitJobApplication(formData: FormData): Observable<any> {
      return this.http.post(this.apiUrl, formData);
    }
    
}
