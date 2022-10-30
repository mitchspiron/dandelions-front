<template>
  <AdminLayout>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Categorie</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Categorie</li>
            <li class="breadcrumb-item active">Nouveau</li>
          </ol>
        </nav>
      </div>
      <!-- <h1 class="text-center p-5">Categories</h1> -->
      <CategoryForm /></main
  ></AdminLayout>
</template>

<script>
import AdminLayout from "../../components/admin/layouts/AdminLayout.vue";
import CategoryForm from "../../components/admin/pages/CategoryForm.vue";
export default {
  name: "CategoryNew",
  components: {
    AdminLayout,
    CategoryForm,
  },
};
</script>
