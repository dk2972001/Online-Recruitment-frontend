import { Component, OnInit } from '@angular/core';
import { Notification } from '../models/Notification';
import { NotificationsService } from '../services/notifications.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',      
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {


  notifications: Notification[] = [];

  constructor(private notificationsService: NotificationsService, private router: Router) { }

  ngOnInit(): void {
    this.fetchNotifications();
  }

  fetchNotifications() {
    this.notificationsService.fetchNotifications()
      .subscribe(notifications => {
        this.notifications = notifications;
      });
  }

  replyToNotification(notification: Notification) {
    // Implement your reply action here
    console.log("Replying to notification:", notification);
    this.router.navigate(['/appointment-sch']);
  }

}
