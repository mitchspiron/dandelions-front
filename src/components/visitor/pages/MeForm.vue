<template>
  <div class="col-md-8 shadow-lg border-0">
    <form
      @submit.prevent="confirmIllustration"
      enctype="multipart/form-data"
      class="card border-0"
    >
      <div class="card-body">
        <div class="col-md-12">
          <div>
            <h3 class="fw-bold text-uppercase">Illustration de profil</h3>
            <div
              class="d-flex align-items-start align-items-sm-center mb-3 gap-4"
            >
              <div
                id="avatar"
                alt="user-avatar"
                class="d-block rounded col-3"
              />
              <div>
                <div class="input-group mb-3">
                  <span
                    class="input-group-text"
                    style="color: #582456"
                    id="basic-addon1"
                    ><i class="fa-solid fa-cloud-arrow-up"></i
                  ></span>
                  <input
                    type="file"
                    ref="file"
                    class="form-control"
                    @change="onSelect"
                    name="image"
                    id="image"
                    accept="image/*"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
                <p class="text-muted mb-0">
                  Allowed JPG, GIF or PNG. Max size of 800K
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer bg-white py-2 px-3">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <h4 class="mb-0">Modification l'illustration de profile</h4>
            <button
              v-if="loading"
              class="btn btn-primary btn-md ms-auto border-0"
              style="background-color: #582456"
              disabled
            >
              <span
                class="spinner-grow spinner-grow-sm"
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
              Modifier
            </button>
          </div>
        </div>
      </div>
      <hr class="horizontal dark mt-0" />
    </form>
    <!-- -------------------- -->
    <form @submit.prevent="confirmInfo" class="card border-0">
      <div class="card-body">
        <div class="col-md-12">
          <div>
            <h3 class="fw-bold text-uppercase">Information</h3>
            <div class="d-flex justify-content-between mb-3 gap-2">
              <div class="col-6 form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  placeholder="Don Andres"
                  v-model="infos.prenom"
                  required
                />
                <label for="firstname" class="form-label">Prénom</label>
              </div>
              <div class="col-6 form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="lastname"
                  placeholder="Iniesta"
                  v-model="infos.nom"
                  required
                />
                <label for="lastname" class="form-label">Nom</label>
              </div>
            </div>
            <div class="d-flex justify-content-between mb-3 gap-2">
              <div class="col-6 form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  v-model="infos.email"
                  required
                />
                <label for="email" class="form-label">Adresse email</label>
              </div>
              <div class="col-6 form-floating">
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="+26100000000"
                  v-model="infos.telephone"
                  required
                />
                <label for="phone" class="form-label">Téléphone</label>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="col-12 form-group form-floating">
                <textarea
                  class="form-control"
                  v-model="infos.aPropos"
                  required
                  maxlength="300"
                ></textarea>
                <label for="example-text-input" class="form-control-label"
                  >A propos</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer bg-white py-2 px-3">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <h4 class="mb-0">Modification information</h4>
            <button
              v-if="loadingInfo"
              class="btn btn-primary btn-md ms-auto border-0"
              style="background-color: #582456"
              disabled
            >
              <span
                class="spinner-grow spinner-grow-sm"
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
              Modifier
            </button>
          </div>
        </div>
      </div>
      <hr class="horizontal dark mt-0" />
    </form>
    <!-- ---------- -->
    <form
      @submit.prevent="confirmPassword"
      class="card border-0"
      autocomplete="off"
    >
      <div class="card-body">
        <div class="col-md-12">
          <div class="">
            <h3 class="fw-bold text-uppercase">Mot de passe</h3>
            <div class="d-flex justify-content-center gap-2">
              <div class="col-4 form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="old-pwd"
                  placeholder=""
                  autocomplete="new-password"
                  v-model="password.ancienMotDePasse"
                  @blur="validate('ancienMotDePasse')"
                  @keypress="validate('ancienMotDePasse')"
                />
                <label for="old-pwd" class="form-label"
                  >Mot de passe actuel</label
                >
                <p class="text-danger" v-if="!!errors.ancienMotDePasse">
                  {{ errors.ancienMotDePasse }}
                </p>
              </div>
              <div class="col-4 form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="new-pwd"
                  placeholder=""
                  autocomplete="new-password"
                  v-model="password.nouveauMotDePasse"
                  @blur="validate('nouveauMotDePasse')"
                  @keypress="validate('nouveauMotDePasse')"
                />
                <label for="new-pwd" class="form-label"
                  >Nouveau mot de passe</label
                >
                <p class="text-danger" v-if="!!errors.nouveauMotDePasse">
                  {{ errors.nouveauMotDePasse }}
                </p>
              </div>
              <div class="col-4 form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="confirm-new-pwd"
                  placeholder="name@example.com"
                  autocomplete="new-password"
                  v-model="password.confirmMotDePasse"
                  @blur="validate('confirmMotDePasse')"
                  @keypress="validate('confirmMotDePasse')"
                />
                <label for="confirm-new-pwd" class="form-label"
                  >Confirmer nouveau mot de passe</label
                >
                <p class="text-danger" v-if="!!errors.confirmMotDePasse">
                  {{ errors.confirmMotDePasse }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer py-2 px-3 bg-white">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <h4 class="mb-0">Modification mot de passe</h4>
            <button
              v-if="loadingPwd"
              class="btn btn-primary btn-md ms-auto border-0"
              style="background-color: #582456"
              disabled
            >
              <span
                class="spinner-grow spinner-grow-sm"
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
              Modifier
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { useToast } from "vue-toastification";
import {
  updateUsersInfoById,
  updateUsersPasswordById,
  updateIllustrationById,
  uploadedFile,
} from "../../../api/users";
import { decodeToken } from "../../../utils/decodeToken";
import * as yup from "yup";

const PasswordFormSchema = yup.object().shape({
  ancienMotDePasse: yup
    .string()
    .required("Veuillez insérer votre mot de passe actuel"),
  nouveauMotDePasse: yup
    .string()
    .required("Veuillez insérer votre nouveau mot de passe")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .max(15, "Le mot de passe ne doit pas dépasser 15 caractères")
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,15}$/gm,
      "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial"
    ),
  confirmMotDePasse: yup
    .string()
    .required("Veuillez confirmer votre nouveau mot de passe")
    .oneOf(
      [yup.ref("nouveauMotDePasse"), null],
      "Les mots de passes de correspondent pas"
    ),
});

