import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-std-login',
  templateUrl: './std-login.component.html',
  styleUrl: './std-login.component.css'
})
export class StdLoginComponent {
userId: any|string;
constructor(private authService: AuthService) { }
logout() {
  this.authService.logout();
}
}
