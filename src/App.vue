<template>
  <NavBar />
  <History/>
  <FooTer/>
</template>

<script>
import NavBar from "@/views/NavbarPage";
import FooTer from "@/views/FooterPage";
import History from "@/views/HistoryPage";

export default {
  components: {History, FooTer, NavBar}
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

<!--<template>-->
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
<!--  <router-view/>-->
<!--</template>-->

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--nav {-->
<!--  padding: 30px;-->
<!--}-->

<!--nav a {-->
<!--  font-weight: bold;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--nav a.router-link-exact-active {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->
