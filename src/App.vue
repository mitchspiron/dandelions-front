<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
//import { isLoggedIn } from "./api/auth-user";
export default {
  name: "App",
  components: {},
  mounted() {
    /* isLoggedIn()
      .then(() => {
        console.log("Vous êtes connecté");
      })
      .catch(() => {
        console.log("Vous êtes deconnecté!");
      }); */
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["userStore/isLoggedIn"];
    },
  },
};
</script>

<style lang="scss">
p {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  font-family: "Work Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  color: #131313;
  font-family: "Neuton", serif;
  font-weight: 700;
  line-height: 1.3;
}
</style>
