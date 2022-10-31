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
    <div class="col-2 card border shadow-sm">
      <div class="form-check form-switch m-auto">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >Header</label
        >
      </div>
    </div>
    <div class="">
      <router-link
        to="/admin/evenement/nouveau"
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
          <th>Titre</th>
          <th>Header</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, id) in events" :key="id">
          <td>{{ event.id }}</td>
          <td class="text-muted">{{ event.article }}</td>
          <td>
            <div class="form-check form-switch d-flex justify-content-center">
              <input class="form-check-input" type="checkbox" />
            </div>
          </td>
          <td>
            <div class="d-flex justify-content-center gap-4">
              <a type="button"><i class="fa-solid fa-list"></i></a>
              <router-link to="/evenement/slug" type="button">
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
  name: "EventLists",
  components: {},
  data() {
    return {
      events: [
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
<style scoped>
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: black;
}
</style>
