import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EnsureAuthenticatedService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('statue') === 'user') {
      // this.router.navigateByUrl('/home');
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  setToken(homes) {
    localStorage.setItem('statue', 'user');
    localStorage.setItem('homes', JSON.stringify(homes));
  }
}
