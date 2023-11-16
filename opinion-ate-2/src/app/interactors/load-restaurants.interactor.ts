import { Observable } from 'rxjs';

import { RestaurantModel } from '@/app/models/restaurant.model';

export abstract class LoadRestaurantsInteractor {
  abstract get(): Observable<RestaurantModel[]>;
}
