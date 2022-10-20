<template>
  <HomeLayout>
    <EnterpriseLists />
  </HomeLayout>
</template>

<script>
import HomeLayout from "../../components/visitor/layout/HomeLayout.vue";
import EnterpriseLists from "../../components/visitor/pages/EnterpriseLists.vue";
export default {
  name: "Enterprises",
  components: {
    HomeLayout,
    EnterpriseLists,
  },
};
</script>
