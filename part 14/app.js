let app = Vue.createApp({
  data() {
    return {
      aboutMe: {
        name: "Sk Miraj",
        nickname: "Sk",
        age: 24,
        skills: ["HTML", "CSS", "JS", "VueJs"],
        website: "https://skmiraj.online",
      },
      skills: [
        { name: "HTML", experience: 10 },
        { name: "CSS", experience: 5 },
        { name: "JS", experience: 10 },
        { name: "VueJs", experience: 10 },
      ],
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
