<template>
  <HomeLayout>
    <EventLists />
  </HomeLayout>
</template>

<script>
import HomeLayout from "../../components/visitor/layout/HomeLayout.vue";
import EventLists from "../../components/visitor/pages/EventLists.vue";
export default {
  name: "Event",
  components: {
    HomeLayout,
    EventLists,
  },
};
</script>
