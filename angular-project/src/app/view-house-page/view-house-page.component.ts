import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-view-house-page',
  templateUrl: './view-house-page.component.html',
  styleUrls: ['./view-house-page.component.scss']
})
export class ViewHousePageComponent implements OnInit {
  home;
  constructor(
    private location: Location,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private homeService: HomeService
  ) {}
  routeParams = this.activeRoute.snapshot.params;

  ngOnInit() {
    console.log(
      (this.home = this.homeService.viewHome(this.routeParams.house))
    );
  }
  goBack() {
    this.location.back();
  }
  edit() {
    this.router.navigate(['/edit', this.routeParams.house]);
  }
}
