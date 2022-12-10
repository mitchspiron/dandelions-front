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
  <div v-else class="col-lg-12 mb-5 mb-lg-0">
    <article>
      <img
        loading="lazy"
        decoding="async"
        :src="PROFIL_IMAGE + posts.illustration"
        alt="Post Thumbnail"
        class="w-100 img-thumbnail"
        style=""
      />
      <ul class="post-meta mb-2 mt-4">
        <li>
          <i class="bi bi-calendar-plus me-1"></i>
          <span>{{
            new Date(posts.createdAt).toLocaleDateString("Fr-fr", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}</span>
        </li>
      </ul>
      <h1 class="my-3">{{ posts.titre }}</h1>
      <ul class="post-meta mb-4">
        <li>
          <router-link :to="{ path: '/article/categorie/' + slug_category }">{{
            categorie_article
          }}</router-link>
        </li>
      </ul>
      <div class="content text-left">
        <div v-html="posts.contenu"></div>
      </div>
    </article>
  </div>
  <!-- -------------------- -->
  <div v-if="isLoggedIn && (me.sub || me.id) == 1" class="dropdown d-grid">
    <button
      class="btn block dropdown-toggle text-white"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      style="background: #582456"
    >
      Définir l'état de l'article
    </button>
    <ul class="dropdown-menu">
      <li>
        <a
          class="btn dropdown-item"
          @click="updateStatus(posts.slug, (posts.etat = 2))"
          >en cours d'éxamen</a
        >
      </li>
      <li>
        <a
          class="btn dropdown-item"
          @click="updateStatus(posts.slug, (posts.etat = 3))"
          >à corriger</a
        >
      </li>
      <li>
        <a
          class="btn dropdown-item"
          @click="updateStatus(posts.slug, (posts.etat = 4))"
          >réfusé</a
        >
      </li>
      <li>
        <a
          class="btn dropdown-item"
          @click="updateStatus(posts.slug, (posts.etat = 5))"
          >publié</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import { getPostBySlug, updateStateBySlug } from "../../../api/post";
import { PROFIL_IMAGE } from "../../../configs";
export default {
  name: "ArticleContent",
  components: {},
  data() {
    return {
      posts: [],
      categorie_article: "",
      slug_category: "",
      PROFIL_IMAGE: PROFIL_IMAGE,
      loadPage: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["userStore/isLoggedIn"];
    },
    me() {
      return this.$store.getters["userStore/me"];
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.loadPage = true;
      getPostBySlug(this.$route.params.slug).then((result) => {
        this.loadPage = false;
        this.posts = result.data;
        this.categorie_article = result.data.categorie_article.nomCategorie;
        this.slug_category = result.data.categorie_article.slug;
      });
    },
    updateStatus(slug, etat) {
      const toast = useToast();
      etat = this.posts;
      this.loadPage = true;
      updateStateBySlug(slug, etat)
        .then((result) => {
          toast.success("Article " + result.data.etat_article.nomEtat);
          this.fetch();
          this.loadPage = false;
          this.$router.push("/admin/article");
        })
        .catch(() => {
          this.loadPage = false;
          toast.error("Une erreur est survenue!");
        });
    },
  },
};
</script>
<style scoped>
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
  background-color: rgba(61, 234, 164, 0.25);
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

/* ------------------------ */
</style>
