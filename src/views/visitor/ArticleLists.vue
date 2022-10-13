<template>
  <HomeLayout>
    <ArticleListsComponent />
  </HomeLayout>
</template>

<script>
import HomeLayout from "../../components/visitor/layout/HomeLayout.vue";
import ArticleListsComponent from "../../components/visitor/pages/ArticleListsComponent.vue";
export default {
  name: "ArticleLists",
  components: {
    HomeLayout,
    ArticleListsComponent,
  },
};
</script>
