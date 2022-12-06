<template>
  <HomeLayout>
    <Header />
    <HomeContent />
  </HomeLayout>
</template>

<script>
import HomeLayout from "../../components/visitor/layout/HomeLayout.vue";
import Header from "../../components/visitor/pages/Header.vue";
import HomeContent from "../../components/visitor/pages/HomeContent.vue";
export default {
  name: "Home",
  components: {
    HomeLayout,
    Header,
    HomeContent,
  },
};
</script>
