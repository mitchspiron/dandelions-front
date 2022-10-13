<template>
  <Topbar />
  <Navbar />
  <slot />
  <Footer />
</template>

<script>
import Topbar from "../pages/Topbar.vue";
import Navbar from "../pages/Navbar.vue";
import Footer from "../pages/Footer.vue";
export default {
  name: "HomeLayout",
  components: {
    Topbar,
    Navbar,
    Footer,
  },
};
</script>
