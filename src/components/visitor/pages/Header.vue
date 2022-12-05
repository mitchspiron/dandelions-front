<template>
  <div class="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
    <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(slide, i) in slides" :key="i">
          <div v-if="i == 0">
            <div class="carousel-item active" data-bs-interval="5000">
              <img
                class="w-100 img-thumbnail border-0 opacity-50"
                :src="PROFIL_IMAGE + slide.illustration"
                alt="Image"
              />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <h1 class="display-3 text-dark mb-3 animated slideInDown">
                        {{ slide.titre }}
                      </h1>
                      <p class="fs-5 mb-3 text-body description">
                        {{ slide.description }}
                      </p>
                      <vue3-flip-countdown
                        :deadline="slide.deadline.split('T')[0]"
                        mainColor="white"
                        secondFlipColor="white"
                      />
                      <div class="col-12 d-flex justify-content-center">
                        <router-link
                          :to="{
                            name: 'EventBySlug',
                            params: { slug: slide.slug },
                          }"
                          class="btn btn-lg mt-4 text-light"
                          style="background-color: #582456"
                        >
                          More Details
                          <i class="fa fa-solid fa-arrow-right"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="carousel-item" data-bs-interval="5000">
              <img
                class="w-100 img-thumbnail border-0 opacity-50"
                :src="PROFIL_IMAGE + slide.illustration"
                alt="Image"
              />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <h1 class="display-3 text-dark mb-3 animated slideInDown">
                        {{ slide.titre }}
                      </h1>
                      <p class="fs-5 mb-3 text-body description">
                        {{ slide.description }}
                      </p>
                      <vue3-flip-countdown
                        :deadline="slide.deadline.split('T')[0]"
                        mainColor="white"
                        secondFlipColor="white"
                      />
                      <div class="col-12 d-flex justify-content-center">
                        <router-link
                          :to="{
                            name: 'EventBySlug',
                            params: { slug: slide.slug },
                          }"
                          class="btn btn-lg mt-4 text-light"
                          style="background-color: #582456"
                        >
                          More Details
                          <i class="fa fa-solid fa-arrow-right"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>
import { getEvenementOnHeader } from "../../../api/event";
import { PROFIL_IMAGE } from "../../../configs";
export default {
  name: "Header",
  components: {},
  data() {
    return {
      slides: [],
      PROFIL_IMAGE: PROFIL_IMAGE,
    };
  },
  methods: {
    fetch() {
      getEvenementOnHeader().then((result) => {
        this.slides = result.data;
      });
    },
  },
  async setup() {
    const res = await getEvenementOnHeader();
    const finalRes = await res.data;
    /* console.log("header", finalRes); */
    const header = [finalRes];
    //console.log("header", header);
    return header;
  },
  mounted() {
    this.fetch();
  },
};
</script>

<style scoped>
@import "../../../assets/lib/animate/animate.min.css";

.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.carousel-caption,
.flip-clock {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  text-align: start;
}

.carousel-control-prev,
.carousel-control-next {
  width: 15%;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 3rem;
  height: 3rem;
  background-color: #833681;
  border: 15px solid #833681;
  border-radius: 50px;
}

@media (max-width: 768px) {
  #header-carousel .carousel-item {
    position: relative;
    min-height: 450px;
  }

  #header-carousel .carousel-item img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* .page-header {
  background: url(../../../assets/img/carousel-1.jpg) center center no-repeat;
  background-size: cover;
}
 */
.page-header .breadcrumb-item,
.page-header .breadcrumb-item a {
  font-weight: 500;
}

.page-header .breadcrumb-item a,
.page-header .breadcrumb-item + .breadcrumb-item::before {
  color: #696e77;
}

.page-header .breadcrumb-item a:hover,
.page-header .breadcrumb-item.active {
  color: var(--primary);
}
</style>
