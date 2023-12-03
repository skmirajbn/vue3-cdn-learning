<template>
  <header>
    <h2>{{ msg }}</h2>
  </header>

  <div>
    <input type="text" placeholder="Enter your name" ref="nameInput" />
    <the-comment heading="This is the heading from props"></the-comment>
  </div>
</template>

<script>
import TheComment from "./TheComment.vue";

export default {
  data() {
    return {
      msg: "Hello World",
    };
  },
  mounted() {
    console.log(this.$refs.nameInput);
  },
  components: {
    TheComment,
  },
};
</script>

<style scoped></style>
