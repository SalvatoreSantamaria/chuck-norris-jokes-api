//using querySelector as button name is a class
document.querySelector('.get-jokes').addEventListener('click', getJokesFromAPI);
let jokeData = [];
function getJokesFromAPI(e) {
  //console.log('API content here')

  const numberOfJokes = document.getElementById('numberOfJokes');
  //console.log(numberOfJokes.value);
  const endpoint = `https://api.icndb.com/jokes/random/${numberOfJokes.value}`
  
  console.log(endpoint);
  
  //without arrow functions
  // fetch(endpoint) 
  //   .then(function(res) {
  //     return res.json();
  //   })
  //   .then(function(data) {
  //     console.log(data);
  // })
  // e.preventDefault();
  let output = '';

  //with arrow functions
  fetch(endpoint)
    .then(res => res.json())
    //.then(data => console.log(data))
     .then(function(data) {
       if (data.type === 'success') {
         data.value.forEach(function(param){
           output += `<li>${param.joke}</li>`
        })
       }
       document.querySelector('.jokes').innerHTML = output;
    })
    .catch(function(err) {
    console.warn(`There is an error fetching data! ERROR: ${err}`)
  })
  e.preventDefault();

}