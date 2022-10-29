<template>
  <div class="card border-0 shadow-sm mt-5">
    <table class="table align-middle mb-0 bg-white text-center">
      <thead class="bg-light">
        <tr>
          <th>ID</th>
          <th>Titre</th>
          <th>Catégorie</th>
          <th>Top</th>
          <th>Recommandé</th>
          <th>Publier</th>
          <th>Etat</th>
          <th>Nb.Commentaire</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td class="fw-bold">Marvel Comics</td>
          <td class="text-muted">News</td>
          <td>
            <div class="form-check form-switch d-flex justify-content-center">
              <input class="form-check-input" type="checkbox" />
            </div>
          </td>
          <td>
            <div class="form-check form-switch d-flex justify-content-center">
              <input class="form-check-input" type="checkbox" />
            </div>
          </td>
          <td>
            <div class="form-check form-switch d-flex justify-content-center">
              <input class="form-check-input" type="checkbox" />
            </div>
          </td>
          <td>
            <span
              class="badge bg-success rounded-pill d-inline d-flex justify-content-center"
              >publié</span
            >
          </td>
          <td class="text-muted">5</td>
          <td>
            <div class="d-flex justify-content-center gap-4">
              <a type="button">
                <i class="fa-regular fa-eye"></i>
              </a>
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
  name: "ArticleLists",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped></style>
