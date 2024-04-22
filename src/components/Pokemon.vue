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
  document.body.classList.add('modal-aberto');
}

function fechaModal() {
  abrirModal.value = false;
  document.body.classList.remove('modal-aberto')
}
</script>


<template>
  <!--CARD-->
  <div class="col-sm-12 col-md-6 col-lg-3">
    <div class="card m-4">
      <h1 class="text-center">{{ name }}</h1>
      <img class="card" :src="frente" />
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
        <img class="img_poke" :src="frente" :alt="name" />
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

<style >
.info-fundo {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.info {
  background-color: #28282B;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}



.principal {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.img_poke{
  width: 10rem;
}

.conteudo {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 4rem;
}

.modal-aberto {
  overflow: hidden;
}

@media screen and (max-width: 1000px) {
  .info-fundo{
    overflow: auto;
  }
  
  .info{
    width: auto;
  }

  .conteudo{
    flex-direction: column;
  }

  .principal{
    display: flex;
    flex-direction: column;
  }
}

</style>