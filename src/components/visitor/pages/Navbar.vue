<template>
  <nav
    class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5"
  >
    <!-- <button
      type="button"
      class="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <a
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
      class="btn text-light navbar-toggler"
      style="background-color: #582456"
    >
      <i class="bi bi-list"></i>
    </a>
    <router-link to="/" class="navbar-brand d-flex align-items-center">
      <h1 class="m-0">
        <img
          class="img-fluid"
          src="../../../assets/img/Dandelions-logo-cropped.svg"
          alt=""
          width="200"
        /><!-- Dandelions -->
      </h1>
    </router-link>
    <div class="collapse navbar-collapse me- uto" id="navbarCollapse">
      <div class="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
        <router-link to="/" href="#" class="nav-item nav-link active"
          >Accueil</router-link
        >
        <router-link to="/article" class="nav-item nav-link"
          >Article</router-link
        >
        <router-link to="/evenement" class="nav-item nav-link"
          >Coming-Soon</router-link
        >
        <router-link to="/entreprise" class="nav-item nav-link"
          >Entreprise</router-link
        >
        <router-link to="/contact" class="nav-item nav-link"
          >Contact</router-link
        >
        <router-link
          to="/admin"
          v-if="[1, 2].includes(me.roleUser || me.role)"
          class="nav-item nav-link"
        >
          <div class="position-relative">
            <span
              class="position-absolute top-0 start-100 translate-end p-1 bg-success border border-0 rounded-circle"
            >
            </span>
          </div>
          Administration
        </router-link>
      </div>
    </div>
    <router-link
      v-if="!isLoggedIn"
      to="/se-connecter"
      class="btn text-light"
      style="background-color: #582456"
    >
      <i class="fa-solid fa-right-to-bracket"></i>
    </router-link>
    <a
      v-if="isLoggedIn"
      class="nav-link nav-profile d-flex align-items-center pe-3"
      data-bs-toggle="dropdown"
    >
      <img
        :src="PROFIL_IMAGE + (me.illustrationUser || me.illustration)"
        style="width: 40px; height: 40px"
        class="rounded-circle img-thumbnail border-0"
      />
      <span class="d-none d-md-block dropdown-toggle ps-2">{{
        me.prenomUser || me.prenom
      }}</span>
    </a>
    <ul
      class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile me-5"
    >
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
        <a class="dropdown-item d-flex align-items-center" @click="disconnect">
          <i class="bi bi-box-arrow-right"></i>
          <span>Se déconnecter</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { PROFIL_IMAGE } from "../../../configs/index";
import { useToast } from "vue-toastification";
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
  text-decoration: none;
  cursor: pointer;
}
.navbar.sticky-top {
  top: -100px;
  transition: 0.5s;
}

.navbar .navbar-brand img {
  max-height: 60px;
}

.navbar .navbar-nav .nav-link {
  margin-left: 30px;
  padding: 10px 0;
  color: #696e77;
  font-weight: 500;
  outline: none;
}

.navbar .navbar-nav .nav-link:hover,
.navbar .navbar-nav .nav-link.active {
  color: var(--primary);
}

.navbar .dropdown-toggle::after {
  border: none;
  content: "\f107";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  vertical-align: middle;
  margin-left: 8px;
}

@media (max-width: 991.98px) {
  .navbar .navbar-brand img {
    max-height: 45px;
  }

  .navbar .navbar-nav {
    margin-top: 20px;
    margin-bottom: 15px;
  }

  .navbar .nav-item .dropdown-menu {
    padding-left: 30px;
  }
}

@media (min-width: 992px) {
  .navbar .nav-item .dropdown-menu {
    display: block;
    border: none;
    margin-top: 0;
    top: 150%;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
  }

  .navbar .nav-item:hover .dropdown-menu {
    top: 100%;
    visibility: visible;
    transition: 0.5s;
    opacity: 1;
  }
}
</style>
