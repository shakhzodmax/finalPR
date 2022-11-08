<template>
    <div class="2xl:block xl:block lg:block md:hidden sm:hidden hidden mb-14 absolute w-full z-50">
      <nav class="bg-sky-800 fixed top-0 w-full">
        <div class="container mx-auto text-white">
          <div class="flex justify-between">
            <a class="flex-none flex justify-center items-center" href="/">
              <img class="w-14 h-14 2xl:block xl:block lg:block md:hidden" src="~@/assets/csd.svg" alt="">
              <p class="text-xs pl-1 2xl:block xl:block lg:hidden md:hidden sm:hidden uppercase"> {{ $t('navbar.logo-text-part-1') }} <span class="bg-white/50 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">BETA</span> <br> {{ $t('navbar.logo-text-part-2') }}  </p>
            </a>
            <div class="flex justify-between 2xl:text-base xl:text-xs lg:text-xs">
              <button v-on:click="openMenu('aboutUs')" class="px-10 hover:bg-[#1da1f2]/90 duration-500">{{ $t('navbar.about-us') }}</button>
              <button v-on:click="openMenu('ourServices')" class="px-10 hover:bg-[#1da1f2]/90 duration-500">{{ $t('navbar.our-services') }}</button>
              <button v-on:click="openMenu('cooperate')" class="px-10 hover:bg-[#1da1f2]/90 duration-500">{{ $t('navbar.cooperate') }}</button>
              <button v-on:click="openMenu('pressCenter')" class="px-10 hover:bg-[#1da1f2]/90 duration-500">{{ $t('navbar.press-center') }}</button>
              <button v-on:click="openMenu('interactive')" class="px-10 hover:bg-[#1da1f2]/90 duration-500">{{ $t('navbar.interactive') }}</button>
            </div>

            <div class="locale-changer items-center">
              <select class="bg-transparent border-0 mt-2 text-white" @change="updateLanguage()" v-model="$i18n.locale">
                <option class="text-black" v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
                  {{ locale.toUpperCase() }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      <div id="aboutUs" class="2lx:text-base lx:text-base lg:text-sm fixed top-14 w-full">
        <div class="bg-gray-300 p-5">
          <div class="container mx-auto">
            <div class="flex justify-center items-end">
              <div class="flex">
                <div class="flex flex-col">
                  <div class="flex justify-end ml-5">
                    <div class="2xl:w-3 2xl:h-1 xl:w-3 xl:h-1 lg:w-1 lg:h-0.5 bg-gray-400"></div>
                    <div class="2xl:w-5 2xl:h-1 xl:w-4 xl:h-1 lg:w-1 lg:h-0.5 bg-green-400"></div>
                    <div class="2xl:w-3 2xl:h-1 xl:w-3 xl:h-1 lg:w-1 lg:h-0.5 bg-sky-400"></div>
                  </div>
                  <div class="2lx:text-2xl xl:text-2xl lg:text-base font-bold">{{ $t('navbar.about-us') }}</div>
                </div>
              </div>
              <div class="ml-5">{{ $t('navbar.about-us-intro') }}</div>
            </div>
          </div>
        </div>
        <div class="shadow-2xl bg-white">
          <div class="container mx-auto p-5">
            <ul class="flex justify-around">
              <li class="font-bold"><a href="/ceoMessage">{{ $t('navbar.ceo-message') }}</a></li>
              <li><a class="font-bold" href="/profile">{{ $t('navbar.profile') }}</a>
                <ul>
                  <li class="pt-5"><a href="/profile">{{ $t('navbar.profile') }}</a></li>
                  <li><a href="/history">{{ $t('navbar.history') }}</a></li>
                  <li><a href="/headliners">{{ $t('navbar.headliners') }}</a></li>
                  <li><a href="/structure">{{ $t('navbar.structure') }}</a></li>
                </ul>
              </li>
              <li class="font-bold"><a href="/function">{{ $t('navbar.function') }}</a></li>
              <li class="font-bold"><a href="/membership">{{ $t('navbar.membership') }}</a></li>
              <li class="font-bold"><a href="/vacancy">{{ $t('navbar.vacancy') }}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="2lx:text-base lx:text-base lg:text-sm fixed top-14 w-full" id="ourServices">
        <div class="bg-gray-300 p-5">
          <div class="container mx-auto">
            <div class="flex justify-center items-end">
              <div class="flex">
                <div class="flex flex-col">
                  <div class="flex justify-end ml-5">
                    <div class="2xl:w-3 2xl:h-1 xl:w-3 xl:h-1 lg:w-1 lg:h-0.5 bg-gray-400"></div>
                    <div class="2xl:w-5 2xl:h-1 xl:w-4 xl:h-1 lg:w-1 lg:h-0.5 bg-green-400"></div>
                    <div class="2xl:w-3 2xl:h-1 xl:w-3 xl:h-1 lg:w-1 lg:h-0.5 bg-sky-400"></div>
                  </div>
                  <div class="2lx:text-2xl xl:text-2xl lg:text-base  font-bold">{{$t('navbar.our-services')}}</div>
                </div>
              </div>
              <div class="ml-5">{{$t('navbar.our-services-intro')}}</div>
            </div>
          </div>
        </div>
        <div class="shadow-2xl bg-white">
          <div class="container mx-auto p-5">
            <ul class="flex justify-around">
              <li><a class=" font-bold" href="/depoService">{{$t('navbar.services')}}</a>
                <ul>
                  <li class="pt-5"><a href="/depoService">{{$t('navbar.depository-services')}}</a></li>
                  <li><a href="/itService">{{$t('navbar.information-services')}}</a></li>
                  <li><a href="/consultService">{{$t('navbar.advisory-services')}}</a></li>
                  <li><a href="/eVote">{{$t('navbar.electronic-voting-services')}}</a></li>
                </ul>
              </li>
              <li class="font-bold"><a href="/tarif">{{$t('navbar.tarifs')}}</a></li>
              <li><a class="font-bold" href="/contacts">{{$t('navbar.contacts')}}</a>
                <ul>
                  <li class="pt-5"><a href="/schedule">{{$t('navbar.reception-schedule')}}</a></li>
                  <li><a href="/review">{{$t('navbar.our-reviews')}}</a></li>
                </ul>
              </li>
              <li class="font-bold"><a href="/technicalSupport">{{$t('navbar.technical-support')}}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="2lx:text-base lx:text-base lg:text-sm fixed top-14 w-full" id="cooperate">
        <div class="bg-gray-300 p-5">
          <div class="container mx-auto">
            <div class="flex justify-center items-end">
              <div class="flex">
                <div class="flex flex-col">
                  <div class="flex justify-end ml-5">
                    <div class="2xl:w-3 2xl:h-1 xl:w-3 xl:h-1 lg:w-1 lg:h-0.5 bg-gray-400"></div>
                    <div class="2xl:w-5 2xl:h-1 xl:w-4 xl:h-1 lg:w-1 lg:h-0.5 bg-green-400"></div>
                    <div class="2xl:w-3 2xl:h-1 xl:w-3 xl:h-1 lg:w-1 lg:h-0.5 bg-sky-400"></div>
                  </div>
                  <div class="2lx:text-2xl xl:text-2xl lg:text-base font-bold">
                    {{$t('navbar.cooperate')}}
                  </div>
                </div>
              </div>
              <div class="ml-5">{{$t('navbar.cooperate-intro')}}</div>
            </div>
          </div>
        </div>
        <div class="shadow-2xl bg-white">
          <div class="container mx-auto p-5">
            <ul class="flex justify-around">
              <li><a class=" font-bold" href="#">{{$t('navbar.management-control')}}</a>
                <ul>
                  <li class="pt-5"><a href="#">{{$t('navbar.supervisory-board')}}</a></li>
                  <li><a href="#">{{$t('navbar.executive-body')}}</a></li>
                  <li><a href="#">{{$t('navbar.internal-audit')}}</a></li>
                </ul>
              </li>
              <li><a class="font-bold" href="/document">{{$t('navbar.documents')}}</a>
                <ul>
                  <li class="pt-5"><a href="/conditions">{{$t('navbar.order')}}</a></li>
                  <li><a href="/regulation">{{$t('navbar.regulation')}}</a></li>
                </ul>
              </li>
              <li><a class="font-bold" href="#">{{$t('navbar.disclosure-information')}}</a>
                <ul>
                  <li class="pt-5"><a href="#">{{$t('navbar.list-affiliated')}}</a></li>
                  <li><a href="#">{{$t('navbar.essential-facts')}}</a></li>
                  <li><a href="/business">{{$t('navbar.bussines-plan')}}</a></li>
                  <li><a href="/kpi">{{$t('navbar.performance-indicators')}}</a></li>
                  <li><a href="#">{{$t('navbar.development-strategy')}}</a></li>
                </ul>
              </li>
              <li class="font-bold"><a href="/fund">{{$t('navbar.authorized-capital')}}</a></li>
              <li><a class="font-bold" href="/financialReport">{{$t('navbar.financial-statements')}}</a>
                <ul>
                  <li class="pt-5"><a href="/financialReport">{{$t('navbar.annual-reports')}}</a></li>
                  <li><a href="financialReport">{{$t('navbar.ifrs-reporting')}}</a></li>
                  <li><a href="financialReport">{{$t('navbar.information-purchases')}}</a></li>
                  <li><a href="financialReport">{{$t('navbar.external-audit')}}</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="2lx:text-base lx:text-base lg:text-sm fixed top-14 w-full" id="pressCenter">
        <div class="bg-gray-300 p-5">
          <div class="container mx-auto">
            <div class="flex justify-center items-end">
              <div class="flex">
                <div class="flex flex-col">
                  <div class="flex justify-end ml-5">
                    <div class="2xl:w-3 2xl:h-1 xl:w-3 xl:h-1 lg:w-1 lg:h-0.5 bg-gray-400"></div>
                    <div class="2xl:w-5 2xl:h-1 xl:w-4 xl:h-1 lg:w-1 lg:h-0.5 bg-green-400"></div>
                    <div class="2xl:w-3 2xl:h-1 xl:w-3 xl:h-1 lg:w-1 lg:h-0.5 bg-sky-400"></div>
                  </div>
                  <div class="2lx:text-2xl xl:text-2xl lg:text-base font-bold">{{$t('navbar.press-center')}}</div>
                </div>
              </div>
              <div class="ml-5">{{$t('navbar.press-center-intro')}}</div>
            </div>
          </div>
        </div>
        <div class="shadow-2xl bg-white">
          <div class="container mx-auto p-5">
            <ul class="flex justify-around">
              <li><a class=" font-bold" href="/pressSecretary">{{$t('navbar.press-secretary')}}</a>
                <ul>
                  <li class="pt-5"><a href="/pressRelease">{{$t('navbar.press-releases')}}</a></li>
                  <li><a href="/news">{{$t('navbar.news')}}</a></li>
                  <li><a href="/articles">{{$t('navbar.articles')}}</a></li>
                </ul>
              </li>
              <li><a class="font-bold" href="/media">{{$t('navbar.media-library')}}</a></li>
              <li class="font-bold"><a href="/statisticalInformation">{{$t('navbar.statistical-information')}}</a></li>
              <li><a class="font-bold" href="#">{{$t('navbar.useful-materials')}}</a>
                <ul>
                  <li class="pt-5"><a href="/depoInfo">{{$t('navbar.depo-infographics')}}</a></li>
                  <li><a href="/depoDigest">{{$t('navbar.depo-digest')}}</a></li>
                  <li><a href="/depoCompass">{{$t('navbar.depo-compass')}}</a></li>
                  <li><a href="/depoVestnik">{{$t('navbar.depo-bulletin')}}</a></li>
                </ul>
              </li>
              <li class="font-bold"><a href="/regulatory">{{$t('navbar.regulatory-documents')}}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="2lx:text-base lx:text-base lg:text-sm fixed top-14 w-full" id="interactive">
        <div class="bg-gray-300 p-5">
          <div class="container mx-auto">
            <div class="flex justify-center items-end">
              <div class="flex">
                <div class="flex flex-col">
                  <div class="flex justify-end ml-5">
                    <div class="2xl:w-3 2xl:h-1 xl:w-3 xl:h-1 lg:w-1 lg:h-0.5 bg-gray-400"></div>
                    <div class="2xl:w-5 2xl:h-1 xl:w-4 xl:h-1 lg:w-1 lg:h-0.5 bg-green-400"></div>
                    <div class="2xl:w-3 2xl:h-1 xl:w-3 xl:h-1 lg:w-1 lg:h-0.5 bg-sky-400"></div>
                  </div>
                  <div class="2lx:text-2xl xl:text-2xl lg:text-base font-bold">{{$t('navbar.interactive')}}</div>
                </div>
              </div>
              <div class="ml-5">{{$t('navbar.interactive-intro')}}</div>
            </div>
          </div>
        </div>
        <div class="shadow-2xl bg-white">
          <div class="container mx-auto p-5">
            <ul class="flex justify-around">
              <li><a class=" font-bold" href="#">{{$t('navbar.documents')}}</a>
                <ul>
                  <li class="pt-5"><a href="/contracts">{{$t('navbar.contract')}}</a></li>
                  <li><a href="/blanks">{{$t('navbar.forms')}}</a></li>
                  <li><a href="/glossary">{{$t('navbar.dictionary-terms')}}</a></li>
                </ul>
              </li>
              <li><a class="font-bold" href="/isinAndcfi">{{$t('navbar.isin-cfi')}}</a></li>
              <li><a class="font-bold" href="/questionnaire">{{$t('navbar.questionnaire')}}</a></li>
              <li class="font-bold"><a href="/onlineReport">{{$t('navbar.online-appeal')}}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="forMobile 2xl:hidden xl:hidden lg:hidden md:block sm:block">
      <!-- Mobile navigation bar starts -->
    <div class="w-full h-14 bg-sky-800">
      <div class="flex justify-between items-center px-10">
          <a class="flex justify-start items-center" href="/">
            <img class="w-14 h-14" src="~@/assets/csd.svg" alt="">
            <p class="text-xs pl-1 text-white">{{$t('navbar.logo-text-part-1')}}<br>{{$t('navbar.logo-text-part-2')}}</p>
          </a>
          <svg v-on:click="openHamburgerMenu()" id="hamburgerOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
          <svg v-on:click="closeHamburgerMenu()" id="hamburgerClose" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
      </div>
    </div>
      <!-- Mobile navigation bar ends -->
      <!-- Hamburger menu starts -->
      <div id="hamburgerMenu" class="hidden w-100 bg-sky-900 h-1/2 px-10 py-10 text-white">

        <div>
          <button v-on:click="openMenuMobile('aboutUsMobile')">{{$t('navbar.about-us')}} ></button>
          <div id="aboutUsMobile">
            <ul class="list-disc ml-10">
              <li><a href="/ceoMessage">{{$t('navbar.ceo-message')}}</a></li>
              <li><a href="/profile">{{$t('navbar.profile')}}</a></li>
              <li><a href="/history">{{$t('navbar.history')}}</a></li>
              <li><a href="/function">{{$t('navbar.function')}}</a></li>
              <li><a href="/membership">{{$t('navbar.membership')}}</a></li>
              <li><a href="/vacancy">{{$t('navbar.vacancy')}}</a></li>
            </ul>
          </div>
        </div>

        <div>
          <button v-on:click="openMenuMobile('ourServicesMobile')">{{$t('navbar.our-services')}}></button>
          <div id="ourServicesMobile">
            <ul class="list-disc ml-10">
              <li><a href="/depoService">{{$t('navbar.depository-services')}}</a></li>
              <li><a href="/itService">{{$t('navbar.information-services')}}</a></li>
              <li><a href="/consultService">{{$t('navbar.advisory-services')}}</a></li>
              <li><a href="/eVote">{{$t('navbar.electronic-voting-services')}}</a></li>
              <li><a href="/tarifs">{{$t('navbar.tarifs')}}</a></li>
              <li><a href="/contacts">{{$t('navbar.contacts')}}</a></li>
              <li><a href="/schedule">{{$t('navbar.reception-schedule')}}</a></li>
              <li><a href="/review">{{$t('navbar.our-reviews')}}</a></li>
              <li><a href="/technicalSupport">{{$t('navbar.technical-support')}}</a></li>
            </ul>
          </div>
        </div>

        <div>
          <button v-on:click="openMenuMobile('cooperateMobile')">{{$t('navbar.cooperate')}}></button>
          <div id="cooperateMobile">
            <ul class="list-disc ml-10">
              <li><a href="#">{{$t('navbar.supervisory-board')}}</a></li>
              <li><a href="#">{{$t('navbar.executive-body')}}</a></li>
              <li><a href="#">{{$t('navbar.internal-audit')}}</a></li>
              <li><a href="/conditions">{{$t('navbar.order')}}</a></li>
              <li><a href="/regulation">{{$t('navbar.regulation')}}</a></li>
              <li><a href="#">{{$t('navbar.list-affiliated')}}</a></li>
              <li><a href="#">{{$t('navbar.essential-facts')}}</a></li>
              <li><a href="/business">{{$t('navbar.bussines-plan')}}</a></li>
              <li><a href="/kpi">{{$t('navbar.performance-indicators')}}</a></li>
              <li><a href="#">{{$t('navbar.development-strategy')}}</a></li>
              <li><a href="/fund">{{$t('navbar.authorized-capital')}}</a></li>
              <li><a href="/financialReport">{{$t('navbar.financial-statements')}}</a></li>
            </ul>
          </div>
        </div>

        <div>
          <button v-on:click="openMenuMobile('pressCenterMobile')">{{$t('navbar.press-center')}}></button>
          <div id="pressCenterMobile">
            <ul class="list-disc ml-10">
              <li><a href="/pressRelease">{{$t('navbar.press-releases')}}</a></li>
              <li><a href="/news">{{$t('navbar.news')}}</a></li>
              <li><a href="/articles">{{$t('navbar.articles')}}</a></li>
              <li><a href="/media">{{$t('navbar.media-library')}}</a></li>
              <li><a href="/statisticalInformation">{{$t('navbar.statistical-information')}}</a></li>
              <li><a href="/depoInfo">{{$t('navbar.depo-infographics')}}</a></li>
              <li><a href="/depoDigest">{{$t('navbar.depo-digest')}}</a></li>
              <li><a href="/depoCompass">{{$t('navbar.depo-compass')}}</a></li>
              <li><a href="/depoVestnik">{{$t('navbar.depo-bulletin')}}</a></li>
              <li><a href="/regulatory">{{$t('navbar.regulatory-documents')}}</a></li>
            </ul>
          </div>
        </div>

        <div>
          <button v-on:click="openMenuMobile('interactiveMobile')">{{$t('navbar.interactive')}}></button>
          <div id="interactiveMobile">
            <ul class="list-disc ml-10">
              <li><a href="/conditions">{{$t('navbar.contract')}}</a></li>
              <li><a href="/blanks">{{$t('navbar.forms')}}</a></li>
              <li><a href="/glossary">{{$t('navbar.dictionary-terms')}}</a></li>
              <li><a href="/isinAndcfi">{{$t('navbar.isin-cfi')}}</a></li>
              <li><a href="/questionnaire">{{$t('navbar.questionnaire')}}</a></li>
              <li><a href="/onlineReport">{{$t('navbar.online-appeal')}}</a></li>
            </ul>
          </div>
        </div>

      </div>
      <!-- Hamburger menu ends -->
    </div>
</template>

<script>
export default {
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
};
</script>

<script setup>
let blockNames = ['aboutUs', 'ourServices', 'cooperate', 'pressCenter', 'interactive'];
function openMenu(menuName){

  closeOtherMenus(menuName).then(()=>{
    let isDisplayBlock =  document.getElementById(menuName).style.display == "block";
    document.getElementById(menuName).style.display = isDisplayBlock ?  "none": "block";
  });
}
async function closeOtherMenus(menuName){
  blockNames.forEach((element) => {
    if(element != menuName)
      document.getElementById(element).style.display = "none";
  });
}

// mobile menu navigation starts
let blockMobileNames = ['aboutUsMobile', 'ourServicesMobile', 'cooperateMobile', 'pressCenterMobile', 'interactiveMobile'];
function openMenuMobile(menuNameMobile){

  closeOtherMobileMenus(menuNameMobile).then(()=>{
    let isDisplayBlockMobile =  document.getElementById(menuNameMobile).style.display == "block";
    document.getElementById(menuNameMobile).style.display = isDisplayBlockMobile ?  "none": "block";
  });
}
async function closeOtherMobileMenus(menuNameMobile){
  blockMobileNames.forEach((element) => {
    if(element != menuNameMobile)
      document.getElementById(element).style.display = "none";
  });
}
// mobile menu navigation ends
function openHamburgerMenu() {
  const close = document.getElementById("hamburgerOpen");
  close.classList.add("hidden");
  const open = document.getElementById("hamburgerClose");
  open.classList.remove("hidden");
  const menu = document.getElementById("hamburgerMenu");
  menu.classList.remove("hidden")
}

function closeHamburgerMenu() {
  const close = document.getElementById("hamburgerOpen");
  close.classList.remove("hidden");
  const open = document.getElementById("hamburgerClose");
  open.classList.add("hidden");
  const menu = document.getElementById("hamburgerMenu");
  menu.classList.add("hidden")
}
console.log(openMenu)
console.log(openMenuMobile)
console.log(openHamburgerMenu)
console.log(closeHamburgerMenu)
</script>

<style scoped>
#aboutUs, #ourServices, #cooperate, #pressCenter, #interactive{
  display: none;
}
#aboutUsMobile, #ourServicesMobile, #cooperateMobile, #pressCenterMobile, #interactiveMobile{
  display: none;
}
</style>