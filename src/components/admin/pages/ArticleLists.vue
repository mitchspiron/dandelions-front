<template>
  <div class="d-flex justify-content-end gap-5">
    <div class="col-3 card border-0 shadow-sm">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1"
          ><i class="fa fa-search"></i
        ></span>
        <input
          type="text"
          class="form-control"
          placeholder="Titre"
          aria-label="Titre"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
    <div class="col-3 card border-0 shadow-sm">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1"
          ><i class="fa fa-search"></i
        ></span>
        <select class="form-select" aria-label="Default select example">
          <option value="" selected disabled>Catégorie</option>
          <option value="1">Tech</option>
          <option value="2">News</option>
        </select>
      </div>
    </div>
    <div class="col-1 card border shadow-sm">
      <div class="form-check form-switch m-auto">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">Top</label>
      </div>
    </div>
    <div class="col-2 card border shadow-sm">
      <div class="form-check form-switch m-auto">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >Recommandé</label
        >
      </div>
    </div>
    <div class="">
      <router-link to="/admin/article/nouveau" class="btn btn-outline-secondary"
        ><i class="fa-solid fa-plus"></i
      ></router-link>
    </div>
  </div>
  <div class="card border-0 shadow-sm mt-3">
    <table class="table align-middle mb-0 bg-white text-center">
      <thead class="bg-light">
        <tr>
          <th>ID</th>
          <th>Titre</th>
          <th>Catégorie</th>
          <th>Top</th>
          <th>Recommandé</th>
          <th>Etat</th>
          <th>Nb.Commentaire</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody v-for="post in posts" :key="post.id">
        <tr>
          <td>{{ post.id }}</td>
          <td class="fw-bold">{{ post.titre }}</td>
          <td class="text-muted">{{ post.categorie_article.nomCategorie }}</td>
          <td>
            <div class="form-check form-switch d-flex justify-content-center">
              <input
                v-if="(me.roleUser || me.role) !== 1"
                disabled
                class="form-check-input"
                type="checkbox"
                :checked="post.top"
              />
              <input
                v-else-if="
                  post.etat_article.id !== 5 || post.recommadee == true
                "
                disabled
                class="visually-hidden form-check-input"
                type="checkbox"
                :checked="post.top"
                @input="(event) => (text = event.target.checked)"
                @change="switchTop(post.slug, post.top, $event)"
              />
              <input
                v-else
                class="form-check-input"
                type="checkbox"
                :checked="post.top"
                @input="(event) => (text = event.target.checked)"
                @change="switchTop(post.slug, post.top, $event)"
              />
            </div>
          </td>
          <td>
            <div class="form-check form-switch d-flex justify-content-center">
              <input
                v-if="(me.roleUser || me.role) !== 1"
                disabled
                class="form-check-input"
                type="checkbox"
                :checked="post.recommadee"
              />
              <input
                v-else-if="post.etat_article.id !== 5 || post.top == true"
                disabled
                class="visually-hidden form-check-input"
                type="checkbox"
                :checked="post.recommadee"
                @input="(event) => (text = event.target.checked)"
                @change="
                  switchToRecommanded(post.slug, post.recommadee, $event)
                "
              />
              <input
                v-else
                class="form-check-input"
                type="checkbox"
                :checked="post.recommadee"
                @input="(event) => (text = event.target.checked)"
                @change="
                  switchToRecommanded(post.slug, post.recommadee, $event)
                "
              />
            </div>
          </td>
          <td>
            <span
              v-if="post.etat_article.id == 1"
              class="badge bg-primary rounded-pill d-inline"
              >{{ post.etat_article.nomEtat }}</span
            >
            <span
              v-if="post.etat_article.id == 2"
              class="badge bg-info rounded-pill d-inline"
              >{{ post.etat_article.nomEtat }}</span
            >
            <span
              v-if="post.etat_article.id == 3"
              class="badge bg-warning rounded-pill d-inline"
              >{{ post.etat_article.nomEtat }}</span
            >
            <span
              v-if="post.etat_article.id == 4"
              class="badge bg-danger rounded-pill d-inline"
              >{{ post.etat_article.nomEtat }}</span
            >
            <span
              v-if="post.etat_article.id == 5"
              class="badge bg-success rounded-pill d-inline"
              >{{ post.etat_article.nomEtat }}</span
            >
          </td>
          <td class="text-muted">5</td>
          <td>
            <div class="d-flex justify-content-center gap-4">
              <router-link
                :to="{ name: 'ArticleBySlug', params: { slug: post.slug } }"
                type="button"
              >
                <i class="fa-regular fa-eye"></i>
              </router-link>
              <router-link
                :to="{ name: 'ArticleComment', params: { slug: post.slug } }"
                ><i class="fa-regular fa-comments"></i
              ></router-link>
              <router-link
                :to="{ name: 'ArticleEdit', params: { slug: post.slug } }"
                type="button"
              >
                <i class="fa-regular fa-pen-to-square"></i>
              </router-link>
              <a
                v-if="(me.roleUser || me.role) == 1"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-three-dots-vertical"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="btn dropdown-item"
                    @click="updateStatus(post.slug, (article.etat = 2))"
                    >en cours d'éxamen</a
                  >
                </li>
                <li>
                  <a
                    class="btn dropdown-item"
                    @click="updateStatus(post.slug, (article.etat = 3))"
                    >à corriger</a
                  >
                </li>
                <li>
                  <a
                    class="btn dropdown-item"
                    @click="updateStatus(post.slug, (article.etat = 4))"
                    >réfusé</a
                  >
                </li>
                <li>
                  <a
                    class="btn dropdown-item"
                    @click="updateStatus(post.slug, (article.etat = 5))"
                    >publié</a
                  >
                </li>
              </ul>
              <a type="button">
                <i class="bi bi-trash"></i>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { useToast } from "vue-toastification";
