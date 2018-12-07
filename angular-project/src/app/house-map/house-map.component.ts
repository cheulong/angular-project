import { Component, OnInit, Input } from '@angular/core';
import { Home } from '../model/home.class';
import { HomeService } from '../service/home.service';
@Component({
  selector: 'app-house-map',
  templateUrl: './house-map.component.html',
  styleUrls: ['./house-map.component.scss']
})
export class HouseMapComponent implements OnInit {
  @Input() home: Home;

  constructor(private homeService: HomeService) {}
  homes: Home[];
  title = 'Chiang Mai';
  coor = [];
  icon = {
    url:
      'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    scaledSize: {
      width: 25,
      height: 25
    }
  };

  ngOnInit() {
    this.homes = this.homeService.showHomeList();
    // this.coor.push(
    //   this.homes.map(home => {
    //     const a = {};
    //     const coor = 'coor' + home.id;
    //     return { a.coor = home.coor };
    //   })
    // );
    // console.log('coor', this.coor);
  }
}
