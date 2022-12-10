<template>
  <ToggleSwitch
    :initialState="props.animationOn"
    textOn="Animation On"
    textOff="Animation Off"
    switchOnColor="#60be86"
    switchOffColor="#cccccc"
    @switchOn="startAnimation"
    @switchOff="stopAnimation"
  />
  <div class="grid grid-cols-6 md:grid-cols-8 gap-4 pt-3">
    <div v-for="skill in resume.skills" :key="skill.id">
      <div v-show="showNames" class="text-center">{{ skill.name }}</div>
      <svg
        :id="getSkillId(skill.id)"
        @mouseover="animate(skill.id)"
        viewBox="0 0 128 128"
        class="fill-color"
        v-html="skill.display"
      ></svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import resume from "../resume.json"
import ToggleSwitch from "../components/toggle-switch.vue"

const props = defineProps({
  animationOn: Boolean,
})

let intervalId
const animateSkills = ref(false)

onMounted(() => {
  animateSkills.value = props.animationOn
})

const showNames = ref(false)

const animate = (id) => {
  if (animateSkills.value) {
    const skillId = getSkillId(id)
    const skillElement = document.getElementById(skillId)
    skillElement.classList.add("wobble-effect")
    setTimeout(() => {
      skillElement.classList.remove("wobble-effect")
    }, "1000")
  }
}

const getSkillId = (id) => {
  return `skill_${id}`
}

const pickRandomNumber = (length) => {
  return Math.floor(Math.random() * length)
}

const startAnimation = () => {
  animateSkills.value = true
  intervalId = setInterval(function () {
    const random = pickRandomNumber(resume.skills.length)
    animate(resume.skills[random].id)
  }, 400)
}

const stopAnimation = () => {
  animateSkills.value = false
  clearInterval(intervalId)
}
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

.wobble-effect {
  -webkit-animation-name: wobble;
  animation-name: wobble;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

:root.dark .wobble-effect {
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
