<template>
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <h1 class="display-6 mb-5">
            If You Have Any Query, Please Contact Us
          </h1>
          <p class="mb-4">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.
          </p>
          <form>
            <div class="row g-3">
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label for="name">Your Name</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label for="email">Your Email</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label for="subject">Subject</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style="height: 100px"
                  ></textarea>
                  <label for="message">Message</label>
                </div>
              </div>
              <div class="col-12">
                <button
                  class="btn py-3 px-5 text-light"
                  type="submit"
                  style="background: #582456"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div
          class="col-lg-6 wow fadeIn"
          data-wow-delay="0.5s"
          style="min-height: 450px"
        >
          <div class="position-relative rounded overflow-hidden h-100">
            <iframe
              class="position-relative w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30118591.938351016!2d17.728929024975905!3d-22.854804081770922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21e7bfd6ac7a0c9b%3A0x23bec511bfca3052!2sR%C3%A9sidence%20des%20Ing%C3%A9nieurs!5e0!3m2!1sfr!2smg!4v1666136193097!5m2!1sfr!2smg"
              frameborder="0"
              style="min-height: 450px; border: 0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  components: {},
};
</script>
