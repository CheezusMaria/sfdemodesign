<template>
  <div class="home">
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        background="black"
        img-width="1048"
        img-height="240"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          img-width="1048"
          img-height="240"
          caption="Nitelikli melek yatırımcılar"
          :img-src="require('../assets/slider2.jpg')"
        >
          <p class="p1">
            Sadece parasıyla değil, aynı zamanda tecrübesi, çevresi ve zamanıyla
            da girişime katkı yapan yatırımcılara ulaşma şansı sağlamaktadır.
          </p>
        </b-carousel-slide>
        <b-carousel-slide
          img-width="1048"
          img-height="240"
          caption="Dünyanın her yerinden yatırımcı bulma şansı"
          :img-src="require('../assets/1.jpg')"
        >
          <p>
            Startupfon tek şehir, tek tip yatırımcı değil, her coğrafyadan ve
            her geçmişten gelen yatırımcı havuzu sayesinde dünyayaya açılma
            imkanı sağlamaktadır.
          </p>
        </b-carousel-slide>
        <b-carousel-slide
          img-width="1048"
          img-height="240"
          caption="Yatırım sonrası tecrübeli ekip desteği ve takibi"
          :img-src="require('../assets/2.jpg')"
          img-alt="Blank image"
        >
          <p>
            Yatırım sonrası girişimciyi yalnız bırakmayan tecrübeli Startupfon
            ekibi, desteğiyle girişimcinin yanında olmakta ve projeyi takip
            etmektedir.
          </p>
        </b-carousel-slide>
        <b-carousel-slide
          img-width="1048"
          img-height="240"
          caption="Tecrübeli ekip"
          :img-src="require('../assets/3.jpg')"
          img-alt="Blank image"
        >
          <p>
            Tüm değerlendirmeler, Startupfon ekibinin 6 yıllık tecrübesi ve
            binlerce girişim değerlendirmesi birikimi ışığında yapılır.
          </p>
        </b-carousel-slide>
        <b-carousel-slide
          img-width="1048"
          img-height="240"
          caption="Denme"
          :img-src="require('../assets/4.jpg')"
          img-alt="Blank image"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
            pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>

      <!-- <p class="mt-4">
        Slide #: {{ slide }}<br />
        Sliding: {{ sliding }}
      </p> -->
    </div>

    <div class="center">
      <h1 class="text-center why">
        <a href="https://usecheck.com/" class="btn-shine" target="_blank"
          >Neden Startupfon?</a
        >
      </h1>
      <div class="emptySection"></div>

      <div class="row mx-auto cardSection">
        <div class="col-4">
          <b-card
            title="Özenli girişim değerlendirmesi"
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text class="cardText">
              Değerlendirmeler; hedeflenen pazar, pazardaki rekabet,
              geliştirilen ürün, iş modeli ve girişimin yakın zamanlı finansal
              performansı esas alınarak yapılır.
            </b-card-text>
          </b-card>
        </div>
        <div class="col-4">
          <b-card
            title="Yatırımcı onaylı girişimler"
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text class="cardText">
              Tüm girişimler, yakın tarihli benzer yatırımlar da incelenerek ve
              en az 3 nitelikli yatırımcının olumlu görüşü alınarak
              değerlendirilir.
            </b-card-text>
          </b-card>
        </div>
        <div class="col-4">
          <b-card
            title="Yetkin girişimci seçimi"
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text class="cardText">
              Girişimciler önce 3-6 aylık başvuru ve eleme sürecinden geçirilir.
              En az 3 nitelikli yatırımcının olumlu görüşü sonrasında
              yatırımcılarla buluşturulur.
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>

    <div class="row mx-auto cardSection">
      <div class="col-4">
        <b-card
          title="Dünyanın her yerinden yatırımcı bulma şansı"
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text class="cardText">
            Startupfon tek şehir, tek tip yatırımcı değil, her coğrafyadan ve
            her geçmişten gelen yatırımcı havuzu sayesinde dünyayaya açılma
            imkanı sağlamaktadır.
          </b-card-text>
        </b-card>
      </div>
      <div class="col-4">
        <b-card
          title="Yatırım sonrası tecrübeli ekip desteği ve takibi"
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text class="cardText">
            Yatırım sonrası girişimciyi yalnız bırakmayan tecrübeli Startupfon
            ekibi, desteğiyle girişimcinin yanında olmakta ve projeyi takip
            etmektedir.
          </b-card-text>
        </b-card>
      </div>
      <div class="col-4">
        <b-card
          title="Türkiye'nin yatırım lideri"
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text class="cardText">
            Ülke çapında en kısa sürede, en çok yatırım gerçekleştiren yatırım
            merkezidir.
          </b-card-text>
        </b-card>
      </div>
    </div>
    <div class="animatedTeam">
      <svg width="100%" height="100%">
        <text x="50%" y="60%" text-anchor="middle">
          Yatırım Alan Girişimler
        </text>
      </svg>
    </div>
    <div class="row mx-auto cardSection">
      <div class="col-6">
        <div>
          <b-card class="overflow-hidden mb-2" style="max-width: 540px">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://picsum.photos/400/400/?image=20"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>

      <div class="col-6">
        <div>
          <b-card class="overflow-hidden mb-2" style="max-width: 540px">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://picsum.photos/400/400/?image=20"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <div class="row mx-auto cardSection">
      <div class="col-6">
        <div>
          <b-card class="overflow-hidden mb-2" style="max-width: 540px">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://picsum.photos/400/400/?image=20"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>

      <div class="col-6">
        <div>
          <b-card class="overflow-hidden mb-2" style="max-width: 540px">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://picsum.photos/400/400/?image=20"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <div class="row mx-auto cardSection">
      <div class="col-6">
        <div>
          <b-card class="overflow-hidden mb-2" style="max-width: 540px">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://picsum.photos/400/400/?image=20"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>

      <div class="col-6">
        <div>
          <b-card class="overflow-hidden mb-2" style="max-width: 540px">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://picsum.photos/400/400/?image=20"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style>
svg text {
  font-family: Lora;
  letter-spacing: 10px;
  stroke: #f16124;
  font-size: 5rem;
  font-weight: 400;
  stroke-width: 3;

  animation: textAnimate 5s infinite alternate;
}

@keyframes textAnimate {
  0% {
    stroke-dasharray: 0 50%;
    stroke-dashoffset: 20%;
    fill: hsl(0, 0%, 41%);
  }

  100% {
    stroke-dasharray: 50% 0;
    stroke-dashoffstet: -20%;
    fill: rgba(189, 192, 192, 0);
  }
}

.card-card_title {
  background-color: black;
}
.card-card_header {
}
.card-card_footer {
  color: #000;
}
.p1 {
  margin-bottom: 20%;
}

.cardSection {
  background-color: black;
  align-content: center;
  align-items: center;
}
.center {
  align-content: center;
  align-items: center;
}
.why {
  color: white;
  background-color: black;
  margin-bottom: 0px;
}
.emptySection {
  background-color: black;
  padding-bottom: 20px;
}
.mb-2 {
  background-color: rgb(27, 27, 27) !important;
  color: #f16124;
}
.cardText {
  color: white !important;
}
.animatedTeam {
  background-color: black;
}
.btn-shine {
  transform: translate(-50%, -50%);

  color: #970000;
  background: linear-gradient(to right, #4d4d4d 0, white 10%, #4d4d4d 20%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 4s infinite alternate;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  font-size: 5rem;
  text-decoration: none;
  white-space: nowrap;
}

@keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 300px;
  }
  100% {
    background-position: 600px;
  }
}
</style>
