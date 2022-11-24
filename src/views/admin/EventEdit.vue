<template>
  <AdminLayout>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Evénement</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Evénement</li>
            <li class="breadcrumb-item active">Modifier</li>
          </ol>
        </nav>
      </div>
      <!-- <h1 class="text-center p-5">Categories</h1> -->
      <EventEditForm /></main
  ></AdminLayout>
</template>

<script>
import AdminLayout from "../../components/admin/layouts/AdminLayout.vue";
import EventEditForm from "../../components/admin/pages/EventEditForm.vue";
export default {
  name: "EventNew",
  components: {
    AdminLayout,
    EventEditForm,
  },
};
</script>
