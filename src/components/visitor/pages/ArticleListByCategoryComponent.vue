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
              {{ category.nomCategorie }}
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
          <div v-else class="col-lg-8 mb-5 mb-lg-0">
            <div class="row">
              <div
                v-if="articles.length == 0"
                class="col-md-12 d-flex justify-content-center align-items-center"
              >
                <h2>
                  <i class="bi bi-exclamation-triangle me-2 text-danger"></i
                  >Aucun résultat trouvé
                </h2>
              </div>
              <div
                class="col-md-6 mb-4"
                v-for="article in displayedPosts"
                :key="article.id"
              >
                <article class="card article-card article-card-sm h-100">
                  <router-link
                    :to="{
                      name: 'ArticleBySlug',
                      params: { slug: article.slug },
                    }"
                  >
                    <div class="card-image">
                      <div class="post-info">
                        <span class="text-uppercase">{{
                          new Date(article.createdAt).toLocaleDateString(
                            "Fr-fr",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )
                        }}</span>
                      </div>
                      <img
                        loading="lazy"
                        decoding="async"
                        :src="PROFIL_IMAGE + article.illustration"
                        alt="Post Thumbnail"
                        class="img-thumbnail"
                      />
                    </div>
                  </router-link>
                  <div class="card-body px-0 pb-0">
                    <h2 class="line-titre">
                      <router-link
                        :to="{
                          name: 'ArticleBySlug',
                          params: { slug: article.slug },
                        }"
                        class="post-title"
                        >{{ article.titre }}</router-link
                      >
                    </h2>
                    <p class="card-text description">
                      {{ article.description }}
                    </p>
                    <div class="content">
                      <router-link
                        :to="{
                          name: 'ArticleBySlug',
                          params: { slug: article.slug },
                        }"
                        class="read-more-btn"
                        >En savoir plus en détail</router-link
                      >
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-12">
                    <nav class="mt-4">
                      <vue-awesome-paginate
                        class="d-flex justify-content-center"
                        :total-items="articles.length"
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
          <div class="col-lg-4">
            <ArticleSide />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import {
  filterPublishedPostBySlug,
  getPublishedPostBySlug,
} from "../../../api/post";
import { getCategoryBySlug } from "../../../api/post-category";
import { PROFIL_IMAGE } from "../../../configs";
import ArticleSide from "./ArticleSide.vue";
export default {
  name: "ArticleListByCategoryComponent",
  components: {
    ArticleSide,
  },
  data() {
    return {
      articles: [],
      category: {},
      titre: "",
      search: "",
      PROFIL_IMAGE: PROFIL_IMAGE,
      page: 1,
      perPage: 6,
      loadPage: false,
    };
  },
  methods: {
    fetch() {
      this.loadPage = true;
      getPublishedPostBySlug(this.$route.params.slug).then((result) => {
        this.articles = result.data;
        this.loadPage = false;
      });
    },
    fetchCategoryName() {
      this.loadPage = true;
      getCategoryBySlug(this.$route.params.slug).then((result) => {
        this.category = result.data;
        this.loadPage = false;
      });
    },
    paginate(articles) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return articles.slice(from, to);
    },
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.articles);
    },
  },
  watch: {
    search() {
      this.loadPage = true;
      getPublishedPostBySlug(this.$route.params.slug).then((result) => {
        this.articles = result.data;
        if (this.articles.length !== 0) {
          filterPublishedPostBySlug(this.$route.params.slug, this.search).then(
            (result) => {
              this.articles = result.data;
              this.loadPage = false;
            }
          );
        }
        this.loadPage = false;
      });
    },
  },
  mounted() {
    this.fetch();
    this.fetchCategoryName();
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
  height: 240px;
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

.article-card {
  padding: 30px;
  border-radius: 0;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
}
@media (max-width: 1200px) {
  .article-card-sm {
    padding: 20px;
  }
}
@media (max-width: 991px) {
  .article-card {
    padding: 25px;
  }
}
@media (max-width: 575px) {
  .article-card {
    padding: 15px;
  }
}

.card {
  border: 0;
  position: relative;
}

.card-img {
  height: 200px;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
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

.post-meta {
  padding-left: 0;
}
.post-meta li {
  list-style-type: none;
  display: inline-block;
  color: #888;
  font-weight: 500;
}
.post-meta li a {
  display: inline-block;
  background-color: rgba(19, 19, 19, 0.05);
  color: black;
  text-transform: capitalize;
  padding: 2px 8px;
  margin-bottom: 8px;
  margin-right: 2px;
  font-size: 14px;
  border-radius: 0;
}
.post-meta li a:hover {
  background-color: #b377b1;
}

.content * {
  margin-bottom: 5px;
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
</style>
