import './style.css';
import { region, selectedRegion, randomMeals, clickForMore } from './utils/render';
import { favMeal1, favMeal2, favMeal3 } from './utils/render';

const handleMealListClick = (event) => {
  const moreInfoButton = event.target;
  const mealId = moreInfoButton.getAttribute('mealId');

  if (mealId) {
    clickForMore(mealId);
  }
};

const main = (e) => {
  if (e) {
    e.preventDefault();
  }

  document.querySelector('.dropdown-menu').addEventListener('click', (event) => {
    const selectedRegionName = event.target.textContent.trim();
    selectedRegion(selectedRegionName);
  });

  const mealListContainer = document.querySelector('#mealList');
  mealListContainer.addEventListener('click', handleMealListClick);
  
  document.body.addEventListener('click', (event) => {
    const closeButton = event.target.closest('.close-button');
  
    if (closeButton) {
      const modal = document.querySelector('.modal');
      modal.remove();
    }
  });
  document.querySelector('#randomize button').addEventListener('click', async () => {
    await randomMeals(3);
  });

  region();
  favMeal1();
  favMeal2();
  favMeal3();
};

main();