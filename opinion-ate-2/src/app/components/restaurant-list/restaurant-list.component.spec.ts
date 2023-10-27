import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListComponent } from '@/app/components/restaurant-list/restaurant-list.component';

describe('RestaurantListComponent', () => {
  let fixture: ComponentFixture<RestaurantListComponent>;
  let component: RestaurantListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(RestaurantListComponent);
    component = fixture.componentInstance;
  });

  it('should render without errors', () => {
    expect(component).toBeTruthy();
  });
});
