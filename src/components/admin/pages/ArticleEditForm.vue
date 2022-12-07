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
          <div class="">
            <h3 class="fw-bold text-uppercase">Illustration de l'article</h3>
            <div class="d-flex align-items-start align-items-sm-center gap-4">
              <div
                id="avatar"
                alt="user-avatar"
                class="d-block rounded col-3"
              />
              <div>
                <div class="input-group">
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
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
  <!-- ----------------- -->
  <form
    @submit.prevent="confirm"
    autocomplete="off"
    class="col-md-12 shadow-lg border-0 mb-5"
  >
    <div class="card border-0">
      <div class="card-body">
        <div class="col-md-12">
          <div class="mb-3 mt-md-1">
            <h3 class="fw-bold text-uppercase">Article</h3>
            <div class="d-flex justify-content-between mb-3 gap-1">
              <div class="col-4 form-floating">
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
              <div class="col-4 form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  autocomplete="off"
                  v-model="form.idCategorie"
                  required
                >
                  <option :value="form.idCategorie" selected disabled>
                    {{ categorie_article }}
                  </option>
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.nomCategorie }}
                  </option>
                </select>
                <label for="floatingSelect"
                  >Séléctionner la catégorie de l'article</label
                >
              </div>
              <div class="col-4 form-floating">
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
      </div>
      <div class="card-footer py-2 px-3">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <h4 class="mb-0">Modification de l'article</h4>
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
import { useToast } from "vue-toastification";
import {
  getPostBySlug,
  updateIllustrationBySlug,
  updatePostBySlug,
  uploadedFile,
} from "../../../api/post";
import { getPostCategory } from "../../../api/post-category";
export default {
  name: "ArticleForm",
  components: { QuillEditor },
  data() {
    return {
      form: {
        titre: "",
        idCategorie: "",
        description: "",
        contenu: "",
      },
      categorie_article: "",
      categories: [],
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
    fetchCategories() {
      getPostCategory().then((result) => {
        this.categories = result.data;
      });
    },
    fetch() {
      getPostBySlug(this.$route.params.slug).then((result) => {
        this.form = result.data;
        this.form.idCategorie = result.data.categorie_article.id;
        this.categorie_article = result.data.categorie_article.nomCategorie;
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
              toast.success("Modification illustration d'article réussi");
              this.$router.push(this.$route.query.redirect || "/admin/article");
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
      updatePostBySlug(
        this.$route.params.slug,
        this.me.sub || this.me.id,
        this.form
      )
        .then(() => {
          this.loadingInfo = false;
          toast.success("Modification article réussi");
          this.$router.push(this.$route.query.redirect || "/admin/article");
        })
        .catch((e) => {
          this.loadingInfo = false;
          toast.info(e.response.data.message);
        });
    },
  },
  mounted() {
    this.avatar();
    this.fetch();
    this.fetchCategories();
  },
};
</script>
<style scoped>
#avatar {
  background-image: url("../../../assets/img/article.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 70px;
  width: 70px;
  border: 3px solid #582456;
  border-radius: 50%;
  transition: background ease-out 200ms;
}
</style>
