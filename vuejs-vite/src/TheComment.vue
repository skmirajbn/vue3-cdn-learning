<template>
  <div>
    <h3>{{ msg }}</h3>

    <div>
      <h1>New User Registration</h1>
      <label for="fullName">Full Name</label>
      <input type="text" id="fullName" v-model="formData.fullName" />

      <br /><br />

      <label for="fullName">Abour You</label>
      <textarea v-model="formData.aboutYou" placeholder="Tell us about yourself"></textarea>
    </div>

    <br /><br />
    <label>Gender</label><br />
    <label><input type="radio" name="gender" value="male" v-model="formData.gender" /> Male</label>
    <label><input type="radio" name="gender" value="female" v-model="formData.gender" /> Female</label>
    <label><input type="radio" name="gender" value="other" v-model="formData.gender" /> Other</label>

    <label>Langulage</label><br />
    <select v-model="formData.language">
      <option value="">Select One</option>
      <option value="bangla">Bangla</option>
      <option value="english">English</option>
    </select>

    <br /><br />

    <label>Skills</label><br />
    <select v-model="formData.skills" multiple>
      <option value="">Select Skills</option>
      <option value="bangla">Php</option>
      <option value="english">Laravel</option>
      <option value="react">React</option>
      <option value="vue">Vue</option>
    </select>
  </div>
  <hr />

  <div v-for="(value, key) in formData" :key="key">
    <strong>{{ key }} : </strong> {{ value }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World",
      name: "",
      formData: {
        fullName: "",
        aboutYou: "",
        gender: "",
        language: "",
        skills: [],
      },
    };
  },
};
</script>

<style scoped></style>
