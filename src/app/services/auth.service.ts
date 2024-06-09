import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // Method to log out the user
  logout() {
    this.clearStorage();
    this.router.navigateByUrl('/welcome',{ replaceUrl: true}).then(() =>{
        history.pushState(null,'', window.location.href);
        window.addEventListener('popstate', this.preventBackNavigation);
    });
  }

  clearStorage(){
    localStorage.clear();
    sessionStorage.clear();
    this.clearCookies();
  }

  clearCookies(){
    const cookies = document.cookie.split(";");
    for (let cookie of cookies){
        const eqPos= cookie.indexOf("=");
        const name=eqPos > -1 ? cookie.substr(0,eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  }

  preventBackNavigation = (event:PopStateEvent) => {
    history.pushState(null,'',window.location.href);
    this.router.navigateByUrl('/welcome', {replaceUrl: true});
  };

//   // Method to check if the user is authenticated
//   isAuthenticated(): boolean {
//     // Check if the user is authenticated
//     return !!localStorage.getItem('authToken');  // or sessionStorage.getItem('authToken');
//   }
}
