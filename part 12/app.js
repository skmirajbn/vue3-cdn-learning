let app = Vue.createApp({
  data() {
    return {
      skills: [
        { name: "HTML", experience: 10 },
        { name: "CSS", experience: 5 },
        { name: "JS", experience: 10 },
        { name: "VueJs", experience: 10 },
      ],
      newSkill: { name: "", experience: 0 },
    };
  },
  methods: {
    addSkill() {
      this.skills.push(this.newSkill);
      this.newSkill = "";
    },
    removeSkill(index) {
      this.skills.splice(index, 1);
    },
  },
});

app.mount("#app");
