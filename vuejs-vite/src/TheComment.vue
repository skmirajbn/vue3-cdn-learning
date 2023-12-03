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
      },
    };
  },
};
</script>

<style scoped></style>
