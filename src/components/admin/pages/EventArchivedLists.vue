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
          placeholder="ex: Séminaire"
          aria-describedby="basic-addon1"
          v-model="search"
        />
      </div>
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
    <table class="table align-middle mb-0 bg-white text-center">
      <thead class="bg-light">
        <tr>
          <th>ID</th>
          <th>Titre</th>
          <th>Archivage</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="evenements.length == 0">
          <td colspan="6">
            <i class="bi bi-exclamation-triangle me-2 text-danger"></i>Aucun
            résultat trouvé
          </td>
        </tr>
        <tr v-for="evenement in displayedEvents" :key="evenement.id">
          <td>{{ evenement.id }}</td>
          <td class="text-muted">{{ evenement.titre }}</td>
          <td>
            <div class="form-check form-switch d-flex justify-content-center">
              <input
                v-if="(me.roleUser || me.role) !== 1"
                disabled
                class="form-check-input"
                type="checkbox"
                :checked="evenement.isArchived"
              />
              <input
                v-else
                class="form-check-input"
                type="checkbox"
                :checked="evenement.isArchived"
                @input="(event) => (text = event.target.checked)"
                @change="
                  switchIsArchived(evenement.slug, evenement.isArchived, $event)
                "
              />
            </div>
          </td>
          <td>
            <div class="d-flex justify-content-center gap-4">
              <router-link
                :to="{
                  name: 'EventSubscribers',
                  params: { slug: evenement.slug },
                }"
                type="button"
                ><i class="fa-solid fa-list"></i
              ></router-link>
              <router-link
                :to="{ name: 'EventBySlug', params: { slug: evenement.slug } }"
                type="button"
              >
                <i class="fa-regular fa-eye"></i>
              </router-link>
              <router-link
                :to="{ name: 'EventEdit', params: { slug: evenement.slug } }"
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
  <vue-awesome-paginate
    class="d-flex justify-content-center mt-3"
    :total-items="evenements.length"
    :items-per-page="perPage"
    :max-pages-shown="3"
    v-model="page"
  />
</template>
<script>
import { useToast } from "vue-toastification";
import {
  filterEvenementArchivedAdmin,
  getEvenementArchivedAdmin,
  switchIsArchivedBySlug,
} from "../../../api/event";
export default {
  name: "EventLists",
  components: {},
  data() {
    return {
      evenements: [],
      switch: { isArchived: true || false },
      search: "",
      page: 1,
      perPage: 10,
      loadPage: false,
    };
  },
  computed: {
    me() {
      return this.$store.getters["userStore/me"];
    },
    displayedEvents() {
      return this.paginate(this.evenements);
    },
  },
  methods: {
    fetch() {
      this.loadPage = true;
      getEvenementArchivedAdmin(this.me.sub || this.me.id).then((result) => {
        this.evenements = result.data;
        this.loadPage = false;
      });
    },
    switchIsArchived(slug, etat, event) {
      const toast = useToast();
      if (event.target.checked) {
        this.switch.isArchived = true;
        etat = this.switch;
        switchIsArchivedBySlug(slug, etat)
          .then(() => {
            toast.success("L'évenement est archivé");
            this.fetch();
          })
          .catch(() => {
            toast.error("Une erreur est survenue!");
          });
      } else {
        this.switch.isArchived = false;
        etat = this.switch;
        switchIsArchivedBySlug(slug, etat)
          .then(() => {
            toast.success("L'évenement n'est plus archivé");
            this.fetch();
          })
          .catch(() => {
            toast.error("Une erreur est survenue!");
          });
      }
    },
    paginate(evenements) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return evenements.slice(from, to);
    },
  },
  watch: {
    search() {
      this.loadPage = true;
      getEvenementArchivedAdmin(this.me.sub || this.me.id).then((result) => {
        this.evenements = result.data;
        if (this.evenements.length !== 0) {
          filterEvenementArchivedAdmin(
            this.me.sub || this.me.id,
            this.search
          ).then((result) => {
            this.evenements = result.data;
            this.loadPage = false;
          });
        }
        this.loadPage = false;
      });
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
