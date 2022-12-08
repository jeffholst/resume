<template>
  <div class="grid trid-cols-1 md:grid-cols-2">
    <div>
      <img class="picFrame rounded-lg" :src="props.imageUrl" alt="" />
    </div>
    <div>
      <h1>{{ props.name }}</h1>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  imageUrl: String,
})
</script>

<style scoped>
.picFrame {
  border-width: 2px;
  border-color: black;
}
:root.dark .picFrame {
  border-width: 2px;
  border-color: white;
}
</style>
