let app = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  methods: {
    handleKeyup(e) {
      console.log(e.target.value);
      this.name = e.target.value;
    },
    handleFormSubmit(e) {
      console.log(e);
    },
  },
});

app.mount("#app");
