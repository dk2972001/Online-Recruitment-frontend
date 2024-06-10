import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../models/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private apiUrl = 'http://localhost:8080/api/notifications';

  constructor(private http: HttpClient) { }

  fetchNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.apiUrl);
  }
}
