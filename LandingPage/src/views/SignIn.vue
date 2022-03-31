<template>
  <!-- <div class="mt-5">
    <p>
      Hesabınız yoksa hemen şimdi
      <router-link to="/signUp">kaydolun!</router-link>
    </p>

    <input placeholder="email" v-model="email" class="form-control mt-3" />
    <input
      type="password"
      placeholder="password"
      v-model="password"
      class="form-control mt-3"
    />
    <button @click="login">{{ $t("login") }}</button>
  </div> -->
  <!-- <div class="login-bloc"> -->
  <div class="container">
    <div class="row">
      <div class="col-md-4 login-sec">
        <h2 class="text-center">{{ $t("login") }}</h2>
        <form class="login-form" @submit.prevent="login">
          <div class="form-group">
            <label for="exampleInputEmail1">{{ $t("email") }}</label>
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">{{ $t("Password") }}</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" />
              <small>Remember Me</small>
            </label>
            <router-link to="/investor"
              ><button type="submit" class="btn btn-login float-right">
                {{ $t("login") }}
              </button></router-link
            >
          </div>
          <p>
            Hesabınız yoksa hemen şimdi
            <router-link to="/signUp">kaydolun!</router-link>
          </p>
        </form>
      </div>
      <div class="col-md-8 banner-sec">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img
                class="d-block img-fluid"
                src="https://static.pexels.com/photos/33972/pexels-photo.jpg"
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <div class="banner-text">
                  <h2>Yatırımcı onaylı girişimler</h2>
                  <p>
                    Tüm girişimler, yakın tarihli benzer yatırımlar da
                    incelenerek ve en az 3 nitelikli yatırımcının olumlu görüşü
                    alınarak değerlendirilir.
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block img-fluid"
                src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg"
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <div class="banner-text">
                  <h2>Yetkin girişimci seçimi</h2>
                  <p>
                    Girişimciler önce 3-6 aylık başvuru ve eleme sürecinden
                    geçirilir. En az 3 nitelikli yatırımcının olumlu görüşü
                    sonrasında yatırımcılarla buluşturulur.
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block img-fluid"
                src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg"
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <div class="banner-text">
                  <h2>DENEME</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "LoginView",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(8),
    },
    email: {
      required,
      email,
    },
  },
  //   methods: {
  //     // async login() {
  //     //   await this.$store.dispatch("signin", {
  //     //     email: this.email,
  //     //     password: this.password,
  //     //   });
  //     // },
  //   },
};
</script>

<style>
@media (max-width: 800px) {
  .carousel-item {
    display: none !important;
  }
}
.login-block {
  background: #de6262; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #ffb88c,
    #de6262
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #ffb88c,
    #de6262
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  float: left;
  width: 100%;
  padding: 50px 0;
}
.banner-sec {
  background: url(https://static.pexels.com/photos/33972/pexels-photo.jpg)
    no-repeat left bottom;
  background-size: cover;
  min-height: 500px;
  border-radius: 0 10px 10px 0;
  padding: 0;
}
.container {
  background: #fff;
  border-radius: 10px;
  /* box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1); */
  align-items: center;
}
.carousel-inner {
  border-radius: 0 10px 10px 0;
}
.carousel-caption {
  text-align: left;
  left: 5%;
}
.login-sec {
  padding: 50px 30px;
  position: relative;
}
.login-sec .copy-text {
  position: absolute;
  width: 80%;
  bottom: 20px;
  font-size: 13px;
  text-align: center;
}
.login-sec .copy-text i {
  color: #feb58a;
}
.login-sec .copy-text a {
  color: #e36262;
}
.login-sec h2 {
  margin-bottom: 30px;
  font-weight: 800;
  font-size: 30px;
  color: #de6262;
}
.login-sec h2:after {
  content: " ";
  width: 100px;
  height: 5px;
  background: #feb58a;
  display: block;
  margin-top: 20px;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
}
.btn-login {
  background: #de6262;
  color: #fff;
  font-weight: 600;
}
.banner-text {
  width: 70%;
  position: absolute;
  bottom: 40px;
  padding-left: 20px;
}
.banner-text h2 {
  color: #fff;
  font-weight: 600;
}
.banner-text h2:after {
  content: " ";
  width: 100px;
  height: 5px;
  background: #fff;
  display: block;
  margin-top: 20px;
  border-radius: 3px;
}
.banner-text p {
  color: #fff;
}
</style>
