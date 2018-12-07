import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Home } from '../model/home.class';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-edit-house-page',
  templateUrl: './edit-house-page.component.html',
  styleUrls: ['./edit-house-page.component.scss']
})
export class EditHousePageComponent implements OnInit {
  home: Home;
  homes = [];
  constructor(
    private location: Location,
    private activeRoute: ActivatedRoute,
    private homeService: HomeService
  ) {}
  routeParams = this.activeRoute.snapshot.params;
  ngOnInit() {
    this.homes = JSON.parse(localStorage.getItem('homes'));
    this.home = this.homes.find(home => home.id === this.routeParams.house);
  }
  goBack() {
    this.location.back();
  }
  save() {
    this.homes.map(house => {
      if (house.id === this.home.id) {
        house = this.home;
      }
    });
    console.log(this.homes);

    localStorage.setItem('homes', JSON.stringify(this.homes));
    this.location.back();
  }
}
