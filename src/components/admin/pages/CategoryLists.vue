<template>
  <div class="card border-0 shadow-sm mt-5">
    <table class="table align-middle mb-0 bg-white text-center">
      <thead class="bg-light">
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, id) in categories" :key="id">
          <td>{{ category.id }}</td>
          <td class="text-muted">{{ category.name }}</td>
          <td>
            <div class="d-flex justify-content-center gap-4">
              <a type="button">
                <i class="fa-regular fa-pen-to-square"></i>
              </a>
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
export default {
  name: "CategoryLists",
  components: {},
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "Technology",
        },
        {
          id: 2,
          name: "News",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
