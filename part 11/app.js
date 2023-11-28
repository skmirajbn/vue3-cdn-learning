let app = Vue.createApp({
  data() {
    return {
      skills: ["HTML", "CSS", "JS", "VueJs"],
      newSkill: "",
    };
  },
  methods: {
    addSkill() {
      this.skills.push(this.newSkill);
      this.newSkill = "";
    },
  },
});

app.mount("#app");
