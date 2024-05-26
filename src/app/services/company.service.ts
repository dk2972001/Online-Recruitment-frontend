import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private apiUrl = 'http://localhost:8080/company';

  constructor(private http: HttpClient) {}

  getAllCompany(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, company);
  }
}
