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
          placeholder="ex: Dandelions"
          v-model="search"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
    <div v-if="(me.roleUser || me.role) == 2 && enterprises.length == 1">
      <router-link
        to="/admin/entreprise/nouveau"
        class="visually-hidden btn btn-outline-secondary"
        ><i class="fa-solid fa-plus"></i
      ></router-link>
    </div>
    <div v-else class="">
      <router-link
        to="/admin/entreprise/nouveau"
        class="btn btn-outline-secondary"
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
          <th>Nom</th>
          <th>E-mail</th>
          <th>Abonnement</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="enterprises.length == 0">
          <td colspan="6">
            <i class="bi bi-exclamation-triangle me-2 text-danger"></i>Aucun
            résultat trouvé
          </td>
        </tr>
        <tr v-for="(enterprise, id) in displayedEnterprises" :key="id">
          <td>{{ id + 1 }}</td>
          <td class="fw-bold mb-1">{{ enterprise.nom }}</td>
          <td class="text-muted mb-0">{{ enterprise.email }}</td>
          <td>
            <div class="form-check form-switch d-flex justify-content-center">
              <input
                v-if="(me.roleUser || me.role) !== 1"
                disabled
                class="form-check-input"
                type="checkbox"
                :checked="enterprise.abonnee"
              />
              <input
                v-else
                class="form-check-input"
                type="checkbox"
                :checked="enterprise.abonnee"
                @input="(event) => (text = event.target.checked)"
                @change="
                  switchToAbonnee(enterprise.slug, enterprise.abonnee, $event)
                "
              />
            </div>
          </td>
          <td>
            <div class="d-flex justify-content-center gap-4">
              <router-link
                :to="{
                  name: 'EnterpriseProfil',
                  params: { slug: enterprise.slug },
                }"
                type="button"
              >
                <i class="fa-regular fa-eye"></i>
              </router-link>
              <router-link
                :to="{
                  name: 'EnterpriseEdit',
                  params: { slug: enterprise.slug },
                }"
                type="button"
              >
                <i class="fa-regular fa-pen-to-square"></i>
              </router-link>
              <a
                data-bs-toggle="modal"
                data-bs-target="#modalDelete"
                @click="initDelete(enterprise.slug)"
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
    :total-items="enterprises.length"
    :items-per-page="perPage"
    :max-pages-shown="3"
    v-model="page"
  />
  <!-- ------------------------------MODAL DELETE ENTERPRISE----------------------------------------------- -->
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
            Supprimer une entreprise
          </h4>
        </div>
        <div class="modal-body">
          <section class="row p-2">
            <div class="col-12">
              Etes-vous sûr de vouloir supprimer cette entreprise ?
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
            @click="deleteEnterprise()"
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
  <!-- ------------------------------END MODAL DELETE ENTERPRISE----------------------------------------------- -->
</template>
<script>
import { useToast } from "vue-toastification";
import {
  deleteEnterpriseBySlug,
  filterEnterpriseAdmin,
  getEnterpriseAdmin,
  isAbonneeBySlug,
} from "../../../api/enterprise.";
export default {
  name: "EnterpriseLists",
  components: {},
  data() {
    return {
      enterprises: [],
      switch: { abonnee: true || false },
      search: "",
      page: 1,
      perPage: 10,
      loadPage: false,
      loading: false,
      slugDelete: "",
    };
  },
  computed: {
    me() {
      return this.$store.getters["userStore/me"];
    },
    displayedEnterprises() {
      return this.paginate(this.enterprises);
    },
  },
  methods: {
    fetch() {
      this.loadPage = true;
      getEnterpriseAdmin(this.me.sub || this.me.id).then((result) => {
        this.enterprises = result.data;
        this.loadPage = false;
      });
    },
    switchToAbonnee(slug, etat, event) {
      const toast = useToast();
      if (event.target.checked) {
        this.switch.abonnee = true;
        etat = this.switch;
        isAbonneeBySlug(slug, etat)
          .then(() => {
            toast.success("L'entreprise est abonnée");
            this.fetch();
          })
          .catch(() => {
            toast.error("Une erreur est survenue!");
          });
      } else {
        this.switch.abonnee = false;
        etat = this.switch;
        isAbonneeBySlug(slug, etat)
          .then(() => {
            toast.success("L'entreprise n'est plus abonnée");
            this.fetch();
          })
          .catch(() => {
            toast.error("Une erreur est survenue!");
          });
      }
    },
    paginate(enterprises) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return enterprises.slice(from, to);
    },
    initDelete(slug) {
      this.slugDelete = slug;
    },
    deleteEnterprise() {
      this.loading = true;
      const toast = useToast();
      deleteEnterpriseBySlug(this.slugDelete, this.me.sub || this.me.id)
        .then(() => {
          this.loading = false;
          this.$refs.CloseDelete.click();
          this.fetch();
          toast.success("Entreprise supprimé");
        })
        .catch((e) => {
          this.loading = false;
          toast.error(e.response.data.message);
        });
    },
  },
  watch: {
    search() {
      this.loadPage = true;
      getEnterpriseAdmin(this.me.sub || this.me.id).then((result) => {
        this.enterprises = result.data;
        if (this.enterprises.length !== 0) {
          filterEnterpriseAdmin(this.me.sub || this.me.id, this.search).then(
            (result) => {
              this.enterprises = result.data;
              this.loadPage = false;
            }
          );
        }
        this.loadPage = false;
      });
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
