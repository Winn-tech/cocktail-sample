  const searchByNameUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const container = document.querySelector('.cocktail-list')
const input = document.querySelector('#search-input')
const button = document.getElementById('submit')

button.addEventListener('click', getData)

window.addEventListener('load', getData)


 function getData(e){
   e.preventDefault()
   let inputValue = input.value
   console.log(inputValue);

    container.innerHTML = ''
   // fetch
   if (inputValue) {
      fetch(`${searchByNameUrl}${inputValue}`)
   .then(
      // resp => console.log(resp)
      resp =>{
        if (resp.ok === true) {
          return resp.json()
        }
        else{
          console.log('The API IS BAD');
          
        }
      }
   )
   .then(   
     data=>{
      // console.log(data.drinks);
      let drinks = data.drinks
      for (let index = 0; index < drinks.length; index++) {
         // console.log(drinks[index]);
        let singleDrink = drinks[index]
        const article = document.createElement('article')
         article.innerHTML = `
            <div class="image">
               <img src='${singleDrink.strDrinkThumb}' />
            </div>
            <div class="description">
               <h4>${singleDrink.strDrink}</h4>
               <div class="sub">
                  <p>Category :</p> <p>${singleDrink.strCategory}</p>
               </div>
                <a href='details.html'>
                            <button>
                              More Details 
                            </button>
               </a>
            </div>
         `
         
        container.appendChild(article)
      }
      
     }
     
   )
   input.value = ''
    
   }
   else{
     inputValue = 'a'
     fetch(`${searchByNameUrl}${inputValue}`)
   .then(
      // resp => console.log(resp)
      resp =>{
        if (resp.ok === true) {
          return resp.json()
        }
        else{
          console.log('The API IS BAD');
          
        }
      }
   )
   .then(   
     data=>{
      // console.log(data.drinks);
      let drinks = data.drinks
      for (let index = 0; index < drinks.length; index++) {
         // console.log(drinks[index]);
        let singleDrink = drinks[index]
        const article = document.createElement('article')
         article.innerHTML = `
            <div class="image">
               <img src='${singleDrink.strDrinkThumb}' />
            </div>
            <div class="description">
               <h4>${singleDrink.strDrink}</h4>
               <div class="sub">
                  <p>Category :</p> <p>${singleDrink.strCategory}</p>
               </div>
                <a href='details.html'>
                            <button class='btn'>
                              More Details 
                            </button>
               </a>
            </div>
         `
         
        container.appendChild(article)
      }
      
     }
     
   )
   input.value = ''
   }
   
}


const singleDrinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const singleContainer = document.querySelector('#single')

container.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn')) {
    e.preventDefault()
    fetch(`${singleDrinkUrl}11007`)
    .then(
      resp =>{
        if (resp.ok === true) {
          return resp.json()
        }
      }
    )
    .then(
      data => {
        const result = data.drinks[0]
        console.log(result);

        const div = document.createElement('div')
  
        div.innerHTML = `
          <div class=image>
             <img src='${result.strDrinkThumb}'/>
          </div>
          <h1>hello</h1>
        `
        console.log(div);
        console.log(singleContainer);
        
        
        
        
      }
    
    
    )
    
    
  }
});




























// const container = document.querySelector('.cocktail-list')
// fetch(`${searchByNameUrl}a`)
//   .then(
//     // response => console.log(response)
//        response => response.json()
//   )
//   .then (
//     data =>{
//       //  console.log(data.drinks)
//       for (let i = 0; i < data.drinks.length; i++) {
//         const drink = data.drinks[i];
//         console.log(drink.strDrink);
        
//         const article = document.createElement('div')
     
//       article.innerHTML = 
//       `  <h3>${drink.strDrink}</h3>
//       `
//       container.appendChild(article)
//     }

//     }
      
    
//   )
//   .catch(error => {
//     console.error('Fetch error:', error);
//   });
  