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
          placeholder="Nom complet"
          aria-label="fullname"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  </div>
  <div class="card border-0 shadow-sm mt-3">
    <table class="table align-middle mb-0 bg-white text-center">
      <thead class="bg-light">
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>E-mail</th>
          <th>Téléphone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(subscriber, id) in subscribers" :key="id">
          <td>{{ id + 1 }}</td>
          <td class="text-muted">{{ subscriber.utilisateur.nom }}</td>
          <td class="text-muted">{{ subscriber.utilisateur.prenom }}</td>
          <td class="text-muted">{{ subscriber.utilisateur.email }}</td>
          <td class="text-muted">{{ subscriber.utilisateur.telephone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { getEventRegistrationByEvent } from "../../../api/event-register";
export default {
  name: "EventSubscriberLists",
  components: {},
  data() {
    return {
      subscribers: [],
    };
  },
  methods: {
    fetch() {
      getEventRegistrationByEvent(this.$route.params.slug).then((result) => {
        this.subscribers = result.data;
      });
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
<style scoped></style>
