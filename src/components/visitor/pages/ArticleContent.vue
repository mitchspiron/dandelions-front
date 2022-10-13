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
      <ul class="post-meta mb-2 mt-4">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            style="margin-right: 5px; margin-top: -4px"
            class="text-dark"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.5 10.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
            />
            <path
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"
            />
            <path
              d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"
            />
          </svg>
          <span>29 May, 2021</span>
        </li>
      </ul>
      <h1 class="my-3">Top 7 Reasons to Visit Denver this Summer</h1>
      <ul class="post-meta mb-4">
        <li><a href="">destination</a></li>
      </ul>
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
        <!-- table of content -->
        <h2 id="link">Link</h2>
        <p><a href="">I&rsquo;m an inline-style link</a></p>
        <p>
          <a href="" title="Google's Homepage"
            >I&rsquo;m an inline-style link with title</a
          >
        </p>
        <p>
          <a href="https://www.themefisher.com"
            >I&rsquo;m a reference-style link</a
          >
        </p>
        <p>
          <a href="#!">I&rsquo;m a relative reference to a repository file</a>
        </p>
        <p>
          <a href="https://gethugothemes.com"
            >You can use numbers for reference-style link definitions</a
          >
        </p>
        <p>
          Or leave it empty and use the
          <a href="https://www.getjekyllthemes.com">link text itself</a>.
        </p>
        <p>
          URLs and URLs in angle brackets will automatically get turned into
          links.
          <a href="http://www.example.com">http://www.example.com</a> or
          <a href="http://www.example.com">http://www.example.com</a>
          and sometimes example.com (but not on Github, for example).
        </p>
        <p>Some text to show that the reference links can follow later.</p>
        <hr />
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
        <hr />
        <h2 id="ordered-list">Ordered List</h2>
        <ol>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ol>
      </div>
    </article>
  </div>
  <!-- -------------------- -->
</template>

<script>
export default {
  name: "ArticleContent",
  components: {},
};
</script>
<style scoped>
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