import {
  getPost,
  switchTopBySlug,
  switchToRecommandedBySlug,
  updateStateBySlug,
} from "../../../api/post";
export default {
  name: "ArticleLists",
  components: {},
  data() {
    return {
      posts: [],
      article: { etat: null },
      switch: { recommadee: true || false, top: true || false },
    };
  },
  computed: {
    me() {
      return this.$store.getters["userStore/me"];
    },
  },
  methods: {
    fetch() {
      getPost(this.me.sub || this.me.id).then((result) => {
        this.posts = result.data;
      });
    },
    updateStatus(slug, etat) {
      const toast = useToast();
      etat = this.article;
      updateStateBySlug(slug, etat)
        .then((result) => {
          toast.success("Article " + result.data.etat_article.nomEtat);
          this.fetch();
        })
        .catch(() => {
          toast.error("Une erreur est survenue!");
        });
    },
    switchToRecommanded(slug, etat, event) {
      const toast = useToast();
      if (event.target.checked) {
        this.switch.recommadee = true;
        etat = this.switch;
        switchToRecommandedBySlug(slug, etat)
          .then(() => {
            toast.success("L'article est à recommander");
            this.fetch();
          })
          .catch(() => {
            toast.error("Une erreur est survenue!");
          });
      } else {
        this.switch.recommadee = false;
        etat = this.switch;
        switchToRecommandedBySlug(slug, etat)
          .then(() => {
            toast.success("L'article n'est plus recommandé");
            this.fetch();
          })
          .catch(() => {
            toast.error("Une erreur est survenue!");
          });
      }
    },
    switchTop(slug, etat, event) {
      const toast = useToast();
      if (event.target.checked) {
        this.switch.top = true;
        etat = this.switch;
        switchTopBySlug(slug, etat)
          .then(() => {
            toast.success("L'article est le top");
            this.fetch();
          })
          .catch(() => {
            toast.error("Une erreur est survenue!");
          });
      } else {
        this.switch.top = false;
        etat = this.switch;
        switchTopBySlug(slug, etat)
          .then(() => {
            toast.success("L'article n'est plus le top");
            this.fetch();
          })
          .catch(() => {
            toast.error("Une erreur est survenue!");
          });
      }
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: black;
}
</style>
