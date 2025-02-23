<template>
  <div class="container" :class="{ disconnected: !connected }">
    <h2>Reef Tracker</h2>
    <div v-for="(face, faceName) in reefState" :key="faceName" class="face">
      <h3>{{ faceName }}</h3>
      <div v-for="(level, levelName) in face" :key="levelName" class="level">
        <h4>{{ levelName }}</h4>
        <div class="sides">
          <button
            v-for="(state, sideName) in level"
            :key="sideName"
            :class="{ active: state }"
            @click="toggleState(faceName, levelName, sideName)"
          >
            {{ sideName }}: {{ state ? 'ON' : 'OFF' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { NetworkTables, NetworkTablesTypeInfos } from 'ntcore-ts-client';
import DashboardTopic from './DashboardTopic';

const nt = NetworkTables.getInstanceByURI("localhost", 5810);
const connected = ref(false);


const faces = ['A', 'B', 'C', 'D', 'E', 'F'] as const;
const levels = ['L1', 'L2', 'L3', 'L4'] as const;
const sides = ['LEFT', 'RIGHT'] as const;

type Face = typeof faces[number];
type Level = typeof levels[number];
type Side = typeof sides[number];

type ReefState = Record<Face, Record<Level, Record<Side, boolean>>>;
type ReefTopics = Record<Face, Record<Level, Record<Side, DashboardTopic<boolean>>>>;

const emptyReef: ReefState = faces.reduce((reefAcc, face) => {
  reefAcc[face] = levels.reduce((levelAcc, level) => {
    levelAcc[level] = sides.reduce((sideAcc, side) => {
      sideAcc[side] = false; // default value
      return sideAcc;
    }, {} as Record<Side, boolean>);
    return levelAcc;
  }, {} as Record<Level, Record<Side, boolean>>);
  return reefAcc;
}, {} as ReefState);

const reefState = reactive<ReefState>(emptyReef);
const reefTopics = reactive<ReefTopics>(faces.reduce((reefAcc, face) => {
  reefAcc[face] = levels.reduce((levelAcc, level) => {
    levelAcc[level] = sides.reduce((sideAcc, side) => {
      sideAcc[side] = new DashboardTopic<boolean>(nt, `Reef/${face}/${level}/${side}`, NetworkTablesTypeInfos.kBoolean, false, (val) => {
        reefState[face][level][side] = val;
      });
      return sideAcc;
    }, {} as Record<Side, DashboardTopic<boolean>>);
    return levelAcc;
  }, {} as Record<Level, Record<Side, DashboardTopic<boolean>>>);
  return reefAcc;
}, {} as ReefTopics));

onMounted(() => {
  nt.addRobotConnectionListener((_connected: boolean) => {
    connected.value = _connected;
    console.log(_connected ? "Connected to NT server on localhost" : "Disconnected from NT server on localhost");
  }, false);
});

const toggleState = (face: Face, level: Level, side: Side) => {
  reefTopics[face][level][side].update(!reefState[face][level][side]);
};
</script>

<style scoped>
.container {
  width: 100%;
  padding: 1rem;
  background-color: #f9f9f9;
}

.disconnected {
  background-color: #ffcccc;
}

.face {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 1rem 0;
  padding: 0.5rem;
}

.level {
  margin: 0.5rem 0;
}

.sides button {
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.sides button.active {
  background-color: #4caf50;
  color: white;
}

.sides button:not(.active) {
  background-color: #f44336;
  color: white;
}
</style>
