<template>
  <div>
    <h1>{{ message }}</h1>
    <contact-details name="Sk Miraj" mobile="01700 000 000" website="www.skmiraj.com"></contact-details>
  </div>
</template>

<script>
import ContactDetails from "./ContactDetails.vue";
export default {
  data() {
    return {
      message: "Welcome to vue3 Learning",
    };
  },
  methods: {},
  components: {
    ContactDetails,
  },
};
</script>
