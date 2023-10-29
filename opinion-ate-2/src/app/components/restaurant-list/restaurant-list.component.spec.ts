import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RestaurantListComponent } from '@/app/components/restaurant-list/restaurant-list.component';
import { RestaurantListService } from '@/app/services/restaurant-list.service';

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
    return { fixture, component };
  };

  it('should render without errors', async () => {
    const { component } = await renderComponent();
    expect(component).toBeTruthy();
  });

  it('should load restaurants on first render', async () => {
    const mockRestaurantListService = {
      get: jest.fn(() => of([])),
    };
    await renderComponent([
      {
        provide: RestaurantListService,
        useValue: mockRestaurantListService,
      },
    ]);
    expect(mockRestaurantListService.get).toHaveBeenCalled();
  });

  it('should display the restaurants', async () => {
    const restaurants = [
      { id: 1, name: 'Sushi Place' },
      { id: 2, name: 'Pizza Place' },
    ];
    const mockRestaurantListService = {
      get: jest.fn(() => of([...restaurants])),
    };
    const { fixture } = await renderComponent([
      {
        provide: RestaurantListService,
        useValue: mockRestaurantListService,
      },
    ]);
    expect(fixture.debugElement.nativeElement.textContent).toEqual(
      expect.stringMatching(/(Sushi Place|Pizza Place)/),
    );
  });
});
