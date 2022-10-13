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
              Latest article
            </h1>
          </div>
          <div class="col-lg-8 mb-5 mb-lg-0">
            <LatestArticles />
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
import LatestArticles from "./LatestArticles.vue";
import ArticleSide from "./ArticleSide.vue";
export default {
  name: "HomeContent",
  components: {
    LatestArticles,
    ArticleSide,
  },
};
</script>
