import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../model/home.class';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  homes = [];
  constructor() {
    this.homes = JSON.parse(localStorage.getItem('homes'));
  }
  showHomeList(): Home[] {
    return JSON.parse(localStorage.getItem('homes'));
  }
  add(home: Home) {
    home.id = (this.homes.length + 1).toString();
    this.homes.push(home);
    localStorage.setItem('homes', JSON.stringify(this.homes));
  }

  viewHome(id) {
    return JSON.parse(localStorage.getItem('homes')).find(
      home => home.id === id
    );
  }
}
