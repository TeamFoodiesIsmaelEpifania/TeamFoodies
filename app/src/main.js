import './style.css';
import { apiFetch, region } from './utils/render';

import { randomMeals } from './utils/render';

const main = (e) => {
  if (e) {
    e.preventDefault();
  }

  region();
  randomMeals(3);
<<<<<<< HEAD
  apiFetch('www.themealdb.com/api/json/v1/1/filter.php?a=', 'Mexican');
  apiFetch('www.themealdb.com/api/json/v1/1/random.php');
=======
  // selectedRegion('American');
>>>>>>> 308d4791241b8922335b3a6c77ebdce77c4c2ee6
};

main();