export default {
  name: "MeForm",
  components: {},
  data() {
    return {
      loading: false,
      loadingInfo: false,
      loadingPwd: false,
      infos: {
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        aPropos: "",
        role: null,
      },
      errors: {
        ancienMotDePasse: "",
        nouveauMotDePasse: "",
        confirmMotDePasse: "",
      },
      password: {
        ancienMotDePasse: "",
        nouveauMotDePasse: "",
        confirmMotDePasse: "",
      },
      file: "",
      image: {
        illustration: "",
      },
    };
  },
  computed: {
    me() {
      return this.$store.getters["userStore/me"];
    },
  },
  mounted() {
    this.avatar();
    this.infos.nom = this.me.nomUser || this.me.nom;
    this.infos.prenom = this.me.prenomUser || this.me.prenom;
    this.infos.email = this.me.emailUser || this.me.email;
    this.infos.telephone = this.me.telephoneUser || this.me.telephone;
    this.infos.aPropos = this.me.aProposUser || this.me.aPropos;
    this.infos.role = this.me.roleUser || this.me.role;
  },
  methods: {
    validate(field) {
      PasswordFormSchema.validateAt(field, this.password)
        .then(() => (this.errors[field] = ""))
        .catch((err) => {
          this.errors[err.path] = err.message;
        });
    },
    avatar() {
      const FILE_INPUT = document.querySelector("input[type=file]");
      const AVATAR = document.getElementById("avatar");

      FILE_INPUT.addEventListener("change", (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
          AVATAR.setAttribute("aria-label", file.name);
          AVATAR.style.background = `url(${reader.result}) center center/cover`;
        };
      });
    },
    confirmInfo() {
      this.loadingInfo = true;
      const toast = useToast();
      updateUsersInfoById(this.me.sub || this.me.id, this.infos)
        .then((result) => {
          this.loadingInfo = false;
          this.$router.push(this.$route.query.redirect || "/mon-espace");
          localStorage.setItem("dandelions_token", result.data[1].access_token);
          const decodeV = decodeToken(result.data[1].access_token);
          this.$store.dispatch("userStore/setUser", decodeV);
          toast.success("Modification information réussi");
          result.data[0].illustration =
            this.me.illustrationUser || this.me.illustration;
          this.$store.dispatch("userStore/setUser", result.data[0]);
          this.$store.dispatch("userStore/setConnected");
        })
        .catch((e) => {
          this.loadingInfo = false;
          toast.info(e.response.data.message);
        });
    },
    confirmPassword() {
      this.loadingPwd = true;
      PasswordFormSchema.validate(this.password, { abortEarly: false })
        .then(() => {
          const toast = useToast();
          updateUsersPasswordById(this.me.sub || this.me.id, this.password)
            .then(() => {
              this.loadingPwd = false;
              this.$router.push(this.$route.query.redirect || "/mon-espace");
              toast.success("Modification mot de passe réussi");
              this.password.ancienMotDePasse = "";
              this.password.nouveauMotDePasse = "";
              this.password.confirmMotDePasse = "";
            })
            .catch((e) => {
              this.loadingPwd = false;
              toast.info(e.response.data.message);
            });
        })
        .catch((err) => {
          err.inner.forEach((error) => {
            this.errors = { ...this.errors, [error.path]: error.message };
          });
        });
    },
    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    confirmIllustration() {
      this.loading = true;
      const toast = useToast();
      let formData = new FormData();
      formData.append("file", this.file);
      uploadedFile(formData)
        .then((result) => {
          this.image.illustration = result.data.filename;
          updateIllustrationById(this.me.sub || this.me.id, this.image)
            .then((res) => {
              this.loading = false;
              this.$router.push(this.$route.query.redirect || "/mon-espace");
              localStorage.setItem(
                "dandelions_token",
                res.data[1].access_token
              );
              const decodeV = decodeToken(res.data[1].access_token);
              this.$store.dispatch("userStore/setUser", decodeV);
              this.$store.dispatch("userStore/setConnected");
              toast.success("Modification illustration profil réussi");
            })
            .catch((e) => {
              this.loading = false;
              toast.info(e.response.data.message);
            });
        })
        .catch((e) => {
          console.log("erreur", e);
        });
    },
  },
};
</script>
<style scoped>
#avatar {
  background-image: url("../../../assets/img/avatar.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100px;
  width: 100px;
  border: 3px solid #582456;
  border-radius: 50%;
  transition: background ease-out 200ms;
}
</style>
