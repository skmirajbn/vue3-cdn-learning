let app = Vue.createApp({
  data() {
    return {
      tutorialInfo: {
        name: "VueJs3",
        githubLink: "https://github.com",
      },
      htmlCode: '<a href="https://github.com">Link</a>',
    };
  },
});

app.mount("#app");
