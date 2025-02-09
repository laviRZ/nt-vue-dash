<template>
  <div class="container mx-auto p-4">
    <div class="text-center">
      <h1 class="text-6xl font-bold mb-4">{{ count }}</h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="increment">
        Increment
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
}
</script>
