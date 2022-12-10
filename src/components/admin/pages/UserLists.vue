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
          v-model="search.searchkey"
        />
      </div>
    </div>
    <div class="col-3 card border-0 shadow-sm">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1"
          ><i class="fa fa-search"></i
        ></span>
        <select
          class="form-select"
          v-model="search.searchRole"
          aria-label="Floating label select example"
          autocomplete="off"
        >
          <option value="" selected>Rôles</option>
          <option value="Administrateur">Administrateur</option>
          <option value="Rédacteur">Rédacteur</option>
          <option value="Visiteur">Visiteur</option>
        </select>
      </div>
    </div>
    <div class="">
      <router-link to="/utilisateur/nouveau" class="btn btn-outline-secondary"
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
    <table class="table align-middle mb-0 bg-white">
      <thead class="bg-light text-center">
        <tr>
          <th>ID</th>
          <th>Profil</th>
          <th>Nom Complet</th>
          <th>Email</th>
          <th>Rôle</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-if="users.length == 0">
          <td colspan="6">
            <i class="bi bi-exclamation-triangle me-2 text-danger"></i>Aucun
            résultat trouvé
          </td>
        </tr>
        <tr class="text-center" v-for="user in displayedUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>
            <img
              :src="PROFIL_IMAGE + user.illustration"
              class="rounded-circle img-thumbnail"
              alt=""
              style="width: 40px; height: 40px"
            />
          </td>
          <td>
            <p class="fw-bold mb-1">{{ user.nom + " " + user.prenom }}</p>
          </td>
          <td>
            <p class="text-muted mb-0">{{ user.email }}</p>
          </td>
          <td class="col-md-1">
            <span
              v-if="user.role_utilisateur.id == 1"
              class="badge bg-success rounded-pill d-inline"
              >{{ user.role_utilisateur.nomRole }}</span
            >
            <span
              v-else-if="user.role_utilisateur.id == 2"
              class="badge bg-info rounded-pill d-inline"
              >{{ user.role_utilisateur.nomRole }}</span
            >
            <span
              v-else
              class="d-flex justify-content-center badge bg-secondary rounded-pill d-inline"
              >{{ user.role_utilisateur.nomRole }}</span
            >
          </td>
          <td>
            <div class="d-flex justify-content-center gap-4">
              <!-- <a type="button">
                <i class="fa-regular fa-eye"></i>
              </a>
              <a type="button">
                <i class="fa-regular fa-pen-to-square"></i>
              </a> -->
              <a type="button">
                <i class="bi bi-trash"></i>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <vue-awesome-paginate
    class="d-flex justify-content-center mt-3"
    :total-items="users.length"
    :items-per-page="perPage"
    :max-pages-shown="3"
    v-model="page"
  />
</template>
<script>
import { filterUsers, getUsers } from "../../../api/users";
import { PROFIL_IMAGE } from "../../../configs";

export default {
  name: "UserLists",
  components: {},
  data() {
    return {
      users: [],
      PROFIL_IMAGE: PROFIL_IMAGE,
      search: {
        searchkey: "",
        searchRole: "",
      },
      page: 1,
      perPage: 10,
      loadPage: false,
    };
  },
  methods: {
    fetch() {
      this.loadPage = true;
      getUsers().then((result) => {
        this.loadPage = false;
        this.users = result.data;
      });
    },
    paginate(users) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return users.slice(from, to);
    },
  },
  computed: {
    displayedUsers() {
      return this.paginate(this.users);
    },
  },
  watch: {
    search: {
      deep: true,
      handler() {
        this.loadPage = true;
        getUsers().then((result) => {
          this.users = result.data;
          if (this.users.length !== 0) {
            filterUsers(this.search).then((result) => {
              this.users = result.data;
              this.loadPage = false;
            });
          }
          this.loadPage = false;
        });
      },
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
<style scoped></style>
