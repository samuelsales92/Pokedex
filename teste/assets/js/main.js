const pokemonList = document.getElementById('pokemonlist')
const loadMoreButton = document.getElementById('loadMore')
const clearPage = document.getElementById ('clearPage')
let limit = 12
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

    <div class="flip-box">
          <div class="flip-box-inner">
    <div class="flip-box-back">
          <span class = "atack-back">HP:&nbsp;${pokemon.stat}
            <span class = "atack-back">Atack:&nbsp;${pokemon.atack}
            </span>
          </span>
            <img class = "img-back"src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
        
        
    <div class="flip-box-front">
        <li class="pokemon ${pokemon.type}">
              <span class="number">${pokemon.number}</span>
              <span class="name">${pokemon.name}</span>
      
              <div class="detail">
                  <ol class="types">
                      ${pokemon.types.map((type) => `<li class=" type ${type}">${type}</li>`).join('')}
                  </ol>
      
                  <img src="${pokemon.photo}" alt="${pokemon.name}">
                  </div>
              </div> 
            </div> 
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
      limit = 12

      if ( offset <= limit) { 
        offset = 0
         loadPokemonItens(offset, limit);
        
    }});