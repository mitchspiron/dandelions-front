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
          <th>Type</th>
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
          <td>
            <p class="text-muted mb-0 text-center">Particulier</p>
          </td>
          <td>
            <span
              class="d-flex justify-content-center badge bg-success rounded-pill d-inline"
              >admin</span
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
