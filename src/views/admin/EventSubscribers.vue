<template>
  <AdminLayout>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Evénement</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Evénement</li>
            <li class="breadcrumb-item">Event-Name</li>
            <li class="breadcrumb-item active">Liste inscrit</li>
          </ol>
        </nav>
      </div>
      <!-- <h1 class="text-center p-5">Categories</h1> -->
      <EventSubscriberLists /></main
  ></AdminLayout>
</template>

<script>
import AdminLayout from "../../components/admin/layouts/AdminLayout.vue";
import EventSubscriberLists from "../../components/admin/pages/EventSubscriberLists.vue";
export default {
  name: "EventSubscriber",
  components: {
    AdminLayout,
    EventSubscriberLists,
  },
};
</script>
