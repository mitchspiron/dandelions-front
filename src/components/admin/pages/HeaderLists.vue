<template>
  <div class="card border-0 shadow-sm mt-5">
    <table class="table align-middle mb-0 bg-white text-center">
      <thead class="bg-light">
        <tr>
          <th>ID</th>
          <th>Article</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(header, id) in headers" :key="id">
          <td>{{ header.id }}</td>
          <td class="text-muted">{{ header.article }}</td>
          <td>
            <div class="d-flex justify-content-center gap-4">
              <a type="button">
                <i class="fa-regular fa-pen-to-square"></i>
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
  name: "HeaderLists",
  components: {},
  data() {
    return {
      headers: [
        {
          id: 1,
          article: "Marvel Comics",
        },
        {
          id: 2,
          article: "DC Comics",
        },
        {
          id: 3,
          article: "Ring Of Power",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
