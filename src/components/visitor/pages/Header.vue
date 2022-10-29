<template>
  <div class="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
    <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(slide, id) in slides" :key="id">
          <div :class="slide.class" data-bs-interval="5000">
            <img class="w-100" :src="slide.img" alt="Image" />
            <div class="carousel-caption">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <h1 class="display-3 text-dark mb-3 animated slideInDown">
                      {{ slide.title }}
                    </h1>
                    <p class="fs-5 mb-3 text-body">
                      {{ slide.text }}
                    </p>
                    <vue3-flip-countdown
                      :deadline="slide.deadline"
                      mainColor="white"
                      secondFlipColor="white"
                    />
                    <div class="col-12 d-flex justify-content-center">
                      <router-link
                        to="/article/slug"
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
export default {
  name: "Header",
  components: {},
  data() {
    return {
      slides: [
        {
          id: 1,
          img: require("../../../assets/img/carousel-1.jpg"),
          title: "Insurance Creates Wealth For Everyone",
          deadline: "2023 - 12 - 12",
          text: `Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                    duo justo magna dolore erat amet`,
          class: "carousel-item active",
        },
        {
          id: 2,
          img: require("../../../assets/img/carousel-2.jpg"),
          title: "The Best Insurance Begins Here",
          deadline: "2022 - 11 - 12",
          text: `Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                    duo justo magna dolore erat amet`,
          class: "carousel-item",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "../../../assets/lib/animate/animate.min.css";

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
