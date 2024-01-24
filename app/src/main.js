import './style.css';
import { region } from './utils/render';
import { selectedRegion } from './utils/render';
import { randomMeals } from './utils/render';

const main = (e) => {
  if (e) {
    e.preventDefault();
  }

  region();
  randomMeals(3);
  selectedRegion('American');
};

main();
