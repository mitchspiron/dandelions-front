<template>
  <div class="col-md-12 shadow-lg border-0 mb-5">
    <div class="card border-0">
      <div class="card-body">
        <p class="text-uppercase text-sm">Saisir une nouvelle catégorie</p>
        <div class="row">
          <div class="col-md-12 mb-3">
            <div class="form-group form-floating">
              <input class="form-control" type="text" />
              <label for="example-text-input" class="form-control-label"
                >Catégorie</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer py-2 px-3">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <h4 class="mb-0">Ajout catégorie</h4>
            <button
              class="btn btn-primary btn-md ms-auto border-0"
              style="background-color: #582456"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryForm",
  components: {},
  methods: {},
};
</script>
<style scoped></style>
