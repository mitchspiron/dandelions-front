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
          placeholder="ex: Titre"
          aria-label="Titre"
          aria-describedby="basic-addon1"
          v-model="search.searchkey"
        />
      </div>
    </div>
    <div class="col-3 card border-0 shadow-sm">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1"
          ><i class="fa fa-search"></i
        ></span>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="search.searchCategory"
        >
          <option value="" selected>Catégorie</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.nomCategorie"
          >
            {{ category.nomCategorie }}
          </option>
        </select>
      </div>
    </div>
    <div class="col-3 card border-0 shadow-sm">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1"
          ><i class="fa fa-search"></i
        ></span>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="search.searchEtat"
        >
          <option value="" selected>Etat</option>
          <option value="envoyé">envoyé</option>
          <option value="en cours d'éxamen">en cours d'éxamen</option>
          <option value="à corriger">à corriger</option>
          <option value="réfusé">réfusé</option>
          <option value="publié">publié</option>
        </select>
      </div>
    </div>
    <!--  <div class="col-1 card border shadow-sm">
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
    </div> -->
    <div class="">
      <router-link to="/admin/article/nouveau" class="btn btn-outline-secondary"
        ><i class="fa-solid fa-plus"></i
      ></router-link>
    </div>
  </div>
  <div v-if="loadPage" class="mt-5 mb-5 d-flex justify-content-center">
    <div class="breeding-rhombus-spinner">
      <div class="rhombus child-1"></div>
      <div class="rhombus child-2"></div>
      <div class="rhombus child-3"></div>
      <div class="rhombus child-4"></div>
      <div class="rhombus child-5"></div>
      <div class="rhombus child-6"></div>
      <div class="rhombus child-7"></div>
      <div class="rhombus child-8"></div>
      <div class="rhombus big"></div>
    </div>
  </div>
  <div v-else class="card border-0 shadow-sm mt-3">
    <table class="table align-middle mb-0 bg-white text-center">
      <thead class="bg-light">
        <tr>
          <th>N°</th>
          <th>Titre</th>
          <th>Catégorie</th>
          <th>Top</th>
          <th>Recommandé</th>
          <th>Etat</th>
          <!-- <th>Nb.Commentaire</th> -->
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-if="posts.length == 0">
          <td colspan="12">
            <i class="bi bi-exclamation-triangle me-2 text-danger"></i>Aucun
            résultat trouvé
          </td>
        </tr>
        <tr v-for="(post, i) in displayedPosts" :key="i">
          <td>{{ i + 1 }}</td>
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
          <!-- <td class="text-muted">5</td> -->
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
              <a
                data-bs-toggle="modal"
                data-bs-target="#modalDelete"
                @click="initDelete(post.slug)"
              >
                <i class="bi bi-trash"></i>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <vue-awesome-paginate
    class="d-flex justify-content-center mt-3"
    :total-items="posts.length"
    :items-per-page="perPage"
    :max-pages-shown="3"
    v-model="page"
  />
  <!-- ------------------------------MODAL DELETE POST----------------------------------------------- -->
  <div
    class="modal fade"
    id="modalDelete"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    aria-labelledby="modalLabelDelete"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 bg-light text-dark">
        <div class="modal-header mx-2">
          <h4 class="modal-title text-dark" id="modalLabelDelete">
            Supprimer un article
          </h4>
        </div>
        <div class="modal-body">
          <section class="row p-2">
            <div class="col-12">
              Etes-vous sûr de vouloir supprimer cet article ?
            </div>
          </section>
        </div>
        <div class="modal-footer mx-2">
          <button
            v-if="loading"
            type="submit"
            class="btn px-3"
            style="background: #582456"
            disabled
          >
            <span
              class="spinner-grow spinner-grow-sm text-white"
              role="status"
              aria-hidden="true"
            ></span>
          </button>
          <button
            v-else
            @click="deletePost()"
            type="submit"
            class="btn px-3"
            style="background: #582456"
          >
            <i class="fa-solid fa-check text-white"></i>
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            ref="CloseDelete"
            class="btn bg-dark px-3"
          >
            <i class="fa-solid fa-xmark text-light"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- ------------------------------END MODAL DELETE POST----------------------------------------------- -->
</template>
<script>
import { useToast } from "vue-toastification";
import {
  deletePostBySlug,
  filterPost,
  getPost,
  switchTopBySlug,
  switchToRecommandedBySlug,
  updateStateBySlug,
} from "../../../api/post";
import { getPostCategory } from "../../../api/post-category";
import { socket } from "../../../api/socket";
export default {
  name: "ArticleLists",
  components: {},
  data() {
    return {
      posts: [],
      categories: [],
      article: { etat: null },
      switch: { recommadee: true || false, top: true || false },
      search: {
        searchkey: "",
        searchCategory: "",
        searchEtat: "",
      },
      page: 1,
      perPage: 10,
      loadPage: false,
      loading: false,
      slugDelete: "",
    };
  },
  methods: {
    fetchCategory() {
      getPostCategory().then((result) => {
        this.categories = result.data;
      });
    },
    fetch() {
      this.loadPage = true;
      getPost(this.me.sub || this.me.id).then((result) => {
        this.posts = result.data;
        this.loadPage = false;
      });
    },
    updateStatus(slug, etat) {
      const toast = useToast();
      etat = this.article;
      this.loadPage = true;
      updateStateBySlug(slug, etat)
        .then((result) => {
          toast.success("Article " + result.data.etat_article.nomEtat);
          this.fetch();
          this.loadPage = false;
          socket.emit("send-notif", result.data);
        })
        .catch(() => {
          this.loadPage = false;
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
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
    initDelete(slug) {
      this.slugDelete = slug;
    },
    deletePost() {
      this.loading = true;
      const toast = useToast();
      deletePostBySlug(this.slugDelete, this.me.sub || this.me.id)
        .then(() => {
          this.loading = false;
          this.$refs.CloseDelete.click();
          this.fetch();
          toast.success("Article supprimé");
        })
        .catch((e) => {
          this.loading = false;
          toast.error(e.response.data.message);
        });
    },
  },
  computed: {
    me() {
      return this.$store.getters["userStore/me"];
    },
    displayedPosts() {
      return this.paginate(this.posts);
    },
  },
  watch: {
    search: {
      deep: true,
      handler() {
        this.loadPage = true;
        getPost(this.me.sub || this.me.id).then((result) => {
          this.posts = result.data;
          if (this.posts.length !== 0) {
            filterPost(this.me.sub || this.me.id, this.search).then(
              (result) => {
                this.posts = result.data;
                this.loadPage = false;
              }
            );
          }
          this.loadPage = false;
        });
      },
    },
  },
  mounted() {
    this.fetch();
    this.fetchCategory();
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
