import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.scss']
})
export class AuthenticationPageComponent implements OnInit {
  value = '';

  constructor(private router: Router) {}
  onEnter(value: string) {
    this.value = value;
    if (this.value === '1234') {
      this.router.navigate(['/home']);
    }
  }
  ngOnInit() {}
}
