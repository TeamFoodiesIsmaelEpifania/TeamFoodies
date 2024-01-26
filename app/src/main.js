import './style.css';
import { region, selectedRegion, randomMeals, clickForMore } from './utils/render';

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

  const closeModal = () => {
    const modal = document.querySelector('.modal');
    modal.remove();
  };
  
  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('close-button')) {
      closeModal();
    }
  });

  region();
  randomMeals(3);
};

main();