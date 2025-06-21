const input = document.getElementById('search-input');
const submitButton = document.getElementById("submit")
const container = document.querySelector('.cocktail-list');
const cocktailData = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="


const fetchData = (e)=>{
  // prevent the default form submission
  e.preventDefault()

  // get the value from the input field
  const inputValue = input.value

  container.innerHTML = '';
  // fetch the cocktail data using the input value
  fetch(`${cocktailData}${inputValue || 'a' }`)

  .then(
     (response)=>{
        return response.json()
     }
  )
  .then(
    (data)=>{
      console.log(data);
      

      const cocktails = data.drinks;
      for (let index = 0; index < cocktails.length; index++) {
        const singleDrinks = cocktails[index];
        console.log(singleDrinks);

        // create an article element to display the cocktail
        const article = document.createElement('article');
        article.innerHTML = `
          <div class="image">
          <img src='${singleDrinks.strDrinkThumb}' alt='${singleDrinks.trDrink}' >
        </div>
        <div class="description">
          <h2>${singleDrinks.strDrink}</h2>
          <div class="sub">
            <p>Category :</p> <p>${singleDrinks.strCategory}</p>
          </div>
          <div class="sub">
            <p>Serving glass :</p> <p>${singleDrinks.strGlass}</p>
          </div>
        </div>
         
        `
        container.appendChild(article);
        input.value = '';
        
      }
          
      
    }
  )
 
 
  
  
}
submitButton.addEventListener('click', fetchData)

window.addEventListener('load', fetchData)





  
  
