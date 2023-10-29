import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListComponent } from '@/app/components/restaurant-list/restaurant-list.component';

describe('RestaurantListComponent', () => {
  const renderComponent = async (
    providers: { provide: any; useValue?: any }[] = [],
  ) => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers,
    }).compileComponents();
    const fixture: ComponentFixture<RestaurantListComponent> =
      TestBed.createComponent(RestaurantListComponent);
    const component: RestaurantListComponent = fixture.componentInstance;
    fixture.detectChanges();
    return { component };
  };

  it('should render without errors', async () => {
    const { component } = await renderComponent();
    expect(component).toBeTruthy();
  });
});
