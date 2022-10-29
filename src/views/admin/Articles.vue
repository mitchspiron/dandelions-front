<template>
  <AdminLayout>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Article</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Article</li>
            <li class="breadcrumb-item active">Listes</li>
          </ol>
        </nav>
      </div>
      <!-- <h1 class="text-center p-5">Articles</h1> -->
      <ArticleLists />
    </main>
  </AdminLayout>
</template>

<script>
import AdminLayout from "../../components/admin/layouts/AdminLayout.vue";
import ArticleLists from "../../components/admin/pages/ArticleLists.vue";
export default {
  name: "Articles",
  components: {
    AdminLayout,
    ArticleLists,
  },
  data() {
    return {};
  },
};
</script>
<style scoped></style>
