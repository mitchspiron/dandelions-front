<template>
  <div class="d-flex justify-content-end gap-5">
    <div class="">
      <router-link
        to="/admin/article/categorie/nouveau"
        class="btn btn-outline-secondary"
        ><i class="fa-solid fa-plus"></i
      ></router-link>
    </div>
  </div>
  <div v-if="loadPage" class="mt-5 mb-5 d-flex justify-content-center">
    <div class="breeding-rhombus-spinner">
      <div class="rhombus child-1"></div>
      <div class="rhombus child-2"></div>
      <div class="rhombus child-3"></div>
      <div class="rhombus child-4"></div>
      <div class="rhombus child-5"></div>
      <div class="rhombus child-6"></div>
      <div class="rhombus child-7"></div>
      <div class="rhombus child-8"></div>
      <div class="rhombus big"></div>
    </div>
  </div>
  <div v-else class="card border-0 shadow-sm mt-3">
    <table class="table align-middle mb-0 bg-white text-center">
      <thead class="bg-light">
        <tr>
          <th>N°</th>
          <th>Nom</th>
          <th>Nombre d'article</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, i) in categories" :key="i">
          <td>{{ i + 1 }}</td>
          <td class="text-muted">{{ category.nomCategorie }}</td>
          <td class="text-muted">{{ category._count.article }}</td>
          <td>
            <div class="d-flex justify-content-center gap-4">
              <router-link
                :to="{ name: 'CategoryEdit', params: { id: category.id } }"
                type="button"
              >
                <i class="fa-regular fa-pen-to-square"></i>
              </router-link>
              <a
                data-bs-toggle="modal"
                data-bs-target="#modalDelete"
                @click="initDelete(category.id)"
              >
                <i class="bi bi-trash"></i>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- ------------------------------MODAL DELETE USER----------------------------------------------- -->
  <div
    class="modal fade"
    id="modalDelete"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    aria-labelledby="modalLabelDelete"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 bg-light text-dark">
        <div class="modal-header mx-2">
          <h4 class="modal-title text-dark" id="modalLabelDelete">
            Supprimer une catégorie d'article
          </h4>
        </div>
        <div class="modal-body">
          <section class="row p-2">
            <div class="col-12">
              Etes-vous sûr de vouloir supprimer cette catégorie d'article ?
            </div>
          </section>
        </div>
        <div class="modal-footer mx-2">
          <button
            v-if="loading"
            type="submit"
            class="btn px-3"
            style="background: #582456"
            disabled
          >
            <span
              class="spinner-grow spinner-grow-sm text-white"
              role="status"
              aria-hidden="true"
            ></span>
          </button>
          <button
            v-else
            @click="deleteCategory()"
            type="submit"
            class="btn px-3"
            style="background: #582456"
          >
            <i class="fa-solid fa-check text-white"></i>
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            ref="CloseDelete"
            class="btn bg-dark px-3"
          >
            <i class="fa-solid fa-xmark text-light"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- ------------------------------END MODAL DELETE USER----------------------------------------------- -->
</template>
<script>
import { useToast } from "vue-toastification";
import {
  deletePostCategoryById,
  getPostCategory,
} from "../../../api/post-category";

export default {
  name: "CategoryLists",
  components: {},
  data() {
    return {
      categories: [],
      loadPage: false,
      loading: false,
      idDelete: 0,
    };
  },
  methods: {
    fetch() {
      this.loadPage = true;
      getPostCategory().then((result) => {
        this.categories = result.data;
        this.loadPage = false;
      });
    },
    initDelete(id) {
      this.idDelete = id;
    },
    deleteCategory() {
      this.loading = true;
      deletePostCategoryById(this.idDelete).then(() => {
        const toast = useToast();
        this.loading = false;
        this.$refs.CloseDelete.click();
        this.fetch();
        toast.success("Catégorie d'article supprimée");
      });
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: black;
}
</style>
