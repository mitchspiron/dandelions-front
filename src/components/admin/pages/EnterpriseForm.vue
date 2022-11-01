<template>
  <div class="col-md-12 shadow-lg border-0 mb-5">
    <div class="card border-0">
      <div class="card-body">
        <div class="col-md-12">
          <div class="mb-3 mt-md-1">
            <div
              class="d-flex align-items-start align-items-sm-center mb-3 gap-4"
            >
              <div
                id="avatar"
                alt="user-avatar"
                class="d-block rounded col-3"
              />
              <div>
                <div class="input-group mb-3">
                  <span
                    class="input-group-text"
                    style="color: #582456"
                    id="basic-addon1"
                    ><i class="fa-solid fa-cloud-arrow-up"></i
                  ></span>
                  <input
                    type="file"
                    class="form-control"
                    name="image"
                    id="image"
                    accept="image/*"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <p class="text-muted mb-0">
                  Allowed JPG, GIF or PNG. Max size of 800K
                </p>
              </div>
            </div>
            <div class="d-flex justify-content-between mb-3 gap-1">
              <div class="col-3 form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="nom"
                  placeholder="Dandelions"
                />
                <label for="nom" class="form-label">Nom</label>
              </div>
              <div class="col-3 form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="brand"
                  placeholder=""
                />
                <label for="brand" class="form-label">Brand</label>
              </div>
              <div class="col-3 form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
                <label for="email" class="form-label">Adresse email</label>
              </div>
              <div class="col-3 form-floating">
                <input
                  type="telephone"
                  class="form-control"
                  id="phone"
                  placeholder="+26100000000"
                />
                <label for="phone" class="form-label">Téléphone</label>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex justify-content-between mb-4 gap-1">
                <div class="col-4 form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="annee"
                    placeholder=""
                  />
                  <label for="annee" class="form-label"
                    >Année de création</label
                  >
                </div>
                <div class="col-4 form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="site"
                    placeholder=""
                  />
                  <label for="site" class="form-label">URL site web</label>
                </div>
                <div class="col-4 form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="redactor exampleDataList"
                    list="datalistOptions"
                    placeholder=""
                  />
                  <label for="redactor" class="form-label">Rédacteur</label>
                  <datalist id="datalistOptions">
                    <option value="Mk-redacteur"></option>
                    <option value="NgT-redacteur"></option>
                  </datalist>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="horizontal dark" />
        <p class="text-uppercase text-sm">à propos</p>
        <div class="row">
          <div class="col-md-12 mb-1 d-flex justify-content-center gap-2">
            <div class="col-md-4 form-group form-floating">
              <textarea
                class="form-control"
                value="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
              ></textarea>
              <label for="example-text-input" class="form-control-label"
                >Déscription 1</label
              >
            </div>
            <div class="col-md-4 form-group form-floating">
              <textarea
                class="form-control"
                value="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
              ></textarea>
              <label for="example-text-input" class="form-control-label"
                >Déscription 2</label
              >
            </div>
            <div class="col-md-4 form-group form-floating">
              <textarea
                class="form-control"
                value="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
              ></textarea>
              <label for="example-text-input" class="form-control-label"
                >Phrase pour la section visiter website</label
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mb-1 mt-2 d-flex justify-content-center gap-2">
            <div class="col-md-3 form-group form-floating">
              <input
                type="number"
                class="form-control"
                id="stat1"
                placeholder=""
              />
              <label for="stat1" class="form-label">Stat 1</label>
            </div>
            <div class="col-md-3 form-group form-floating">
              <input
                type="number"
                class="form-control"
                id="stat2"
                placeholder=""
              />
              <label for="stat2" class="form-label">Stat 2</label>
            </div>
            <div class="col-md-3 form-group form-floating">
              <input
                type="number"
                class="form-control"
                id="stat3"
                placeholder=""
              />
              <label for="stat3" class="form-label">Stat 3</label>
            </div>
            <div class="col-md-3 form-group form-floating">
              <input
                type="number"
                class="form-control"
                id="stat4"
                placeholder=""
              />
              <label for="stat4" class="form-label">Stat 4</label>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer py-2 px-3">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <h4 class="mb-0">Ajout entreprise</h4>
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
  name: "EnterpriseForm",
  components: {},
  methods: {
    avatar() {
      const FILE_INPUT = document.querySelector("input[type=file]");
      const AVATAR = document.getElementById("avatar");

      FILE_INPUT.addEventListener("change", (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
          AVATAR.setAttribute("aria-label", file.name);
          AVATAR.style.background = `url(${reader.result}) center center/cover`;
        };
      });
    },
  },
  mounted() {
    this.avatar();
  },
};
</script>
<style scoped>
#avatar {
  background-image: url("../../../assets/img/enterprise.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100px;
  width: 100px;
  border: 3px solid #582456;
  border-radius: 50%;
  transition: background ease-out 200ms;
}
</style>
