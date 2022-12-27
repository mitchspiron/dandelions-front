<template>
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <h1 class="display-6 mb-5">
            Nous sommes ravis que vous vous rapprochez de nous
          </h1>
          <p class="mb-4">
            Si vous avez des questions sur les évènements, vous pouvez
            directement vous adresser aux organisateurs sur la fiche événement.
            Si vous avez des remarques sur les articles, mettez directement des
            commentaires sur l’article. Pour ce qui est des demandes
            particulières et des questions ciblées, nous serions ravis de vous
            répondre via cette fiche.
          </p>
          <form @submit.prevent="submit">
            <div class="row g-3">
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    placeholder="00000000"
                    v-model="form.telephone"
                    @blur="validate('telephone')"
                    @keypress="validate('telephone')"
                  />
                  <label for="phone" class="form-label">Téléphone</label>
                  <p class="text-danger" v-if="!!errors.telephone">
                    {{ errors.telephone }}
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="name@example.com"
                    v-model="form.from"
                    @blur="validate('from')"
                    @keypress="validate('from')"
                  />
                  <label for="email" class="form-label">Adresse email</label>
                  <p class="text-danger" v-if="!!errors.from">
                    {{ errors.from }}
                  </p>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    placeholder="Don Andres"
                    v-model="form.fullname"
                    @blur="validate('fullname')"
                    @keypress="validate('fullname')"
                  />
                  <label for="subject">Nom complet</label>
                  <p class="text-danger" v-if="!!errors.fullname">
                    {{ errors.fullname }}
                  </p>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    v-model="form.message"
                    @blur="validate('message')"
                    @keypress="validate('message')"
                    placeholder="Laisser votre message ici"
                    id="message"
                    style="height: 100px"
                  ></textarea>
                  <label for="message">Message</label>
                  <p class="text-danger" v-if="!!errors.message">
                    {{ errors.message }}
                  </p>
                </div>
              </div>
              <div class="col-12">
                <button
                  v-if="loading"
                  class="btn btn-outline-secondary py-3 px-5"
                  type="button"
                  disabled
                >
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  En cours d'envoie...
                </button>
                <button
                  v-else
                  class="btn py-3 px-5 text-light"
                  type="submit"
                  style="background: #582456"
                >
                  Envoyer
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
import { useToast } from "vue-toastification";
import * as yup from "yup";
import { sendMailContact } from "../../../api/mailer";

const contactFormSchema = yup.object().shape({
  fullname: yup.string().required("Veuillez insérer votre nom complet"),
  from: yup
    .string()
    .required("Veuillez insérer votre adresse email")
    .email("Veuillez saisir un email valide"),
  telephone: yup
    .string()
    .required("Veuillez insérer votre numéro de téléphone"),
  message: yup.string().required("Veuillez insérer le message à envoyer"),
});
export default {
  name: "ContactForm",
  components: {},
  data() {
    return {
      errors: {
        from: "",
        telephone: "",
        fullname: "",
        message: "",
      },
      form: {
        from: "",
        telephone: "",
        fullname: "",
        message: "",
      },
      loading: false,
    };
  },
  methods: {
    validate(field) {
      contactFormSchema
        .validateAt(field, this.form)
        .then(() => (this.errors[field] = ""))
        .catch((err) => {
          this.errors[err.path] = err.message;
        });
    },
    submit() {
      contactFormSchema
        .validate(this.form, { abortEarly: false })
        .then(() => {
          const toast = useToast();
          this.loading = true;
          sendMailContact(this.form)
            .then(() => {
              this.loading = false;
              this.$swal(
                "Message envoyé!",
                "Nous vous répondrons dans le plus bref délais",
                "success"
              );
              this.form.from = "";
              this.form.telephone = "";
              this.form.fullname = "";
              this.form.message = "";
            })
            .catch((e) => {
              this.loading = false;
              toast.info(e.response.data.message);
            });
        })
        .catch((err) => {
          err.inner.forEach((error) => {
            this.errors = { ...this.errors, [error.path]: error.message };
          });
        });
    },
  },
};
</script>
