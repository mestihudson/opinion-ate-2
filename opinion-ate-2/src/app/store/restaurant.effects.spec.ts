import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { ReplaySubject, of } from 'rxjs';
import { take } from 'rxjs/operators';

import { LoadRestaurantsHttpAdapter } from '@/app/adapters/load-restaurants-http.adapter';
import { RestaurantModel } from '@/app/models/restaurant.model';
import * as fromRestaurants from '@/app/store';
import { RestaurantEffects } from '@/app/store/restaurant.effects';

describe('RestaurantEffects', () => {
  let effect: RestaurantEffects;
  let action$: ReplaySubject<Action>;
  let loadRestaurantsService: LoadRestaurantsHttpAdapter;
  const mockedRestaurantList: RestaurantModel[] = [];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        RestaurantEffects,
        provideMockActions(() => action$),
        provideMockStore({
          initialState: {
            restaurants: null,
          },
        }),
        {
          provide: LoadRestaurantsHttpAdapter,
          useValue: {
            get: jest.fn(() => of(mockedRestaurantList)),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    effect = TestBed.inject(RestaurantEffects);
    loadRestaurantsService = TestBed.inject(LoadRestaurantsHttpAdapter);
    action$ = new ReplaySubject();
  }));

  it('should be created', () => {
    expect(effect).toBeTruthy();
  });

  it('should load restaurants', async () => {
    action$.next(fromRestaurants.loadRestaurants());

    const result = await new Promise((resolve) =>
      effect.loadRestaurants$.pipe(take(1)).subscribe(resolve),
    );

    expect(loadRestaurantsService.get).toHaveBeenCalledWith();
    expect(result).toEqual(
      fromRestaurants.loadRestaurantsSuccess({
        restaurants: mockedRestaurantList,
      }),
    );
  });
});
