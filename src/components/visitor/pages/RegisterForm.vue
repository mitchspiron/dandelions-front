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

              <div class="col-lg-6">
                <form class="mb-3 mt-md-4" @submit.prevent="submit">
                  <h3 class="fw-bold text-uppercase">Créer votre compte</h3>
                  <p class="mb-3">
                    Nous protégerons vos informations personnelles et ne les
                    divulguerons pas
                  </p>
                  <div class="d-flex justify-content-center mb-3 gap-2">
                    <div class="col-6 form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="firstname"
                        placeholder="Don Andres"
                        v-model="form.prenom"
                        @blur="validate('prenom')"
                        @keypress="validate('prenom')"
                      />
                      <label for="firstname" class="form-label">Prénom</label>
                      <p class="text-danger" v-if="!!errors.prenom">
                        {{ errors.prenom }}
                      </p>
                    </div>
                    <div class="col-6 form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="lastname"
                        placeholder="Iniesta"
                        v-model="form.nom"
                        @blur="validate('nom')"
                        @keypress="validate('nom')"
                      />
                      <label for="lastname" class="form-label">Nom</label>
                      <p class="text-danger" v-if="!!errors.nom">
                        {{ errors.nom }}
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mb-3 gap-2">
                    <div class="col-6 form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="name@example.com"
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
                    <div class="col-6 form-floating">
                      <input
                        type="tel"
                        class="form-control"
                        id="phone"
                        placeholder="+26100000000"
                        v-model="form.telephone"
                        @blur="validate('telephone')"
                        @keypress="validate('telephone')"
                      />
                      <label for="phone" class="form-label">Téléphone</label>
                      <p class="text-danger" v-if="!!errors.telephone">
                        {{ errors.telephone }}
                      </p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex justify-content-center gap-2">
                      <div class="col-6 form-floating">
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="*******"
                          v-model="form.motDePasse"
                          @blur="validate('motDePasse')"
                          @keypress="validate('motDePasse')"
                        />
                        <label for="password" class="form-label"
                          >Mot de passe</label
                        >
                        <p class="text-danger" v-if="!!errors.motDePasse">
                          {{ errors.motDePasse }}
                        </p>
                      </div>
                      <div class="col-6 form-floating">
                        <input
                          type="password"
                          class="form-control"
                          id="password-repeat"
                          placeholder="*******"
                          v-model="form.confirmMotDePasse"
                          @blur="validate('confirmMotDePasse')"
                          @keypress="validate('confirmMotDePasse')"
                        />
                        <label for="password-repeat" class="form-label"
                          >Répéter le mot de passe</label
                        >
                        <p
                          class="text-danger"
                          v-if="!!errors.confirmMotDePasse"
                        >
                          {{ errors.confirmMotDePasse }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex justify-content-center">
                      <div class="col-12 form-floating">
                        <textarea
                          v-model="form.aPropos"
                          @blur="validate('aPropos')"
                          @keypress="validate('aPropos')"
                          class="form-control"
                          maxlength="300"
                        ></textarea>
                        <label
                          for="example-text-input"
                          class="form-control-label"
                          >À propos de moi</label
                        >
                        <p class="text-danger" v-if="!!errors.aPropos">
                          {{ errors.aPropos }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="d-grid">
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
                      S'inscrire
                    </button>
                  </div>
                </form>
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
import { signup } from "../../../api/auth-user";
import { useToast } from "vue-toastification";
import * as yup from "yup";

const RegisterFormSchema = yup.object().shape({
  nom: yup.string().required("Veuillez insérer votre nom"),
  prenom: yup.string().required("Veuillez insérer votre prénom"),
  email: yup
    .string()
    .required("Veuillez insérer votre adresse email")
    .email("Veuillez saisir un email valide"),
  telephone: yup
    .string()
    .required("Veuillez insérer votre numéro de téléphone"),
  aPropos: yup
    .string()
    .required("Veuillez insérer deux ou trois phrases vous concernant"),
  motDePasse: yup
    .string()
    .required("Veuillez insérer votre mot de passe")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .max(15, "Le mot de passe ne doit pas dépasser 15 caractères")
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,15}$/gm,
      "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial"
    ),
  confirmMotDePasse: yup
    .string()
    .required("Veuillez confirmer votre mot de passe")
    .oneOf(
      [yup.ref("motDePasse"), null],
      "Les mots de passes de correspondent pas"
    ),
});

export default {
  name: "RegisterForm",
  props: ["register", "login", "showLogin"],
  components: {},
  data() {
    return {
      errors: {
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        aPropos: "",
        motDePasse: "",
        confirmMotDePasse: "",
      },
      form: {
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        aPropos: "",
        motDePasse: "",
        confirmMotDePasse: "",
      },
      loading: false,
    };
  },
  methods: {
    validate(field) {
      RegisterFormSchema.validateAt(field, this.form)
        .then(() => (this.errors[field] = ""))
        .catch((err) => {
          this.errors[err.path] = err.message;
        });
    },
    submit() {
      RegisterFormSchema.validate(this.form, { abortEarly: false })
        .then(() => {
          const toast = useToast();
          this.loading = true;
          signup(this.form)
            .then(() => {
              this.loading = false;
              this.$swal(
                "Email de confirmation envoyé!",
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
  background-image: url(../../../assets/img/author.jpg);
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
