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
});
