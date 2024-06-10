import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrl: './emp-login.component.css'
})
export class EmpLoginComponent {
  userId: any;
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

}
