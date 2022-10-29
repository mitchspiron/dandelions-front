<template>
  <AdminLayout>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Entreprise</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Entreprise</li>
            <li class="breadcrumb-item active">Listes</li>
          </ol>
        </nav>
      </div>
      <!-- <h1 class="text-center p-5">Entreprises</h1> -->
      <EnterpriseLists /></main
  ></AdminLayout>
</template>

<script>
import AdminLayout from "../../components/admin/layouts/AdminLayout.vue";
import EnterpriseLists from "../../components/admin/pages/EnterpriseLists.vue";
export default {
  name: "EnterprisesAdmin",
  components: {
    AdminLayout,
    EnterpriseLists,
  },
};
</script>
