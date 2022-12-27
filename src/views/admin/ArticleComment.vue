<template>
  <AdminLayout>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Article</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Article</li>
            <li class="breadcrumb-item">{{ post.titre }}</li>
            <li class="breadcrumb-item active">Commentaires</li>
          </ol>
        </nav>
      </div>
      <!-- <h1 class="text-center p-5">Articles</h1> -->
      <ArticleCommentForm />
    </main>
  </AdminLayout>
</template>

<script>
import { getPostBySlug } from "../../api/post";
import AdminLayout from "../../components/admin/layouts/AdminLayout.vue";
import ArticleCommentForm from "../../components/admin/pages/ArticleCommentForm.vue";
export default {
  name: "Articles",
  components: {
    AdminLayout,
    ArticleCommentForm,
  },
  data() {
    return {
      post: {},
    };
  },
  methods: {
    fetchPostName() {
      this.loadPage = true;
      getPostBySlug(this.$route.params.slug).then((result) => {
        this.post = result.data;
        this.loadPage = false;
      });
    },
  },
  mounted() {
    this.fetchPostName();
  },
};
</script>
<style scoped></style>
