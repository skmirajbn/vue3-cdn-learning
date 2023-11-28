let app = Vue.createApp({
  data() {
    return {
      mobile: "",
      name: {
        firstName: "",
        lastName: "",
      },
    };
  },
  watch: {
    mobile(newValue, oldvalue) {
      console.log(newValue);
      if (isNaN(newValue)) {
        alert("Enter Valid mobile number");
        this.mobile = oldvalue;
      }
      if (newValue.length == 11) {
        alert("An Otp sent");
      }
    },

    "name.firstName": function (newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    },
    "name.lastName": function (newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    },
    name: {
      deep: true,
      handler(newValue, oldValue) {
        console.log(newValue);
        console.log(oldValue);
      },
    },
  },
  methods: {},
});

app.mount("#app");
