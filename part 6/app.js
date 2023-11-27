let app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment(amount) {
      this.count += amount;
    },
    decrement(amount) {
      this.count -= amount;
    },
    test(e) {
      console.log(e);
    },
  },
});

app.mount("#app");
