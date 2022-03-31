<template>
  <nav class="navbar sticky-top navbar-light bg-dark1">
    <a class="navbar-brand" href="#">
      <img
        src="@/assets/encore.jpg"
        width="auto"
        height="auto"
        class="d-inline-block align-top mobile-img"
        alt=""
      />
    </a>
    <!-- DROPDOWN MENU İS NOT WORKİNG , İTS NOT FULLY RESPONSİVE TO MOBİLE DESİGN -->
    <div class="d-flex flex-row-reverse">
      <div class="dropdown show menumobil">
        <a
          class="btn dropdown-toggle deneme"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Menu
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">Giriş Yap</a>
          <a class="dropdown-item" href="#">Üye Ol</a>
          <a class="dropdown-item" href="#">Girişim</a>
          <a class="dropdown-item" href="#">Yatırım</a>
          <a class="dropdown-item" href="#">Keşfet</a>
        </div>
      </div>
      <div class="d-flex px-3 desktop mobile-img">
        <router-link to="/signin"
          ><button type="button" class="btn member rounded-pill desktop">
            Giriş Yap
          </button></router-link
        >
        <router-link to="signup">
          <button type="button" class="btn member rounded-pill desktop">
            Üye Ol
          </button></router-link
        >
      </div>
      <div class="d-flex flex-row-reverse desktop">
        <div class="p-2 menu desktop"><a href="">Girişim</a></div>
        <div class="p-2 menu desktop"><a href="">Yatırım</a></div>
        <div class="p-2 menu desktop"><a href="">Keşfet</a></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      auth: false,
    };
  },
};
</script>

<style>
.bg-dark1 {
  background-color: rgb(0, 0, 0);
}
ul {
  list-style-type: none;
}
.menu a {
  text-decoration: none !important;
  font-size: 1rem;
  color: #f16124;
}

.member {
  color: white !important;
  background-color: #f16124 !important;
  margin-left: 5px;
}
.deneme {
  color: #f16124;
}

@media only screen and (min-width: 700px) {
  .menumobil {
    display: none;
    padding: auto;
    margin: auto;
  }
}
@media only screen and (min-width: 400px) {
  .menumobil {
    padding: 0px;
    margin: 0px;
  }
  .mobile-img {
    padding: 0;
    margin: 0;
  }
}
@media only screen and (max-width: 700px) {
  .desktop {
    display: none !important;
  }
}
</style>
