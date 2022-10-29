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
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
    <div class="">
      <a href="" class="btn btn-outline-secondary"
        ><i class="fa-solid fa-plus"></i
      ></a>
    </div>
  </div>
  <div class="card border-0 shadow-sm mt-3">
    <table class="table align-middle mb-0 bg-white text-center">
      <thead class="bg-light">
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>E-mail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(enterprise, id) in enterprises" :key="id">
          <td>{{ enterprise.id }}</td>
          <td class="fw-bold mb-1">{{ enterprise.name }}</td>
          <td class="text-muted mb-0">{{ enterprise.email }}</td>
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
  name: "EnterpriseLists",
  components: {},
  data() {
    return {
      enterprises: [
        {
          id: 1,
          name: "Mk-co",
          email: "votre-objectif@mk-co.org",
        },
        {
          id: 2,
          name: "Dandelions",
          email: "example@gmail.com",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
