<template>
  <div class="flex flex-row">
    <div>
      <button @click="toggle" class="ToggleSwitch" type="button" role="switch">
        <div :class="switchClasses">
          <slot v-if="switchOn" name="IconOn" />
          <slot v-else name="IconOff" />
        </div>
      </button>
    </div>
    <div class="pl-2">
      <slot v-if="switchOn" name="LabelOn" />
      <slot v-else name="LabelOff" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue"

const props = defineProps({
  switchOn: Boolean,
})

const emit = defineEmits(["callback"])

const switchOn = ref(false)

onMounted(() => {
  switchOn.value = props.switchOn
})

const switchClasses = computed(() => {
  return `icon ${switchOn.value ? "right" : "left"}`
})

const toggle = () => {
  switchOn.value = !switchOn.value
  emit("callback", switchOn.value)
}
</script>

<style scoped>
.ToggleSwitch {
  border-radius: 11px;
  width: 40px;
  height: 22px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-mute);
}

.ToggleSwitch:hover {
  border-color: var(--vp-c-gray);
}

.icon {
  top: -2px;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: var(--vp-c-white);
  box-shadow: var(--vp-shadow-1);
  transition: transform 0.25s;
}

.dark .icon {
  background-color: var(--vp-c-black);
}

.left {
}

.right {
  transform: translate(18px, 0px);
}
</style>
