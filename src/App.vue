<script setup>
import { computed, onMounted, ref, } from "vue";
import { pokemonList, pegaDetalhesPokemon } from "./api/index.js";
import Pokemon from "./components/Pokemon.vue";
import Navbar from "./components/Navbar.vue";
import Modal from "./components/Modal.vue";

let pokemons = ref([]);
let nomePokemon = ref("");
let pokemonsFiltrados = ref([]);
let filtroNome = ref("")
let frontSpriteUrl = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
);
let backSpriteUrl= ref("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/")
let frontShinyUrl = ref("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/")
let backShinyUrl = ref("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/")


function limparFiltros() {
  return (pokemonsFiltrados.value = pokemons.value);
}

async function filtrarPorTipo(tipo) {
  pokemonsFiltrados.value = pokemons.value.filter((pokemon) => {
    return pokemon.type.includes(tipo);
  });
}

function filtrarPorNome(nome){
  filtroNome.value = nome.toLowerCase()
  if (filtroNome.value === ''){
      pokemons.value
  } else {
    pokemonsFiltrados.value = pokemons.value.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(filtroNome.value)
    })
  }
}




onMounted(async () => {
  try {
    pokemons.value = await pokemonList();

    for (const pokemon of pokemons.value) {
      const detalhesPokemon = await pegaDetalhesPokemon(pokemon.url);
      pokemon.type = detalhesPokemon.types.map((type) => type.type.name);

      pokemon.type1 = pokemon.type[0] || "";

      pokemon.type2 = pokemon.type[1] || "";

      pokemonsFiltrados.value = pokemons.value;

      
    }
  } catch (error) {
    console.error("Erro ao buscar os Pokémon: ", error);
  }
});



</script>

<template>
  <Navbar />
  
  <div class="container text-center">
    <h1 class="display-1">Bem vindo a Pokedex!</h1>
    <p class="fs-3">
      Aqui você pode procurar todas as informações do seus pokemons favoritos!
    </p>

    <button @click="limparFiltros" class="btn btn-primary mb-4">
      Limpar filtros
    </button>

    <div class="mb-3">
      <label hidden for="pesquisarPokemonPorNome" class="form-label"
        >Pesquisar Pokémon</label
      >
      <input
        @input="filtrarPorNome(nomePokemon)"
        v-model="nomePokemon"
        type="text"
        class="form-control"
        id="pesquisarPokemonPorNome"
        placeholder="Pesquisar Pokémon"
      />
    </div>

    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filtrar por Tipo
      </button>
      <ul class="dropdown-menu">
        <li @click="filtrarPorTipo('normal')">
          <a class="dropdown-item" href="#">Normal</a>
        </li>
        <li @click="filtrarPorTipo('water')">
          <a class="dropdown-item" href="#">Água</a>
        </li>
        <li @click="filtrarPorTipo('fire')">
          <a class="dropdown-item" href="#">Fogo</a>
        </li>
        <li @click="filtrarPorTipo('grass')">
          <a class="dropdown-item" href="#">Grama</a>
        </li>
        <li @click="filtrarPorTipo('flying')">
          <a class="dropdown-item" href="#">Voador</a>
        </li>
        <li @click="filtrarPorTipo('fighting')">
          <a class="dropdown-item" href="#">Lutador</a>
        </li>
        <li @click="filtrarPorTipo('poison')">
          <a class="dropdown-item" href="#">Venenoso</a>
        </li>
        <li @click="filtrarPorTipo('electric')">
          <a class="dropdown-item" href="#">Elétrico</a>
        </li>
        <li @click="filtrarPorTipo('ground')">
          <a class="dropdown-item" href="#">Terra</a>
        </li>
        <li @click="filtrarPorTipo('rock')">
          <a class="dropdown-item" href="#">Pedra</a>
        </li>
        <li @click="filtrarPorTipo('psychic')">
          <a class="dropdown-item" href="#">Psíquico</a>
        </li>
        <li @click="filtrarPorTipo('ice')">
          <a class="dropdown-item" href="#">Gelo</a>
        </li>
        <li @click="filtrarPorTipo('bug')">
          <a class="dropdown-item" href="#">Inseto</a>
        </li>
        <li @click="filtrarPorTipo('ghost')">
          <a class="dropdown-item" href="#">Fantasma</a>
        </li>
        <li @click="filtrarPorTipo('steel')">
          <a class="dropdown-item" href="#">Aço</a>
        </li>
        <li @click="filtrarPorTipo('dragon')">
          <a class="dropdown-item" href="#">Dragão</a>
        </li>
        <li @click="filtrarPorTipo('dark')">
          <a class="dropdown-item" href="#">Sombrio</a>
        </li>
        <li @click="filtrarPorTipo('fairy')">
          <a class="dropdown-item" href="#">Fada</a>
        </li>
      </ul>
    </div>

    <div class="row">
      <Pokemon
        v-for="pokemon in pokemonsFiltrados"
        :key="pokemon.id"
        :name="pokemon.name"
        :frente="frontSpriteUrl + pokemon.url.split('/')[6] + '.png'"
        :costas="backSpriteUrl + pokemon.url.split('/')[6] + '.png'"
        :frenteShiny="frontShinyUrl + pokemon.url.split('/')[6] + '.png'"
        :costasShiny="backShinyUrl + pokemon.url.split('/')[6] + '.png'"
        :tipo1="pokemon.type1"
        :tipo2="pokemon.type2"
      />
      
    </div>
  </div>
</template>