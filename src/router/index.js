import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/visitor/Home.vue";
import ArticleListByCategory from "../views/visitor/ArticleListByCategory.vue";
import ArticleLists from "../views/visitor/ArticleLists.vue";
import ArticleBySlug from "../views/visitor/ArticleBySlug.vue";
import Login from "../views/visitor/Login.vue";
import EnterpriseProfil from "../views/visitor/EnterpriseProfil.vue";
import Contact from "../views/visitor/Contact.vue";
import Enterprises from "../views/visitor/Enterprises.vue";
import Me from "../views/visitor/Me.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
