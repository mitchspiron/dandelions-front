<template>
  <div class="col-lg-12 mb-5 mb-lg-0">
    <article>
      <img
        loading="lazy"
        decoding="async"
        :src="illustration"
        alt="Post Thumbnail"
        class="w-100 img-thumbnail"
        style=""
      />
      <ul class="post-meta mb-2 mt-4">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            style="margin-right: 5px; margin-top: -4px"
            class="text-dark"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.5 10.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
            />
            <path
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"
            />
            <path
              d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"
            />
          </svg>
          <span>{{ createdAt }}</span>
        </li>
      </ul>
      <h1 class="my-3">{{ posts.titre }}</h1>
      <ul class="post-meta mb-4">
        <li>
          <router-link to="/article/categorie">{{
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
</template>

<script>
import { getPostBySlug } from "../../../api/post";
import { PROFIL_IMAGE } from "../../../configs";
export default {
  name: "ArticleContent",
  components: {},
  data() {
    return {
      posts: [],
      categorie_article: "",
      illustration: "",
      createdAt: Date.now(),
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      getPostBySlug(this.$route.params.slug).then((result) => {
        this.posts = result.data;
        this.categorie_article = result.data.categorie_article.nomCategorie;
        this.illustration = PROFIL_IMAGE + result.data.illustration;
        let options = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const dateCreation = new Date(result.data.createdAt);
        this.createdAt = dateCreation.toLocaleDateString("Fr-fr", options);
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
  color: #13ae6f;
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
