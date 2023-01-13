const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
const APP_ID = "9139ed0e";
const APP_key = "d2ef69b1ceb4fc798f8f29b901f7acc7";

const section = 

searchForm.addEventListener("submit",(event) =>{
  event.preventDefault()
  let ingredient = event.target.ingredients.value
  console.log(ingredient)
  fetchApi(ingredient)
  // searchForm.reset()
  
})

function fetchApi(ingredient){
   const BASE_URL = `https://api.edamam.com/search?q=${ingredient}&app_id=${APP_ID}&app_key=${APP_key}&to=100`
  
  fetch(BASE_URL)
  .then((response) => response.json())
  .then((data)=>{
     console.log(data)
   getFoodIngredients(data.hits)
  })
  .catch((error) =>{
    console.log(error)
    // createErrorMeassage(error)
  })
  
}
fetchApi("ingredient")

function getFoodIngredients(results){

}