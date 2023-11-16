import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';

import { RestaurantListComponent } from '@/app/components/restaurant-list/restaurant-list.component';
import { LoadRestaurantsInteractor } from '@/app/interactors/load-restaurants.interactor';
import { RestaurantModel } from '@/app/models/restaurant.model';

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
  const mockLoadRestaurantsInteractor = {
    get: (): Observable<RestaurantModel[]> => of([]),
  };
  const provider = {
    provide: LoadRestaurantsInteractor,
    useValue: mockLoadRestaurantsInteractor,
  };

  it('should render without errors', async () => {
    const { component } = await renderComponent([provider]);
    expect(component).toBeTruthy();
  });

  it('should load restaurants on first render', async () => {
    mockLoadRestaurantsInteractor.get = jest.fn(() => of([]));
    await renderComponent([provider]);
    expect(mockLoadRestaurantsInteractor.get).toHaveBeenCalled();
  });

  it('should display the restaurants', async () => {
    const restaurants = [
      { id: 1, name: 'Sushi Place' },
      { id: 2, name: 'Pizza Place' },
    ];
    mockLoadRestaurantsInteractor.get = jest.fn(() => of([...restaurants]));
    const { fixture } = await renderComponent([provider]);
    expect(fixture.debugElement.nativeElement.textContent).toEqual(
      expect.stringMatching(/(Sushi Place|Pizza Place)/),
    );
  });
});
