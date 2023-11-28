let app = Vue.createApp({
  data() {
    return {
      num: "",
      result: "",
    };
  },
  methods: {
    handleInput(e) {
      console.log(e);
      this.num = e.target.value;
    },
    getDouble() {
      this.result = this.num * 2;
    },
    getSquare() {
      this.result = this.num * this.num;
    },
    addTen() {
      this.result = this.num + 10;
    },
    reset() {
      this.num = "";
      this.result = "";
    },
  },
});

app.mount("#app");
