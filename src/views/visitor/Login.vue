<template>
  <HomeLayout>
    <LoginForm
      v-if="login"
      :login="login"
      :register="register"
      :show-register="showRegister"
      :show-forgot-password="showForgotPassword"
    />
    <RegisterForm
      v-if="register"
      :login="login"
      :register="register"
      :show-login="showLogin"
    />
    <ForgotPassword
      v-if="forgotPassword"
      :forgotPassword="forgotPassword"
      :login="login"
      :show-login="showLogin"
    />
  </HomeLayout>
</template>

<script>
import HomeLayout from "../../components/visitor/layout/HomeLayout.vue";
import LoginForm from "../../components/visitor/pages/LoginForm.vue";
import RegisterForm from "../../components/visitor/pages/RegisterForm.vue";
import ForgotPassword from "../../components/visitor/pages/ForgotPassword.vue";
export default {
  name: "Login",
  components: {
    HomeLayout,
    LoginForm,
    RegisterForm,
    ForgotPassword,
  },
  data() {
    return {
      login: true,
      register: false,
      forgotPassword: false,
    };
  },
  methods: {
    showLogin() {
      this.login = true;
      this.register = false;
      this.forgotPassword = false;
    },
    showRegister() {
      this.login = false;
      this.register = true;
    },
    showForgotPassword() {
      this.forgotPassword = true;
      this.login = false;
    },
  },
};
</script>
