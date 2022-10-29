import { createRouter, createWebHistory } from "vue-router";
/* visitor */
import Home from "../views/visitor/Home.vue";
import ArticleListByCategory from "../views/visitor/ArticleListByCategory.vue";
import ArticleLists from "../views/visitor/ArticleLists.vue";
import ArticleBySlug from "../views/visitor/ArticleBySlug.vue";
import Login from "../views/visitor/Login.vue";
import EnterpriseProfil from "../views/visitor/EnterpriseProfil.vue";
import Contact from "../views/visitor/Contact.vue";
import Enterprises from "../views/visitor/Enterprises.vue";
import Me from "../views/visitor/Me.vue";

/* admin */
import HomeAdmin from "../views/admin/HomeAdmin.vue";
import Users from "../views/admin/Users.vue";
import Articles from "../views/admin/Articles.vue";
import Headers from "../views/admin/Headers.vue";
import Categories from "../views/admin/Categories.vue";
import EnterprisesAdmin from "../views/admin/EnterprisesAdmin.vue";
import UserNew from "../views/admin/UserNew.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/article/category",
    name: "ArticleListByCategory",
    component: ArticleListByCategory,
  },
  {
    path: "/article",
    name: "ArticleLists",
    component: ArticleLists,
  },
  {
    path: "/article/slug",
    name: "ArticleBySlug",
    component: ArticleBySlug,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/enterprise/name",
    name: "EnterpriseProfil",
    component: EnterpriseProfil,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/enterprise",
    name: "Enterprises",
    component: Enterprises,
  },
  {
    path: "/me",
    name: "Me",
    component: Me,
  },
  /* Admin */
  {
    path: "/admin",
    name: "HomeAdmin",
    component: HomeAdmin,
  },
  {
    path: "/admin/article",
    name: "Articles",
    component: Articles,
  },
  {
    path: "/header",
    name: "Headers",
    component: Headers,
  },
  {
    path: "/utilisateur",
    name: "Users",
    component: Users,
  },
  {
    path: "/utilisateur/nouveau",
    name: "UserNew",
    component: UserNew,
  },
  {
    path: "/admin/article/category",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/admin/enterprise",
    name: "EnterprisesAdmin",
    component: EnterprisesAdmin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL === "production"),
  routes,
});

export default router;
