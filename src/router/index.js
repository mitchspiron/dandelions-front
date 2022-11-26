import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
import { decodeToken } from "../utils/decodeToken";

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
import ResetPassword from "../views/visitor/ResetPassword.vue";

/* admin */
import HomeAdmin from "../views/admin/HomeAdmin.vue";
import Users from "../views/admin/Users.vue";
import Articles from "../views/admin/Articles.vue";
import ArticleComment from "../views/admin/ArticleComment.vue";
import Events from "../views/admin/Events.vue";
import EventNew from "../views/admin/EventNew.vue";
import EventEdit from "../views/admin/EventEdit.vue";
import EventSubscribers from "../views/admin/EventSubscribers.vue";
import Categories from "../views/admin/Categories.vue";
import EnterprisesAdmin from "../views/admin/EnterprisesAdmin.vue";
import UserNew from "../views/admin/UserNew.vue";
import CategoryNew from "../views/admin/CategoryNew.vue";
import CategoryEdit from "../views/admin/CategoryEdit.vue";
import EnterpriseNew from "../views/admin/EnterpriseNew.vue";
import EnterpriseEdit from "../views/admin/EnterpriseEdit.vue";
import ArticleNew from "../views/admin/ArticleNew.vue";
import ArticleEdit from "../views/admin/ArticleEdit.vue";

try {
  const decode = decodeToken(localStorage.getItem("dandelions_token"));
  if (decode) {
    store.dispatch("userStore/setUser", decode);
    store.dispatch("userStore/setConnected");
  }
} catch (err) {
  //console.log(err);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "DANDELIONS",
    },
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "Page introuvable!",
    },
  },
  {
    path: "/article/categorie/:slug",
    name: "ArticleListByCategory",
    component: ArticleListByCategory,
    meta: {
      title: "Liste d'article par catégorie",
    },
  },
  {
    path: "/article",
    name: "ArticleLists",
    component: ArticleLists,
    meta: {
      title: "Liste d'article",
    },
  },
  {
    path: "/article/:slug",
    name: "ArticleBySlug",
    component: ArticleBySlug,
    meta: {
      title: "Détails d'article",
    },
  },
  {
    path: "/evenement/:slug",
    name: "EventBySlug",
    component: EventBySlug,
    meta: {
      title: "Détails d'événement",
    },
  },
  {
    path: "/se-connecter",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/entreprise/:slug",
    name: "EnterpriseProfil",
    component: EnterpriseProfil,
    meta: {
      title: "Détails d'entreprise",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/entreprise",
    name: "Enterprises",
    component: Enterprises,
    meta: {
      title: "Liste d'entreprise",
    },
  },
  {
    path: "/evenement",
    name: "Event",
    component: Event,
    meta: {
      title: "Liste d'événement",
    },
  },
  {
    path: "/mon-espace",
    name: "Me",
    component: Me,
    meta: {
      title: "Espace personnel",
    },
  },
  {
    path: "/recuperer-mot-de-passe/:token",
    name: "ResetPassword",
    component: ResetPassword,
    meta: {
      title: "Récuperation de mot de passe",
    },
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
    path: "/admin/article/:slug",
    name: "ArticleEdit",
    component: ArticleEdit,
  },
  {
    path: "/article/commentaire/:slug",
    name: "ArticleComment",
    component: ArticleComment,
  },
  {
    path: "/admin/evenement",
    name: "Events",
    component: Events,
  },
  {
    path: "/evenement/inscrit/:slug",
    name: "EventSubscribers",
    component: EventSubscribers,
  },
  {
    path: "/admin/evenement/nouveau",
    name: "EventNew",
    component: EventNew,
  },
  {
    path: "/admin/evenement/:slug",
    name: "EventEdit",
    component: EventEdit,
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
    path: "/admin/article/categorie",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/admin/article/categorie/nouveau",
    name: "CategoryNew",
    component: CategoryNew,
  },
  {
    path: "/admin/article/categorie/:id",
    name: "CategoryEdit",
    component: CategoryEdit,
  },
  {
    path: "/admin/entreprise",
    name: "EnterprisesAdmin",
    component: EnterprisesAdmin,
  },
  {
    path: "/admin/entreprise/nouveau",
    name: "EnterpriseNew",
    component: EnterpriseNew,
  },
  {
    path: "/admin/entreprise/:slug",
    name: "EnterpriseEdit",
    component: EnterpriseEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL === "production"),
  routes,
});

export default router;
