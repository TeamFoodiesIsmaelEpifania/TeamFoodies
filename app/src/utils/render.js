import { fetchData } from "./utils";

export const region = async() => {
  const eachRegion = await fetchData('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  console.log(eachRegion)
}

export const selectedRegion = async(area) => {
  const oneRegion = await fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
  
  console.log(oneRegion)
}