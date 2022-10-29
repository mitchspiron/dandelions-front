<template>
  <AdminLayout>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Utilisateur</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Utilisateur</li>
            <li class="breadcrumb-item active">Listes</li>
          </ol>
        </nav>
      </div>
      <!-- <h1 class="text-center p-5">Utilisateurs</h1> -->
      <UserLists /></main
  ></AdminLayout>
</template>

<script>
import AdminLayout from "../../components/admin/layouts/AdminLayout.vue";
import UserLists from "../../components/admin/pages/UserLists.vue";
export default {
  name: "Users",
  components: {
    AdminLayout,
    UserLists,
  },
};
</script>
