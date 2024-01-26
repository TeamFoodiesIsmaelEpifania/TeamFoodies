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
    mealListContainer.append(mealSec);
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
    renderOneMeal.append(mealDiv);

    mealDiv.querySelector('.moreInfo').addEventListener('click', () => {
      clickForMore(idMeal);
    });
  }
};

export const clickForMore = async (mealId) => {
  const moreInfo = await fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const { strInstructions, ...ingredients } = moreInfo.meals[0];

  const allIngredients = Object.keys(ingredients)
    .filter((key) => key.includes('strIngredient'))
    .map((key) => ingredients[key]);

  const modal = document.createElement('dialog');
  modal.className = 'modal';

  modal.innerHTML = `
    <p>How to Make:</p>
    <p>${strInstructions}</p>
    <p>Ingredients:</p>
    <p>${allIngredients.join(', ')}</p>
    <button class='close-button'>X</button>
  `;

  document.body.append(modal);

  modal.showModal();
};

export const favMeal1 = async () => {
  const favMeal = await fetchData("https://www.themealdb.com/api/json/v1/1/lookup.php?i=53016");

  const { idMeal, strMeal, strMealThumb } = favMeal.meals[0];

  const fav1Section = document.getElementById("fav1");
  const section1 = document.createElement('section');
  section1.innerHTML = `
  <img src="${strMealThumb}" alt="${strMeal}" class="meal-image">
  <p>Name: ${strMeal}</p>
  <p>ID: ${idMeal}</p>
  <button class='moreInfo' mealId="${idMeal}">Click for more info</button>
  `;
  fav1Section.append(section1)

  section1.querySelector('.moreInfo').addEventListener('click', () => {
    clickForMore(idMeal);
  });
};

export const favMeal2 = async() => {
  const favMeal = await fetchData("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52854")
  
  const { idMeal, strMeal, strMealThumb } = favMeal.meals[0];

  const fav2Section = document.getElementById("fav1");
  const section2 = document.createElement('section');
  section2.innerHTML = `
  <img src="${strMealThumb}" alt="${strMeal}" class="meal-image">
  <p>Name: ${strMeal}</p>
  <p>ID: ${idMeal}</p>
  <button class='moreInfo' mealId="${idMeal}">Click for more info</button>
  `;
  fav2Section.append(section2)

  section2.querySelector('.moreInfo').addEventListener('click', () => {
    clickForMore(idMeal);
  });
}

export const favMeal3 = async() => {
  const favMeal = await fetchData("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52803")

  const { idMeal, strMeal, strMealThumb } = favMeal.meals[0];

  const fav3Section = document.getElementById("fav1");
  const section3 = document.createElement('section');
  section3.innerHTML = `
  <img src="${strMealThumb}" alt="${strMeal}" class="meal-image">
  <p>Name: ${strMeal}</p>
  <p>ID: ${idMeal}</p>
  <button class='moreInfo' mealId="${idMeal}">Click for more info</button>
  `;
  fav3Section.append(section3)

  section3.querySelector('.moreInfo').addEventListener('click', () => {
    clickForMore(idMeal);
  });
}
