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
                  <div class="2lx:text-2xl xl:text-2xl lg:text-base font-bold font-bold">Наши услуги</div>
                </div>
              </div>
              <div class="ml-5">Мы предоставляем надежные финансовые услуги, постоянно проводя преобразования и инновации</div>
            </div>
          </div>
        </div>
        <div class="shadow-2xl bg-white">
          <div class="container mx-auto p-5">
            <ul class="flex justify-around">
              <li><a class=" font-bold" href="/depoService">Услуги</a>
                <ul>
                  <li class="pt-5"><a href="/depoService">Депозитарные услуги</a></li>
                  <li><a href="/itService">Информационные услуги</a></li>
                  <li><a href="/consultService">Консультативные услуги</a></li>
                  <li><a href="/eVote">Электронное голосование</a></li>
                </ul>
              </li>
              <li class="font-bold"><a href="/tarif">Тарифы</a></li>
              <li><a class="font-bold" href="/contacts">Контакты</a>
                <ul>
                  <li class="pt-5"><a href="/schedule">График приема</a></li>
                  <li><a href="/review">Наши отзывы </a></li>
                </ul>
              </li>
              <li class="font-bold"><a href="/technicalSupport">Техническое сопровождение</a></li>
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
                  <div class="2lx:text-2xl xl:text-2xl lg:text-base font-bold">Корпоративное управление</div>
                </div>
              </div>
              <div class="ml-5">Мы предоставляем надежные финансовые услуги, постоянно проводя преобразования и инновации</div>
            </div>
          </div>
        </div>
        <div class="shadow-2xl bg-white">
          <div class="container mx-auto p-5">
            <ul class="flex justify-around">
              <li><a class=" font-bold" href="#">Органы управления и контроля</a>
                <ul>
                  <li class="pt-5"><a href="#">Наблюдательный совет</a></li>
                  <li><a href="#">Исполнительный орган</a></li>
                  <li><a href="#">Служба внутреннего аудита</a></li>
                </ul>
              </li>
              <li><a class="font-bold" href="/document">Документы</a>
                <ul>
                  <li class="pt-5"><a href="/conditions">Положение</a></li>
                  <li><a href="/regulation">Устав</a></li>
                </ul>
              </li>
              <li><a class="font-bold" href="#">Раскрытие информации</a>
                <ul>
                  <li class="pt-5"><a href="#">Перечень аффилированных лиц</a></li>
                  <li><a href="#">Существенные факты</a></li>
                  <li><a href="/business">Бизнес план</a></li>
                  <li><a href="/kpi">Показатели эффективности</a></li>
                  <li><a href="#">Стратегия развития</a></li>
                </ul>
              </li>
              <li class="font-bold"><a href="/fund">Уставной фонд</a></li>
              <li><a class="font-bold" href="/financialReport">Финансовая отчетность</a>
                <ul>
                  <li class="pt-5"><a href="/financialReport">Годовые и квартальные отчеты</a></li>
                  <li><a href="financialReport">Отчетность по МСФО</a></li>
                  <li><a href="financialReport">Сведение о закупках</a></li>
                  <li><a href="financialReport">Результаты внешнего аудита</a></li>
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
                  <div class="2lx:text-2xl xl:text-2xl lg:text-base font-bold">Пресс-центр</div>
                </div>
              </div>
              <div class="ml-5">Пресс-центр Центрального Депозитария ценных бумаг</div>
            </div>
          </div>
        </div>
        <div class="shadow-2xl bg-white">
          <div class="container mx-auto p-5">
            <ul class="flex justify-around">
              <li><a class=" font-bold" href="/pressSecretary">Пресс-секретарь</a>
                <ul>
                  <li class="pt-5"><a href="/pressRelease">Пресс - релизы</a></li>
                  <li><a href="/news">Новости</a></li>
                  <li><a href="/articles">Статьи</a></li>
                </ul>
              </li>
              <li><a class="font-bold" href="/media">Медиатека</a></li>
              <li class="font-bold"><a href="/statisticalInformation">Статистическая информация</a></li>
              <li><a class="font-bold" href="#">Полезные материалы</a>
                <ul>
                  <li class="pt-5"><a href="/depoInfo">DEPO-инфографика</a></li>
                  <li><a href="/depoDigest">DEPO-дайджест</a></li>
                  <li><a href="/depoCompass">DEPO-compass</a></li>
                  <li><a href="/depoVestnik">DEPO-вестник</a></li>
                </ul>
              </li>
              <li class="font-bold"><a href="/regulatory">Нормативные документы</a></li>
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
                  <div class="2lx:text-2xl xl:text-2xl lg:text-base font-bold">Интерактивные услуги</div>
                </div>
              </div>
              <div class="ml-5">Мы предоставляем надежные финансовые услуги, постоянно проводя преобразования и инновации</div>
            </div>
          </div>
        </div>
        <div class="shadow-2xl bg-white">
          <div class="container mx-auto p-5">
            <ul class="flex justify-around">
              <li><a class=" font-bold" href="#">Документы</a>
                <ul>
                  <li class="pt-5"><a href="/contracts">Договор</a></li>
                  <li><a href="/blanks">Бланки</a></li>
                  <li><a href="/glossary">Словарь терминов</a></li>
                </ul>
              </li>
              <li><a class="font-bold" href="/isinAndcfi">ISIN и CFI коды</a></li>
              <li><a class="font-bold" href="/questionnaire">Анкета опросник</a></li>
              <li class="font-bold"><a href="/onlineReport">Онлайн-обращение</a></li>
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
            <p class="text-xs pl-1 text-white">ЦЕНТРАЛЬНЫЙ ДЕПОЗИТАРИЙ <br> ЦЕННЫХ БУМАГ</p>
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
          <button v-on:click="openMenuMobile('aboutUsMobile')">О нас ></button>
          <div id="aboutUsMobile">
            <ul class="list-disc ml-10">
              <li><a href="/ceoMessage">Обращение директора</a></li>
              <li><a href="/profile">Профиль</a></li>
              <li><a href="/history">История</a></li>
              <li><a href="/headliners">Руководство</a></li>
              <li><a href="/structure">Структурные подразделения</a></li>
              <li><a href="/function">Задачи и функции</a></li>
              <li><a href="/membership">Международное сотрудничество</a></li>
              <li><a href="/vacancy">Вакансии</a></li>
            </ul>
          </div>
        </div>

        <div>
          <button v-on:click="openMenuMobile('ourServicesMobile')">Наши услуги></button>
          <div id="ourServicesMobile">
            <ul class="list-disc ml-10">
              <li><a href="/depoService">Депозитарные услуги</a></li>
              <li><a href="/itService">Информационные услуги</a></li>
              <li><a href="/consultService">Консультативные услуги</a></li>
              <li><a href="/eVote">Электронное голосование</a></li>
              <li><a href="/tarifs">Тарифы</a></li>
              <li><a href="/contacts">Контакты</a></li>
              <li><a href="/schedule">График приема</a></li>
              <li><a href="/review">Наши отзывы</a></li>
              <li><a href="/technicalSupport">Техническое сопровождение</a></li>
            </ul>
          </div>
        </div>

        <div>
          <button v-on:click="openMenuMobile('cooperateMobile')">Корпоративное управление ></button>
          <div id="cooperateMobile">
            <ul class="list-disc ml-10">
              <li><a href="#">Наблюдательный совет</a></li>
              <li><a href="#">Исполнительный орган</a></li>
              <li><a href="#">Служба внутреннего аудита</a></li>
              <li><a href="/conditions">Положение</a></li>
              <li><a href="/regulation">Устав</a></li>
              <li><a href="#">Перечень аффилированных лиц</a></li>
              <li><a href="#">Существенные факты</a></li>
              <li><a href="/business">Бизнес план</a></li>
              <li><a href="/kpi">Показатели эффективности</a></li>
              <li><a href="#">Стратегия развития</a></li>
              <li><a href="/fund">Уставной фонд</a></li>
              <li><a href="/financialReport">Финансовая отчетность</a></li>
            </ul>
          </div>
        </div>

        <div>
          <button v-on:click="openMenuMobile('pressCenterMobile')">Пресс-центр ></button>
          <div id="pressCenterMobile">
            <ul class="list-disc ml-10">
              <li><a href="/pressRelease">Пресс - релизы</a></li>
              <li><a href="/news">Новости</a></li>
              <li><a href="/articles">Статьи</a></li>
              <li><a href="/media">Медиатека</a></li>
              <li><a href="/statisticalInformation">Статистическая информация</a></li>
              <li><a href="/depoInfo">DEPO-инфографика</a></li>
              <li><a href="/depoDigest">DEPO-дайджест</a></li>
              <li><a href="/depoCompass">DEPO-compass</a></li>
              <li><a href="/depoVestnik">DEPO-вестник</a></li>
              <li><a href="/regulatory">Нормативные документы</a></li>
            </ul>
          </div>
        </div>

        <div>
          <button v-on:click="openMenuMobile('interactiveMobile')">Интерактивные услуги ></button>
          <div id="interactiveMobile">
            <ul class="list-disc ml-10">
              <li><a href="/conditions">Договор</a></li>
              <li><a href="/blanks">Бланки</a></li>
              <li><a href="/glossary">Словарь терминов</a></li>
              <li><a href="/isinAndcfi">ISIN и CFI коды</a></li>
              <li><a href="/questionnaire">Анкета опросник</a></li>
              <li><a href="/onlineReport">Онлайн-обращение</a></li>
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