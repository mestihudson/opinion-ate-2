import * as fromRestaurants from '@/app/store';

describe('Restaurant Actions', () => {
  describe('loadRestaurants', () => {
    it('should create an action to load restaurants', () => {
      const expected = {
        type: fromRestaurants.loadRestaurants.type,
      };
      const action = fromRestaurants.loadRestaurants();
      expect(action).toEqual(expected);
    });
  });
});
