<script setup>
import TodoManager from './components/TodoManager.vue';
console.log(import.meta.env.VITE_BASE_URL);
console.log(import.meta.env.BASE_KEY);
</script>

<template>
  <div class="w-full">
    <!-- <ProductList /> -->
   <TodoManager/>
  </div>
</template>

<style scoped></style>
