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
    handleCardClick(e) {
      console.log(e);
      console.log("card clicked");
    },
    handleViewClick(e) {
      console.log(e);
      console.log("view clicked");
    },
  },
});

app.mount("#app");
