<template>
  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-item">
        <router-link to="/admin" class="nav-link collapsed">
          <i class="bi bi-speedometer2"></i>
          <span>Dashboard</span>
        </router-link>
      </li>
      <li v-if="(me.roleUser || me.role) == 1" class="nav-item">
        <router-link to="/utilisateur" class="nav-link collapsed">
          <i class="bi bi-people"></i>
          <span>Utilisateurs</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin/article" class="nav-link collapsed">
          <i class="bi bi-newspaper"></i>
          <span>Articles</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin/evenement" class="nav-link collapsed">
          <i class="bi bi-card-heading"></i>
          <span>Evénements</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin/evenement/archive" class="nav-link collapsed">
          <i class="bi bi-archive"></i>
          <span>Archives</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin/article/categorie" class="nav-link collapsed">
          <i class="bi bi-tags"></i>
          <span>Categories</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin/entreprise" class="nav-link collapsed">
          <i class="bi bi-building"></i>
          <span>Entreprises</span>
        </router-link>
      </li>
      <!--       <li class="nav-item">
        <a
          class="nav-link"
          data-bs-target="#tables-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-people"></i><span>Utilisateurs</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="tables-nav"
          class="nav-content collapse show"
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="tables-general.html">
              <i class="bi bi-circle"></i><span>Ajouter</span>
            </a>
          </li>
        </ul>
      </li> -->
    </ul>
  </aside>
</template>
<script>
export default {
  name: "Sidenav",
  components: {},
  computed: {
    me() {
      return this.$store.getters["userStore/me"];
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
