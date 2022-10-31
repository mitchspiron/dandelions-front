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
          <th>E-mail</th>
          <th>Téléphone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(subscriber, id) in subscribers" :key="id">
          <td>{{ subscriber.id }}</td>
          <td class="text-muted">{{ subscriber.name }}</td>
          <td class="text-muted">{{ subscriber.email }}</td>
          <td class="text-muted">{{ subscriber.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "EventSubscriberLists",
  components: {},
  data() {
    return {
      subscribers: [
        {
          id: 1,
          name: "Technology",
          email: "jeanedward@mail.com",
          phone: "0323565956",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
