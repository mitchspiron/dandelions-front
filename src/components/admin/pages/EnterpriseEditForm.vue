<template>
  <form
    @submit.prevent="confirmIllustration"
    enctype="multipart/form-data"
    autocomplete="off"
    class="col-md-12 shadow-lg border-0 mb-3"
  >
    <div class="card border-0">
      <div class="card-body">
        <div class="col-md-12">
          <div class="mb-3 mt-md-1">
            <h3 class="fw-bold text-uppercase">Illustration de l'entreprise</h3>
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
                    @change="onSelect"
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
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer py-2 px-3">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <h4 class="mb-0">Modification de l'illustration</h4>
            <button
              class="btn btn-primary btn-md ms-auto border-0"
              style="background-color: #582456"
            >
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
  <!-- --------------------- -->
  <form
    @submit.prevent="confirm"
    autocomplete="off"
    class="col-md-12 shadow-lg border-0 mb-5"
  >
    <div class="card border-0">
      <div class="card-body">
        <div class="col-md-12">
          <div class="mb-3 mt-md-1">
            <h3 class="fw-bold text-uppercase">Information de l'article</h3>
            <div class="d-flex justify-content-between mb-3 gap-1">
              <div class="col-4 form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="nom"
                  placeholder="Dandelions"
                  v-model="form.nom"
                />
                <label for="nom" class="form-label">Nom</label>
              </div>
              <div class="col-4 form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="brand"
                  placeholder=""
                  v-model="form.brand"
                />
                <label for="brand" class="form-label">Brand</label>
              </div>
              <div class="col-4 form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  v-model="form.email"
                />
                <label for="email" class="form-label">Adresse email</label>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex justify-content-between mb-4 gap-1">
                <div class="col-4 form-floating">
                  <input
                    type="telephone"
                    class="form-control"
                    id="phone"
                    placeholder="+26100000000"
                    v-model="form.telephone"
                  />
                  <label for="phone" class="form-label">Téléphone</label>
                </div>
                <div class="col-4 form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="annee"
                    placeholder=""
                    v-model="form.anneeCreation"
                  />
                  <label for="annee" class="form-label"
                    >Année de création</label
                  >
                </div>
                <div class="col-4 form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="site"
                    placeholder=""
                    v-model="form.urlWebsite"
                  />
                  <label for="site" class="form-label">URL site web</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="horizontal dark" />
        <p class="text-uppercase text-sm">à propos</p>
        <div class="row">
          <div class="col-md-12 mb-1 d-flex justify-content-center gap-2">
            <div class="col-md-4 form-group form-floating">
              <textarea
                class="form-control"
                v-model="form.descriptionA"
              ></textarea>
              <label for="example-text-input" class="form-control-label"
                >Déscription 1</label
              >
            </div>
            <div class="col-md-4 form-group form-floating">
              <textarea
                class="form-control"
                v-model="form.descriptionB"
              ></textarea>
              <label for="example-text-input" class="form-control-label"
                >Déscription 2</label
              >
            </div>
            <div class="col-md-4 form-group form-floating">
              <textarea
                class="form-control"
                v-model="form.textContact"
              ></textarea>
              <label for="example-text-input" class="form-control-label"
                >Phrase pour la section visiter website</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer py-2 px-3">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <h4 class="mb-0">Modification de l'information</h4>
            <button
              class="btn btn-primary btn-md ms-auto border-0"
              style="background-color: #582456"
            >
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import { useToast } from "vue-toastification";
import {
  getEnterpriseBySlug,
  updateEnterpriseBySlug,
  updateIllustrationById,
  uploadedFile,
} from "../../../api/enterprise.";

export default {
  name: "EnterpriseForm",
  components: {},
  data() {
    return {
      form: {
        nom: "",
        brand: "",
        email: "",
        telephone: "",
        anneeCreation: "",
        urlWebsite: "",
        descriptionA: "",
        descriptionB: "",
        textContact: "",
      },
      file: "",
      image: {
        illustration: "",
      },
      loading: false,
    };
  },
  computed: {
    me() {
      return this.$store.getters["userStore/me"];
    },
  },
  methods: {
    fetch() {
      getEnterpriseBySlug(this.$route.params.slug).then((result) => {
        this.form = result.data;
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
    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    confirmIllustration() {
      const toast = useToast();
      let formData = new FormData();
      formData.append("file", this.file);
      uploadedFile(formData)
        .then((result) => {
          this.image.illustration = result.data.filename;
          updateIllustrationById(
            this.$route.params.slug,
            this.me.sub || this.me.id,
            this.image
          )
            .then(() => {
              toast.success("Modification illustration d'entreprise réussi");
              this.$router.push(
                this.$route.query.redirect || "/admin/entreprise"
              );
            })
            .catch((e) => {
              toast.info(e.response.data.message);
            });
        })
        .catch((e) => {
          console.log("erreur", e);
        });
    },
    confirm() {
      const toast = useToast();
      updateEnterpriseBySlug(
        this.$route.params.slug,
        this.me.sub || this.me.id,
        this.form
      )
        .then(() => {
          toast.success("Modification entreprise réussi");
          this.$router.push(this.$route.query.redirect || "/admin/entreprise");
        })
        .catch((e) => {
          toast.info(e.response.data.message);
        });
    },
  },
  mounted() {
    this.avatar();
    this.fetch();
  },
};
</script>
<style scoped>
#avatar {
  background-image: url("../../../assets/img/enterprise.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100px;
  width: 100px;
  border: 3px solid #582456;
  border-radius: 50%;
  transition: background ease-out 200ms;
}
</style>
