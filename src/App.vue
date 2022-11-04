<template>
  <NavBar />
  <router-view/>
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
