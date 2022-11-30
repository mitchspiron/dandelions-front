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
          v-model="search.role"
          aria-label="Floating label select example"
          autocomplete="off"
        >
          <option value="" selected>Rôles</option>
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
          <th>Profil</th>
          <th>Nom Complet</th>
          <th>Email</th>
          <th>Rôle</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-if="noUser">
          <td colspan="6">
            <i class="bi bi-exclamation-triangle me-2 text-danger"></i>Aucun
            résultat trouvé
          </td>
        </tr>
        <tr class="text-center" v-for="user in users" :key="user.id">
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
import { filterUsers, getUsers } from "../../../api/users";
import { PROFIL_IMAGE } from "../../../configs";

export default {
  name: "UserLists",
  components: {},
  data() {
    return {
      users: [],
      PROFIL_IMAGE: PROFIL_IMAGE,
      /* searchkey: "",
      role: "", */
      search: {
        searchkey: "",
        role: "",
      },
      noUser: 0,
    };
  },
  computed: {
    combined() {
      return this.searchkey && this.role;
    },
  },
  methods: {
    fetch() {
      getUsers().then((result) => {
        this.users = result.data;
      });
    },
  },
  watch: {
    search: {
      deep: true,
      handler() {
        console.log(this.search);
        filterUsers(this.search).then((result) => {
          this.users = result.data;
          if (result.data == "") {
            this.noUser = true;
          } else {
            this.noUser = false;
          }
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
