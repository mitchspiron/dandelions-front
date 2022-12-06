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
          <th>ID</th>
          <th>Nom</th>
          <th>Nombre d'article</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
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
              <a type="button">
                <i class="bi bi-trash"></i>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { getPostCategory } from "../../../api/post-category";

export default {
  name: "CategoryLists",
  components: {},
  data() {
    return {
      categories: [],
      loadPage: false,
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
