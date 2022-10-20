<template>
  <nav
    class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5"
  >
    <router-link to="/" class="navbar-brand d-flex align-items-center">
      <h1 class="m-0">
        <!-- <img
          class="img-fluid me-3"
          src="../../../assets/img/DAlt2.png"
          alt=""
        /> -->Dandelions
      </h1>
    </router-link>
    <button
      type="button"
      class="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
        <router-link to="/" href="#" class="nav-item nav-link active"
          >Home</router-link
        >
        <a href="#" class="nav-item nav-link">Menu 1</a>
        <router-link to="/enterprise" class="nav-item nav-link"
          >Enterprises</router-link
        >
        <router-link to="/contact" class="nav-item nav-link"
          >Contact</router-link
        >
      </div>
    </div>
    <router-link
      to="/login"
      class="btn text-light"
      style="background-color: #582456"
    >
      Login
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style scoped>
.navbar.sticky-top {
  top: -100px;
  transition: 0.5s;
}

.navbar .navbar-brand img {
  max-height: 60px;
}

.navbar .navbar-nav .nav-link {
  margin-left: 25px;
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
