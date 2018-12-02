import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHousePageComponent } from './add-house-page.component';

describe('AddHousePageComponent', () => {
  let component: AddHousePageComponent;
  let fixture: ComponentFixture<AddHousePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHousePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHousePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
