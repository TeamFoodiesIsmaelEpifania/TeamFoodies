import { fetchData } from "./utils";

export const region = async () => {
  const eachRegion = await fetchData('https://www.themealdb.com/api/json/v1/1/list.php?a=list');

  const fiveRegions = eachRegion.meals.slice(0, 4)

  const listOfRegions = document.querySelector('.dropdown-menu')

  const handleLiClick = async (selectedRegionCallback, regionName) => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${regionName}`;
    try {
      const regionData = await fetchData(apiUrl);
      console.log('Selected region Meals:', regionData.meals);
      // Call the callback function with the region name
      selectedRegionCallback(regionName);
    } catch (error) {
      console.error('Error fetching region data:', error);
    }
  };
  
  fiveRegions.forEach(region => {
    const li = document.createElement('li');

    li.textContent = region.strArea;

    listOfRegions.append(li)

    li.addEventListener('click', () => {
      handleLiClick(selectedRegion, region.strArea);
    });
  });
};

export const selectedRegion = async (area) => {
  const oneRegion = await fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);

  const mealListContainer = document.getElementById('mealList');
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
