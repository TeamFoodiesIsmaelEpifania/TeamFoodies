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

  const mealListContainer = document.querySelector('#mealList');

  mealListContainer.addEventListener('click', (event) => {
    const moreInfoButton = event.target.closest('.moreInfo');
    
    if (moreInfoButton) {
      const mealId = moreInfoButton.getAttribute('mealId');
      clickForMore(mealId);
    }
  });

  region();
  randomMeals(3);
};

main();
