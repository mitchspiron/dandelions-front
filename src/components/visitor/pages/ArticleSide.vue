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
  <div v-else class="widget-blocks">
    <div class="row">
      <div class="col-lg-12">
        <div class="widget">
          <div class="widget-body">
            <img
              loading="lazy"
              decoding="async"
              src="../../../assets/img/author.jpg"
              alt="About Me"
              class="w-100 author-thumb-sm img-thumbnail d-block"
            />
            <h2 class="widget-title my-3 text-center">
              Représentez-vous une entreprise ?
            </h2>
            <p class="mb-3 pb-2 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              excepturi laboriosam eius distinctio vel natus quia quaerat
              placeat, magni voluptates soluta maxime atque consectetur totam
              eos numquam asperiores explicabo quod.
            </p>
            <form @submit.prevent="confirm" class="d-grid gap-2 mx-auto">
              <!-- <a
                v-if="loading"
                class="btn btn-sm btn-outline-primary d-flex justify-content-center"
                ><div class="spinner-grow spinner-grow-sm me-1" role="status">
                  <span class="visually-hidden">Chargement...</span>
                </div>
                Chargement...</a
              > -->
              <a
                v-if="loading"
                class="btn btn-md btn-outline-primary d-flex justify-content-center"
                type="button"
                disabled
              >
                <span
                  class="spinner-grow spinner-grow-sm me-1"
                  role="status"
                  aria-hidden="true"
                ></span>
                Chargement...
              </a>
              <button
                v-else
                @click="checkIsLoggin"
                class="btn btn-md btn-outline-primary d-flex justify-content-center"
                type="submit"
              >
                Rejoignez-nous
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        v-if="tops.length !== 0 || recommandations.length !== 0"
        class="col-lg-12 col-md-6"
      >
        <div class="widget">
          <h2 class="section-title mb-3">Recommandé</h2>
          <div class="widget-body">
            <div class="widget-list">
              <div v-if="tops.length !== 0">
                <article v-for="top in tops" :key="top.id" class="card mb-4">
                  <div class="card-image">
                    <img
                      loading="lazy"
                      decoding="async"
                      :src="PROFIL_IMAGE + top.illustration"
                      alt="Post Thumbnail"
                      class="w-100 img-thumbnail"
                    />
                  </div>
                  <div class="card-body px-0 pb-1">
                    <h3>
                      <router-link
                        :to="{
                          name: 'ArticleBySlug',
                          params: { slug: top.slug },
                        }"
                        class="post-title post-title-sm"
                        href=""
                        >{{ top.titre }}</router-link
                      >
                    </h3>
                    <p class="card-text description">
                      {{ top.description }}
                    </p>
                    <div class="content">
                      <router-link
                        :to="{
                          name: 'ArticleBySlug',
                          params: { slug: top.slug },
                        }"
                        class="read-more-btn"
                        href=""
                        >En savoir plus en détail</router-link
                      >
                    </div>
                  </div>
                </article>
              </div>
              <div v-if="recommandations.length !== 0">
                <div
                  class="media"
                  v-for="(recommandation, i) in recommandations"
                  :key="i"
                >
                  <router-link
                    :to="{
                      name: 'ArticleBySlug',
                      params: { slug: recommandation.slug },
                    }"
                    class="d-flex align-items-center"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      :src="PROFIL_IMAGE + recommandation.illustration"
                      alt="Post Thumbnail"
                      class="w-100 img-thumbnail"
                    />
                    <div class="media-body">
                      <h3 style="margin-top: -5px">
                        {{ recommandation.titre }}
                      </h3>
                      <p class="mb-0 small description">
                        {{ recommandation.description }}
                      </p>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-md-6">
        <div class="widget">
          <h2 class="section-title mb-3">Categories</h2>
          <div class="widget-body">
            <ul class="widget-list">
              <li v-for="category in categories" :key="category.id">
                <router-link
                  :to="{
                    name: 'ArticleListByCategory',
                    params: { slug: category.slug },
                  }"
                  >{{ category.nomCategorie
                  }}<span class="ml-auto"
                    >({{ category._count.article }})</span
                  ></router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import { getRecommandedPost, getTopPost } from "../../../api/post";
