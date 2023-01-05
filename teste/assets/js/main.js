const pokemonList = document.getElementById('pokemonlist')
const loadMoreButton = document.getElementById('loadMore')
const clearPage = document.getElementById ('clearPage')
let limit = 16
let offset = 0
const maxRecords = 151

const newLi = pokemonList;



/*  o codigo acima é uma forma simplificada deste abaixo

      const listItens = []

      for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItens.push(convertPokemonHtml(pokemon))
    }  

    console.log(listItens)
 */
  

    function loadPokemonItens(offset, limit) {
      pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
          <li class="pokemon ${pokemon.type}">
              <span class="number">${pokemon.number}</span>
              <span class="name">${pokemon.name}</span>
      
              <div class="detail">
                  <ol class="types">
                      ${pokemon.types.map((type) => `<li class=" type ${type}">${type}</li>`).join('')}
                  </ol>
      
                  <img src="${pokemon.photo}" alt="${pokemon.name}">
              </div>    
          </li>
        `).join('')
        pokemonList.innerHTML = newHtml
        
    })
  }

loadPokemonItens(offset, limit)

  loadMoreButton.addEventListener('click', () =>{
    limit = 10 + limit
    offset = 0

    const qtdRecord = offset + limit

    if (qtdRecord >= maxRecords){
      const newLimit = maxRecords 
      loadPokemonItens(offset, newLimit)

      loadMoreButton.parentElement.removeChild(loadMoreButton)

    } else {
      loadPokemonItens(offset, limit)}
      
  });

    clearPage.addEventListener('click', () =>{
      limit = 16

      if ( offset <= limit) { 
        offset = 0
         loadPokemonItens(offset, limit);
        
    }});