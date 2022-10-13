<template>
  <HomeLayout>
    <ArticleListByCategoryComponent />
  </HomeLayout>
</template>

<script>
import HomeLayout from "../../components/visitor/layout/HomeLayout.vue";
import ArticleListByCategoryComponent from "../../components/visitor/pages/ArticleListByCategoryComponent.vue";
export default {
  name: "ArticleListByCategory",
  components: {
    HomeLayout,
    ArticleListByCategoryComponent,
  },
};
</script>
