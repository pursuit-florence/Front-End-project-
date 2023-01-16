
const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
const APP_ID = "9139ed0e";
const APP_key = "d2ef69b1ceb4fc798f8f29b901f7acc7";
const  section = document.querySelector("section")
const sections = document.querySelector("section.error-message")



searchForm.addEventListener("submit",(event) =>{
  event.preventDefault()
  let ingredient = event.target.ingredients.value
  console.log(ingredient)
  fetchApi(ingredient)
   searchForm.reset()
  
})

function fetchApi(ingredient){
   const BASE_URL = `https://api.edamam.com/search?q=${ingredient}&app_id=${APP_ID}&app_key=${APP_key}&to=100`
  
  fetch(BASE_URL)
  .then((response) => response.json())
  .then((data)=>{
    //console.log(data)
   getFoodIngredients(data.hits)
   
  })
  .catch((error) =>{
    const message = createErrorMessage(error);
    sections.style.display = "block";
    
  })
}
 fetchApi("ingredient")


 function createErrorMessage(message) {
  // creating error section
  
  sections.innerHTML = `
      <p>There was an error!</p>
      <p class="message">${message}</p>
    `;
  return sections;
}


function getFoodIngredients(results){
  let recipe = "";
  results.map(result=> {
    recipe += 
   
    `
    <div class="item">
        <img src= ${result.recipe.image}
         alt="">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-button" href="${result.recipe.url}" target="_blank">view recipe</a>
      </div>
      <p class="item-data">Calories:${result.recipe.calories.toFixed(2)}</p>
      <p class="item-data">Diet Label:${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels:"No Data found" }</p>
      <p class="item-data">Health Label:${result.recipe.healthLabels}</p>
    </div>
    `
  
  })
  searchResultDiv.innerHTML = recipe
 
  }


