<template>
  <Suspense>
    <template #default>
      <HomeLayout>
        <Header />
        <HomeContent />
      </HomeLayout>
    </template>
    <template #fallback>
      <div class="d-flex justify-content-md-center align-items-center vh-100">
        <div class="breeding-rhombus-spinner">
          <div class="rhombus child-1"></div>
          <div class="rhombus child-2"></div>
          <div class="rhombus child-3"></div>
          <div class="rhombus child-4"></div>
          <div class="rhombus child-5"></div>
          <div class="rhombus child-6"></div>
          <div class="rhombus child-7"></div>
          <div class="rhombus child-8"></div>
          <div class="rhombus big"></div>
        </div>
      </div>
    </template>
  </Suspense>
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
