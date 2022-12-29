const offset = 0
const limit = 10

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


fetch(url)

.then((reponse) => reponse.json())
.then((jsonBody)=> jsonBody.results)
.then((pokemons) => {
  debugger
console.log(pokemons)})
.catch((error) => console.error(error))