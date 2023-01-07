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
                <div class="mb-3 mt-md-4">
                  <div class="mb-4">
                    <h3 class="fw-bold mb-2 text-uppercase">
                      Retrouvez votre compte
                    </h3>
                    <p class="mb-2">
                      Entrez votre email enregistré pour réinitialiser le mot de
                      passe
                    </p>
                  </div>
                  <form @submit.prevent="confirm">
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
                      <label for="email" class="form-label"
                        >Adresse email</label
                      >
                      <p class="text-danger" v-if="!!errors.email">
                        {{ errors.email }}
                      </p>
                    </div>
                    <div class="mb-3 d-grid">
                      <button
                        v-if="loading"
                        class="btn btn-outline-dark"
                        type="button"
                        disabled
                      >
                        <span
                          class="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Chargement...
                      </button>
                      <button v-else class="btn btn-outline-dark" type="submit">
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
                <div>
                  <p class="mb-0 text-center">
                    Avez-vous un compte ?
                    <a class="text-primary fw-bold" @click="showLogin()"
                      >Se connecter</a
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
import { useToast } from "vue-toastification";
import { forgotPassword } from "../../../api/auth-user";
import * as yup from "yup";

const FormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Veuillez insérer votre adresse email")
    .email("Veuillez saisir un email valide"),
});

export default {
  name: "RegisterForm",
  props: ["register", "login", "showLogin"],
  components: {},
  data() {
    return {
      errors: {
        email: "",
      },
      form: {
        email: "",
      },
      loading: false,
    };
  },
  methods: {
    validate(field) {
      FormSchema.validateAt(field, this.form)
        .then(() => (this.errors[field] = ""))
        .catch((err) => {
          this.errors[err.path] = err.message;
        });
    },
    confirm() {
      FormSchema.validate(this.form, { abortEarly: false })
        .then(() => {
          const toast = useToast();
          this.loading = true;
          forgotPassword(this.form)
            .then(() => {
              this.loading = false;
              this.$swal(
                "Email de récupération envoyé!",
                "Vérifier votre courriel",
                "success"
              );
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
  background-image: url(../../../assets/img/feature.jpg);
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
