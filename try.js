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
    const divItem = document.createElement("div");
  div.setAttribute("class","item");
  section.append(divItem);
  
  const img = document.createElement("img")
  img.setAttribute("src",`${results.recipe.image}`);
  img.setAttribute("alt","food");
  img.setAttribute("class","item");
  section.append(img)
  
  const divClass = document.createElement("div")
  divClass.setAttribute("class","flex-container")
  section.append(divClass)
  
  const h1 = document.createElement("h1")
  h1.setAttribute("class","title")
  h1.setAttribute("class","flex-container")
  
  const aTag = document.createElement("a")
  aTag.setAttribute("href",`${results.recipe.url}"target="_blank"`)
  aTag.textContent = "view recipe"}