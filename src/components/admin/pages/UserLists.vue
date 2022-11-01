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
          placeholder="Nom complet"
          aria-label="fullname"
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
          <option value="" selected disabled>Rôles</option>
          <option value="1">Administrateur</option>
          <option value="2">Rédacreur</option>
          <option value="3">Visiteur</option>
        </select>
      </div>
    </div>
    <div class="">
      <router-link to="/utilisateur/nouveau" class="btn btn-outline-secondary"
        ><i class="fa-solid fa-plus"></i
      ></router-link>
    </div>
  </div>
  <div class="card border-0 shadow-sm mt-3">
    <table class="table align-middle mb-0 bg-white">
      <thead class="bg-light text-center">
        <tr>
          <th>ID</th>
          <th>Nom Complet / E-mail</th>
          <th>Rôle</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center">1</td>
          <td>
            <div class="d-flex justify-content-center">
              <img
                src="../../../assets/img/profile.jpg"
                class="rounded-circle"
                alt=""
                style="width: 45px; height: 45px"
              />
              <div class="ms-3">
                <p class="fw-bold mb-1">Kate Hunington</p>
                <p class="text-muted mb-0">kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td class="col-md-1">
            <span
              class="d-flex justify-content-center badge bg-success rounded-pill d-inline"
              >Administrateur</span
            >
          </td>
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
  name: "UserLists",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped></style>
