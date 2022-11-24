<template>
  <Navbar />
  <Sidenav />
  <slot />
  <!-- <Footer /> -->
  <a
    href="#"
    class="back-to-top d-flex align-items-center justify-content-center"
    ><i class="bi bi-arrow-up-short"></i
  ></a>
</template>

<script>
import Navbar from "../pages/Navbar.vue";
//import Footer from "../pages/Footer.vue";
import Sidenav from "../pages/Sidenav.vue";
export default {
  name: "AdminLayout",
  components: {
    Sidenav,
    Navbar,
    /*  Footer, */
  },
};
</script>
<style scoped>
@import "../../../assets/css/style.css";
a {
  color: #4154f1;
  text-decoration: none;
}

a:hover {
  color: #717ff5;
  text-decoration: none;
}
</style>
