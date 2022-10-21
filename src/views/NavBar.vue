<template>
  <div class="relative top-0">
    <nav class="bg-sky-800 sticky top-0">
      <div class="container mx-auto text-white">
        <div class="flex justify-between">
          <a class="flex-none flex justify-center items-center" href="#">
            <img class="w-14 h-14" src="~@/assets/csd.svg" alt="">
            <p class="text-xs pl-1">ЦЕНТРАЛЬНЫЙ ДЕПОЗИТАРИЙ <br> ЦЕННЫХ БУМАГ</p>
          </a>
          <div class="flex justify-between">
            <button v-on:click="openMenu('aboutUs')" class="px-10 hover:bg-[#1da1f2]/90 duration-500">О нас</button>
            <button v-on:click="openMenu('ourServices')" class="px-10 hover:bg-[#1da1f2]/90 duration-500">Наши услуги</button>
            <button v-on:click="openMenu('cooperate')" class="px-10 hover:bg-[#1da1f2]/90 duration-500">Корпоративное управление</button>
            <button v-on:click="openMenu('pressCenter')" class="px-10 hover:bg-[#1da1f2]/90 duration-500">Пресс-центр</button>
            <button v-on:click="openMenu('interactive')" class="px-10 hover:bg-[#1da1f2]/90 duration-500">Интерактивные услуги</button>
          </div>
          <button class="flex-none">MyCabinet</button>
        </div>
      </div>
    </nav>

    <div id="aboutUs" class="sticky">
      <div class="bg-gray-300 p-5">
        <div class="container mx-auto">
          <div class="flex justify-center items-end">
            <div class="flex">
              <div class="flex flex-col">
                <div class="flex justify-end ml-5">
                  <div class="w-2 h-1 bg-gray-400"></div>
                  <div class="w-3 h-1 bg-green-400"></div>
                  <div class="w-2 h-1 bg-sky-400"></div>
                </div>
                <div class="text-2xl font-bold">О нас</div>
              </div>
            </div>
            <div class="ml-5">Финансовая инвестиционная инфраструктура, поддерживающая рост рынка капитала Республики Узбекистан</div>
          </div>
        </div>
      </div>
      <div class="shadow-2xl bg-white/50">
        <div class="container mx-auto p-5">
          <ul class="flex justify-around">
            <li class="font-bold"><a href="#">Обращение директора</a></li>
            <li><a class="font-bold" href="#">Центральный депозитарий</a>
              <ul>
                <li class="pt-5"><a href="#">Профиль</a></li>
                <li><a href="#">История</a></li>
                <li><a href="#">Руководство</a></li>
                <li><a href="#">Структурные подразделения</a></li>
              </ul>
            </li>
            <li class="font-bold"><a href="#">Задачи и функции</a></li>
            <li class="font-bold"><a href="#">Международное сотрудничество</a></li>
            <li class="font-bold"><a href="#">Вакансии</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div id="ourServices">
      <div class="bg-gray-300 p-5">
        <div class="container mx-auto">
          <div class="flex justify-center items-end">
            <div class="flex">
              <div class="flex flex-col">
                <div class="flex justify-end ml-5">
                  <div class="w-2 h-1 bg-gray-400"></div>
                  <div class="w-3 h-1 bg-green-400"></div>
                  <div class="w-2 h-1 bg-sky-400"></div>
                </div>
                <div class="text-2xl font-bold">Наши услуги</div>
              </div>
            </div>
            <div class="ml-5">Мы предоставляем надежные финансовые услуги, постоянно проводя преобразования и инновации</div>
          </div>
        </div>
      </div>
      <div class="shadow-2xl bg-white/50">
        <div class="container mx-auto p-5">
          <ul class="flex justify-around">
            <li><a class=" font-bold" href="#">Услуги</a>
              <ul>
                <li class="pt-5"><a href="#">Профиль</a></li>
                <li><a href="#">История</a></li>
                <li><a href="#">Руководство</a></li>
                <li><a href="#">Структурные подразделения</a></li>
              </ul>
            </li>
            <li class="font-bold"><a href="#">Тарифы</a></li>
            <li><a class="font-bold" href="#">Контакты</a>
              <ul>
                <li class="pt-5"><a href="#">Профиль</a></li>
                <li><a href="#">История</a></li>
              </ul>
            </li>
            <li class="font-bold"><a href="#">Техническое сопровождение</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div id="cooperate">
      <div class="bg-gray-300 p-5">
        <div class="container mx-auto">
          <div class="flex justify-center items-end">
            <div class="flex">
              <div class="flex flex-col">
                <div class="flex justify-end ml-5">
                  <div class="w-2 h-1 bg-gray-400"></div>
                  <div class="w-3 h-1 bg-green-400"></div>
                  <div class="w-2 h-1 bg-sky-400"></div>
                </div>
                <div class="text-2xl font-bold">Корпоративное управление</div>
              </div>
            </div>
            <div class="ml-5">Мы предоставляем надежные финансовые услуги, постоянно проводя преобразования и инновации</div>
          </div>
        </div>
      </div>
      <div class="shadow-2xl bg-white/50">
        <div class="container mx-auto p-5">
          <ul class="flex justify-around">
            <li><a class=" font-bold" href="#">Органы управления и контроля</a>
              <ul>
                <li class="pt-5"><a href="#">Наблюдательный совет</a></li>
                <li><a href="#">Исполнительный орган</a></li>
                <li><a href="#">Служба внутреннего аудита</a></li>
              </ul>
            </li>
            <li><a class="font-bold" href="#">Документы</a>
              <ul>
                <li class="pt-5"><a href="#">Положение</a></li>
                <li><a href="#">Устав</a></li>
              </ul>
            </li>
            <li><a class="font-bold" href="#">Раскрытие информации</a>
              <ul>
                <li class="pt-5"><a href="#">Перечень аффилированных лиц</a></li>
                <li><a href="#">Существенные факты</a></li>
                <li><a href="#">Бизнес план</a></li>
                <li><a href="#">Показатели эффективности</a></li>
                <li><a href="#">Стратегия развития</a></li>
              </ul>
            </li>
            <li class="font-bold"><a href="#">Уставной фонд</a></li>
            <li><a class="font-bold" href="#">Финансовая отчетность</a>
              <ul>
                <li class="pt-5"><a href="#">Годовые и квартальные отчеты</a></li>
                <li><a href="#">Отчетность по МСФО</a></li>
                <li><a href="#">Сведение о закупках</a></li>
                <li><a href="#">Результаты внешнего аудита</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div id="pressCenter">
      <div class="bg-gray-300 p-5">
        <div class="container mx-auto">
          <div class="flex justify-center items-end">
            <div class="flex">
              <div class="flex flex-col">
                <div class="flex justify-end ml-5">
                  <div class="w-2 h-1 bg-gray-400"></div>
                  <div class="w-3 h-1 bg-green-400"></div>
                  <div class="w-2 h-1 bg-sky-400"></div>
                </div>
                <div class="text-2xl font-bold">Пресс-центр</div>
              </div>
            </div>
            <div class="ml-5">Пресс-центр Центрального Депозитария ценных бумаг</div>
          </div>
        </div>
      </div>
      <div class="shadow-2xl bg-white/50">
        <div class="container mx-auto p-5">
          <ul class="flex justify-around">
            <li><a class=" font-bold" href="#">Пресс-секретарь</a>
              <ul>
                <li class="pt-5"><a href="#">Пресс - релизы</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Статьи</a></li>
              </ul>
            </li>
            <li><a class="font-bold" href="#">Медиатека</a></li>
            <li class="font-bold"><a href="#">Статистическая информация</a></li>
            <li><a class="font-bold" href="#">Полезные материалы</a>
              <ul>
                <li class="pt-5"><a href="#">DEPO-инфографика</a></li>
                <li><a href="#">DEPO-дайджест</a></li>
                <li><a href="#">DEPO-compass</a></li>
                <li><a href="#">DEPO-вестник</a></li>
              </ul>
            </li>
            <li class="font-bold"><a href="#">Нормативные документы</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div id="interactive">
      <div class="bg-gray-300 p-5">
        <div class="container mx-auto">
          <div class="flex justify-center items-end">
            <div class="flex">
              <div class="flex flex-col">
                <div class="flex justify-end ml-5">
                  <div class="w-2 h-1 bg-gray-400"></div>
                  <div class="w-3 h-1 bg-green-400"></div>
                  <div class="w-2 h-1 bg-sky-400"></div>
                </div>
                <div class="text-2xl font-bold">Интерактивные услуги</div>
              </div>
            </div>
            <div class="ml-5">Мы предоставляем надежные финансовые услуги, постоянно проводя преобразования и инновации</div>
          </div>
        </div>
      </div>
      <div class="shadow-2xl bg-white/50">
        <div class="container mx-auto p-5">
          <ul class="flex justify-around">
            <li><a class=" font-bold" href="#">Документы</a>
              <ul>
                <li class="pt-5"><a href="#">Договор</a></li>
                <li><a href="#">Бланки</a></li>
                <li><a href="#">Словарь терминов</a></li>
              </ul>
            </li>
            <li><a class="font-bold" href="#">ISIN и CFI коды</a></li>
            <li><a class="font-bold" href="#">Анкета опросник</a></li>
            <li class="font-bold"><a href="#">Онлайн-обращение</a></li>
          </ul>
        </div>
      </div>
    </div>

    <img src="~@/assets/main.png" alt="">
    <img src="~@/assets/main.png" alt="">
    <img src="~@/assets/main.png" alt="">
    <img src="~@/assets/main.png" alt="">
    <img src="~@/assets/main.png" alt="">
    <img src="~@/assets/main.png" alt="">
    <img src="~@/assets/main.png" alt="">
    <img src="~@/assets/main.png" alt="">
    <img src="~@/assets/main.png" alt="">
    <img src="~@/assets/main.png" alt="">
    <img src="~@/assets/main.png" alt="">
    <img src="~@/assets/main.png" alt="">
    <img src="~@/assets/main.png" alt="">
  </div>
</template>

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
</script>

<style scoped>
#aboutUs, #ourServices, #cooperate, #pressCenter, #interactive{
  display: none;
}
</style>