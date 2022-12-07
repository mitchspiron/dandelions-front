<template>
  <div
    v-if="loadPage"
    class="m-auto d-flex justify-content-center align-items-center vh-100"
  >
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
  <div v-else>
    <div id="comments" class="comments-block block">
      <h3 class="news-title">
        <span>{{ comments.length }} Commentaires</span>
      </h3>
      <ul class="all-comments">
        <li v-for="(comment, i) in comments" :key="i">
          <div class="comment">
            <img
              class="commented-person img-thumbnail rounded-circle"
              alt=""
              :src="PROFIL_IMAGE + comment.utilisateur.illustration"
            />
            <div class="comment-body">
              <div class="meta-data">
                <span class="commented-person-name"
                  ><router-link to="/enterprise/name" class="text-dark">{{
                    comment.utilisateur.prenom
                  }}</router-link></span
                >

                <!--<Popper placement="auto" hover="true" <template #content>
                  <div class="card border-0 shadow-lg" style="max-width: 540px">
                    <div class="media">
                      <router-link
                        to="/enterprise/name"
                        class="d-flex align-items-center"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          :src="comment.img"
                          alt="Post Thumbnail img-thumbnail"
                          class="w-100"
                        />
                        <div class="media-body">
                          <h3 style="margin-top: -5px">
                            {{ comment.name }}
                          </h3>
                          <p class="mb-0 small text-dark">
                            {{ comment.content }}
                          </p>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </template> </Popper>-->
                <span class="comment-hour d-block">{{
                  new Date(comment.createdAt).toLocaleDateString("Fr-fr", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }}</span>
              </div>
              <div class="comment-content">
                <p>
                  {{ comment.contenu }}
                </p>
              </div>
              <div v-if="isLoggedIn" role="form" autocomplete="off">
                <!-- <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      @focus="checkIsLoggin"
                      class="form-control required-field"
                      id="reply"
                      rows="1"
                      placeholder="Réponse"
                      v-model.lazy="formReply.contenu"
                      autocomplete="off"
                      required
                    ></textarea>
                  </div>
                </div>
              </div> -->
                <div class="text-left d-flex gap-2 mt-2">
                  <div>
                    <!-- <button v-if="loading" class="comment-reply" disabled>
                    <span
                      class="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Répondre
                  </button>
                  <a
                    @click="confirmReply(comment.id, formReply)"
                    class="comment-reply"
                    type="submit"
                    ><i class="fa fa-reply"></i> Répondre</a
                  > -->
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#modalAjout"
                      @click="addReply(comment.id)"
                      class="comment-reply"
                      ><i class="fa fa-reply"></i
                    ></a>
                  </div>
                  <div>
                    <a
                      v-if="(me.sub || me.id) == comment.utilisateur.id"
                      data-bs-toggle="modal"
                      data-bs-target="#modalModifier"
                      @click="updateComment(comment.id, comment.contenu)"
                      class="comment-reply"
                      ><i class="bi bi-pen"></i
                    ></a>
                  </div>
                  <div>
                    <a
                      v-if="(me.sub || me.id) == comment.utilisateur.id"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDelete"
                      @click="initDeleteComment(comment.id)"
                      class="comment-reply"
                      ><i class="bi bi-trash"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- reponse -->
          <ul class="comments-reply">
            <li v-for="reply in comment.reponse" :key="reply.id">
              <!-- <li v-if="comment.id == reply.idCommentaire"></li> -->
              <div class="comment">
                <img
                  class="commented-person img-thumbnail rounded-circle"
                  alt=""
                  :src="PROFIL_IMAGE + reply.utilisateur.illustration"
                />
                <div class="comment-body">
                  <div class="meta-data">
                    <span class="commented-person-name"
                      ><router-link to="/enterprise/name" class="text-dark">{{
                        reply.utilisateur.prenom
                      }}</router-link></span
                    >

                    <!-- <Popper placement="auto" hover="true"> <template #content>
                      <div
                        class="card border-0 shadow-lg"
                        style="max-width: 540px"
                      >
                        <div class="media">
                          <router-link
                            to="/enterprise/name"
                            class="d-flex align-items-center"
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              :src="comment.reply.img"
                              alt="Post Thumbnail img-thumbnail border-0"
                              class="w-100"
                            />
                            <div class="media-body">
                              <h3 style="margin-top: -5px">
                                {{ comment.reply.name }}
                              </h3>
                              <p class="mb-0 small text-dark">
                                {{ comment.reply.content }}
                              </p>
                            </div>
                          </router-link>
                        </div>
                      </div>
                    </template></Popper> -->
                    <span class="comment-hour d-block">{{
                      new Date(reply.createdAt).toLocaleDateString("Fr-fr", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    }}</span>
                  </div>
                  <div class="comment-content">
                    <p>{{ reply.contenu }}</p>
                  </div>
                  <div class="text-left d-flex gap-2 mt-0">
                    <a
                      v-if="(me.sub || me.id) == reply.utilisateur.id"
                      data-bs-toggle="modal"
                      data-bs-target="#modalModifierReponse"
                      @click="updateReply(reply.id, reply.contenu)"
                      class="comment-reply"
                      ><i class="bi bi-pen"></i
                    ></a>
                    <a
                      v-if="(me.sub || me.id) == reply.utilisateur.id"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDeleteReponse"
                      @click="initDeleteReply(reply.id)"
                      class="comment-reply"
                      ><i class="bi bi-trash"></i
                    ></a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- ------------------------------COMMENT FORM------------------------------------- -->
    <div class="comment-form">
      <h3 class="title-normal">Laissez un commentaire</h3>
      <p class="mb-3">Votre adresse email ne sera pas publié.</p>
      <form @submit.prevent="confirmComment" role="form" autocomplete="off">
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <textarea
                @focus="checkIsLoggin"
                class="form-control required-field"
                id="comment"
                placeholder="Commentaire"
                autocomplete="off"
                v-model="form.contenu"
                required
              ></textarea>
            </div>
          </div>

          <div class="col-md-12">
            <button
              v-if="loadingComment"
              class="comments-btn btn btn-sm btn-outline-secondary"
              disabled
            >
              <span
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
            <button
              v-else
              class="comments-btn btn btn-sm btn-outline-primary"
              type="submit"
            >
              Commenter
            </button>
          </div>
        </div>
      </form>
    </div>

    <!------------------------------------- MODAL ADD REPONSE------------------------------------- -->
    <div
      class="modal fade"
      id="modalAjout"
      tabindex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="modalLabelAjouter"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <form
          @submit.prevent="confirmReply"
          class="modal-content border-0 bg-light text-dark"
        >
          <div class="modal-header mx-2">
            <h4 class="modal-title text-dark" id="modalLabelAjouter">
              Ajouter une réponse
            </h4>
          </div>
          <div class="modal-body">
            <section class="row p-2">
              <div class="col-12">
                <textarea
                  class="form-control"
                  id="inputMessage"
                  rows="4"
                  required
                  v-model="formReply.contenu"
                  style="resize: none"
                ></textarea>
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
              type="submit"
              class="btn px-3"
              style="background: #582456"
            >
              <i class="fa-solid fa-check text-white"></i>
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              ref="CloseAjoutRéponse"
              class="btn bg-dark px-3"
            >
              <i class="fa-solid fa-xmark text-light"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
    <!----------------------------------- END MODAL ADD REPONSE -------------------------------------->

    <!-- -----------------------------------MODAL UPDATE COMMENTAIRE------------------------------------------ -->
    <div
      class="modal fade"
      id="modalModifier"
      tabindex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="modalLabelModifier"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <form
          @submit.prevent="confirmUpdateComment"
          class="modal-content border-0 bg-light text-dark"
        >
          <div class="modal-header mx-2">
            <h4 class="modal-title text-dark" id="modalLabelModifier">
              Modifier le commentaire
            </h4>
          </div>
          <div class="modal-body">
            <section class="row p-2">
              <div class="col-12">
                <textarea
                  class="form-control"
                  id="inputMessage"
                  rows="4"
                  required
                  v-model="formUpdateComment.contenu"
                  style="resize: none"
                ></textarea>
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
              type="submit"
              class="btn px-3"
              style="background: #582456"
            >
              <i class="fa-solid fa-check text-white"></i>
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              ref="CloseModifierCommentaire"
              class="btn bg-dark px-3"
            >
              <i class="fa-solid fa-xmark text-light"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- ------------------------------------END MODAL UPDATE COMMENTAIRE ------------------------------------ -->

    <!-- ------------------------------MODAL DELETE COMMENTAIRE----------------------------------------------- -->
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
              Supprimer le commentaire
            </h4>
          </div>
          <div class="modal-body">
            <section class="row p-2">
              <div class="col-12">
                Etes-vous sûr de vouloir supprimer ce commentaire ?
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
              @click="deleteComment()"
              type="submit"
              class="btn px-3"
              style="background: #582456"
            >
              <i class="fa-solid fa-check text-white"></i>
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              ref="CloseDeleteCommentaire"
              class="btn bg-dark px-3"
            >
              <i class="fa-solid fa-xmark text-light"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------------END MODAL DELETE COMMENTAIRE----------------------------------------------- -->
    <!-- -----------------------------------MODAL UPDATE REPONSE------------------------------------------ -->
    <div
      class="modal fade"
      id="modalModifierReponse"
      tabindex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="modalLabelModifierReponse"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <form
          @submit.prevent="confirmUpdateReply"
          class="modal-content border-0 bg-light text-dark"
        >
          <div class="modal-header mx-2">
            <h4 class="modal-title text-dark" id="modalLabelModifierReponse">
              Modifier la réponse
            </h4>
          </div>
          <div class="modal-body">
            <section class="row p-2">
              <div class="col-12">
                <textarea
                  class="form-control"
                  id="inputMessage"
                  rows="4"
                  required
                  v-model="formUpdateReply.contenu"
                  style="resize: none"
                ></textarea>
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
              type="submit"
              class="btn px-3"
              style="background: #582456"
            >
              <i class="fa-solid fa-check text-white"></i>
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              ref="CloseModifier"
              class="btn bg-dark px-3"
            >
              <i class="fa-solid fa-xmark text-light"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- ------------------------------------END MODAL UPDATE REPONSE ------------------------------------ -->

    <!-- ------------------------------MODAL DELETE REPONSE----------------------------------------------- -->
    <div
      class="modal fade"
      id="modalDeleteReponse"
      tabindex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="modalLabelDeleteReponse"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 bg-light text-dark">
          <div class="modal-header mx-2">
            <h4 class="modal-title text-dark" id="modalLabelDeleteReponse">
              Supprimer la réponse
            </h4>
          </div>
          <div class="modal-body">
            <section class="row p-2">
              <div class="col-12">
                Etes-vous sûr de vouloir supprimer cette réponse ?
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
              @click="deleteReply()"
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
    <!-- ------------------------------END MODAL DELETE REPONSE----------------------------------------------- -->
  </div>
</template>
<script>
import { useToast } from "vue-toastification";
//import Popper from "vue3-popper";
import { PROFIL_IMAGE } from "../../../configs";
import { decodeToken } from "../../../utils/decodeToken";
import {
  createComment,
  deleteCommentById,
  getCommentByPost,
  updateCommentById,
} from "../../../api/comment";
//import { useRoute } from "vue-router";
import {
  createResponse,
  deleteResponseById,
  updateResponseById,
} from "../../../api/reply";

export default {
  name: "Comment",
  components: {
    /*  Popper, */
  },
  data() {
    return {
      comments: [],
      form: {
        idUtilisateur: "",
        contenu: "",
      },
      formReply: {
        idUtilisateur: "",
        contenu: "",
      },
      PROFIL_IMAGE: PROFIL_IMAGE,
      formUpdateComment: { idSelectUpdate: 0, contenu: "" },
      idDeleteComment: 0,
      formUpdateReply: { idSelectUpdate: 0, contenu: "" },
      idDeleteReply: 0,
      idAddReply: 0,
      loading: false,
      loadingComment: false,
      loadPage: false,
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
    fetch() {
      this.loadPage = true;
      getCommentByPost(this.$route.params.slug).then((result) => {
        this.loadPage = false;
        this.comments = result.data;
      });
    },
    checkIsLoggin() {
      try {
        const decodeV = decodeToken(localStorage.getItem("dandelions_token"));
        if (decodeV) {
          //console.log("ok visiteur");
        }
      } catch (err) {
        this.$router.push(`/se-connecter`);
      }
    },
    confirmComment() {
      this.loadingComment = true;
      const toast = useToast();
      this.form.idUtilisateur = this.me.sub || this.me.id;
      createComment(this.$route.params.slug, this.form)
        .then(() => {
          this.loadingComment = false;
          toast.success("Commentaire ajouté");
          this.form.contenu = "";
          this.fetch();
        })
        .catch((e) => {
          this.loadingComment = false;
          toast.info(e.response.data.message);
        });
    },
    updateComment(id, comment) {
      this.formUpdateComment = {
        idSelectUpdate: id,
        contenu: comment,
      };
    },
    updateReply(id, reply) {
      this.formUpdateReply = {
        idSelectUpdate: id,
        contenu: reply,
      };
    },
    initDeleteComment(id) {
      this.idDeleteComment = id;
    },
    deleteComment() {
      this.loading = true;
      deleteCommentById(this.idDeleteComment).then(() => {
        const toast = useToast();
        getCommentByPost(this.$route.params.slug).then((result) => {
          this.data = result.data;
          this.loading = false;
          this.$refs.CloseDeleteCommentaire.click();
          this.fetch();
          toast.success("Commentaire supprimé");
        });
      });
    },
    confirmUpdateComment() {
      this.loading = true;
      updateCommentById(this.formUpdateComment).then(() => {
        const toast = useToast();
        getCommentByPost(this.$route.params.slug).then((result) => {
          this.data = result.data;
          this.loading = false;
          this.$refs.CloseModifierCommentaire.click();
          this.fetch();
          toast.success("Commentaire modifié");
        });
      });
    },
    confirmUpdateReply() {
      this.loading = true;
      updateResponseById(this.formUpdateReply).then(() => {
        const toast = useToast();
        getCommentByPost(this.$route.params.slug).then((result) => {
          this.data = result.data;
          this.loading = false;
          this.$refs.CloseModifier.click();
          this.fetch();
          toast.success("Réponse modifiée");
        });
      });
    },
    initDeleteReply(id) {
      this.idDeleteReply = id;
    },
    deleteReply() {
      this.loading = true;
      deleteResponseById(this.idDeleteReply).then(() => {
        const toast = useToast();
        getCommentByPost(this.$route.params.slug).then((result) => {
          this.data = result.data;
          this.loading = false;
          this.$refs.CloseDelete.click();
          this.fetch();
          toast.success("Réponse supprimée");
        });
      });
    },
    addReply(id) {
      this.idAddReply = id;
    },
    confirmReply() {
      this.loading = true;
      const toast = useToast();
      this.formReply.idUtilisateur = this.me.sub || this.me.id;
      createResponse(this.idAddReply, this.formReply)
        .then(() => {
          this.loading = false;
          /* if (this.formReply.contenu == "") {
            toast.info("Veuillez ajouté une contenu");
          } */
          toast.success("Réponse ajouté");
          this.formReply.contenu = "";
          this.$refs.CloseAjoutRéponse.click();
          this.fetch();
        })
        .catch((e) => {
          this.loading = false;
          toast.info(e.response.data.message);
        });
    },
  },
  /* async setup() {
    const route = useRoute();
    const res = await getCommentByPost(route.params.slug);
    const finalRes = await res.data;

    const comment = finalRes;
    return comment;
  }, */
  mounted() {
    this.fetch();
  },
};
</script>
<style scoped>
a {
  cursor: pointer;
}
.content a {
  float: right;
  margin-right: 10px;
  color: #2c122b;
  display: inline;
  text-decoration: none;
  background-position: 0% 110%;
  background-repeat: no-repeat;
  background-size: 100% 3px;
  transition: 0.3s;
}
.read-more-btn {
  font-family: "Neuton", serif;
  font-size: 15px;
}
.media {
  width: 410px;
}
.media img {
  height: 170px;
  width: 130px !important;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 5px 0 0 5px;
}

.media-body {
  margin-left: 15px;
}
.comments-block {
  margin: 40px 0 -25px;
}

.all-comments .comment-content {
  margin: 5px 0;
}
.all-comments .comment-reply {
  font-weight: 400;
  color: #777;
  font-size: 13px;
  border: 1px solid #dadada;
  padding: 5px 10px;
  border-radius: 3px;
}
.all-comments .comment-reply:hover {
  background: #582456;
  color: #fff;
  border-color: #582456;
}

.comments-counter {
  font-size: 18px;
}
.comments-counter a {
  color: #323232;
}

.all-comments {
  list-style: none;
  margin: 0;
  padding: 20px 0;
}
.all-comments .comment {
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
}
.all-comments img.commented-person {
  height: 50px;
  width: 50px;
  margin-right: 20px;
}
.all-comments .commented-person-name {
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 600;
  font-size: 18px;
  color: #303030;
}
.all-comments .comment-hour {
  color: #959595;
  font-size: 14px;
}

.comments-reply {
  list-style: none;
  margin: 0 0 0 40px;
}

a {
  text-decoration: none;
}

.comment-form {
  margin-bottom: 0;
}
.comment-form .title-normal {
  font-size: 22px;
}
.comment-form .comments-btn {
  margin-top: 10px;
  font-size: 12px;
}

.btn-outline-primary {
  background: transparent;
  color: #582456;
  border-color: #582456;
}
.btn-outline-primary:hover,
.btn-outline-primary:active,
.btn-outline-primary.active .btn-outline-primary:focus,
.btn-outline-primary.focus {
  background: #582456 !important;
  border-color: #582456 !important;
  color: #fff;
}

.btn-sm {
  font-size: 14px;
  padding: 10px 25px;
}

.news-title {
  font-size: 30px;
  line-height: 28px;
  line-height: 100%;
  text-transform: uppercase;
  margin: 0 0 20px;
  padding-bottom: 10px;
}
.news-title span {
  line-height: 28px;
  padding-bottom: 14px;
  position: relative;
}
.news-title span:after {
  content: "";
  position: absolute;
  width: 60px;
  height: 2px;
  background: #582456;
  left: 0px;
  bottom: 0px;
}

.block {
  position: relative;
}
</style>
