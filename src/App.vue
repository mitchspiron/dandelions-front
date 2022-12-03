<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
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
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #582456;
  border: 1px solid #582456;
  color: white;
}
.active-page:hover {
  background-color: #582456;
}

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
