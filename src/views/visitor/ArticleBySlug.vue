<template>
  <HomeLayout>
    <main>
      <section class="section">
        <div class="container">
          <div class="row no-gutters-lg">
            <div class="col-lg-8 mb-5 mb-lg-0">
              <ArticleContent />
              <Comment />
            </div>
            <div class="col-lg-4">
              <ArticleSide />
            </div>
          </div>
        </div>
      </section>
    </main>
  </HomeLayout>
</template>

<script>
import HomeLayout from "../../components/visitor/layout/HomeLayout.vue";
import ArticleContent from "../../components/visitor/pages/ArticleContent.vue";
import ArticleSide from "../../components/visitor/pages/ArticleSide.vue";
import Comment from "../../components/visitor/pages/Comment.vue";
export default {
  name: "Home",
  components: {
    HomeLayout,
    ArticleContent,
    ArticleSide,
    Comment,
  },
};
</script>
