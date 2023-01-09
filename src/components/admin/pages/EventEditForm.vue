<template>
  <form
    @submit.prevent="confirmIllustration"
    enctype="multipart/form-data"
    autocomplete="off"
    class="col-md-12 shadow-lg border-0 mb-5"
  >
    <div class="card border-0">
      <div class="card-body">
        <div class="col-md-12">
          <div class="mb-3 mt-md-1">
            <h3 class="fw-bold text-uppercase">Illustration du coming-soon</h3>
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
                    required
                  />
                </div>
                <p class="text-muted mb-0">
                  Autorise JPG ou PNG. Taille maximale de 800K
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer py-2 px-3">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <h4 class="mb-0">Modification de l'illustration coming-soon</h4>
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
              Mofifier
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
  <!-- --------------------------------- -->
  <form
    @submit.prevent="confirm()"
    autocomplete="off"
    class="col-md-12 shadow-lg border-0 mb-5"
  >
    <div class="card border-0">
      <div class="card-body">
        <div class="col-md-12">
          <div class="mb-3 mt-md-1">
            <h3 class="fw-bold text-uppercase">Information du coming-soon</h3>
            <div class="d-flex justify-content-between mb-3 gap-1">
              <div class="col-3 form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  autocomplete="off"
                  v-model="form.idEntreprise"
                  required
                >
                  <option value="" selected disabled>Entreprise</option>
                  <option
                    v-for="enterprise in enterprises"
                    :key="enterprise.id"
                    :value="enterprise.id"
                  >
                    {{ enterprise.nom }}
                  </option>
                </select>
                <label for="floatingSelect">Séléctionner une entreprise</label>
              </div>
              <div class="col-3 form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="titre"
                  placeholder=""
                  v-model="form.titre"
                  required
                />
                <label for="titre" class="form-label">Titre</label>
              </div>
              <div class="col-3 form-floating">
                <input
                  type="date"
                  class="form-control"
                  id="deadline"
                  placeholder=""
                  v-model="form.deadline"
                  required
                />
                <label for="deadline" class="form-label">Date limite</label>
              </div>
              <div class="col-3 form-floating">
                <textarea
                  class="form-control"
                  v-model="form.description"
                  required
                  maxlength="300"
                ></textarea>
                <label for="example-text-input" class="form-control-label"
                  >Déscription</label
                >
              </div>
            </div>
          </div>
        </div>
        <hr class="horizontal dark" />
        <p class="text-uppercase text-sm">Contenu</p>
        <div class="row">
          <div class="col-md-12" style="margin-bottom: 100px">
            <QuillEditor
              v-model:content="form.contenu"
              v-model="form.contenu"
              contentType="html"
              :modules="modules"
              theme="snow"
              toolbar="full"
              ref="quill"
            />
          </div>
        </div>
        <div class="visually-hidden col-2 card border shadow-sm py-2">
          <div class="form-check form-switch m-auto">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              :checked="form.onSubscribe"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault"
              >Avec inscription</label
            >
          </div>
        </div>
      </div>
      <div class="card-footer py-2 px-3">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <h4 class="mb-0">Modification de l'événement</h4>
            <button
              v-if="loadingInfo"
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
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import { QuillEditor } from "@vueup/vue-quill";
import BlotFormatter from "quill-blot-formatter";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import {
  getEvenementBySlug,
  uploadedFile,
  updateIllustrationBySlug,
  updateEvenementBySlug,
} from "../../../api/event";
import { useToast } from "vue-toastification";
import { getEnterpriseAdmin } from "../../../api/enterprise.";
export default {
  name: "ArticleForm",
  components: { QuillEditor },
  data() {
    return {
      form: {
        idEntreprise: "",
        titre: "",
        description: "",
        contenu: "",
        deadline: Date.now(),
        onSubscribe: true || false,
      },
      enterprises: [],
      file: "",
      image: {
        illustration: "",
      },
      loading: false,
      loadingInfo: false,
    };
  },
  setup: () => {
    const modules = {
      name: "blotFormatter",
      module: BlotFormatter,
      options: {
        /* options */
      },
    };
    return { modules };
  },
  computed: {
    me() {
      return this.$store.getters["userStore/me"];
    },
    editor() {
      return this.$refs.quill;
    },
  },
  methods: {
    fetchEnterprise() {
      getEnterpriseAdmin(this.me.sub || this.me.id).then((result) => {
        this.enterprises = result.data;
      });
    },
    fetch() {
      getEvenementBySlug(this.$route.params.slug).then((result) => {
        this.form = result.data;
        this.form.deadline = result.data.deadline.split("T")[0];
        this.form.idEntreprise = result.data.idEntreprise;
        this.editor.setHTML(this.form.contenu);
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
      this.loading = true;
      const toast = useToast();
      let formData = new FormData();
      formData.append("file", this.file);
      uploadedFile(formData)
        .then((result) => {
          this.image.illustration = result.data.filename;
          updateIllustrationBySlug(
            this.$route.params.slug,
            this.me.sub || this.me.id,
            this.image
          )
            .then(() => {
              this.loading = false;
              toast.success("Modification illustration du coming-soon réussi");
              this.$router.go(-1);
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
    confirm() {
      this.loadingInfo = true;
      const toast = useToast();
      updateEvenementBySlug(
        this.$route.params.slug,
        this.me.sub || this.me.id,
        this.form
      )
        .then(() => {
          this.loadingInfo = false;
          toast.success("Modification coming-soon réussi");
          this.$router.go(-1);
        })
        .catch((e) => {
          this.loadingInfo = false;
          toast.info(e.response.data.message);
        });
    },
  },
  mounted() {
    this.avatar();
    this.fetchEnterprise();
    this.fetch();
  },
};
</script>
<style scoped>
#avatar {
  background-image: url("../../../assets/img/event.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100px;
  width: 100px;
  border: 3px solid #582456;
  border-radius: 50%;
  transition: background ease-out 200ms;
}
</style>
