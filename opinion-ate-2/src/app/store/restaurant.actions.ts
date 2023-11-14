import { createAction } from '@ngrx/store';

const prefix = '[Restaurant]';

export const loadRestaurants = createAction(`${prefix} Load restaurants`);
