import { RestaurantModel } from '@/app/models/restaurant.model';
import * as fromRestaurants from '@/app/store';

describe('RestaurantActions', () => {
  describe('loadRestaurants', () => {
    it('should create an action to load restaurants', () => {
      const expected = {
        type: fromRestaurants.loadRestaurants.type,
      };
      const action = fromRestaurants.loadRestaurants();
      expect(action).toEqual(expected);
    });
  });

  describe('loadRestaurantsSuccess', () => {
    it('should create an action to load restaurants successfully', () => {
      const mockedRestaurantList: RestaurantModel[] = [];
      const expected = {
        type: fromRestaurants.loadRestaurantsSuccess.type,
        restaurants: mockedRestaurantList,
      };
      const action = fromRestaurants.loadRestaurantsSuccess({
        restaurants: mockedRestaurantList,
      });
      expect(action).toEqual(expected);
    });
  });
});
