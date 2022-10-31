<template>
  <div class="col-lg-12 mb-5 mb-lg-0">
    <article>
      <img
        loading="lazy"
        decoding="async"
        src="../../../assets/img/post/post-4.jpg"
        alt="Post Thumbnail"
        class="w-100"
        style=""
      />
      <ul class="post-meta mb-2 mt-4 d-flex">
        <li class="me-auto">
          <i class="bi bi-calendar-plus"></i>
          <span> 29 May, 2021</span>
        </li>
        <li>
          <i class="bi bi-calendar-x text-danger"></i>
          <span class="text-danger"> 29 May, 2021</span>
        </li>
      </ul>
      <h1 class="my-3">Top 7 Reasons to Visit Denver this Summer</h1>
      <div class="content text-left">
        <h1 id="heading">Heading</h1>
        <p>
          Here is example of hedings. You can use this heading by following
          markdownify rules. For example: use
          <code>#</code> for heading 1 and use <code>######</code> for heading
          6.
        </p>
        <h2 id="emphasis">Emphasis</h2>
        <p>
          Emphasis, aka italics, with <em>asterisks</em> or
          <em>underscores</em>.
        </p>
        <p>
          Strong emphasis, aka bold, with <strong>asterisks</strong> or
          <strong>underscores</strong>.
        </p>
        <p>
          Combined emphasis with
          <strong>asterisks and <em>underscores</em></strong
          >.
        </p>
        <p>Strikethrough uses two tildes. <del>Scratch this.</del></p>
        <h2 id="paragraph">Paragraph</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil
          enim maxime corporis cumque totam aliquid nam sint inventore optio
          modi neque laborum officiis necessitatibus, facilis placeat pariatur!
          Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque,
          porro sint minima similique magni perferendis fuga! Optio vel ipsum
          excepturi tempore reiciendis id quidem? Vel in, doloribus debitis
          nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit,
          pariatur harum autem a! Velit impedit atque maiores animi possimus
          asperiores natus repellendus excepturi sint architecto eligendi non,
          omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus
          debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.
        </p>
      </div>
    </article>
  </div>
  <div class="d-grid gap-2 col-6 mx-auto">
    <a
      class="btn btn-md btn-outline-primary"
      data-bs-toggle="modal"
      data-bs-target="#EventModal"
      >Subscribe</a
    >
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="EventModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Subscribe to an event here
          </h1>
        </div>
        <div class="modal-body">
          <div class="col-12 form-floating mb-2">
            <input
              type="text"
              class="form-control"
              id="fullname"
              placeholder=""
            />
            <label for="fullname" class="form-label">Nom complet</label>
          </div>
          <div class="col-12 form-floating mb-2">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder=""
            />
            <label for="email" class="form-label">Adresse email</label>
          </div>
          <div class="col-12 form-floating">
            <input
              type="telephone"
              class="form-control"
              id="telephone"
              placeholder=""
            />
            <label for="telephone" class="form-label">Téléphone</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn px-3" style="background: #582456">
            <i class="fa-solid fa-check text-white"></i>
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            class="btn bg-dark px-3"
          >
            <i class="fa-solid fa-xmark text-light"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventContent",
  components: {},
};
</script>
<style scoped>
.btn-outline-primary {
  background: transparent;
  color: #582456;
  border-color: #582456;
}
.btn-outline-primary:hover,
.btn-outline-primary:active,
.btn-outline-primary.active .btn-outline-primary:focus,
.btn-outline-primary.focus {
  background: #582456 !important;
  border-color: #582456 !important;
  color: #fff;
}
.post-meta {
  padding-left: 0;
}
.post-meta li {
  list-style-type: none;
  display: inline-block;
  color: #888;
  font-weight: 500;
}
.post-meta li a {
  display: inline-block;
  background-color: rgba(19, 19, 19, 0.05);
  color: black;
  text-transform: capitalize;
  padding: 2px 8px;
  margin-bottom: 8px;
  margin-right: 2px;
  font-size: 14px;
  border-radius: 0;
}
.post-meta li a:hover {
  background-color: rgba(61, 234, 164, 0.25);
}

img {
  vertical-align: middle;
  border: 0;
  max-width: 100%;
  height: auto;
}

a,
a:hover,
a:focus {
  text-decoration: none;
}

a {
  cursor: pointer;
  transition: 0.2s ease;
}
a:focus {
  outline: 0;
}

a:hover {
  color: #13ae6f;
}

p {
  font-weight: 400;
  color: #333;
  font-size: 16px;
  line-height: 1.6;
  font-family: "Work Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  color: #131313;
  font-family: "Neuton", serif;
  font-weight: 700;
  line-height: 1.3;
}

h1,
.h1 {
  font-size: 36px;
}
@media (max-width: 991px) {
  h1,
  .h1 {
    font-size: 30px;
  }
}
@media (max-width: 767px) {
  h1,
  .h1 {
    font-size: 26px;
  }
}

h2,
.h2 {
  font-size: 28px;
}
@media (max-width: 767px) {
  h2,
  .h2 {
    font-size: 24px;
  }
}

h3,
.h3 {
  font-size: 22px;
}
@media (max-width: 767px) {
  h3,
  .h3 {
    font-size: 20px;
  }
}

h4,
.h4 {
  font-size: 20px;
}

h5,
.h5 {
  font-size: 16px;
}

h6,
.h6 {
  font-size: 14px;
}

/* ------------------------ */
</style>
