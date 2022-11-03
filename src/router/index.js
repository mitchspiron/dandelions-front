import { createRouter, createWebHistory } from "vue-router";
/* visitor */
import Home from "../views/visitor/Home.vue";
import ArticleListByCategory from "../views/visitor/ArticleListByCategory.vue";
import ArticleLists from "../views/visitor/ArticleLists.vue";
import ArticleBySlug from "../views/visitor/ArticleBySlug.vue";
import EventBySlug from "../views/visitor/EventBySlug.vue";
import Login from "../views/visitor/Login.vue";
import EnterpriseProfil from "../views/visitor/EnterpriseProfil.vue";
import Contact from "../views/visitor/Contact.vue";
import Enterprises from "../views/visitor/Enterprises.vue";
import Event from "../views/visitor/Event.vue";
import Me from "../views/visitor/Me.vue";
import NotFound from "../views/visitor/404NotFound.vue";

/* admin */
import HomeAdmin from "../views/admin/HomeAdmin.vue";
import Users from "../views/admin/Users.vue";
import Articles from "../views/admin/Articles.vue";
import ArticleComment from "../views/admin/ArticleComment.vue";
import Events from "../views/admin/Events.vue";
import EventNew from "../views/admin/EventNew.vue";
import EventSubscribers from "../views/admin/EventSubscribers.vue";
import Categories from "../views/admin/Categories.vue";
import EnterprisesAdmin from "../views/admin/EnterprisesAdmin.vue";
import UserNew from "../views/admin/UserNew.vue";
import CategoryNew from "../views/admin/CategoryNew.vue";
import EnterpriseNew from "../views/admin/EnterpriseNew.vue";
import ArticleNew from "../views/admin/ArticleNew.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: NotFound,
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
    path: "/article/slug/commentaire",
    name: "ArticleComment",
    component: ArticleComment,
  },
  {
    path: "/evenement/slug",
    name: "EventBySlug",
    component: EventBySlug,
  },
  {
    path: "/evenement/slug/subscriber",
    name: "EventSubscribers",
    component: EventSubscribers,
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
    path: "/evenement",
    name: "Event",
    component: Event,
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
    path: "/admin/article/nouveau",
    name: "ArticleNew",
    component: ArticleNew,
  },
  {
    path: "/admin/evenement",
    name: "Events",
    component: Events,
  },
  {
    path: "/admin/evenement/nouveau",
    name: "EventNew",
    component: EventNew,
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
    path: "/admin/article/category/nouveau",
    name: "CategoryNew",
    component: CategoryNew,
  },
  {
    path: "/admin/enterprise",
    name: "EnterprisesAdmin",
    component: EnterprisesAdmin,
  },
  {
    path: "/admin/enterprise/nouveau",
    name: "EnterpriseNew",
    component: EnterpriseNew,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL === "production"),
  routes,
});

export default router;
