(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const r=async(s,n={})=>{try{const e=await fetch(s,n);if(!e.ok)throw new Error(`Error: ${e.status} - ${e.statusText}`);return await e.json()}catch(e){throw console.warn("Error fetching data:",e.message),e}},d=async()=>{const n=(await r("https://www.themealdb.com/api/json/v1/1/list.php?a=list")).meals.slice(0,4),e=document.querySelector(".dropdown-menu");n.forEach(a=>{const t=document.createElement("li");t.textContent=a.strArea,e.append(t)})},u=async s=>{const n=await r(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${s}`),e=document.getElementById("mealList");e.innerHTML="",n.meals.forEach(a=>{const{idMeal:t,strMeal:o,strMealThumb:c}=a,m=document.createElement("section"),l=`
    <div class='eachRender'>
    <img src="${c}" alt="${o}" class="meal-image">
    <p>Name: ${o}</p>
    <p>ID: ${t}</p>
    <button class='moreInfo' mealId="${t}">Click for more info</button>
    </div>
    `;m.innerHTML=l,e.append(m)})},p=async s=>{const n=document.querySelector("#oneMeal");n.innerHTML="";for(let e=0;e<s;e++){const a=await r("https://www.themealdb.com/api/json/v1/1/random.php"),{idMeal:t,strMeal:o,strMealThumb:c}=a.meals[0],m=document.querySelector("#oneMeal"),l=document.createElement("div");l.innerHTML=`
    <div class='eachRender'>
      <img src="${c}" alt="Image of Food" class="meal-image">
      <p>${o}</p>
      <button class='moreInfo' mealId="${t}">Click for more info</button>
      </div>
    `,m.append(l),l.querySelector(".moreInfo").addEventListener("click",()=>{i(t)})}},i=async s=>{const n=await r(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${s}`),{strInstructions:e,...a}=n.meals[0],t=Object.keys(a).filter(c=>c.includes("strIngredient")).map(c=>a[c]),o=document.createElement("dialog");o.className="modal",o.innerHTML=`
    <p>How to Make:</p>
    <p>${e}</p>
    <p>Ingredients:</p>
    <p>${t.join(", ")}</p>
    <button class='close-button'>X</button>
  `,document.body.append(o),o.showModal()},f=async()=>{const s=await r("https://www.themealdb.com/api/json/v1/1/lookup.php?i=53016"),{idMeal:n,strMeal:e,strMealThumb:a}=s.meals[0],t=document.getElementById("fav1"),o=document.createElement("section");o.innerHTML=`
  <img src="${a}" alt="${e}" class="meal-image">
  <p>Name: ${e}</p>
  <p>ID: ${n}</p>
  <button class='moreInfo' mealId="${n}">Click for more info</button>
  `,t.append(o),o.querySelector(".moreInfo").addEventListener("click",()=>{i(n)})},h=async()=>{const s=await r("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52854"),{idMeal:n,strMeal:e,strMealThumb:a}=s.meals[0],t=document.getElementById("fav1"),o=document.createElement("section");o.innerHTML=`
  <img src="${a}" alt="${e}" class="meal-image">
  <p>Name: ${e}</p>
  <p>ID: ${n}</p>
  <button class='moreInfo' mealId="${n}">Click for more info</button>
  `,t.append(o),o.querySelector(".moreInfo").addEventListener("click",()=>{i(n)})},g=async()=>{const s=await r("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52803"),{idMeal:n,strMeal:e,strMealThumb:a}=s.meals[0],t=document.getElementById("fav1"),o=document.createElement("section");o.innerHTML=`
  <img src="${a}" alt="${e}" class="meal-image">
  <p>Name: ${e}</p>
  <p>ID: ${n}</p>
  <button class='moreInfo' mealId="${n}">Click for more info</button>
  `,t.append(o),o.querySelector(".moreInfo").addEventListener("click",()=>{i(n)})},M=s=>{const e=s.target.getAttribute("mealId");e&&i(e)},w=s=>{s&&s.preventDefault(),document.querySelector(".dropdown-menu").addEventListener("click",e=>{const a=e.target.textContent.trim();u(a)}),document.querySelector("#mealList").addEventListener("click",M),document.body.addEventListener("click",e=>{e.target.closest(".close-button")&&document.querySelector(".modal").remove()}),document.querySelector("#randomize button").addEventListener("click",async()=>{await p(3)}),d(),f(),h(),g()};w();
