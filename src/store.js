import { createStore } from 'ice';
import user from './models/user';
import car from './models/car';
import question from './models/question';
import traffic from './models/traffic';
import money from './models/money';

const store = createStore({
  user,
  car,
  question,
  traffic,
  money,
});

export default store;
