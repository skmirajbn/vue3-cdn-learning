<template>
  <div class="contact-details">
    <h1>Cotnact Details</h1>
    <h3>Name: {{ name }}</h3>
    <h3>Mobile: {{ mobile }}</h3>
    <h3>Website: {{ website }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    website: String,
    mobile: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.contact-details {
  border: 1px solid black;
  padding: 10px;
  background-color: rgb(230, 230, 230);
}
</style>
