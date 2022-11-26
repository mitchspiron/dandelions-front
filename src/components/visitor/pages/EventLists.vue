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
          <div class="col-lg-12 mb-5 mb-lg-0">
            <div class="row">
              <div
                v-for="(event, i) in events"
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
                      <!-- pagination -->
                      <nav class="mb-md-50">
                        <ul class="pagination justify-content-center">
                          <li class="page-item">
                            <a
                              href=""
                              class="page-link"
                              aria-label="Pagination Arrow"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                                />
                              </svg>
                            </a>
                          </li>
                          <li class="page-item active">
                            <a href="" class="page-link"> 1 </a>
                          </li>
                          <li class="page-item">
                            <a href="" class="page-link"> 2 </a>
                          </li>
                          <li class="page-item">
                            <a
                              class="page-link"
                              href=""
                              aria-label="Pagination Arrow"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </nav>
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
import { getEvenement } from "../../../api/event";
export default {
  name: "EnterpriseLists",
  components: {},
  data() {
    return {
      events: [],
    };
  },
  methods: {
    fetch() {
      getEvenement().then((result) => {
        this.events = result.data;
      });
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
<style scoped>
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
.pagination {
  justify-content: center;
}
.pagination .page-item .page-link {
  display: inline-block;
  width: 42px;
  height: 42px;
  border-radius: 0;
  border: 1px solid #ececec;
  text-align: center;
  margin: 0 4px;
  font-weight: 500;
  color: #131313;
  padding: 0;
  line-height: 41px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
}
.pagination .page-item .page-link:focus,
.pagination .page-item .page-link:hover {
  box-shadow: none;
  background: #582456;
  color: #fff;
}
.pagination .page-item:first-child .page-link,
.pagination .page-item:last-child .page-link {
  border-radius: 0;
}
.pagination .page-item.active .page-link {
  background: #582456;
  color: #fff;
  border-color: #582456;
}
</style>
