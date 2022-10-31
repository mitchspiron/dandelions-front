<template>
  <HomeLayout>
    <main>
      <section class="section">
        <div class="container">
          <div class="row no-gutters-lg">
            <div class="col-lg-8 mb-5 mb-lg-0">
              <EventContent />
            </div>
            <div class="col-lg-4">
              <EventSide />
            </div>
          </div>
        </div>
      </section>
    </main>
  </HomeLayout>
</template>

<script>
import HomeLayout from "../../components/visitor/layout/HomeLayout.vue";
import EventContent from "../../components/visitor/pages/EventContent.vue";
import EventSide from "../../components/visitor/pages/EventSide.vue";
export default {
  name: "EventBySlug",
  components: {
    HomeLayout,
    EventContent,
    EventSide,
  },
};
</script>
