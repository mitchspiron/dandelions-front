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
import Requests from "../views/admin/Requests.vue";
import Articles from "../views/admin/Articles.vue";
import ArticleComment from "../views/admin/ArticleComment.vue";
import Events from "../views/admin/Events.vue";
import Archive from "../views/admin/Archive.vue";
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
      noAccessTo: true,
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
      noAccessNotLoggedIn: true,
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
    meta: {
      title: "Dashboard",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/admin/article",
    name: "Articles",
    component: Articles,
    meta: {
      title: "Liste des articles",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/admin/article/nouveau",
    name: "ArticleNew",
    component: ArticleNew,
    meta: {
      title: "Ajout article",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/admin/article/:slug",
    name: "ArticleEdit",
    component: ArticleEdit,
    meta: {
      title: "Modification article",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/article/commentaire/:slug",
    name: "ArticleComment",
    component: ArticleComment,
    meta: {
      title: "Gestion des commentaires",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/admin/evenement",
    name: "Events",
    component: Events,
    meta: {
      title: "Liste des évenements",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/admin/evenement/archive",
    name: "Archive",
    component: Archive,
    meta: {
      title: "Liste des évenements archivés",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/evenement/inscrit/:slug",
    name: "EventSubscribers",
    component: EventSubscribers,
    meta: {
      title: "Liste des inscrits à un évenement",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/admin/evenement/nouveau",
    name: "EventNew",
    component: EventNew,
    meta: {
      title: "Ajout évenement",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/admin/evenement/:slug",
    name: "EventEdit",
    component: EventEdit,
    meta: {
      title: "Modification évenement",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/utilisateur",
    name: "Users",
    component: Users,
    meta: {
      title: "Liste des utilisateurs",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/demande-redacteur",
    name: "Requests",
    component: Requests,
    meta: {
      title: "Liste des demandes redacteurs",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/utilisateur/nouveau",
    name: "UserNew",
    component: UserNew,
    meta: {
      title: "Ajout utilisateur",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/admin/article/categorie",
    name: "Categories",
    component: Categories,
    meta: {
      title: "Liste des catégories d'articles",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/admin/article/categorie/nouveau",
    name: "CategoryNew",
    component: CategoryNew,
    meta: {
      title: "Ajout nouveau catégorie d'article",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/admin/article/categorie/:id",
    name: "CategoryEdit",
    component: CategoryEdit,
    meta: {
      title: "Modification d'un catégorie d'article",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/admin/entreprise",
    name: "EnterprisesAdmin",
    component: EnterprisesAdmin,
    meta: {
      title: "Liste des entreprises",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/admin/entreprise/nouveau",
    name: "EnterpriseNew",
    component: EnterpriseNew,
    meta: {
      title: "Ajout entreprise",
      noAccessNotLoggedIn: true,
    },
  },
  {
    path: "/admin/entreprise/:slug",
    name: "EnterpriseEdit",
    component: EnterpriseEdit,
    meta: {
      title: "Modification d'un entreprise",
      noAccessNotLoggedIn: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL === "production"),
  routes,
});

router.afterEach((from) => {
  document.title = from.meta.title;
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.noAccessTo)) {
    if (!store.getters["userStore/isLoggedIn"]) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.noAccessNotLoggedIn)) {
    if (
      store.getters["userStore/isLoggedIn"] &&
      (store.getters["userStore/me"].roleUser ||
        store.getters["userStore/me"].role) !== 3
    ) {
      next();
      return;
    }
    next("/se-connecter");
  } else {
    next();
  }
});
export default router;
