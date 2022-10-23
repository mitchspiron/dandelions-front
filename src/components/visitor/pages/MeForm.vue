<template>
  <div class="col-md-8 shadow-lg border-0">
    <div class="card border-0">
      <div class="card-body">
        <div class="col-md-12">
          <form class="mb-3 mt-md-1">
            <h2 class="fw-bold text-uppercase">Lorem ipsum</h2>
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
            <div class="d-flex justify-content-between mb-3 gap-2">
              <div class="col-6 form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  placeholder="Don Andres"
                  value="Don Andres"
                />
                <label for="firstname" class="form-label">Firstname</label>
              </div>
              <div class="col-6 form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="lastname"
                  placeholder="Iniesta"
                  value="Iniesta"
                />
                <label for="lastname" class="form-label">Lastname</label>
              </div>
            </div>
            <div class="d-flex justify-content-between mb-3 gap-2">
              <div class="col-6 form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value="name@example.com"
                />
                <label for="email" class="form-label">Email address</label>
              </div>
              <div class="col-6 form-floating">
                <input
                  type="telephone"
                  class="form-control"
                  id="phone"
                  placeholder="+26100000000"
                />
                <label for="phone" class="form-label">Number phone</label>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex justify-content-between mb-4 gap-2">
                <div class="col-6 form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="*******"
                  />
                  <label for="password" class="form-label">Password</label>
                </div>
                <div class="col-6 form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="password-repeat"
                    placeholder="*******"
                  />
                  <label for="password-repeat" class="form-label"
                    >Password repeat</label
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
        <hr class="horizontal dark" />
        <p class="text-uppercase text-sm">Contact Information</p>
        <div class="row">
          <div class="col-md-12 mb-3">
            <div class="form-group form-floating">
              <input
                class="form-control"
                type="text"
                value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
              />
              <label for="example-text-input" class="form-control-label"
                >Address</label
              >
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="form-group form-floating">
              <input class="form-control" type="text" value="New York" />
              <label for="example-text-input" class="form-control-label"
                >City</label
              >
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="form-group form-floating">
              <input class="form-control" type="text" value="United States" />
              <label for="example-text-input" class="form-control-label"
                >Country</label
              >
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="form-group form-floating">
              <input class="form-control" type="text" value="437300" />
              <label for="example-text-input" class="form-control-label"
                >Postal code</label
              >
            </div>
          </div>
        </div>
        <hr class="horizontal dark" />
        <p class="text-uppercase text-sm">About me</p>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group form-floating">
              <textarea
                class="form-control"
                value="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
              >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corrupti minus nam ducimus mollitia praesentium. Voluptate saepe nisi nesciunt obcaecati autem, nostrum sunt sequi officiis expedita dolorum minima totam eligendi!</textarea
              >
              <label for="example-text-input" class="form-control-label"
                >About me</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer py-3 px-3">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <h4 class="mb-0">Edit Profile</h4>
            <button
              class="btn btn-primary btn-lg ms-auto border-0"
              style="background-color: #582456"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MeForm",
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
  background-image: url("../../../assets/img/avatar.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100px;
  width: 100px;
  border: 3px solid #582456;
  border-radius: 50%;
  transition: background ease-out 200ms;
}
</style>
