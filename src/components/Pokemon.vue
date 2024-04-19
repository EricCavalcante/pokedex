<script setup>
const props = defineProps(["name", "src", "tipo1", "tipo2"]);
</script>


<template>
  <div class="col-sm-12 col-md-6 col-lg-3 poke">
    <div class="card m-4">
      <h1 class="text-center">{{ name }}</h1>
      <img class="card" :src="src" />
      <p>{{ tipo1 }}</p>
      <p>{{ tipo2 }}</p>
    </div>
  </div>
</template>

<style scoped>
.poke {
  cursor: pointer;
}
</style>