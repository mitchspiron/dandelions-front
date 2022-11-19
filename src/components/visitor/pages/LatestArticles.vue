<template>
  <div class="col-12 mb-4">
    <article class="card article-card">
      <router-link to="/article/slug">
        <div class="card-image">
          <div class="post-info">
            <span class="text-uppercase">04 Jun 2021</span>
          </div>
          <img
            loading="lazy"
            decoding="async"
            src="../../../assets/img/post/post-1.jpg"
            alt="Post Thumbnail"
            class="w-100"
          />
        </div>
      </router-link>
      <div class="card-body px-0 pb-1">
        <ul class="post-meta mb-2">
          <li>
            <router-link to="/article/categorie" href="#!">travel</router-link>
            <router-link to="/article/categorie" href="#!">news</router-link>
          </li>
        </ul>
        <h2 class="h1">
          <router-link to="/article/slug" class="post-title" href="article.html"
            >Is it Ethical to Travel Now? With that Freedom Comes
            Responsibility.</router-link
          >
        </h2>
        <p class="card-text">
          Heading Here is example of hedings. You can use this heading by
          following markdownify rules. For example: use # for heading 1 and use
          ###### for heading 6.
        </p>
        <div class="content">
          <router-link to="/article/slug" class="read-more-btn"
            >Read Full Article</router-link
          >
        </div>
      </div>
    </article>
  </div>
  <div class="row">
    <div class="col-md-6 mb-4" v-for="(article, i) in articles" :key="i">
      <article class="card article-card article-card-sm h-100">
        <router-link to="/article/slug">
          <div class="card-image">
            <div class="post-info">
              <span class="text-uppercase">{{ article.date }}</span>
            </div>
            <img
              loading="lazy"
              decoding="async"
              :src="article.img"
              alt="Post Thumbnail"
              class="w-100"
            />
          </div>
        </router-link>
        <div class="card-body px-0 pb-0">
          <ul class="post-meta mb-2">
            <li>
              <router-link to="/article/categorie">{{
                article.category
              }}</router-link>
            </li>
          </ul>
          <h2>
            <router-link to="/article/slug" class="post-title">{{
              article.title
            }}</router-link>
          </h2>
          <p class="card-text">
            {{ article.text }}
          </p>
          <div class="content">
            <router-link to="/article/slug" class="read-more-btn"
              >Read Full Article</router-link
            >
          </div>
        </div>
      </article>
    </div>
  </div>
  <div class="d-grid gap-2 col-6 mx-auto">
    <router-link to="/article" class="btn btn-sm btn-outline-primary"
      >Show More</router-link
    >
  </div>
</template>

<script>
export default {
  name: "LatestArticles",
  components: {},
  data() {
    return {
      articles: [
        {
          img: require("../../../assets/img/post/ls-2.jpg"),
          title: "What to Do in Houston: Ideas for Your Visit",
          category: "lifestyle",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                …`,
          date: "02 Jun 2021",
        },
        {
          img: require("../../../assets/img/post/cr-1.jpg"),
          title: "What to Do in Houston: Ideas for Your Visit",
          category: "lifestyle",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                …`,
          date: "02 Jun 2021",
        },
        {
          img: require("../../../assets/img/post/cr-2.jpg"),
          title: "What to Do in Houston: Ideas for Your Visit",
          category: "lifestyle",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                …`,
          date: "02 Jun 2021",
        },
        {
          img: require("../../../assets/img/post/post-4.jpg"),
          title: "What to Do in Houston: Ideas for Your Visit",
          category: "lifestyle",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                …`,
          date: "02 Jun 2021",
        },
      ],
    };
  },
};
</script>
<style scoped>
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
