import { EnsureAuthenticatedService } from './../service/ensure-authenticated.service';
import { Home } from './../model/home.class';
import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import * as data from '../../data/homes';
@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.scss']
})
export class AuthenticationPageComponent implements OnInit {
  value = '';
  homes = data.default;
  constructor(
    private router: Router,
    private ensureAuthenticatedService: EnsureAuthenticatedService
  ) {}
  onEnter(value: string) {
    this.value = value;
    if (this.value === '1234') {
      this.ensureAuthenticatedService.setToken(this.homes);
      this.router.navigate(['/home']);
    }
  }
  ngOnInit() {}
}
