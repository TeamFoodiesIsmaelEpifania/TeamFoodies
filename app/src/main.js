import './style.css';
import { apiFetch, region } from './utils/render';

import { randomMeals } from './utils/render';

const main = (e) => {
  if (e) {
    e.preventDefault();
  }

  region();

  document
    .querySelector('.dropdown-menu')
    .addEventListener('click', (event) => {
      const selectedRegionName = event.target.textContent.trim();
      selectedRegion(selectedRegionName);
    });

  randomMeals(3);
  // selectedRegion('American');
};

main();
