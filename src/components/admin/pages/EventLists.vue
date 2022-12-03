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
          placeholder="ex: Séminaire"
          aria-describedby="basic-addon1"
          v-model="search"
        />
      </div>
    </div>
    <!--  <div class="col-2 card border shadow-sm">
      <div class="form-check form-switch m-auto">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >Header</label
        >
      </div>
    </div> -->
    <div class="">
      <router-link
        to="/admin/evenement/nouveau"
        class="btn btn-outline-secondary"
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
          <th>Header</th>
          <th>Inscription</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="noEvent">
          <td colspan="6">
            <i class="bi bi-exclamation-triangle me-2 text-danger"></i>Aucun
            résultat trouvé
          </td>
        </tr>
        <tr v-for="evenement in displayedEvents" :key="evenement.id">
          <td>{{ evenement.id }}</td>
          <td class="text-muted">{{ evenement.titre }}</td>
          <td>
            <div class="form-check form-switch d-flex justify-content-center">
              <input
                v-if="(me.roleUser || me.role) !== 1"
                disabled
                class="form-check-input"
                type="checkbox"
                :checked="evenement.onHeader"
              />
              <input
                v-else
                class="form-check-input"
                type="checkbox"
                :checked="evenement.onHeader"
                @input="(event) => (text = event.target.checked)"
                @change="
                  switchOnHeader(evenement.slug, evenement.onHeader, $event)
                "
              />
            </div>
          </td>
          <td>
            <div class="form-check form-switch d-flex justify-content-center">
              <input
                class="form-check-input"
                type="checkbox"
                :checked="evenement.onSubscribe"
                @input="(event) => (text = event.target.checked)"
                @change="
                  switchOnSubscribe(
                    evenement.slug,
                    evenement.onSubscribe,
                    $event
                  )
                "
              />
            </div>
          </td>
          <td>
            <div class="d-flex justify-content-center gap-4">
              <router-link
                :to="{
                  name: 'EventSubscribers',
                  params: { slug: evenement.slug },
                }"
                type="button"
                ><i class="fa-solid fa-list"></i
              ></router-link>
              <router-link
                :to="{ name: 'EventBySlug', params: { slug: evenement.slug } }"
                type="button"
              >
                <i class="fa-regular fa-eye"></i>
              </router-link>
              <router-link
                :to="{ name: 'EventEdit', params: { slug: evenement.slug } }"
                type="button"
              >
                <i class="fa-regular fa-pen-to-square"></i>
              </router-link>
              <a type="button">
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
    :total-items="evenements.length"
    :items-per-page="perPage"
    :max-pages-shown="3"
    v-model="page"
  />
</template>
<script>
import { useToast } from "vue-toastification";
import {
  filterEvenementAdmin,
  getEvenementAdmin,
  switchOnHeaderBySlug,
  switchOnSubscribeBySlug,
} from "../../../api/event";
export default {
  name: "EventLists",
  components: {},
  data() {
    return {
      evenements: [],
      switch: { onHeader: true || false, onSubscribe: true || false },
      noEvent: false,
      search: "",
      page: 1,
      perPage: 10,
    };
  },
  computed: {
    me() {
      return this.$store.getters["userStore/me"];
    },
    displayedEvents() {
      return this.paginate(this.evenements);
    },
  },
  methods: {
    fetch() {
      getEvenementAdmin(this.me.sub || this.me.id).then((result) => {
        this.evenements = result.data;
      });
    },
    switchOnHeader(slug, etat, event) {
      const toast = useToast();
      if (event.target.checked) {
        this.switch.onHeader = true;
        etat = this.switch;
        switchOnHeaderBySlug(slug, etat)
          .then(() => {
            toast.success("L'évenement est à l'header");
            this.fetch();
          })
          .catch(() => {
            toast.error("Une erreur est survenue!");
          });
      } else {
        this.switch.onHeader = false;
        etat = this.switch;
        switchOnHeaderBySlug(slug, etat)
          .then(() => {
            toast.success("L'évenement n'est plus à l'header");
            this.fetch();
          })
          .catch(() => {
            toast.error("Une erreur est survenue!");
          });
      }
    },
    switchOnSubscribe(slug, etat, event) {
      const toast = useToast();
      if (event.target.checked) {
        this.switch.onSubscribe = true;
        etat = this.switch;
        switchOnSubscribeBySlug(slug, etat)
          .then(() => {
            toast.success("L'évenement est ouvert à une inscription");
            this.fetch();
          })
          .catch(() => {
            toast.error("Une erreur est survenue!");
          });
      } else {
        this.switch.onSubscribe = false;
        etat = this.switch;
        switchOnSubscribeBySlug(slug, etat)
          .then(() => {
            toast.success("L'évenement est fermé à une inscription");
            this.fetch();
          })
          .catch(() => {
            toast.error("Une erreur est survenue!");
          });
      }
    },
    paginate(evenements) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return evenements.slice(from, to);
    },
  },
  watch: {
    search() {
      filterEvenementAdmin(this.me.sub || this.me.id, this.search).then(
        (result) => {
          this.evenements = result.data;
          if (result.data == "") {
            this.noEvent = true;
          } else {
            this.noEvent = false;
          }
        }
      );
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
