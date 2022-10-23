<template>
  <HomeLayout>
    <div
      class="container-fluid page-header py-5 mb-2 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div class="container py-5">
        <h1 class="display-4 animated slideInDown mb-4">About me</h1>
      </div>
    </div>
    <div class="container-fluid py-4">
      <div class="row d-flex justify-content-center gap-5">
        <MeProfileCard />
        <MeForm />
      </div>
    </div>
  </HomeLayout>
</template>

<script>
import MeForm from "../../components/visitor/pages/MeForm.vue";
import HomeLayout from "../../components/visitor/layout/HomeLayout.vue";
import MeProfileCard from "../../components/visitor/pages/MeProfilCard.vue";
export default {
  name: "Me",
  components: {
    HomeLayout,
    MeForm,
    MeProfileCard,
  },
};
</script>
<style scoped>
.page-header {
  background: url(../../assets/img/carousel-1.jpg) center center no-repeat;
  background-size: cover;
}
</style>
