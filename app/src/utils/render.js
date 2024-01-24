import { fetchData } from './utils';

export const region = async () => {
  const eachRegion = await fetchData(
    'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
  );

  // console.log(eachRegion)
  const fiveRegions = eachRegion.meals.slice(0, 4);

  const listOfRegions = document.querySelector('.dropdown-menu');
  fiveRegions.forEach((region) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = '#';
    a.textContent = region.strArea;
    li.append(a);
    listOfRegions.append(li);
  });
};

const mealListContainer = document.getElementById('mealList');

export const selectedRegion = async (area) => {
  const oneRegion = await fetchData(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );

  mealListContainer.innerHTML = '';

  oneRegion.meals.forEach((meal) => {
    const { idMeal, strMeal, strMealThumb } = meal;

    const mealDiv = document.createElement('div');

    const mealHTML = `
    <img src="${strMealThumb}" alt="${strMeal}">
    <p>Name: ${strMeal}</p>
    <p>ID: ${idMeal}</p>`;

    mealDiv.innerHTML = mealHTML;

    mealListContainer.appendChild(mealDiv);
  });
};

export const randomMeals = async (numMeals) => {
  for (let i = 0; i < numMeals; i++) {
    const oneMeal = await fetchData(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );

    const { idMeal, strMeal, strMealThumb } = oneMeal.meals[0];

    console.log({ idMeal, strMeal, strMealThumb });

    const renderOneMeal = document.querySelector('#oneMeal');
    const mealDiv = document.createElement('div');
    mealDiv.innerHTML = `
      <img src="${strMealThumb}" alt="Image of Food">
      <p>${strMeal}</p>
    `;
    renderOneMeal.appendChild(mealDiv);
  }
};
