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
              All ours articles
            </h1>
          </div>
          <div class="col-lg-12 mb-5 mb-lg-0">
            <div class="row">
              <div
                class="col-md-4 mb-4"
                v-for="article in articles"
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
                    <ul class="post-meta mb-2">
                      <li>
                        <router-link
                          :to="{
                            name: 'ArticleListByCategory',
                            params: { slug: article.categorie_article.slug },
                          }"
                          >{{
                            article.categorie_article.nomCategorie
                          }}</router-link
                        >
                      </li>
                    </ul>
                    <h2>
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
                        href=""
                        >Read Full Article</router-link
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
import { getPublishedPost } from "../../../api/post";
import { PROFIL_IMAGE } from "../../../configs";
export default {
  name: "ArticleListsComponent",
  components: {},
  data() {
    return {
      articles: [],
      PROFIL_IMAGE: PROFIL_IMAGE,
    };
  },
  methods: {
    fetch() {
      getPublishedPost().then((result) => {
        this.articles = result.data;
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
  background: #b377b1;
  color: #fff;
}

::selection {
  background: #b377b1;
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
  color: #b377b1;
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
