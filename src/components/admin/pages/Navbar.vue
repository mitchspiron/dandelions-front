<template>
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="d-flex align-items-center justify-content-between">
      <router-link to="/" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="" />
        <span class="d-none d-lg-block">Dandelions Admin</span>
      </router-link>
    </div>
    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">
        <li class="nav-item dropdown">
          <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i class="bi bi-bell"></i>
            <span class="badge bg-primary badge-number">2</span>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications"
          >
            <li class="dropdown-header">You have 4 new notifications</li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="notification-item">
              <i class="bi bi-exclamation-circle text-warning"></i>
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="notification-item">
              <i class="bi bi-info-circle text-primary"></i>
              <div>
                <h4>Dicta reprehenderit</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>4 hrs. ago</p>
              </div>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown pe-3">
          <a
            v-if="isLoggedIn"
            class="nav-link nav-profile d-flex align-items-center pe-0"
            data-bs-toggle="dropdown"
          >
            <img
              :src="PROFIL_IMAGE + (me.illustrationUser || me.illustration)"
              style="width: 37px; height: 40px"
              alt="Profile"
              class="rounded-circle img-thumbnail"
            />
            <span class="d-none d-md-block dropdown-toggle ps-2">{{
              me.prenomUser || me.prenom
            }}</span>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"
          >
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <router-link
                to="/mon-espace"
                class="dropdown-item d-flex align-items-center"
              >
                <i class="bi bi-person"></i>
                <span>Mon espace</span>
              </router-link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                @click="disconnect"
              >
                <i class="bi bi-box-arrow-right"></i>
                <span>Se déconnecter</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { useToast } from "vue-toastification";
import { PROFIL_IMAGE } from "../../../configs";
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      PROFIL_IMAGE: PROFIL_IMAGE,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["userStore/isLoggedIn"];
    },
    me() {
      return this.$store.getters["userStore/me"];
    },
  },
  methods: {
    redirectToProfil() {
      this.$router.push(`/mon-espace/`);
    },
    disconnect() {
      const toast = useToast();
      localStorage.removeItem("dandelions_token");
      this.$store.dispatch("userStore/setUser", {});
      this.$store.dispatch("userStore/setDisconnected");
      this.$router.push(this.$route.query.redirect || "/");
      toast.info("Vous êtes déconnecté");
    },
  },
};
</script>
<style scoped>
a {
  color: #4154f1;
  text-decoration: none;
}

a:hover {
  color: #717ff5;
  text-decoration: none;
}
</style>
