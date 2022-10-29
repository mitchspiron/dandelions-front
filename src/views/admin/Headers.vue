<template>
  <AdminLayout>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Header</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Header</li>
            <li class="breadcrumb-item active">Listes</li>
          </ol>
        </nav>
      </div>
      <!-- <h1 class="text-center p-5">Categories</h1> -->
      <HeaderLists /></main
  ></AdminLayout>
</template>

<script>
import AdminLayout from "../../components/admin/layouts/AdminLayout.vue";
import HeaderLists from "../../components/admin/pages/HeaderLists.vue";
export default {
  name: "Headers",
  components: {
    AdminLayout,
    HeaderLists,
  },
};
</script>
