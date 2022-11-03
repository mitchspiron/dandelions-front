<template>
  <HomeLayout>
    <ResetPasswordForm />
  </HomeLayout>
</template>

<script>
import HomeLayout from "../../components/visitor/layout/HomeLayout.vue";
import ResetPasswordForm from "../../components/visitor/pages/ResetPasswordForm.vue";
export default {
  name: "ResetPassword",
  components: {
    HomeLayout,
    ResetPasswordForm,
  },
};
</script>
