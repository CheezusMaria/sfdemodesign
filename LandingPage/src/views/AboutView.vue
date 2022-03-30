<template>
  <div class="about"></div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    shower() {
      console.log(this.show);
      this.show = !this.show;
    },
  },
};
</script>

<style>
.btn {
  border: 2px solid red;
  border-radius: 20px;
}

p {
  text-align: center;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1.5s;
}

.fade-leave {
  /* opacity: 1; */
}

.fade-leave-active {
  transition: opacity 1.5s;
  opacity: 0;
}
.slide-enter {
}
.slide-enter-active {
  animation: slide-in 1s ease-in-out forwards;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-in-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
    transition: opacity 1.5s;
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    transition: opacity 1.5s;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
    transition: opacity 1.5s;
    opacity: 0;
  }
}
</style>
