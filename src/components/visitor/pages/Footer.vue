<template>
  <div class="container-fluid footer mt-5 pt-5 fadeIn" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-3 col-md-6">
          <h1 class="text-white mb-4">
            <!-- <img
              class="img-fluid me-3"
              src="../../../assets/img/icon/icon-02-light.png"
              alt=""
            /> -->Dandelions
          </h1>
          <p>
            Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
            ipsum et lorem et sit, sed stet lorem sit clita
          </p>
          <div class="d-flex pt-2">
            <a class="btn btn-square me-1" href=""
              ><i class="fab fa-twitter"></i
            ></a>
            <a class="btn btn-square me-1" href=""
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a class="btn btn-square me-1" href=""
              ><i class="fab fa-youtube"></i
            ></a>
            <a class="btn btn-square me-0" href=""
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="text-light mb-4">Address</h5>
          <p>
            <i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA
          </p>
          <p><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
          <p><i class="fa fa-envelope me-3"></i>info@example.com</p>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="text-light mb-4">Quick Links</h5>
          <router-link to="/" class="btn btn-link" href="">Home</router-link>
          <router-link to="/article" class="btn btn-link">Articles</router-link>
          <router-link to="/evenement" class="btn btn-link"
            >Evénements</router-link
          >
          <router-link to="/entreprise" class="btn btn-link"
            >Enterprises</router-link
          >
          <router-link to="/contact" class="btn btn-link" href=""
            >Contact</router-link
          >
          <a class="btn btn-link" href="">Terms & Condition</a>
          <a class="btn btn-link" href="">Support</a>
        </div>
        <div class="col-lg-3 col-md-3">
          <h5 class="text-light mb-4">Newsletter</h5>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div class="position-relative mx-auto" style="max-width: 400px">
            <input
              class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              class="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a href="#">Dandelions</a>, All Right Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style scoped>
.container-fluid {
  background-color: /* #15233c */ #2c122b;
}
.footer {
  color: #a7a8b4;
}

.footer .btn.btn-link {
  display: block;
  margin-bottom: 5px;
  padding: 0;
  text-decoration: none;
  text-align: left;
  color: #a7a8b4;
  font-weight: normal;
  text-transform: capitalize;
  transition: 0.3s;
}

.footer .btn.btn-link::before {
  position: relative;
  content: "\f105";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  color: #a7a8b4;
  margin-right: 10px;
}

.footer .btn.btn-link:hover {
  color: #f6f7fc;
  letter-spacing: 1px;
  box-shadow: none;
}

.footer .btn.btn-square {
  color: #a7a8b4;
  border: 1px solid#A7A8B4;
}

.footer .btn.btn-square:hover {
  color: #0dd3f1;
  border-color: #f6f7fc;
}

.footer .copyright {
  padding: 25px 0;
  font-size: 15px;
  border-top: 1px solid rgba(256, 256, 256, 0.1);
}

.footer .copyright a {
  color: #0dd3f1;
}

.footer .copyright a:hover {
  color: #ffffff;
}
</style>
