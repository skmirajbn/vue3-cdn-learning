<template>
  <div>
    <h3>{{ heading }}</h3>
    <div>
      <input type="text" v-model="inputValue" />
      <button>Submit</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  heading: String,
});

const inputValue = ref("");
</script>

<style scoped></style>
