import { createStore } from 'ice';
import user from './models/user';
import car from './models/car';
import question from './models/question';
import traffic from './models/traffic';

const store = createStore({
  user,
  car,
  question,
  traffic,
});

export default store;
