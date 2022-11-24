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
    <div
      v-if="(me.roleUser || me.role) == 2 && enterprises.length == 1"
      class=""
    >
      <router-link
        to="/admin/entreprise/nouveau"
        class="visually-hidden btn btn-outline-secondary"
        ><i class="fa-solid fa-plus"></i
      ></router-link>
    </div>
    <div v-else class="">
      <router-link
        to="/admin/entreprise/nouveau"
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
          <th>Nom</th>
          <th>E-mail</th>
          <th>Abonnement</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(enterprise, id) in enterprises" :key="id">
          <td>{{ enterprise.id }}</td>
          <td class="fw-bold mb-1">{{ enterprise.nom }}</td>
          <td class="text-muted mb-0">{{ enterprise.email }}</td>
          <td>
            <div class="form-check form-switch d-flex justify-content-center">
              <input
                v-if="(me.roleUser || me.role) !== 1"
                disabled
                class="form-check-input"
                type="checkbox"
                :checked="enterprise.abonnee"
              />
              <input
                v-else
                class="form-check-input"
                type="checkbox"
                :checked="enterprise.abonnee"
                @input="(event) => (text = event.target.checked)"
                @change="
                  switchToAbonnee(enterprise.slug, enterprise.abonnee, $event)
                "
              />
            </div>
          </td>
          <td>
            <div class="d-flex justify-content-center gap-4">
              <router-link
                :to="{
                  name: 'EnterpriseProfil',
                  params: { slug: enterprise.slug },
                }"
                type="button"
              >
                <i class="fa-regular fa-eye"></i>
              </router-link>
              <router-link
                :to="{
                  name: 'EnterpriseEdit',
                  params: { slug: enterprise.slug },
                }"
                type="button"
              >
                <i class="fa-regular fa-pen-to-square"></i>
              </router-link>
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
import { useToast } from "vue-toastification";
import { getEnterpriseAdmin, isAbonneeBySlug } from "../../../api/enterprise.";
export default {
  name: "EnterpriseLists",
  components: {},
  data() {
    return {
      enterprises: [],
      switch: { abonnee: true || false },
    };
  },
  computed: {
    me() {
      return this.$store.getters["userStore/me"];
    },
  },
  methods: {
    fetch() {
      getEnterpriseAdmin(this.me.sub || this.me.id).then((result) => {
        this.enterprises = result.data;
      });
    },
    switchToAbonnee(slug, etat, event) {
      const toast = useToast();
      if (event.target.checked) {
        this.switch.abonnee = true;
        etat = this.switch;
        isAbonneeBySlug(slug, etat)
          .then(() => {
            toast.success("L'entreprise est abonnée");
            this.fetch();
          })
          .catch(() => {
            toast.error("Une erreur est survenue!");
          });
      } else {
        this.switch.abonnee = false;
        etat = this.switch;
        isAbonneeBySlug(slug, etat)
          .then(() => {
            toast.success("L'entreprise n'est plus abonnée");
            this.fetch();
          })
          .catch(() => {
            toast.error("Une erreur est survenue!");
          });
      }
    },
  },
  mounted() {
    this.fetch();
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
