<template>
  <div id="comments" class="comments-block block">
    <h3 class="news-title">
      <span>02 Comments</span>
    </h3>
    <ul class="all-comments">
      <li v-for="(comment, i) in comments" :key="i">
        <div class="comment">
          <img class="commented-person" alt="" :src="comment.img" />
          <div class="comment-body">
            <div class="meta-data">
              <Popper placement="auto" hover="true"
                ><span class="commented-person-name"
                  ><router-link to="/entreprise/name" class="text-dark">{{
                    comment.name
                  }}</router-link></span
                >

                <template #content>
                  <div class="card border-0 shadow-lg" style="max-width: 540px">
                    <div class="media">
                      <router-link
                        to="/entreprise/name"
                        class="d-flex align-items-center"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          :src="comment.img"
                          alt="Post Thumbnail"
                          class="w-100"
                        />
                        <div class="media-body">
                          <h3 style="margin-top: -5px">
                            {{ comment.name }}
                          </h3>
                          <p class="mb-0 small text-dark">
                            {{ comment.content }}
                          </p>
                          <!-- <div class="content">
                            <router-link
                              to="/article/slug"
                              class="read-more-btn"
                              href=""
                              >Read Full Article -></router-link
                            >
                          </div> -->
                        </div>
                      </router-link>
                    </div>
                  </div>
                </template>
              </Popper>
              <span class="comment-hour d-block">{{ comment.datetime }}</span>
            </div>
            <div class="comment-content">
              <p>
                {{ comment.content }}
              </p>
            </div>
            <div class="text-left">
              <a class="comment-reply" href="#"
                ><i class="fa fa-reply"></i> Reply</a
              >
            </div>
          </div>
        </div>
        <ul class="comments-reply" v-if="comment.reply">
          <li>
            <div class="comment">
              <img class="commented-person" alt="" :src="comment.reply.img" />
              <div class="comment-body">
                <div class="meta-data">
                  <Popper placement="auto" hover="true"
                    ><span class="commented-person-name"
                      ><router-link to="/entreprise/name" class="text-dark">{{
                        comment.reply.name
                      }}</router-link></span
                    >

                    <template #content>
                      <div
                        class="card border-0 shadow-lg"
                        style="max-width: 540px"
                      >
                        <div class="media">
                          <router-link
                            to="/entreprise/name"
                            class="d-flex align-items-center"
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              :src="comment.reply.img"
                              alt="Post Thumbnail"
                              class="w-100"
                            />
                            <div class="media-body">
                              <h3 style="margin-top: -5px">
                                {{ comment.reply.name }}
                              </h3>
                              <p class="mb-0 small text-dark">
                                {{ comment.reply.content }}
                              </p>
                              <!-- <div class="content">
                                <router-link
                                  to="/article/slug"
                                  class="read-more-btn"
                                  href=""
                                  >Read Full Article -></router-link
                                >
                              </div> -->
                            </div>
                          </router-link>
                        </div>
                      </div>
                    </template>
                  </Popper>
                  <span class="comment-hour d-block">{{
                    comment.reply.datetime
                  }}</span>
                </div>
                <div class="comment-content">
                  <p>
                    {{ comment.reply.content }}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="comment-form">
    <h3 class="title-normal">Leave a Reply</h3>
    <p class="mb-4">Your email address will not be published.</p>
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
import Popper from "vue3-popper";

export default {
  name: "Comment",
  components: {
    Popper,
  },
  data() {
    return {
      comments: [
        {
          img: require("../../../assets/img/profile.jpg"),
          name: "Jack Anderson",
          datetime: "February 6, 2019 at 12:20 pm",
          content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Qui expedita magnam ea tempora consectetur fugit dolorum
                    numquam at obcaecati voluptatibus.`,
          reply: {
            img: require("../../../assets/img/testimonial-1.jpg"),
            name: "Jhonny American",
            datetime: "March 9, 2019 at 12:20 pm",
            content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Qui expedita magnam ea tempora consectetur fugit dolorum
                    numquam at obcaecati voluptatibus.`,
          },
        },
        {
          img: require("../../../assets/img/testimonial-2.jpg"),
          name: "Bob McDonald",
          datetime: "February 6, 2019 at 12:20 pm",
          content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Qui expedita magnam ea tempora consectetur fugit dolorum
                    numquam at obcaecati voluptatibus.`,
        },
      ],
    };
  },
};
</script>
<style scoped>
.content a {
  float: right;
  margin-right: 10px;
  color: #2c122b;
  display: inline;
  text-decoration: none;
  background-position: 0% 110%;
  background-repeat: no-repeat;
  background-size: 100% 3px;
  transition: 0.3s;
}
.read-more-btn {
  font-family: "Neuton", serif;
  font-size: 15px;
}
.media {
  width: 410px;
}
.media img {
  height: 170px;
  width: 130px !important;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 5px 0 0 5px;
}

.media-body {
  margin-left: 15px;
}
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
  margin: 0 0 0 40px;
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
