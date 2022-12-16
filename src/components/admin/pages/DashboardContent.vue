<template>
  <section class="section">
    <div class="row">
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card border-0 shadow-lg mb-3">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center me-auto">
                  <img
                    src="../../../assets/img/chart/user-chart.png"
                    class="float-left img-thumbnail border-0"
                    style="height: 100px; width: 100px"
                  />
                </div>
                <div class="media-body align-self-center text-end me-3">
                  <h3>{{ users }}</h3>
                  <span>Utilisateurs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card border-0 shadow-lg mb-3">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center me-auto">
                  <img
                    src="../../../assets/img/chart/enterprise-chart.png"
                    class="float-left img-thumbnail border-0"
                    style="height: 100px; width: 100px"
                  />
                </div>
                <div class="media-body align-self-center text-end me-3">
                  <h3>{{ enterprises }}</h3>
                  <span>Entreprises</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card border-0 shadow-lg mb-3">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center me-auto">
                  <img
                    src="../../../assets/img/chart/post-chart.png"
                    class="float-left img-thumbnail border-0"
                    style="height: 100px; width: 100px"
                  />
                </div>
                <div class="media-body align-self-center text-end me-3">
                  <h3>{{ posts }}</h3>
                  <span>Articles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card border-0 shadow-lg mb-3">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center me-auto">
                  <img
                    src="../../../assets/img/chart/event-chart.png"
                    class="float-left img-thumbnail border-0"
                    style="height: 100px; width: 100px"
                  />
                </div>
                <div class="media-body align-self-center text-end me-3">
                  <h3>{{ events }}</h3>
                  <span>Evénements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ------------------------- -->
  <section class="section">
    <div class="row">
      <UserChart />
      <EnterpriseChart />
      <PostChart />
      <EventChart />
    </div>
  </section>
</template>

<script>
import UserChart from "./UserChart.vue";
import EnterpriseChart from "./EnterpriseChart.vue";
import PostChart from "./PostChart.vue";
import EventChart from "./EventChart.vue";
import {
  getAllCountEnterprises,
  getAllCountEvents,
  getAllCountPosts,
  getAllCountUsers,
} from "../../../api/dashboard";
export default {
  name: "DashboardContent",
  components: {
    UserChart,
    EnterpriseChart,
    PostChart,
    EventChart,
  },
  data() {
    return {
      users: null,
      enterprises: null,
      posts: null,
      events: null,
    };
  },
  methods: {
    fetchUsers() {
      getAllCountUsers().then((result) => {
        this.users = result.data;
      });
    },
    fetchEnterprises() {
      getAllCountEnterprises().then((result) => {
        this.enterprises = result.data;
      });
    },
    fetchPosts() {
      getAllCountPosts().then((result) => {
        this.posts = result.data;
      });
    },
    fetchEvents() {
      getAllCountEvents().then((result) => {
        this.events = result.data;
      });
    },
  },
  mounted() {
    this.fetchUsers();
    this.fetchEnterprises();
    this.fetchPosts();
    this.fetchEvents();
  },
};
</script>
