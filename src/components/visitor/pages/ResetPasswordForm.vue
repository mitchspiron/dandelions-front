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
                <div class="mb-3 mt-md-4">
                  <div class="mb-4">
                    <h2 class="fw-bold mb-2 text-uppercase">Lorem ipsum</h2>
                    <p class="mb-2">Enter your new password to reset it</p>
                  </div>
                  <form @submit.prevent="submit">
                    <div class="col-12 form-floating mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="email address"
                        v-model="form.motDePasse"
                      />
                      <label for="password" class="form-label"
                        >Nouveau mot de passe</label
                      >
                    </div>
                    <div class="col-12 form-floating mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="confirm-password"
                        placeholder="email address"
                      />
                      <label for="confirm-password" class="form-label"
                        >Confirmer nouveau mot de passe</label
                      >
                    </div>
                    <div class="mb-3 d-grid">
                      <button class="btn btn-outline-dark" type="submit">
                        Reset Password
                      </button>
                    </div>
                  </form>
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
import { resetPassword } from "../../../api/auth-user";
import { useToast } from "vue-toastification";
export default {
  name: "ResetPasswordForm",
  components: {},
  data() {
    return {
      form: {
        motDePasse: "",
      },
    };
  },
  methods: {
    submit() {
      const toast = useToast();
      resetPassword(this.form, this.$route.params.token)
        .then(() => {
          this.$swal(
            "Mot de passe changé avec succès!",
            "Vous pouvez maintenant vous reconnecter",
            "success"
          );
          this.$router.push(`/se-connecter`);
        })
        .catch((e) => {
          toast.info(e.response.data.message);
        });
    },
  },
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
  background-image: url(../../../assets/img/feature.jpg);
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
