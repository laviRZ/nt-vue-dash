<template>
  <div class="container mx-auto p-4">
    <div class="text-center" style="display: block;" :class="textClass">
      <h1 class="text-6xl font-bold mb-4">{{ count }}</h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="increment">
        Increment
      </button>
    </div>
   
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { NetworkTables, NetworkTablesTopic, NetworkTablesTypeInfos, type NetworkTablesTypeInfo, type NetworkTablesTypes } from 'ntcore-ts-client';
import Polygon from './components/Polygon.vue';
import DashboardTopic from './DashboardTopic';

type Level = {
  left: boolean;
  right: boolean;
};

type Face = {
  L1: Level;
  L2: Level;
  L3: Level;
  L4: Level;
};

type Reef = {
  face1: Face;
  face2: Face;
  face3: Face;
  face4: Face;
  face5: Face;
  face6: Face;
};




let nt: NetworkTables;
const count = ref(0);
const textClass = ref("");
let counterTopic: DashboardTopic<number> | null = null;
const increment = () => {
  count.value++;
  updateCounter();
}

const updateCounter = () => {
  counterTopic?.update(count.value);
}

onMounted(() => {
  nt = NetworkTables.getInstanceByURI("localhost", 5810);

  nt.addRobotConnectionListener((connected: boolean) => {
    if (connected) {
      console.log("Connected to NT server on localhost");
      textClass.value = "text-green-500";
    } else {
      console.log("Disconnected from NT server on localhost");
      textClass.value = "text-red-500";
    }
  }, false);

  counterTopic = new DashboardTopic<number>(nt, "counter", NetworkTablesTypeInfos.kDouble, count.value, val => {
    count.value = val;
  });

});
</script>



<style scoped>
.text-green-500 {
  color: green;
}
.text-red-500 {
  color: red;
}
svg {
  height: 80vh;
  width: 80vh;
  margin: 0 auto;
  display: block;
}



.l1 {
  fill: aquamarine;
}

.l2 {
  fill: blue;
}

svg polygon {
  outline: none; /* Removes focus outline */
  -webkit-tap-highlight-color: transparent; /* Removes touch highlight on mobile */
}

svg {
  user-select: none;
  -webkit-user-select: none; /* Prevents text selection on touch */
  -webkit-touch-callout: none; /* Disables callout on long press */
}
</style>