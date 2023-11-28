let app = Vue.createApp({
  data() {
    return {
      firstName: "",
      lastName: "",
      fullName: "",
    };
  },
  watch: {
    firstName(newValue) {
      this.fullName = newValue + " " + this.lastName;
    },
    lastName(newValue) {
      this.fullName = this.firstName + " " + newValue;
    },
  },
  computed: {},
  methods: {},
});

app.mount("#app");
