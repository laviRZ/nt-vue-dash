<template>
<polygon :points="points" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{
  points: string;
}>();

onMounted(() => {
  console.log(props.points);
});
</script>

<style scoped>
polygon {
  fill: rgb(0, 123, 255);
  stroke: #1d1d1b;
  stroke-miterlimit: 10;
  cursor: pointer;
  transition: opacity 0.3s;
}

polygon:hover {
  opacity: 0.7;
}

polygon:active {
  opacity: 0.5;
}
</style>
