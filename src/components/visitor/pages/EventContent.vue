<template>
  <div class="col-lg-12 mb-5 mb-lg-0">
    <article>
      <img
        loading="lazy"
        decoding="async"
        :src="illustration"
        alt="Post Thumbnail"
        class="w-100"
        style=""
      />
      <ul class="post-meta mb-2 mt-4 d-flex">
        <li class="me-auto">
          <i class="bi bi-calendar-plus"></i>
          <span> {{ createdAt }}</span>
        </li>
        <li>
          <i class="bi bi-calendar-x text-danger"></i>
          <span class="text-danger"> {{ deadline }}</span>
        </li>
      </ul>
      <h1 class="my-3">{{ evenements.titre }}</h1>
      <div class="content text-left">
        <div v-html="evenements.contenu"></div>
      </div>
    </article>
  </div>
  <form
    @submit.prevent="confirm"
    v-if="evenements.onSubscribe == true"
    class="d-grid gap-2 col-6 mx-auto"
  >
    <button
      v-if="loading"
      class="btn btn-md btn-outline-secondary"
      type="button"
      disabled
    >
      <span
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Loading...
    </button>
    <button
      v-else
      @click="checkIsLoggin"
      class="btn btn-md btn-outline-primary"
      type="submit"
    >
      Register
    </button>
  </form>

  <!-- Modal -->
  <!-- <div
    class="modal fade"
    id="EventModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Subscribe to an event here
          </h1>
        </div>
        <div class="modal-body">
          <div class="col-12 form-floating mb-2">
            <input type="text" class="form-control" id="nom" placeholder="" />
            <label for="nom" class="form-label">Nom</label>
          </div>
          <div class="col-12 form-floating mb-2">
            <input
              type="text"
              class="form-control"
              id="prenom"
              placeholder=""
            />
            <label for="prenom" class="form-label">Prénom</label>
          </div>
          <div class="col-12 form-floating mb-2">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder=""
            />
            <label for="email" class="form-label">Adresse email</label>
          </div>
          <div class="col-12 form-floating">
            <input
              type="telephone"
              class="form-control"
              id="telephone"
              placeholder=""
            />
            <label for="telephone" class="form-label">Téléphone</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn px-3" style="background: #582456">
            <i class="fa-solid fa-check text-white"></i>
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            class="btn bg-dark px-3"
          >
            <i class="fa-solid fa-xmark text-light"></i>
          </button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { useToast } from "vue-toastification";
import { getEvenementBySlug } from "../../../api/event";
import { createEventRegistration } from "../../../api/event-register";
import { PROFIL_IMAGE } from "../../../configs";
import { decodeToken } from "../../../utils/decodeToken";
export default {
  name: "EventContent",
  components: {},
  data() {
    return {
      loading: false,
      evenements: [],
      createdAt: Date.now(),
      deadline: Date.now(),
      illustration: "",
      form: {
        idEvenement: null,
        idUtilisateur: null,
      },
    };
  },
  computed: {
    me() {
      return this.$store.getters["userStore/me"];
    },
    isLoggedIn() {
      return this.$store.getters["userStore/isLoggedIn"];
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      getEvenementBySlug(this.$route.params.slug).then((result) => {
        this.evenements = result.data;
        this.illustration = PROFIL_IMAGE + result.data.illustration;
        let options = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const dateCreation = new Date(result.data.createdAt);
        this.createdAt = dateCreation.toLocaleDateString("Fr-fr", options);
        const dateExpiration = new Date(result.data.deadline);
        this.deadline = dateExpiration.toLocaleDateString("Fr-fr", options);
      });
    },
    confirm() {
      getEvenementBySlug(this.$route.params.slug).then((result) => {
        const toast = useToast();
        this.form.idEvenement = result.data.id;
        this.form.idUtilisateur = this.me.sub || this.me.id;
        this.loading = true;
        createEventRegistration(this.form)
          .then(() => {
            this.loading = false;
            this.$swal(
              "Inscription réussi",
              "Vérifier votre courriel",
              "success"
            );
          })
          .catch((e) => {
            this.loading = false;
            toast.info(e.response.data.message);
          });
      });
    },
    checkIsLoggin() {
      const toast = useToast();
      try {
        const decodeV = decodeToken(localStorage.getItem("dandelions_token"));
        if (decodeV) {
          //console.log("ok visiteur");
        }
      } catch (err) {
        toast.info("Vous devez être connecté!");
        this.$router.push(`/se-connecter`);
      }
    },
  },
};
</script>
<style scoped>
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
.post-meta {
  padding-left: 0;
}
.post-meta li {
  list-style-type: none;
  display: inline-block;
  color: #888;
  font-weight: 500;
}
.post-meta li a {
  display: inline-block;
  background-color: rgba(19, 19, 19, 0.05);
  color: black;
  text-transform: capitalize;
  padding: 2px 8px;
  margin-bottom: 8px;
  margin-right: 2px;
  font-size: 14px;
  border-radius: 0;
}
.post-meta li a:hover {
  background-color: rgba(61, 234, 164, 0.25);
}

img {
  vertical-align: middle;
  border: 0;
  max-width: 100%;
  height: auto;
}

a,
a:hover,
a:focus {
  text-decoration: none;
}

a {
  cursor: pointer;
  transition: 0.2s ease;
}
a:focus {
  outline: 0;
}

a:hover {
  color: #13ae6f;
}

p {
  font-weight: 400;
  color: #333;
  font-size: 16px;
  line-height: 1.6;
  font-family: "Work Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  color: #131313;
  font-family: "Neuton", serif;
  font-weight: 700;
  line-height: 1.3;
}

h1,
.h1 {
  font-size: 36px;
}
@media (max-width: 991px) {
  h1,
  .h1 {
    font-size: 30px;
  }
}
@media (max-width: 767px) {
  h1,
  .h1 {
    font-size: 26px;
  }
}

h2,
.h2 {
  font-size: 28px;
}
@media (max-width: 767px) {
  h2,
  .h2 {
    font-size: 24px;
  }
}

h3,
.h3 {
  font-size: 22px;
}
@media (max-width: 767px) {
  h3,
  .h3 {
    font-size: 20px;
  }
}

h4,
.h4 {
  font-size: 20px;
}

h5,
.h5 {
  font-size: 16px;
}

h6,
.h6 {
  font-size: 14px;
}

/* ------------------------ */
</style>