import { getPostCategory } from "../../../api/post-category";
import { createWriterRequest } from "../../../api/writer-request";
import { PROFIL_IMAGE } from "../../../configs";
import { decodeToken } from "../../../utils/decodeToken";
export default {
  name: "ArticleSide",
  components: {},
  data() {
    return {
      categories: [],
      recommandations: [],
      tops: [],
      PROFIL_IMAGE: PROFIL_IMAGE,
      loading: false,
      loadPage: false,
      form: {
        idUtilisateur: null,
      },
    };
  },
  computed: {
    me() {
      return this.$store.getters["userStore/me"];
    },
    isLoggedIn() {
      return this.$store.getters["userStore/isLoggedIn"];
    },
  },
  methods: {
    fetch() {
      this.loadPage = true;
      getPostCategory().then((result) => {
        this.loadPage = false;
        this.categories = result.data;
      });
    },
    fetchRecommandation() {
      this.loadPage = true;
      getRecommandedPost().then((result) => {
        this.loadPage = false;
        this.recommandations = result.data;
      });
    },
    fetchTop() {
      this.loadPage = true;
      getTopPost().then((result) => {
        this.loadPage = false;
        this.tops = result.data;
      });
    },
    confirm() {
      const toast = useToast();
      this.form.idUtilisateur = this.me.sub || this.me.id;
      createWriterRequest(this.form)
        .then(() => {
          this.loading = false;
          this.$swal(
            "Demande envoyé",
            "Nous vous informerons de la suite par email",
            "success"
          );
        })
        .catch((e) => {
          this.loading = false;
          toast.info(e.response.data.message);
        });
    },
    checkIsLoggin() {
      const toast = useToast();
      try {
        const decodeV = decodeToken(localStorage.getItem("dandelions_token"));
        if (decodeV) {
          //console.log("ok visiteur");
        }
      } catch (err) {
        toast.info("Vous devez être connecté!");
        this.$router.push(`/se-connecter`);
      }
    },
  },
  mounted() {
    this.fetch();
    this.fetchRecommandation();
    this.fetchTop();
  },
};
</script>

<style scoped>
.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

p {
  font-weight: 400;
  color: #333;
  font-size: 16px;
  line-height: 1.6;
  font-family: "Work Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  color: #131313;
  font-family: "Neuton", serif;
  font-weight: 700;
  line-height: 1.3;
}

h1,
.h1 {
  font-size: 36px;
}
@media (max-width: 991px) {
  h1,
  .h1 {
    font-size: 30px;
  }
}
@media (max-width: 767px) {
  h1,
  .h1 {
    font-size: 26px;
  }
}

h2,
.h2 {
  font-size: 28px;
}
@media (max-width: 767px) {
  h2,
  .h2 {
    font-size: 24px;
  }
}

h3,
.h3 {
  font-size: 22px;
}
@media (max-width: 767px) {
  h3,
  .h3 {
    font-size: 20px;
  }
}

h4,
.h4 {
  font-size: 20px;
}

h5,
.h5 {
  font-size: 16px;
}

h6,
.h6 {
  font-size: 14px;
}

.btn {
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  text-transform: capitalize;
  padding: 10px 25px;
  border-radius: 0;
  border: 1px solid;
  position: relative;
  z-index: 1;
  transition: 0.2s ease;
}
.btn:hover,
.btn:active,
.btn.active .btn:focus,
.btn.focus {
  outline: 0;
  box-shadow: none !important;
}

.btn-outline-primary {
  background: transparent;
  color: #582456;
  border-color: #582456;
}
.btn-outline-primary:hover,
.btn-outline-primary:active,
.btn-outline-primary.active .btn-outline-primary:focus,
.btn-outline-primary.focus {
  background: #582456 !important;
  border-color: #582456 !important;
  color: #fff;
}

.btn-sm {
  font-size: 14px;
  padding: 10px 25px;
}

::-moz-selection {
  background: #582456;
  color: #fff;
}

::selection {
  background: #582456;
  color: #fff;
}

