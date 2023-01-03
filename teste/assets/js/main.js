

function convertPokemonHtml(pokemon) {
    return `

    <li class="pokemon ${pokemon.type}">
        <span class="number">${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
            </ol>

            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>    
    </li>


  `
}

const pokemonList = document.getElementById('pokemonlist')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(convertPokemonHtml).join('')
  })

/*  o codigo acima é uma forma simplificada deste abaixo

      const listItens = []

      for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItens.push(convertPokemonHtml(pokemon))
    }  

    console.log(listItens)
 */
  