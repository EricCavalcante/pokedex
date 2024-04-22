import axios from 'axios';

export async function pokemonList() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar a lista de Pokémon: ', error);
    return [];
  }
}

export async function pegaDetalhesPokemon(url){
  const resposta = await axios.get(url)
  return resposta.data;
}