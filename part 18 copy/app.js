var app = Vue.createApp({
  data() {
    return {};
  },

  computed: {},

  methods: {},

  watch: {},
});
app.component("contact-details", {
  data() {
    return {
      name: "Sk Miraj",
    };
  },
  template: `<div>
  Name: {{name}}
  Phone: 035151
  Email: 6kK9H@example.com
  </div>`,
});
app.mount("#app");
