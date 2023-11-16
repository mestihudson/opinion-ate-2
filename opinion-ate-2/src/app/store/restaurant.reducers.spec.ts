import { RestaurantModel } from '@/app/models/restaurant.model';
import { RestaurantStateModel } from '@/app/models/restaurant-state.model';
import * as fromRestaurants from '@/app/store';
import {
  restaurantsReducer,
  initialRestaurantsState,
} from '@/app/store/restaurant.reducers';

describe('RestaurantReducers', () => {
  let initialState: RestaurantStateModel;

  beforeEach(() => {
    initialState = { ...initialRestaurantsState };
  });

  it('should change state when loadRestaurants', () => {
    const result = restaurantsReducer(
      initialState,
      fromRestaurants.loadRestaurants(),
    );

    expect(result).toEqual({
      restaurants: [],
    });
  });

  it('should change state when loadRestaurantsSuccess', () => {
    const mockedRestaurantList: RestaurantModel[] = [
      { id: 1, name: 'primeiro 1' },
    ];
    const result = restaurantsReducer(
      initialState,
      fromRestaurants.loadRestaurantsSuccess({
        restaurants: mockedRestaurantList,
      }),
    );
    expect(result).toEqual({
      restaurants: mockedRestaurantList,
    });
  });
});
