<template>
  <div class="col-md-12 shadow-lg border-0">
    <form @submit.prevent="submit" autocomplete="off" class="card border-0">
      <div class="card-body">
        <div class="col-md-12">
          <div class="mt-md-1">
            <p class="text-uppercase text-sm">
              Formulaire d'ajout d'un nouveu utilisateur
            </p>
            <!-- <div
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
                    class="form-control"
                    name="image"
                    id="image"
                    accept="image/*"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <p class="text-muted mb-0">
                  Allowed JPG, GIF or PNG. Max size of 800K
                </p>
              </div>
            </div> -->
            <div class="d-flex justify-content-between mb-3 gap-1">
              <div class="col-3 form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="prenom"
                  placeholder="Don Andres"
                  autocomplete="off"
                  v-model="form.prenom"
                />
                <label for="prenom" class="form-label">Prénom</label>
              </div>
              <div class="col-3 form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="nom"
                  placeholder="Iniesta"
                  autocomplete="off"
                  v-model="form.nom"
                />
                <label for="nom" class="form-label">Nom</label>
              </div>
              <div class="col-3 form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  autocomplete="off"
                  v-model="form.email"
                />
                <label for="email" class="form-label">Adresse email</label>
              </div>
              <div class="col-3 form-floating">
                <input
                  type="telephone"
                  class="form-control"
                  id="phone"
                  placeholder="+26100000000"
                  autocomplete="off"
                  v-model="form.telephone"
                />
                <label for="phone" class="form-label">Téléphone</label>
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
                  >
                    <option value="1">Administrateur</option>
                    <option value="2">Rédacteur</option>
                    <option value="3">Visiteur</option>
                  </select>
                  <label for="floatingSelect"
                    >Séléctionner le rôle de l'utilisateur</label
                  >
                </div>
                <div class="col-3 form-floating">
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      autocomplete="off"
                      v-model="form.aPropos"
                    ></textarea>
                    <label for="floatingTextarea">A propos</label>
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
                  />
                  <label for="password" class="form-label">Mot de passe</label>
                </div>
                <div class="col-3 form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="password-repeat"
                    placeholder="*******"
                    autocomplete="off"
                  />
                  <label for="password-repeat" class="form-label"
                    >Resaisir mot de passe</label
                  >
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
export default {
  name: "UserForm",
  components: {},
  data() {
    return {
      form: {
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        role: "",
        aPropos: "",
        motDePasse: "",
      },
    };
  },
  methods: {
    /* avatar() {
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
    }, */
    submit() {
      const toast = useToast();
      createUsers(this.form)
        .then((result) => {
          toast.success(result.data.nom + " " + result.data.prenom + " ajouté");
          this.$router.push(this.$route.query.redirect || "/utilisateur");
        })
        .catch((e) => {
          toast.info(e.response.data.message);
        });
    },
  },
  mounted() {
    //this.avatar();
  },
};
</script>
<style scoped>
/* #avatar {
  background-image: url("../../../assets/img/avatar.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100px;
  width: 100px;
  border: 3px solid #582456;
  border-radius: 50%;
  transition: background ease-out 200ms;
} */
</style>
