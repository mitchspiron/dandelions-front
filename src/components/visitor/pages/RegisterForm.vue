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

              <div class="col-lg-5">
                <form class="mb-3 mt-md-4">
                  <h2 class="fw-bold mb-2 text-uppercase">Lorem ipsum</h2>
                  <p class="mb-3">Please enter your login and password!</p>
                  <div class="mb-3">
                    <div class="d-flex justify-content-between mb-4">
                      <div class="col-5">
                        <label for="firstname" class="form-label"
                          >Firstname</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="firstname"
                          placeholder="Don Andres"
                        />
                      </div>
                      <div class="col-5">
                        <label for="lastname" class="form-label"
                          >Lastname</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="lastname"
                          placeholder="Iniesta"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="mb-3">
                    <div class="d-flex justify-content-between mb-4">
                      <div class="col-5">
                        <label for="password" class="form-label"
                          >Password</label
                        >
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="*******"
                        />
                      </div>
                      <div class="col-5">
                        <label for="password-repeat" class="form-label"
                          >Password repeat</label
                        >
                        <input
                          type="password"
                          class="form-control"
                          id="password-repeat"
                          placeholder="*******"
                        />
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
};
</script>
<style scoped>
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
