//using querySelector as button name is a class
document.querySelector('.get-jokes').addEventListener('click', getJokesFromAPI);
let jokeData = [];
function getJokesFromAPI(e) {
  console.log('API content here')

  const numberOfJokes = document.getElementById('numberOfJokes');
  //console.log(numberOfJokes.value);
  const endpoint = `https://api.icndb.com/jokes/random/${numberOfJokes.value}`
  
  console.log(endpoint);
  
  // fetch(endpoint) 
  //   .then(function(res) {
  //     return res.json();
  //   })
  //   .then(function(data) {
  //     console.log(data);
  // })
  // e.preventDefault();

  fetch(endpoint) 
    .then(res =>res.json())
    .then(data => console.log(data))
  e.preventDefault();

}