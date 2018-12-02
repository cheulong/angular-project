import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHousePageComponent } from './view-house-page.component';

describe('ViewHousePageComponent', () => {
  let component: ViewHousePageComponent;
  let fixture: ComponentFixture<ViewHousePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHousePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHousePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
