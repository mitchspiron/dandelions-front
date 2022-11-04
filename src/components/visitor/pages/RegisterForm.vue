<template>
  <div id="main-wrapper" class="container">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="card border-0 mt-3">
          <div class="card-body p-0">
            <div class="row no-gutters">
              <div class="col-lg-6 d-none d-lg-inline-block">
                <div class="account-block rounded-right">
                  <div class="overlay rounded-right"></div>
                  <div class="account-testimonial">
                    <h4 class="text-white mb-4">This beautiful theme yours!</h4>
                    <p class="lead text-white">
                      "Best investment i made for a long time. Can only
                      recommend it for other users."
                    </p>
                    <p>- Admin User</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <form class="mb-3 mt-md-4">
                  <h2 class="fw-bold text-uppercase">Lorem ipsum</h2>
                  <p class="mb-3">Please enter your login and password!</p>
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
                  <div class="d-flex justify-content-center mb-3 gap-2">
                    <div class="col-6 form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="firstname"
                        placeholder="Don Andres"
                      />
                      <label for="firstname" class="form-label"
                        >Firstname</label
                      >
                    </div>
                    <div class="col-6 form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="lastname"
                        placeholder="Iniesta"
                      />
                      <label for="lastname" class="form-label">Lastname</label>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mb-3 gap-2">
                    <div class="col-6 form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="name@example.com"
                      />
                      <label for="email" class="form-label"
                        >Email address</label
                      >
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
                    <div class="d-flex justify-content-center gap-2">
                      <div class="col-6 form-floating">
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="*******"
                        />
                        <label for="password" class="form-label"
                          >Password</label
                        >
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
                  <div class="mb-3">
                    <div class="d-flex justify-content-center">
                      <div class="col-12 form-floating">
                        <textarea class="form-control" value=""></textarea>
                        <label
                          for="example-text-input"
                          class="form-control-label"
                          >About me</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="d-grid">
                    <button class="btn btn-outline-dark" type="submit">
                      Register
                    </button>
                  </div>
                </form>
                <div>
                  <p class="mb-0 text-center">
                    Do you have an account?
                    <a class="text-primary fw-bold" @click="showLogin()"
                      >Sign In</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  props: ["register", "login", "showLogin"],
  components: {},
  data() {
    return {};
  },
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

/* ---- */
a {
  text-decoration: none;
  cursor: pointer;
}

template {
  margin-top: 20px;
  background: #f6f9fc;
}
.account-block {
  padding: 0;
  background-image: url(../../../assets/img/author.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: relative;
}
.account-block .overlay {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.account-block .account-testimonial {
  text-align: center;
  color: #fff;
  position: absolute;
  margin: 0 auto;
  padding: 0 1.75rem;
  bottom: 3rem;
  left: 0;
  right: 0;
}
</style>
