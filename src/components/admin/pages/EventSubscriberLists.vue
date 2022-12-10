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
          <th>Nom</th>
          <th>Prénom</th>
          <th>E-mail</th>
          <th>Téléphone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="subscribers.length == 0">
          <td colspan="6">
            <i class="bi bi-exclamation-triangle me-2 text-danger"></i>Aucun
            résultat trouvé
          </td>
        </tr>
        <tr v-for="(subscriber, id) in displayedSubscribers" :key="id">
          <td>{{ id + 1 }}</td>
          <td class="text-muted">{{ subscriber.utilisateur.nom }}</td>
          <td class="text-muted">{{ subscriber.utilisateur.prenom }}</td>
          <td class="text-muted">{{ subscriber.utilisateur.email }}</td>
          <td class="text-muted">{{ subscriber.utilisateur.telephone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <vue-awesome-paginate
    class="d-flex justify-content-center mt-3"
    :total-items="subscribers.length"
    :items-per-page="perPage"
    :max-pages-shown="3"
    v-model="page"
  />
</template>
<script>
import {
  filterEventRegistrationByEvent,
  getEventRegistrationByEvent,
} from "../../../api/event-register";
export default {
  name: "EventSubscriberLists",
  components: {},
  data() {
    return {
      subscribers: [],
      search: "",
      page: 1,
      perPage: 10,
      loadPage: false,
    };
  },
  computed: {
    displayedSubscribers() {
      return this.paginate(this.subscribers);
    },
  },
  methods: {
    fetch() {
      this.loadPage = true;
      getEventRegistrationByEvent(this.$route.params.slug).then((result) => {
        this.subscribers = result.data;
        this.loadPage = false;
      });
    },
    paginate(subscribers) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return subscribers.slice(from, to);
    },
  },
  watch: {
    search() {
      this.loadPage = true;
      getEventRegistrationByEvent(this.$route.params.slug).then((result) => {
        this.subscribers = result.data;
        if (this.subscribers.length !== 0) {
          filterEventRegistrationByEvent(
            this.$route.params.slug,
            this.search
          ).then((result) => {
            this.subscribers = result.data;
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
<style scoped></style>
