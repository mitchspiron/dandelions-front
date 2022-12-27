<template>
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
    <table class="table align-middle mb-0 bg-white">
      <thead class="bg-light text-center">
        <tr>
          <th>N°</th>
          <th>Nom Complet</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-if="users.length == 0">
          <td colspan="6">
            <i class="bi bi-exclamation-triangle me-2 text-danger"></i>Aucun
            résultat trouvé
          </td>
        </tr>
        <tr class="text-center" v-for="(user, i) in displayedUsers" :key="i">
          <td>{{ i + 1 }}</td>
          <td>
            <p class="fw-bold mb-1">
              {{ user.utilisateur.nom + " " + user.utilisateur.prenom }}
            </p>
          </td>
          <td>
            <p class="text-muted mb-0">{{ user.utilisateur.email }}</p>
          </td>
          <td>
            <div class="d-flex justify-content-center gap-4">
              <a
                data-bs-toggle="modal"
                data-bs-target="#modalAccepted"
                @click="initAcceptedRequest(user.id, user.utilisateur.id)"
              >
                <i class="bi bi-check-circle"></i>
              </a>
              <a
                data-bs-toggle="modal"
                data-bs-target="#modalDeclined"
                @click="initDeclinedRequest(user.id)"
              >
                <i class="bi bi-x-circle"></i>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <vue-awesome-paginate
    class="d-flex justify-content-center mt-3"
    :total-items="users.length"
    :items-per-page="perPage"
    :max-pages-shown="3"
    v-model="page"
  />
  <!-- ------------------------------MODAL ACCEPTED REQUEST----------------------------------------------- -->
  <div
    class="modal fade"
    id="modalAccepted"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    aria-labelledby="modalLabelAccepted"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 bg-light text-dark">
        <div class="modal-header mx-2">
          <h4 class="modal-title text-dark" id="modalLabelDelete">
            Confirmer une demande
          </h4>
        </div>
        <div class="modal-body">
          <section class="row p-2">
            <div class="col-12">
              Etes-vous sûr de vouloir accepter cette demande ?
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
            @click="acceptedRequest()"
            type="submit"
            class="btn px-3"
            style="background: #582456"
          >
            <i class="fa-solid fa-check text-white"></i>
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            ref="CloseAcceptedRequest"
            class="btn bg-dark px-3"
          >
            <i class="fa-solid fa-xmark text-light"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- ------------------------------END MODAL ACCEPTED REQUEST----------------------------------------------- -->

  <!-- ------------------------------MODAL DECLINED REQUEST----------------------------------------------- -->
  <div
    class="modal fade"
    id="modalDeclined"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    aria-labelledby="modalLabelDeclined"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 bg-light text-dark">
        <div class="modal-header mx-2">
          <h4 class="modal-title text-dark" id="modalLabelDelete">
            Décliner une demande
          </h4>
        </div>
        <div class="modal-body">
          <section class="row p-2">
            <div class="col-12">
              Etes-vous sûr de vouloir décliner cette demande ?
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
            @click="declinedRequest()"
            type="submit"
            class="btn px-3"
            style="background: #582456"
          >
            <i class="fa-solid fa-check text-white"></i>
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            ref="CloseDeclinedRequest"
            class="btn bg-dark px-3"
          >
            <i class="fa-solid fa-xmark text-light"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- ------------------------------END MODAL DECLINED REQUEST----------------------------------------------- -->
</template>
<script>
import { useToast } from "vue-toastification";
import {
  acceptWriterRequest,
  declineWriterRequest,
  getWriterRequest,
} from "../../../api/writer-request";

export default {
  name: "RequestLists",
  components: {},
  data() {
    return {
      users: [],
      page: 1,
      perPage: 10,
      loadPage: false,
      loading: false,
      idUser: 0,
      idAcceptedRequest: 0,
      idDeclinedRequest: 0,
    };
  },
  methods: {
    fetch() {
      this.loadPage = true;
      getWriterRequest().then((result) => {
        this.loadPage = false;
        this.users = result.data;
      });
    },
    paginate(users) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return users.slice(from, to);
    },
    initAcceptedRequest(id, user) {
      this.idAcceptedRequest = id;
      this.idUser = user;
    },
    initDeclinedRequest(id) {
      this.idDeclinedRequest = id;
    },
    acceptedRequest() {
      this.loading = true;
      acceptWriterRequest(this.idAcceptedRequest, this.idUser).then(() => {
        const toast = useToast();
        this.loading = false;
        this.$refs.CloseAcceptedRequest.click();
        this.fetch();
        toast.success("Demande acceptée");
      });
    },
    declinedRequest() {
      this.loading = true;
      declineWriterRequest(this.idDeclinedRequest).then(() => {
        const toast = useToast();
        this.loading = false;
        this.$refs.CloseDeclinedRequest.click();
        this.fetch();
        toast.success("Demande rejeté");
      });
    },
  },
  computed: {
    displayedUsers() {
      return this.paginate(this.users);
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
<style scoped></style>
