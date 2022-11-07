<template>
  <NavBar />
  <router-view/>
  <button v-on:click="scrollToTop()" class="hidden w-12 h-12 bg-sky-900 fixed z-99 bottom-0 right-0 mb-10 mr-10 flex justify-center items-center rounded-lg drop-shadow-2xl hover:bg-sky-500" id="myBtn" title="Scroll to top">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  </button>
  <FooTer/>
</template>

<script>
import NavBar from "@/views/NavbarPage";
import FooTer from "@/views/FooterPage";

export default {
  components: {NavBar,FooTer},
    name: "LocaleSwitcher",
    data() {
      return { locales: ["ru", "en", "uz"] };
    },
    methods: {
      updateLanguage() {
        sessionStorage.setItem("locale", this.$i18n.locale);
      },
    },
    mounted() {
      if (sessionStorage.getItem("locale")) {
        this.$i18n.locale = sessionStorage.getItem("locale");
      } else {
        sessionStorage.setItem("locale", this.$i18n.locale);
      }
    },
}
</script>

<script setup>
let mysize = screen.width;
// let size = "768px";
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("myBtn").classList.remove("hidden");
  } else {
    document.getElementById("myBtn").classList.add("hidden");
  }
}



function scrollToTop() {
  window.scroll({top: 0, behavior: "smooth"})
  console.log(mysize)
}
</script>

<style>
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
@font-face {
  font-family: "Gotham Pro";
  src: local("Gotham"),
  url(./fonts/GothamPro.ttf) format("truetype")
}
@font-face {
  font-family: "Gotham Pro Light";
  src: local("Gotham"),
  url(./fonts/GothamPro-Light.ttf) format("truetype")
}
@font-face {
  font-family: "Gotham Pro Medium";
  src: local("Gotham"),
  url(./fonts/GothamPro-Medium.ttf) format("truetype")
}
@font-face {
  font-family: "Gotham Pro Bold";
  src: local("Gotham"),
  url(./fonts/GothamPro-Bold.ttf) format("truetype")
}
@font-face {
  font-family: "Gotham Pro Bold Italic";
  src: local("Gotham"),
  url(./fonts/GothamPro-BoldItalic.ttf) format("truetype")
}
@font-face {
  font-family: "Gotham Pro Black";
  src: local("Gotham"),
  url(./fonts/GothamPro-Black.ttf) format("truetype")
}
</style>
