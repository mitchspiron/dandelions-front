<template>
  <HomeLayout>
    <div
      class="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div class="container py-5">
        <h1 class="display-4 animated slideInDown mb-4">Contact us</h1>
      </div>
    </div>
    <ContactForm />
  </HomeLayout>
</template>

<script>
import HomeLayout from "../../components/visitor/layout/HomeLayout.vue";
import ContactForm from "../../components/visitor/pages/ContactForm.vue";
export default {
  name: "Contact",
  components: {
    HomeLayout,
    ContactForm,
  },
};
</script>
<style scoped>
.page-header {
  background: url(../../assets/img/carousel-1.jpg) center center no-repeat;
  background-size: cover;
}
</style>