img {
  vertical-align: middle;
  border: 0;
  max-width: 100%;
  height: auto;
}

a,
a:hover,
a:focus {
  text-decoration: none;
}

a {
  cursor: pointer;
  transition: 0.2s ease;
}
a:focus {
  outline: 0;
}

a:hover {
  color: #582456;
}

.section-title {
  position: relative;
  z-index: 1;
  margin-bottom: 15px;
}
.section-title::before {
  position: absolute;
  height: 4px;
  width: 100%;
  content: "";
  left: 0;
  top: 0;
  z-index: -1;
}

.card {
  border: 0;
  position: relative;
}

.card-image {
  position: relative;
}
.card-image img {
  border-radius: 0;
}
.card-image .post-info {
  position: absolute;
  right: 0;
  top: -5px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.card-image .post-info span {
  display: inline-block;
  line-height: 1.3;
  font-size: 12px;
  padding: 3px 8px;
  padding-top: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  color: #fff;
  border-radius: 0;
  margin-top: 5px;
}

.read-more-btn {
  font-family: "Neuton", serif;
  font-size: 18px;
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
.post-title-sm {
  background-size: 0% 3px;
}

a.post-title:hover {
  color: #000;
  background-size: 100% 8px;
}

a.post-title-sm:hover {
  background-size: 100% 3px;
}

.image-fallback {
  font-size: 0;
  height: 220px;
  width: 100%;
  background-color: #f2f2f2;
  text-align: center;
  border-radius: 0;
  display: inline-block;
}
.image-fallback::first-letter {
  font-size: 80px;
  line-height: 220px;
  font-weight: bold;
  color: #19234c;
}

.image-fallback-xs {
  height: 80px;
  width: 80px;
}
.image-fallback-xs::first-letter {
  font-size: 38px;
  line-height: 80px;
}

.content a {
  color: inherit !important;
  display: inline;
  text-decoration: none;
  background-image: linear-gradient(#b377b1, #b377b1);
  background-position: 0% 110%;
  background-repeat: no-repeat;
  background-size: 100% 3px;
  transition: 0.3s;
}
.content a:hover {
  color: #000;
  background-size: 100% 100%;
}

/* widget */
.widget-blocks {
  padding-left: 20px;
}
@media (max-width: 991px) {
  .widget-blocks {
    padding-left: 0;
  }
}
.widget-blocks .row > .col:last-child .widget,
.widget-blocks .row > [class*="col-"]:last-child .widget {
  margin-bottom: 0 !important;
}

.widget {
  margin-bottom: 50px;
}
.widget-body {
  padding: 30px;
  background-color: #fff;
  border-radius: 0;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
}
@media (max-width: 1200px) {
  .widget-body-sm {
    padding: 20px;
  }
}
@media (max-width: 991px) {
  .widget-body {
    padding: 25px;
  }
}
@media (max-width: 575px) {
  .widget-body {
    padding: 15px;
  }
}
.widget-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.widget-list .card {
  border-bottom: 1px dashed #ececec;
  padding-bottom: 15px;
}
.widget-list .media img {
  height: 80px;
  width: 80px !important;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 0;
}

.media-body {
  margin-left: 15px;
}
.widget-list .media:not(:last-child) {
  border-bottom: 1px dashed #ececec;
  margin-bottom: 15px;
  padding-bottom: 15px;
}
.widget-list .media:hover {
  opacity: 0.8;
}
.widget-list li {
  display: inline-block;
}
.widget-list li a {
  background-color: rgba(19, 19, 19, 0.05);
  color: black;
  text-transform: capitalize;
  padding: 6px 16px;
  margin-bottom: 9px;
  margin-right: 9px;
  display: block;
  font-size: 14px;
  border-radius: 0;
}
.widget-list li a:hover {
  background-color: #b377b1;
}

.author-thumb-sm {
  height: 150px;
  -o-object-fit: cover;
  object-fit: cover;
}
@media (max-width: 991px) {
  .author-thumb-sm {
    height: 250px;
  }
}
@media (max-width: 767px) {
  .author-thumb-sm {
    height: 200px;
  }
}
</style>
