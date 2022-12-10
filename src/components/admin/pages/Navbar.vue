<template>
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="d-flex align-items-center justify-content-between">
      <router-link to="/admin" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="" />
        <span class="d-none d-lg-block">Dandelions Admin</span>
      </router-link>
    </div>
    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">
        <li class="nav-item">
          <a
            class="nav-link nav-icon"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i class="bi bi-bell"></i>
            <span class="badge bg-primary badge-number">{{
              posts.length + comments.length + replies.length
            }}</span>
          </a>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
            data-bs-backdrop="static"
          >
            <div class="offcanvas-header">
              <h3 class="offcanvas-title" id="offcanvasRightLabel">
                Vous avez
                {{ posts.length + comments.length + replies.length }}
                notifications
              </h3>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                ref="closeNotification"
              ></button>
            </div>
            <div class="offcanvas-body border">
              <!-- <div
                class="list-group mb-0 border-0 shadow"
                v-for="i in 7"
                :key="i"
              >
                <router-link class="list-group-item">
                  <div class="row align-items-center">
                    <div class="col">
                      <strong class="mb-0"
                        >Unauthorized financial activity</strong
                      >
                      <p class="text-muted mb-0">
                        Fusce lacinia elementum eros, sed vulputate urna
                        eleifend nec.
                      </p>
                    </div>
                  </div>
                </router-link>
              </div> -->
              <ul
                class="d-flex justify-content-center nav nav-tabs mb-3"
                id="myTab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active text-secondary"
                    id="comment-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#comment-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="comment-tab-pane"
                    aria-selected="true"
                  >
                    <div class="position-relative">
                      <span
                        class="position-absolute badge bg-primary badge-number"
                        style="top: -10px; right: -15px"
                        >{{ comments.length }}</span
                      >
                    </div>
                    Commentaire
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link text-secondary"
                    id="reply-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#reply-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="reply-tab-pane"
                    aria-selected="false"
                  >
                    <div class="position-relative">
                      <span
                        class="position-absolute badge bg-primary badge-number"
                        style="top: -10px; right: -15px"
                        >{{ replies.length }}</span
                      >
                    </div>
                    Réponse
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link text-secondary"
                    id="post-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#post-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="post-tab-pane"
                    aria-selected="false"
                  >
                    <div class="position-relative">
                      <span
                        class="position-absolute badge bg-primary badge-number"
                        style="top: -10px; right: -15px"
                        >{{ posts.length }}</span
                      >
                    </div>
                    Article
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="comment-tab-pane"
                  role="tabpanel"
                  aria-labelledby="comment-tab"
                  tabindex="0"
                >
                  <div
                    class="list-group mb-0 border-0 shadow"
                    v-for="comment in comments"
                    :key="comment.id"
                  >
                    <a
                      @click="commentToSeen(comment.id, comment.article.slug)"
                      class="list-group-item"
                    >
                      <div class="row align-items-center">
                        <div class="col">
                          <strong class="mb-0">{{
                            comment.utilisateur.prenom
                          }}</strong>
                          <p class="text-muted mb-0 description">
                            {{ comment.contenu }}
                          </p>
                          <p class="card-text d-flex">
                            <small class="text-dark me-auto">{{
                              new Date(comment.createdAt).toLocaleDateString(
                                "Fr-fr",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )
                            }}</small>
                            <small class="text-dark">{{
                              new Date(comment.createdAt).getHours() +
                              ":" +
                              new Date(comment.createdAt).getMinutes()
                            }}</small>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="reply-tab-pane"
                  role="tabpanel"
                  aria-labelledby="reply-tab"
                  tabindex="0"
                >
                  <div
                    class="list-group mb-0 border-0 shadow"
                    v-for="reply in replies"
                    :key="reply.id"
                  >
                    <a
                      @click="
                        replyToSeen(reply.id, reply.commentaire.article.slug)
                      "
                      class="list-group-item"
                    >
                      <div class="row align-items-center">
                        <div class="col">
                          <strong class="mb-0">{{
                            reply.utilisateur.prenom
                          }}</strong>
                          <p class="text-muted mb-0 description">
                            {{ reply.contenu }}
                          </p>
                          <p class="card-text d-flex">
                            <small class="text-dark me-auto">{{
                              new Date(reply.createdAt).toLocaleDateString(
                                "Fr-fr",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )
                            }}</small>
                            <small class="text-dark">{{
                              new Date(reply.createdAt).getHours() +
                              ":" +
                              new Date(reply.createdAt).getMinutes()
                            }}</small>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="post-tab-pane"
                  role="tabpanel"
                  aria-labelledby="post-tab"
                  tabindex="0"
                >
                  <div
                    class="list-group mb-0 border-0 shadow"
                    v-for="post in posts"
                    :key="post.id"
                  >
                    <div class="list-group-item">
                      <div class="row align-items-center">
                        <div class="col">
                          <div class="float-end d-flex gap-2">
                            <div class="">
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
                            </div>
                            <a type="button" @click="postToSeen(post.slug)">
                              <i class="fa-regular fa-eye"></i>
                            </a>
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
                                  @click="
                                    updateStatus(post.slug, (article.etat = 2))
                                  "
                                  >en cours d'éxamen</a
                                >
                              </li>
                              <li>
                                <a
                                  class="btn dropdown-item"
                                  @click="
                                    updateStatus(post.slug, (article.etat = 3))
                                  "
                                  >à corriger</a
                                >
                              </li>
                              <li>
                                <a
                                  class="btn dropdown-item"
                                  @click="
                                    updateStatus(post.slug, (article.etat = 4))
                                  "
                                  >réfusé</a
                                >
                              </li>
                              <li>
                                <a
                                  class="btn dropdown-item"
                                  @click="
                                    updateStatus(post.slug, (article.etat = 5))
                                  "
                                  >publié</a
                                >
                              </li>
                            </ul>
                          </div>
                          <strong class="mb-0">{{ post.titre }}</strong>

                          <p class="text-muted mb-0 description">
                            {{ post.description }}
                          </p>
                          <p class="card-text d-flex">
                            <small class="me-auto text-dark"
                              >{{
                                new Date(post.updatedAt).toLocaleDateString(
                                  "Fr-fr",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )
                              }}
                            </small>
                            <small class="text-dark">{{
                              new Date(post.updatedAt).getHours() +
                              ":" +
                              new Date(post.updatedAt).getMinutes()
                            }}</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ---------------------- -->
        </li>
        <li class="nav-item dropdown pe-3">
          <a
            v-if="isLoggedIn"
            class="nav-link nav-profile d-flex align-items-center pe-0"
            data-bs-toggle="dropdown"
          >
            <img
              :src="PROFIL_IMAGE + (me.illustrationUser || me.illustration)"
              style="width: 37px; height: 40px"
              alt="Profile"
              class="rounded-circle img-thumbnail"
            />
            <span class="d-none d-md-block dropdown-toggle ps-2">{{
              me.prenomUser || me.prenom
            }}</span>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"
          >
            <li>
              <hr class="dropdown-divider" />
            </li>

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
              <a
                class="dropdown-item d-flex align-items-center"
                @click="disconnect"
              >
                <i class="bi bi-box-arrow-right"></i>
                <span>Se déconnecter</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { useToast } from "vue-toastification";
