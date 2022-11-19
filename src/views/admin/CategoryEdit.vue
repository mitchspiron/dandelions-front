<template>
  <AdminLayout>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Categorie</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Categorie</li>
            <li class="breadcrumb-item active">Mofifier</li>
          </ol>
        </nav>
      </div>
      <!-- <h1 class="text-center p-5">Categories</h1> -->
      <CategoryEditForm /></main
  ></AdminLayout>
</template>

<script>
import AdminLayout from "../../components/admin/layouts/AdminLayout.vue";
import CategoryEditForm from "../../components/admin/pages/CategoryEditForm.vue";
export default {
  name: "CategoryEdit",
  components: {
    AdminLayout,
    CategoryEditForm,
  },
};
</script>
