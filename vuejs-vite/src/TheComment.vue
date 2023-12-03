<template>
  <div>
    <h3>{{ heading }}</h3>
    <div>
      <input type="text" />
      <button>Submit</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  heading: String,
});
</script>

<style scoped></style>
