// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router, ActivatedRoute } from '@angular/router';
// import { JobAvailabilityService } from '../services/job-availability.service';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent implements OnInit{

//   // constructor(private http: HttpClient) {}

//   // constructor(private router: Router, private route: ActivatedRoute) {}

//   // onTabChange(index: number) {
//   //   if (index === 0) {
//   //     this.router.navigate(['emp-dashboard'], { relativeTo: this.route });
//   //   } else if (index === 1) {
//   //     this.router.navigate(['jobseeker-dashboard'], { relativeTo: this.route });
//   //   }
//   // }


//   notifications: any[] = [];
//   selectedNotification: any;
//   reply: string = '';

//   constructor(private jobAvailabilityService: JobAvailabilityService, private http: HttpClient) {}

//   ngOnInit(): void {
//     this.loadNotifications();
//   }

//   loadNotifications() {
//     this.jobAvailabilityService.getNotifications().subscribe(
//       (data: any) => {
//         this.notifications = data;
//       },
//       (error: any) => {
//         console.error('Error loading notifications', error);
//       }
//     );
//   }

//   selectNotification(notification: any) {
//     this.selectedNotification = notification;
//   }

//   sendReply() {
//     if (this.selectedNotification && this.reply) {
//       this.jobAvailabilityService.sendReply(this.selectedNotification.id, this.reply).subscribe(
//         (response: any) => {
//           console.log('Reply sent', response);
//           this.reply = '';
//           this.loadNotifications(); // Refresh the list of notifications
//         },
//         (error: any) => {
//           console.error('Error sending reply', error);
//         }
//       );
//     }
//   }
// }



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  notifications: any[] = [];
  selectedNotification: any;
  reply: string = '';
  userId: any;

  constructor(private http: HttpClient , private authService: AuthService) {}

  ngOnInit(): void {
    // Fetch notifications from backend API
    this.fetchNotifications();
  }

  fetchNotifications() {
    // Assuming you have an API endpoint to fetch notifications
    this.http.get<any[]>('http://localhost:8080/api/notifications').subscribe(
      notifications => {
        this.notifications = notifications;
      },
      error => {
        console.error('Error fetching notifications', error);
      }
    );
  }

  selectNotification(notification: any) {
    this.selectedNotification = notification;
  }

  sendReply() {
    // Assuming you have an API endpoint to send replies
    const data = {
      notificationId: this.selectedNotification.id,
      reply: this.reply
    };

    this.http.post('http://localhost:8080/api/notifications/' + this.selectedNotification.id + '/reply', data).subscribe(
      response => {
        console.log('Reply sent successfully', response);
        // Update UI or fetch notifications again
        this.fetchNotifications();
      },
      error => {
        console.error('Error sending reply', error);
      }
    );
  }
logout(){
this.authService.logout();
}

}

