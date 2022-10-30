<template>
  <div class="d-flex justify-content-end gap-5">
    <div class="col-3 card border-0 shadow-sm">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1"
          ><i class="fa fa-search"></i
        ></span>
        <input
          type="text"
          class="form-control"
          placeholder="Titre"
          aria-label="Titre"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
    <div class="col-3 card border-0 shadow-sm">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1"
          ><i class="fa fa-search"></i
        ></span>
        <select class="form-select" aria-label="Default select example">
          <option value="" selected disabled>Catégorie</option>
          <option value="1">Tech</option>
          <option value="2">News</option>
        </select>
      </div>
    </div>
    <div class="col-1 card border shadow-sm">
      <div class="form-check form-switch m-auto">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">Top</label>
      </div>
    </div>
    <div class="col-2 card border shadow-sm">
      <div class="form-check form-switch m-auto">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >Recommandé</label
        >
      </div>
    </div>
    <div class="">
      <router-link to="/admin/article/nouveau" class="btn btn-outline-secondary"
        ><i class="fa-solid fa-plus"></i
      ></router-link>
    </div>
  </div>
  <div class="card border-0 shadow-sm mt-3">
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
              <router-link to="/article/slug" type="button">
                <i class="fa-regular fa-eye"></i>
              </router-link>
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
<style scoped>
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: black;
}
</style>
