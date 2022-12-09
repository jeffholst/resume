<template>
  <SwitchGroup as="div" class="flex items-center">
    <Switch
      v-model="animationOn"
      :class="[
        animationOn ? 'bg-indigo-600' : 'bg-gray-200',
        'relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
      ]"
    >
      <span
        :class="[
          animationOn ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        ]"
        style="margin-top: 1px; margin-left: 3px"
      >
        <span
          :class="[
            animationOn
              ? 'opacity-0 ease-out duration-100'
              : 'opacity-100 ease-in duration-200',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          ]"
          aria-hidden="true"
        >
          <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span
          :class="[
            animationOn
              ? 'opacity-100 ease-in duration-200'
              : 'opacity-0 ease-out duration-100',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          ]"
          aria-hidden="true"
        >
          <svg
            class="h-3 w-3 text-indigo-600"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
            />
          </svg>
        </span>
      </span>
    </Switch>
    <SwitchLabel as="span" class="ml-3">
      <span class="text-sm font-medium">Animation</span>
    </SwitchLabel>
  </SwitchGroup>
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
import { ref, onMounted, watch } from "vue"
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue"
import resume from "../resume.json"

const animationOn = ref(true)

const showNames = ref(false)
let intervalId
onMounted(() => {
  startAnimation()
})

watch(animationOn, (newValue) => {
  if (newValue) {
    startAnimation()
  } else {
    clearInterval(intervalId)
  }
})

const animate = (id) => {
  if (animationOn.value) {
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
  intervalId = setInterval(function () {
    const random = pickRandomNumber(resume.skills.length)
    animate(resume.skills[random].id)
  }, 500)
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
