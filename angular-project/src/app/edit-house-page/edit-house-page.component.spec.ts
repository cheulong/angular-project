import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHousePageComponent } from './edit-house-page.component';

describe('EditHousePageComponent', () => {
  let component: EditHousePageComponent;
  let fixture: ComponentFixture<EditHousePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHousePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHousePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
