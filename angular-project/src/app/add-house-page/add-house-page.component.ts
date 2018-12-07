import { HomeService } from './../service/home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from '../model/home.class';

@Component({
  selector: 'app-add-house-page',
  templateUrl: './add-house-page.component.html',
  styleUrls: ['./add-house-page.component.scss']
})
export class AddHousePageComponent implements OnInit {
  home: Home;

  constructor(private router: Router, private homeService: HomeService) {
    this.home = {
      address: '',
      area: 0,
      lat: '',
      lng: '',
      id: '',
      image: '',
      numBathroom: 0,
      numBedroom: 0,
      price: 0,
      pricePerSqare: 0
    };
  }

  ngOnInit() {}
  goHomePage() {
    this.router.navigateByUrl('/home');
  }
  save() {
    this.homeService.add(this.home);
    this.router.navigate(['/home']);
  }
}
