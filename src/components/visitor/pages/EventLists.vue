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
              Nos Coming-Soon
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
          <div
            v-if="loadPage"
            class="col-lg-12 mt-5 mb-5 mb-lg-0 d-flex justify-content-center align-items-center"
          >
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
          <!-- --------- -->
          <div v-else class="col-lg-12 mb-5 mb-lg-0">
            <div class="row">
              <div
                v-if="events.length == 0"
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
                      <h3 class="line-titre">
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
                          class="text-light rounded-pill d-inline col-5 text-center"
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
      page: 1,
      perPage: 6,
      loadPage: false,
    };
  },
  methods: {
    fetch() {
      this.loadPage = true;
      getEvenement().then((result) => {
        this.events = result.data;
        this.loadPage = false;
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
      this.loadPage = true;
      getEvenement().then((result) => {
        this.events = result.data;
        if (this.events.length !== 0) {
          filterEvenement(this.search).then((result) => {
            this.events = result.data;
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
.line-titre {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
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

.breeding-rhombus-spinner {
  height: 65px;
  width: 65px;
  position: relative;
  transform: rotate(45deg);
}

.breeding-rhombus-spinner,
.breeding-rhombus-spinner * {
  box-sizing: border-box;
}

.breeding-rhombus-spinner .rhombus {
  height: calc(65px / 7.5);
  width: calc(65px / 7.5);
  animation-duration: 2000ms;
  top: calc(65px / 2.3077);
  left: calc(65px / 2.3077);
  background-color: #582456;
  position: absolute;
  animation-iteration-count: infinite;
}

.breeding-rhombus-spinner .rhombus:nth-child(2n + 0) {
  margin-right: 0;
}

.breeding-rhombus-spinner .rhombus.child-1 {
  animation-name: breeding-rhombus-spinner-animation-child-1;
  animation-delay: calc(100ms * 1);
}

.breeding-rhombus-spinner .rhombus.child-2 {
  animation-name: breeding-rhombus-spinner-animation-child-2;
  animation-delay: calc(100ms * 2);
}

.breeding-rhombus-spinner .rhombus.child-3 {
  animation-name: breeding-rhombus-spinner-animation-child-3;
  animation-delay: calc(100ms * 3);
}

.breeding-rhombus-spinner .rhombus.child-4 {
  animation-name: breeding-rhombus-spinner-animation-child-4;
  animation-delay: calc(100ms * 4);
}

.breeding-rhombus-spinner .rhombus.child-5 {
  animation-name: breeding-rhombus-spinner-animation-child-5;
  animation-delay: calc(100ms * 5);
}

.breeding-rhombus-spinner .rhombus.child-6 {
  animation-name: breeding-rhombus-spinner-animation-child-6;
  animation-delay: calc(100ms * 6);
}

.breeding-rhombus-spinner .rhombus.child-7 {
  animation-name: breeding-rhombus-spinner-animation-child-7;
  animation-delay: calc(100ms * 7);
}

.breeding-rhombus-spinner .rhombus.child-8 {
  animation-name: breeding-rhombus-spinner-animation-child-8;
  animation-delay: calc(100ms * 8);
}

.breeding-rhombus-spinner .rhombus.big {
  height: calc(65px / 3);
  width: calc(65px / 3);
  animation-duration: 2000ms;
  top: calc(65px / 3);
  left: calc(65px / 3);
  background-color: #582456;
  animation: breeding-rhombus-spinner-animation-child-big 2s infinite;
  animation-delay: 0.5s;
}

@keyframes breeding-rhombus-spinner-animation-child-1 {
  50% {
    transform: translate(-325%, -325%);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-2 {
  50% {
    transform: translate(0, -325%);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-3 {
  50% {
    transform: translate(325%, -325%);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-4 {
  50% {
    transform: translate(325%, 0);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-5 {
  50% {
    transform: translate(325%, 325%);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-6 {
  50% {
    transform: translate(0, 325%);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-7 {
  50% {
    transform: translate(-325%, 325%);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-8 {
  50% {
    transform: translate(-325%, 0);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-big {
  50% {
    transform: scale(0.5);
  }
}
</style>
