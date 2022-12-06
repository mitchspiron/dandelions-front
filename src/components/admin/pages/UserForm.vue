<template>
  <div class="col-md-12 shadow-lg border-0">
    <form @submit.prevent="submit" autocomplete="off" class="card border-0">
      <div class="card-body">
        <div class="col-md-12">
          <div class="mt-md-1">
            <p class="text-uppercase text-sm">
              Formulaire d'ajout d'un nouveu utilisateur
            </p>
            <div class="d-flex justify-content-between mb-3 gap-1">
              <div class="col-3 form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="prenom"
                  placeholder="Don Andres"
                  autocomplete="off"
                  v-model="form.prenom"
                  @blur="validate('prenom')"
                  @keypress="validate('prenom')"
                />
                <label for="prenom" class="form-label">Prénom</label>
                <p class="text-danger" v-if="!!errors.prenom">
                  {{ errors.prenom }}
                </p>
              </div>
              <div class="col-3 form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="nom"
                  placeholder="Iniesta"
                  autocomplete="off"
                  v-model="form.nom"
                  @blur="validate('nom')"
                  @keypress="validate('nom')"
                />
                <label for="nom" class="form-label">Nom</label>
                <p class="text-danger" v-if="!!errors.nom">
                  {{ errors.nom }}
                </p>
              </div>
              <div class="col-3 form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  autocomplete="off"
                  v-model="form.email"
                  @blur="validate('email')"
                  @keypress="validate('email')"
                />
                <label for="email" class="form-label">Adresse email</label>
                <p class="text-danger" v-if="!!errors.email">
                  {{ errors.email }}
                </p>
              </div>
              <div class="col-3 form-floating">
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="+26100000000"
                  autocomplete="off"
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
            <div class="mb-0">
              <div class="d-flex justify-content-between gap-1">
                <div class="col-3 form-floating">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    autocomplete="off"
                    v-model="form.role"
                    @blur="validate('role')"
                    @keypress="validate('role')"
                  >
                    <option value="" selected disabled>Rôle</option>
                    <option value="1">Administrateur</option>
                    <option value="2">Rédacteur</option>
                    <option value="3">Visiteur</option>
                  </select>
                  <label for="floatingSelect"
                    >Séléctionner le rôle de l'utilisateur</label
                  >
                  <p class="text-danger" v-if="!!errors.role">
                    {{ errors.role }}
                  </p>
                </div>
                <div class="col-3 form-floating">
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      autocomplete="off"
                      v-model="form.aPropos"
                      @blur="validate('aPropos')"
                      @keypress="validate('aPropos')"
                      maxlength="300"
                    ></textarea>
                    <label for="floatingTextarea">A propos</label>
                    <p class="text-danger" v-if="!!errors.aPropos">
                      {{ errors.aPropos }}
                    </p>
                  </div>
                </div>
                <div class="col-3 form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="*******"
                    autocomplete="new-password"
                    v-model="form.motDePasse"
                    @blur="validate('motDePasse')"
                    @keypress="validate('motDePasse')"
                  />
                  <label for="password" class="form-label">Mot de passe</label>
                  <p class="text-danger" v-if="!!errors.motDePasse">
                    {{ errors.motDePasse }}
                  </p>
                </div>
                <div class="col-3 form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="password-repeat"
                    placeholder="*******"
                    autocomplete="off"
                    v-model="form.confirmMotDePasse"
                    @blur="validate('confirmMotDePasse')"
                    @keypress="validate('confirmMotDePasse')"
                  />
                  <label for="password-repeat" class="form-label"
                    >Resaisir mot de passe</label
                  >
                  <p class="text-danger" v-if="!!errors.confirmMotDePasse">
                    {{ errors.confirmMotDePasse }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer py-2 px-3">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <h4>Ajout utilisateur</h4>
            <button
              v-if="loading"
              class="btn btn-primary btn-md ms-auto border-0"
              disabled
              style="background-color: #582456"
            >
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
            <button
              v-else
              class="btn btn-primary btn-md ms-auto border-0"
              style="background-color: #582456"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { useToast } from "vue-toastification";
import { createUsers } from "../../../api/users";
import * as yup from "yup";

const UserFormSchema = yup.object().shape({
  nom: yup.string().required("Veuillez insérer un nom"),
  prenom: yup.string().required("Veuillez insérer un prénom"),
  email: yup
    .string()
    .required("Veuillez insérer un adresse email")
    .email("Veuillez saisir un email valide"),
  telephone: yup.string().required("Veuillez insérer un numéro de téléphone"),
  role: yup.string().required("Veuillez choisir le rôle de l'utilisateur"),
  aPropos: yup
    .string()
    .required("Veuillez insérer deux ou trois phrases vous concernant"),
  motDePasse: yup
    .string()
    .required("Veuillez insérer un mot de passe")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .max(15, "Le mot de passe ne doit pas dépasser 15 caractères")
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,15}$/gm,
      "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial"
    ),
  confirmMotDePasse: yup
    .string()
    .required("Veuillez confirmer le mot de passe")
    .oneOf(
      [yup.ref("motDePasse"), null],
      "Les mots de passes de correspondent pas"
    ),
});

export default {
  name: "UserForm",
  components: {},
  data() {
    return {
      loading: false,
      errors: {
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        role: "",
        aPropos: "",
        motDePasse: "",
        confirmMotDePasse: "",
      },
      form: {
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        role: "",
        aPropos: "",
        motDePasse: "",
        confirmMotDePasse: "",
      },
    };
  },
  methods: {
    validate(field) {
      UserFormSchema.validateAt(field, this.form)
        .then(() => (this.errors[field] = ""))
        .catch((err) => {
          this.errors[err.path] = err.message;
        });
    },
    submit() {
      UserFormSchema.validate(this.form, { abortEarly: false })
        .then(() => {
          const toast = useToast();
          this.loading = true;
          createUsers(this.form)
            .then((result) => {
              this.loading = false;
              if (result) {
                toast.success(
                  result.data.nom + " " + result.data.prenom + " ajouté"
                );
                this.$router.push(this.$route.query.redirect || "/utilisateur");
              } else {
                toast.error("Une erreur est survevue!");
              }
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
