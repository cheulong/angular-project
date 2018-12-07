import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseMapComponent } from './house-map.component';

describe('HouseMapComponent', () => {
  let component: HouseMapComponent;
  let fixture: ComponentFixture<HouseMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
