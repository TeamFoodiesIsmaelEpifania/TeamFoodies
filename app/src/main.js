import './style.css';
import { apiFetch, region } from './utils/render';

import { randomMeals } from './utils/render';

const main = (e) => {
  if (e) {
    e.preventDefault();
  }

  region();
  randomMeals(3);
  apiFetch('www.themealdb.com/api/json/v1/1/filter.php?a=', 'Mexican');
  apiFetch('www.themealdb.com/api/json/v1/1/random.php');
};

main();
