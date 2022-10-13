<template>
  <div id="comments" class="comments-block block">
    <h3 class="news-title">
      <span>02 Comments</span>
    </h3>
    <ul class="all-comments">
      <li>
        <div class="comment">
          <img
            class="commented-person"
            alt=""
            src="../../../assets/img/profile.jpg"
          />
          <div class="comment-body">
            <div class="meta-data">
              <span class="commented-person-name">Jack Anderson</span>
              <span class="comment-hour d-block"
                ><i class="fa fa-clock-o mr-2"></i>February 6, 2019 at 12:20
                pm</span
              >
            </div>
            <div class="comment-content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                perferendis asperiores voluptatum saepe repellat atque obcaecati
                dolores nulla, explicabo harum inventore sed corrupti molestiae
                aspernatur.
              </p>
            </div>
            <div class="text-left">
              <a class="comment-reply" href="#"
                ><i class="fa fa-reply"></i> Reply</a
              >
            </div>
          </div>
        </div>
        <ul class="comments-reply">
          <li>
            <div class="comment">
              <img
                class="commented-person"
                alt=""
                src="../../../assets/img/testimonial-1.jpg"
              />
              <div class="comment-body">
                <div class="meta-data">
                  <span class="commented-person-name">Jhonny American</span>
                  <span class="comment-hour d-block"
                    ><i class="fa fa-clock-o mr-2"></i>March 9, 2019 at 12:20
                    pm</span
                  >
                </div>
                <div class="comment-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Qui expedita magnam ea tempora consectetur fugit dolorum
                    numquam at obcaecati voluptatibus.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="comment last">
          <img
            class="commented-person"
            alt=""
            src="../../../assets/img/testimonial-2.jpg"
          />
          <div class="comment-body">
            <div class="meta-data">
              <span class="commented-person-name">Vicky Fong</span>
              <span class="comment-hour d-block"
                ><i class="fa fa-clock-o mr-2"></i>June 6, 2019 at 12:20
                pm</span
              >
            </div>
            <div class="comment-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
                ipsa dolor exercitationem culpa obcaecati illo veniam voluptatem
                perferendis hic nisi tempora omnis, mollitia unde doloribus.
              </p>
            </div>
            <div class="text-left">
              <a class="comment-reply" href="#"
                ><i class="fa fa-reply"></i> Reply</a
              >
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <div class="comment-form">
    <h3 class="title-normal">Leave a Reply</h3>
    <p class="mb-4">
      Your email address will not be published. Required fields are marked *
    </p>
    <form role="form">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <textarea
              class="form-control required-field"
              id="message"
              placeholder="Messege"
              rows="8"
              required
            ></textarea>
          </div>
        </div>

        <div class="col-md-12">
          <button
            class="comments-btn btn btn-sm btn-outline-primary"
            type="submit"
          >
            Post Comment
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Comment",
  components: {},
};
</script>
<style scoped>
.comments-block {
  margin: 40px 0;
}

.all-comments .comment-content {
  margin: 15px 0;
}
.all-comments .comment-reply {
  font-weight: 400;
  color: #777;
  font-size: 13px;
  border: 1px solid #dadada;
  padding: 5px 10px;
  border-radius: 3px;
}
.all-comments .comment-reply:hover {
  background: #582456;
  color: #fff;
  border-color: #582456;
}

.comments-counter {
  font-size: 18px;
}
.comments-counter a {
  color: #323232;
}

.all-comments {
  list-style: none;
  margin: 0;
  padding: 20px 0;
}
.all-comments .comment {
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
}
.all-comments .comment.last {
  border-bottom: 0;
  padding-bottom: 0;
  margin-bottom: 0;
}
.all-comments img.commented-person {
  height: 80px;
  margin-right: 20px;
  border-radius: 5px;
}
.all-comments .commented-person-name {
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 600;
  font-size: 18px;
  color: #303030;
}
.all-comments .comment-hour {
  color: #959595;
  font-size: 14px;
}

.comments-reply {
  list-style: none;
  margin: 0 0 0 70px;
}

a {
  text-decoration: none;
}

.comment-form {
  margin-bottom: 0;
}
.comment-form .title-normal {
  font-size: 22px;
}
.comment-form .comments-btn {
  margin-top: 10px;
  font-size: 12px;
}

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

.btn-sm {
  font-size: 14px;
  padding: 10px 25px;
}

.news-title {
  font-size: 30px;
  line-height: 28px;
  line-height: 100%;
  text-transform: uppercase;
  margin: 0 0 20px;
  padding-bottom: 10px;
}
.news-title span {
  line-height: 28px;
  padding-bottom: 14px;
  position: relative;
}
.news-title span:after {
  content: "";
  position: absolute;
  width: 60px;
  height: 2px;
  background: #582456;
  left: 0px;
  bottom: 0px;
}

.block {
  position: relative;
}
</style>
