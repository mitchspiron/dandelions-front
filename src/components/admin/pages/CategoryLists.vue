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
  <div class="card border-0 shadow-sm mt-3">
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
    };
  },
  methods: {
    fetch() {
      getPostCategory().then((result) => {
        this.categories = result.data;
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
