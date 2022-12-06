<template>
  <div id="main-wrapper" class="container">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card border-0 mt-3">
          <div class="card-body p-0">
            <div class="row no-gutters">
              <div class="col-lg-6 d-none d-lg-inline-block">
                <div class="account-block rounded-right">
                  <div class="overlay rounded-right"></div>
                  <div class="account-testimonial">
                    <h4 class="text-white mb-4">This beautiful theme yours!</h4>
                    <p class="lead text-white">
                      "Best investment i made for a long time. Can only
                      recommend it for other users."
                    </p>
                    <p>- Admin User</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-5">
                <form @submit.prevent="submit" class="mb-3 mt-md-4">
                  <h2 class="fw-bold mb-2 text-uppercase">Lorem ipsum</h2>
                  <p class="mb-3">Please enter your login and password!</p>
                  <div class="col-12 form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="email address"
                      v-model="form.email"
                      @blur="validate('email')"
                      @keypress="validate('email')"
                    />
                    <label for="email" class="form-label">Email address</label>
                    <p class="text-danger" v-if="!!errors.email">
                      {{ errors.email }}
                    </p>
                  </div>
                  <div class="col-12 form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="firstname"
                      placeholder="********"
                      v-model="form.motDePasse"
                      @blur="validate('motDePasse')"
                      @keypress="validate('motDePasse')"
                    />
                    <label for="firstname" class="form-label">Password</label>
                    <p class="text-danger" v-if="!!errors.motDePasse">
                      {{ errors.motDePasse }}
                    </p>
                  </div>
                  <p class="small">
                    <a class="text-primary" @click="showForgotPassword()"
                      >Forgot password?</a
                    >
                  </p>
                  <div class="d-grid">
                    <button
                      v-if="loading"
                      class="comments-btn btn btn-sm btn-outline-secondary"
                      disabled
                    >
                      <span
                        class="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Loading...
                    </button>
                    <button v-else class="btn btn-outline-dark" type="submit">
                      Login
                    </button>
                  </div>
                </form>
                <div>
                  <p class="mb-0 text-center">
                    Don't have an account?
                    <a class="text-primary fw-bold" @click="showRegister()"
                      >Sign Up</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { signin } from "../../../api/auth-user";
import { useToast } from "vue-toastification";
import * as yup from "yup";

const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Veuillez insérer votre adresse email")
    .email("Veuillez saisir un email valide"),
  motDePasse: yup.string().required("Veuillez insérer votre mot de passe"),
});

export default {
  name: "LoginForm",
  props: ["register", "login", "showRegister", "showForgotPassword"],
  components: {},
  data() {
    return {
      errors: {
        email: "",
        motDePasse: "",
      },
      form: {
        email: "",
        motDePasse: "",
      },
      loading: false,
    };
  },
  methods: {
    validate(field) {
      LoginFormSchema.validateAt(field, this.form)
        .then(() => (this.errors[field] = ""))
        .catch((err) => {
          this.errors[err.path] = err.message;
        });
    },
    async submit() {
      LoginFormSchema.validate(this.form, { abortEarly: false })
        .then(() => {
          const toast = useToast();
          this.loading = true;
          signin(this.form)
            .then((result) => {
              this.loading = false;
              localStorage.setItem(
                "dandelions_token",
                result.data[1].access_token
              );
              this.$store.dispatch("userStore/setUser", result.data[0]);
              this.$store.dispatch("userStore/setConnected");
              toast.success(
                "Bienvenu" +
                  " " +
                  result.data[0].nom +
                  " " +
                  result.data[0].prenom
              );
              //this.$router.push(this.$route.query.redirect || "/");
              this.$router.go(-1 || "/");
            })
            .catch((e) => {
              this.loading = false;
              toast.info(e.response.data.message);
            });
        })
        .catch((err) => {
          err.inner.forEach((error) => {
            this.errors = { ...this.errors, [error.path]: error.message };
          });
        });
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
}

template {
  margin-top: 20px;
  background: #f6f9fc;
}
.account-block {
  padding: 0;
  background-image: url(../../../assets/img/login.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: relative;
}
.account-block .overlay {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.account-block .account-testimonial {
  text-align: center;
  color: #fff;
  position: absolute;
  margin: 0 auto;
  padding: 0 1.75rem;
  bottom: 3rem;
  left: 0;
  right: 0;
}
</style>
