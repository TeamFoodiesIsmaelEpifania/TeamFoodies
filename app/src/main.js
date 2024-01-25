import './style.css';
import { region, selectedRegion, randomMeals, clickForMore } from './utils/render';


const main = (e) => {
  if (e) {
    e.preventDefault();
  }

  document.querySelector('.dropdown-menu').addEventListener('click', (event) => {
    const selectedRegionName = event.target.textContent.trim();
    selectedRegion(selectedRegionName);
  });

  region();
  randomMeals(3);
};

main();
