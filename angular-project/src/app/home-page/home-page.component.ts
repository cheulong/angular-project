import { Home } from './../model/home.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  home: Home;
  constructor() {}

  ngOnInit() {}
  onmouseEnter(house) {
    this.home = house;
  }
  onmouseLeave(house) {}
}
