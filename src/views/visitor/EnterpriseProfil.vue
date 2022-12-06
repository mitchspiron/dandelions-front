<template>
  <div
    v-if="loadPage"
    class="m-auto d-flex justify-content-center align-items-center vh-100"
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
  <div v-else>
    <HomeLayout>
      <!-- Page Header Start -->
      <div
        class="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <h1 class="display-4 animated slideInDown mb-4">
            {{ enterprises.nom }}
          </h1>
        </div>
      </div>
      <!-- Page Header End -->

      <!-- About Start -->
      <div class="container-xxl mb-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                class="position-relative overflow-hidden rounded ps-5 pt-5 h-100"
                style="min-height: 400px"
              >
                <img
                  class="position-absolute img-thumbnail border-0 w-100 h-100"
                  :src="PROFIL_IMAGE + enterprises.illustration"
                  alt=""
                  style="object-fit: cover"
                />
                <div
                  class="position-absolute top-0 start-0 bg-white rounded pe-3 pb-3"
                  style="width: 200px; height: 200px"
                >
                  <div
                    class="d-flex flex-column justify-content-center text-center rounded h-100 p-3"
                    style="background: #582456"
                  >
                    <h1 class="text-white mb-0">
                      {{ new Date().getFullYear() - enterprises.anneeCreation }}
                    </h1>
                    <h2 class="text-white">Années</h2>
                    <h5 class="text-white mb-0">Experience</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="h-100">
                <h1 class="display-6 mb-5">
                  {{ enterprises.brand }}
                </h1>
                <p class="fs-5 mb-4" style="color: #582456">
                  {{ enterprises.descriptionA }}
                </p>
                <p class="mb-4">
                  {{ enterprises.descriptionB }}
                </p>
                <!-- <div class="mt-4 pt-4">
                <div class="d-flex align-items-center">
                  <h5 class="mb-0">
                    Contact us: +012 345 6789 / info@example.com
                  </h5>
                </div>
              </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About End -->

      <!-- Facts Start -->
      <!-- <div class="container-fluid overflow-hidden px-lg-0">
      <div class="container facts px-lg-0">
        <div class="row g-0 mx-lg-0">
          <div class="col-lg-6 facts-text wow fadeIn" data-wow-delay="0.1s">
            <div class="h-100 px-3 ps-lg-0">
              <h1 class="text-white mb-4">For Individuals And Organisations</h1>
              <p class="text-light mb-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <a
                href=""
                class="align-center btn py-3 px-5 text-light"
                style="background: #582456"
                >Visite us here -></a
              >
            </div>
          </div>
          <div class="col-lg-6 facts-counter wow fadeIn" data-wow-delay="0.5s">
            <div class="h-100 px-4 pe-lg-0">
              <div class="row g-5">
                <div class="col-sm-6">
                  <h1 class="display-5" data-toggle="counter-up">1234</h1>
                  <p class="fs-5" style="color: #582456">Happy Clients</p>
                </div>
                <div class="col-sm-6">
                  <h1 class="display-5" data-toggle="counter-up">1234</h1>
                  <p class="fs-5" style="color: #582456">Projects Succeed</p>
                </div>
                <div class="col-sm-6">
                  <h1 class="display-5" data-toggle="counter-up">1234</h1>
                  <p class="fs-5" style="color: #582456">Awards Achieved</p>
                </div>
                <div class="col-sm-6">
                  <h1 class="display-5" data-toggle="counter-up">1234</h1>
                  <p class="fs-5" style="color: #582456">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

      <div v-if="enterprises.abonnee == true" class="py-14 bg-cto">
        <div class="container">
          <div class="row">
            <div class="offset-lg-2 col-lg-8 col-md-12 col-12 text-center">
              <!-- heading  -->
              <h4 class="display-3 mt-2 mb-2 text-white fw-bold">
                To know more about us
              </h4>
              <!-- para  -->
              <p class="lead text-white-50 px-lg-8 mb-6">
                {{ enterprises.textContact }}
              </p>
              <a
                :href="enterprises.urlWebsite"
                class="align-center btn py-3 px-5 text-light mb-3"
                style="background: #582456"
                >Visitez-nous ici <i class="bi bi-arrow-right-square-fill"></i
              ></a>
              <h5 class="mb-3 text-white">
                Contactez-nous: {{ enterprises.telephone }} /
                {{ enterprises.email }}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <!-- Facts End -->
    </HomeLayout>
  </div>
</template>

<script>
import { getEnterpriseBySlug } from "../../api/enterprise.";
import HomeLayout from "../../components/visitor/layout/HomeLayout.vue";
import { PROFIL_IMAGE } from "../../configs";
export default {
  name: "EnterpriseProfil",
  components: {
    HomeLayout,
  },
  data() {
    return {
      enterprises: [],
      PROFIL_IMAGE: PROFIL_IMAGE,
      loadPage: false,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.loadPage = true;
      getEnterpriseBySlug(this.$route.params.slug).then((result) => {
        this.enterprises = result.data;
        this.loadPage = false;
      });
    },
  },
};
</script>
<style scoped>
@import "../../assets/lib/animate/animate.min.css";

/* Page header */
.page-header {
  background: url(../../assets/img/carousel-1.jpg) center center no-repeat;
  background-size: cover;
}

/*** Facts ***/
@media (min-width: 992px) {
  .container.facts {
    max-width: 100% !important;
  }

  .container.facts .facts-text {
    padding-left: calc(((100% - 960px) / 2) + 0.75rem);
  }

  .container.facts .facts-counter {
    padding-right: calc(((100% - 960px) / 2) + 0.75rem);
  }
}

@media (min-width: 1200px) {
  .container.facts .facts-text {
    padding-left: calc(((100% - 1140px) / 2) + 0.75rem);
  }

  .container.facts .facts-counter {
    padding-right: calc(((100% - 1140px) / 2) + 0.75rem);
  }
}

@media (min-width: 1400px) {
  .container.facts .facts-text {
    padding-left: calc(((100% - 1320px) / 2) + 0.75rem);
  }

  .container.facts .facts-counter {
    padding-right: calc(((100% - 1320px) / 2) + 0.75rem);
  }
}

.container.facts .facts-text {
  background: linear-gradient(to left, #582456, #b377b1),
    url(../../assets/img/carousel-1.jpg) center right no-repeat;
  background-size: cover;
}

.bg-cto {
  background: linear-gradient(to left, #582456, #b377b1);
}

.container.facts .facts-counter {
  background: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    url(../../assets/img/carousel-2.jpg) center right no-repeat;
  background-size: cover;
}

.container.facts .facts-text .h-100,
.container.facts .facts-counter .h-100 {
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
