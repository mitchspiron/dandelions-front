<template>
  <AdminLayout>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Tableau de bord</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Tableau de bord</li>
          </ol>
        </nav>
      </div>
      <!-- <h1 class="text-center p-5">Categories</h1> -->
      <DashboardContent /></main
  ></AdminLayout>
</template>

<script>
import AdminLayout from "../../components/admin/layouts/AdminLayout.vue";
import DashboardContent from "../../components/admin/pages/DashboardContent.vue";
export default {
  name: "Events",
  components: {
    AdminLayout,
    DashboardContent,
  },
};
</script>
