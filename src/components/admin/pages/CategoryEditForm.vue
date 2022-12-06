<template>
  <form
    @submit.prevent="confirm"
    autocomplete="off"
    class="col-md-12 shadow-lg border-0 mb-5"
  >
    <div class="card border-0">
      <div class="card-body">
        <p class="text-uppercase text-sm">Saisir une nouvelle catégorie</p>
        <div class="row">
          <div class="col-md-12 mb-3">
            <div class="form-group form-floating">
              <input
                v-model="form.nomCategorie"
                class="form-control"
                type="text"
                autocomplete="off"
                required
              />
              <label for="example-text-input" class="form-control-label"
                >Catégorie</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer py-2 px-3">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <h4 class="mb-0">Ajout catégorie</h4>
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
    </div>
  </form>
</template>
<script>
import { useToast } from "vue-toastification";
import {
  getPostCategoryById,
  updatePostCategoryById,
} from "../../../api/post-category";
export default {
  name: "CategoryEditForm",
  components: {},
  data() {
    return {
      loading: false,
      form: {
        nomCategorie: "",
      },
    };
  },
  methods: {
    fetch() {
      getPostCategoryById(this.$route.params.id).then((result) => {
        this.form = result.data;
      });
    },
    confirm() {
      this.loading = true;
      const toast = useToast();
      updatePostCategoryById(this.$route.params.id, this.form)
        .then(() => {
          this.loading = false;
          toast.success("Catégorie d'article modifié");
          this.$router.push(
            this.$route.query.redirect || "/admin/article/categorie"
          );
        })
        .catch((e) => {
          toast.info(e.response.data.message);
        });
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
<style scoped></style>
