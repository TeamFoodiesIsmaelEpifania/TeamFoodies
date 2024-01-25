import { fetchData } from "./utils";

export const region = async () => {
  const eachRegion = await fetchData('https://www.themealdb.com/api/json/v1/1/list.php?a=list');

  const fiveRegions = eachRegion.meals.slice(0, 4)

  const listOfRegions = document.querySelector('.dropdown-menu')
  
  fiveRegions.forEach(region => {
    const li = document.createElement('li');

    li.textContent = region.strArea;

    listOfRegions.append(li)
  });
};

export const selectedRegion = async (area) => {
  const oneRegion = await fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);

  const mealListContainer = document.getElementById('mealList');
  mealListContainer.innerHTML = '';
  oneRegion.meals.forEach((meal) => {
    const { idMeal, strMeal, strMealThumb } = meal;
    const mealSec = document.createElement('section');
    const mealHTML = `
    <div class='eachRender'>
    <img src="${strMealThumb}" alt="${strMeal}" class="meal-image">
    <p>Name: ${strMeal}</p>
    <p>ID: ${idMeal}</p>
    <button class='moreInfo' mealId="${idMeal}">Click for more info</button>
    </div>
    `;
    mealSec.innerHTML = mealHTML;
    mealListContainer.appendChild(mealSec);
  });
};

export const randomMeals = async (numMeals) => {
  for (let i = 0; i < numMeals; i++) {
    const oneMeal = await fetchData(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );

    const {  idMeal, strMeal, strMealThumb } = oneMeal.meals[0];

    const renderOneMeal = document.querySelector('#oneMeal');
    const mealDiv = document.createElement('div');
    mealDiv.innerHTML = `
    <div class='eachRender'>
      <img src="${strMealThumb}" alt="Image of Food" class="meal-image">
      <p>${strMeal}</p>
      <button class='moreInfo' mealId="${idMeal}">Click for more info</button>
      </div>
    `;
    renderOneMeal.appendChild(mealDiv);
  }
};

export const clickForMore = async (mealId) => {
  const moreInfo = await fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);

  const { strMealThumb, strInstructions } = moreInfo.meals[0];
  console.log({ strMealThumb, strInstructions });
};