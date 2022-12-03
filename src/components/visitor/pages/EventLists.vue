<template>
  <main>
    <section class="section">
      <div class="container">
        <div class="row no-gutters-lg">
          <div class="col-12">
            <h1
              class="mb-4 d-inline-block"
              style="border-bottom: 1px solid #582456"
            >
              Coming-Soon
            </h1>
          </div>
          <!-- --------- -->
          <div class="d-flex justify-content-center align-items-center mb-4">
            <div
              class="col-10 d-flex justify-content-center align-items-center gap-2"
            >
              <div class="shadow-lg border-0 rounded col-md-6 mb-2">
                <div class="form input-group">
                  <span
                    class="input-group-text bg-white border-0"
                    id="basic-addon1"
                    ><i class="bi bi-file-text"></i
                  ></span>
                  <input
                    type="text"
                    class="form-control form-input"
                    placeholder="Commencez votre recherche..."
                    v-model="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- --------- -->
          <div class="col-lg-12 mb-5 mb-lg-0">
            <div class="row">
              <div
                v-if="noEvent"
                class="col-md-12 d-flex justify-content-center align-items-center"
              >
                <h2>
                  <i class="bi bi-exclamation-triangle me-2 text-danger"></i
                  >Aucun résultat trouvé
                </h2>
              </div>
              <div
                v-for="(event, i) in displayedEvents"
                :key="i"
                class="card mb-3 m-auto border-0 shadow-sm"
                style="max-width: 400px"
              >
                <div class="row g-0">
                  <div class="col-md-12">
                    <div class="card-body">
                      <h3>
                        <router-link
                          :to="{ path: '/evenement/' + event.slug }"
                          class="post-title fw-bold"
                          >{{ event.titre }}</router-link
                        >
                      </h3>
                      <p class="card-text description">
                        {{ event.description }}
                      </p>
                      <p class="card-text d-flex">
                        <small class="text-muted me-auto">{{
                          event.entreprise.nom
                        }}</small>
                        <small
                          class="text-light rounded-pill d-inline col-4 text-center"
                          style="background: #582456; opacity: 0.6"
                          >{{
                            new Date(event.deadline).toLocaleDateString(
                              "Fr-fr",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )
                          }}</small
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-12">
                    <nav class="mt-4">
                      <vue-awesome-paginate
                        class="d-flex justify-content-center"
                        :total-items="events.length"
                        :items-per-page="perPage"
                        :max-pages-shown="3"
                        v-model="page"
                      />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { filterEvenement, getEvenement } from "../../../api/event";
export default {
  name: "EnterpriseLists",
  components: {},
  data() {
    return {
      events: [],
      search: "",
      noEvent: 0,
      page: 1,
      perPage: 6,
    };
  },
  methods: {
    fetch() {
      getEvenement().then((result) => {
        this.events = result.data;
      });
    },
    paginate(events) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return events.slice(from, to);
    },
  },
  computed: {
    displayedEvents() {
      return this.paginate(this.events);
    },
  },
  watch: {
    search() {
      filterEvenement(this.search).then((result) => {
        this.events = result.data;
        if (result.data == "") {
          this.noEvent = true;
        } else {
          this.noEvent = false;
        }
      });
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
<style scoped>
.form {
  position: relative;
}

.form-input {
  height: 55px;
  text-indent: 33px;
  border-radius: 10px;
  border: none;
}
.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.post-title {
  color: #000;
  display: inline;
  text-decoration: none;
  background-image: linear-gradient(#b377b1, #b377b1);
  background-position: 0% 80%;
  background-repeat: no-repeat;
  background-size: 0% 8px;
  transition: background-size 0.3s;
}

a.post-title:hover {
  color: #000;
  background-size: 100% 8px;
}
</style>
