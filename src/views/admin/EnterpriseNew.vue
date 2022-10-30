<template>
  <AdminLayout>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Entreprise</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Entreprise</li>
            <li class="breadcrumb-item active">Nouveau</li>
          </ol>
        </nav>
      </div>
      <!-- <h1 class="text-center p-5">Entreprises</h1> -->
      <EnterpriseForm /></main
  ></AdminLayout>
</template>

<script>
import AdminLayout from "../../components/admin/layouts/AdminLayout.vue";
import EnterpriseForm from "../../components/admin/pages/EnterpriseForm.vue";
export default {
  name: "EnterpriseNew",
  components: {
    AdminLayout,
    EnterpriseForm,
  },
};
</script>
