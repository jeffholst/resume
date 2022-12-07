<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="skill" v-for="skill in resume.skills" :key="skill.id">
      <div v-show="isActive" class="text-center">{{ skill.name }}</div>
      <svg
        viewBox="0 0 128 128"
        class="fill-color"
        v-html="skill.display"
      ></svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import resume from "../resume.json"

const isActive = ref(false)
</script>

<style scoped>
.fill-color {
  fill: gray;
}

:root.dark .fill-color {
  fill: #60be86;
}

@keyframes wobble {
  16.65% {
    -webkit-transform: skew(-12deg);
    transform: skew(-12deg);
  }
  33.3% {
    -webkit-transform: skew(10deg);
    transform: skew(10deg);
  }
  49.95% {
    -webkit-transform: skew(-6deg);
    transform: skew(-6deg);
  }
  66.6% {
    -webkit-transform: skew(4deg);
    transform: skew(4deg);
  }
  83.25% {
    -webkit-transform: skew(-2deg);
    transform: skew(-2deg);
  }
  100% {
    -webkit-transform: skew(0);
    transform: skew(0);
  }
}

.fill-color:hover {
  -webkit-animation-name: wobble;
  animation-name: wobble;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

:root.dark .fill-color:hover {
  -webkit-animation-name: wobble;
  animation-name: wobble;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
</style>
