<template>
  <AdminLayout>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Evénement</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Evénement</li>
            <li class="breadcrumb-item active">Listes</li>
          </ol>
        </nav>
      </div>
      <!-- <h1 class="text-center p-5">Categories</h1> -->
      <EventLists /></main
  ></AdminLayout>
</template>

<script>
import AdminLayout from "../../components/admin/layouts/AdminLayout.vue";
import EventLists from "../../components/admin/pages/EventLists.vue";
export default {
  name: "Events",
  components: {
    AdminLayout,
    EventLists,
  },
};
</script>
