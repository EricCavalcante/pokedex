<script setup>
import { defineProps, ref } from "vue";

const props = defineProps([
  "name",
  "frente",
  "costas",
  "frenteShiny",
  "costasShiny",
  "tipo1",
  "tipo2",
]);

let abrirModal = ref(false);
let pokemonSelecionado = ref(null);

function abreModal(pokemon) {
  pokemonSelecionado.value = pokemon;
  abrirModal.value = true;
}

function fechaModal() {
  abrirModal.value = false;
}
</script>


<template>
  <!--CARD-->
  <div class="col-sm-12 col-md-6 col-lg-3 poke">
    <div class="card m-4">
      <h1 class="text-center">{{ name }}</h1>
      <img class="card" :src="frente" />
      <p>{{ tipo1 }}</p>
      <p>{{ tipo2 }}</p>
      <button @click="abreModal" class="btn btn-primary">
        Mais informações
      </button>
    </div>
  </div>

  <!--MODAL-->
  <div v-if="abrirModal" class="info-fundo">
    <div class="info">
      <button class="btn btn-danger info-fechar" @click="fechaModal">X</button>
      <div class="principal">
        <h1>{{ name }}</h1>
        <img :src="frente" :alt="name" />
      </div>
      <div class="conteudo">
        <div>
          <h3>Sprites</h3>
          <img :src="frente" :alt="name" />
          <img :src="costas" :alt="name" />
        </div>
        <div>
          <h3>Shiny</h3>
          <img :src="frenteShiny" :alt="name" />
          <img :src="costasShiny" :alt="name" />
        </div>
        <div>
          <h4>Tipos</h4>
          <p>{{ tipo1 }}</p>
          <p>{{ tipo2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.poke {
  cursor: pointer;
}

.info-fundo {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.info {
  background-color: #28282B;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.principal {
  display: flex;
  justify-content: center;
  align-items: center;
}

.conteudo {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>