import { RestaurantModel } from '@/app/models/restaurant.model';
import { RestaurantStateModel } from '@/app/models/restaurant-state.model';
import * as fromRestaurants from '@/app/store';

describe('RestaurantSelectors', () => {
  const mockedRestaurantList: RestaurantModel[] = [];
  const mockedRestaurantListState: RestaurantStateModel = {
    restaurants: mockedRestaurantList,
  };

  it('should select restaurant list state', () => {
    expect(
      fromRestaurants.selectRestaurants.projector(mockedRestaurantListState),
    ).toEqual(mockedRestaurantListState.restaurants);
  });
});