import { getUnseenComment, updateCommentToSeen } from "../../../api/comment";
import {
  getUnseenPost,
  updatePostToSeen,
  updateStateBySlug,
} from "../../../api/post";
import { getUnseenResponse, updateResponseToSeen } from "../../../api/reply";
import { PROFIL_IMAGE } from "../../../configs";
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      posts: [],
      comments: [],
      replies: [],
      PROFIL_IMAGE: PROFIL_IMAGE,
      loading: false,
      loadPage: false,
      article: { etat: null },
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
    fetchUnseenPost() {
      this.loading = true;
      getUnseenPost(this.me.sub || this.me.id).then((result) => {
        this.posts = result.data;
        this.loading = false;
      });
    },
    fetchUnseenComment() {
      this.loading = true;
      getUnseenComment(this.me.sub || this.me.id).then((result) => {
        this.comments = result.data;
        this.loading = false;
      });
    },
    fetchUnseenResponse() {
      this.loading = true;
      getUnseenResponse(this.me.sub || this.me.id).then((result) => {
        this.replies = result.data;
        this.loading = false;
      });
    },
    commentToSeen(id, slug) {
      updateCommentToSeen(id).then(() => {
        this.$refs.closeNotification.click();
        window.location.href = `/article/commentaire/${slug}`;
      });
    },
    replyToSeen(id, slug) {
      updateResponseToSeen(id).then(() => {
        this.$refs.closeNotification.click();
        window.location.href = `/article/commentaire/${slug}`;
      });
    },
    updateStatus(slug, etat) {
      console.log(slug);
      console.log(etat);
      const toast = useToast();
      etat = this.article;
      this.loadPage = true;
      updateStateBySlug(slug, etat)
        .then((result) => {
          toast.success("Article " + result.data.etat_article.nomEtat);
          this.fetchUnseenPost();
          this.loadPage = false;
        })
        .catch((e) => {
          this.loadPage = false;
          console.log(e);
          toast.error("Une erreur est survenue!");
        });
    },
    postToSeen(slug) {
      this.$refs.closeNotification.click();
      updatePostToSeen(slug).then(() => {
        this.$refs.closeNotification.click();
        window.location.href = `/article/${slug}`;
      });
    },
  },
  mounted() {
    this.fetchUnseenPost();
    this.fetchUnseenComment();
    this.fetchUnseenResponse();
  },
};
</script>
<style scoped>
.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
a {
  color: #4154f1;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  color: #717ff5;
  text-decoration: none;
}
</style>
