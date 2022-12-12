<template>
  <AdminLayout>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Potentiel rédacteur</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Demande</li>
            <li class="breadcrumb-item active">Listes</li>
          </ol>
        </nav>
      </div>
      <!-- <h1 class="text-center p-5">Utilisateurs</h1> -->
      <RequestLists /></main
  ></AdminLayout>
</template>

<script>
import AdminLayout from "../../components/admin/layouts/AdminLayout.vue";
import RequestLists from "../../components/admin/pages/RequestLists.vue";
export default {
  name: "Requests",
  components: {
    AdminLayout,
    RequestLists,
  },
};
</script>
