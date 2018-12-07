import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../service/home.service';
import { Home } from '../model/home.class';
import { OutputType } from '@angular/core/src/view';
@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
  @Output() onmouseLeave = new EventEmitter();
  @Output() onmouseEnter = new EventEmitter();
  homes: Home[];
  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit() {
    this.homes = this.homeService.showHomeList();
    console.log(this.homes);
  }

  showDetail(home) {
    this.router.navigate(['/house', home.id]);
  }
  logout() {
    localStorage.removeItem('statue');
    this.router.navigateByUrl('/login');
  }
  add() {
    this.router.navigateByUrl('/add');
  }
  mouseEnter(home) {
    this.onmouseEnter.emit(home);
  }

  mouseLeave(home) {
    this.onmouseLeave.emit(home);
  }
}
