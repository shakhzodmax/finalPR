<template>
  <div class="main h-mainPng bg-no-repeat bg-center">
    <div class="container mx-auto text-white text-center">
      <div class="pt-mainPt  2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-2xl font-black mb-1">{{$t('navbar.about-us')}}</div>
      <div class="2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-sm text-sm">{{$t('navbar.about-us-intro')}}</div>
      <div class="h-14 bg-sky-600 2xl:mt-24 xl:mt-24 lg:mt-14 md:mt-14 flex justify-start items-center px-8  2xl:block xl:block lg:block md:block hidden rounded-md">
        <nav class="flex px-5 py-3 text-white" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-10">
            <li class="inline-flex items-center">
              <a href="#" class="inline-flex items-center text-md font-medium hover:text-slate-300">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                {{$t('ceo-message.main-screen')}}
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="ml-1 text-md font-medium">{{$t('navbar.about-us')}}</span>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="ml-1 text-md font-medium">{{$t('profile.profile')}}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="header">
    <div class="container mx-auto">
      <div class="container mx-auto">
        <div class="flex justify-center items-end mt-20">
          <div class="flex flex-col">
            <div class="flex justify-end">
              <div class="w-3 h-1 bg-gray-400"></div>
              <div class="w-5 h-1 bg-green-400"></div>
              <div class="w-3 h-1 bg-sky-400"></div>
            </div>
            <div class="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl font-bold mb-16">{{$t('profile.profile')}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-sky-600 py-8">
    <div class="container mx-auto">
      <div class="flex justify-center items-center space-x-20">
        <div class="text-white 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-sm 
        2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-5 px-5 text-justify">{{$t('profile.profile-header')}}</div>
      </div>
    </div>
  </div>

  <div class="py-10">
    <div class="container mx-auto text-justify">
      <div class="text-center 2xl:text-lg  xl:text-lg lg:text-lg md:text-lg sm:text-sm text-sm 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-5 px-5 font-bold">{{$t('profile.profile-body-start')}}</div>
      <br><br>
      <ul class="list-disc ml-5  2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-5 px-5 2xl:text-lg  xl:text-lg lg:text-lg md:text-lg sm:text-sm text-sm">
        <li>{{$t('profile.profile-body-text-1')}}</li>
        <li>{{$t('profile.profile-body-text-2')}}</li>
        <li>{{$t('profile.profile-body-text-3')}}</li>
        <li>ведение реестров владельцев ценных бумаг;</li>
        <li>учет прав государства на ценные бумаги, а также прав на ценные бумаги уполномоченных государством лиц по управлению ценными бумагами;</li>
        <li>ведение счетов депо инвестиционных посредников;</li>
        <li>осуществление в установленном порядке расчетов в ценных бумагах;</li>
        <li>учет допущенных к обращению на территории Республики Узбекистан ценных бумаг, выпущенных нерезидентами Республики Узбекистан;</li>
        <li>учет допущенных к обращению вне территории Республики Узбекистан ценных бумаг, выпущенных резидентами Республики Узбекистан;</li>
        <li>учет прав на ценные бумаги, выпущенные и принадлежащие инвестиционным фондам, если иное не установлено законодательством;</li>
        <li>ведение Единой базы депонентов;</li>
        <li>присвоение международных кодов эмиссионным ценным бумагам, выпущенным резидентами Республики Узбекистан;</li>
        <li>сбор и систематизация информации о движении эмиссионных ценных бумаг по счетам депо.</li>
      </ul>
      <div class=" 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-5 px-5 2xl:text-lg  xl:text-lg lg:text-lg md:text-lg sm:text-sm text-sm">
      <br><br>
      Центральный депозитарий ценных бумаг - крупнейший институт на фондовом рынке республики. Кроме выполнения возложенных исключительных функций, Центральный депозитарий является инициаторам внедрения единых стандартов осуществления депозитарных операций, единых форматов электронного взаимодействия, международных стандартов электронных сообщений и идентификации ценных бумаг, а также расширения перечня корпоративных действий, обслуживаемых депозитариями.  Также, обеспечивает ведение единой базы корпоративных ценных бумаг, единой базы депонентов (в том числе и эмитентов), принимает активное участие в разработке нормативной базы, регулирующей деятельность депозитариев республики.
      <br><br>
      Имеет современное техническое и программное обеспечение с модернизированным компьютерным оборудованием, что еще раз доказывает надежность и безопасность профессиональной работы  Центрального депозитария.
      <br><br>
      Центральный депозитарий был создан Постановлением Кабинета Министров Республики Узбекистан № 263 от 21 мая 1999 г. «О вопросах организации и деятельности Центрального депозитария ценных бумаг».
    </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.main{
  background: url("@/assets/aboutUs.png");
}
*{
  font-family: "Gotham Pro", Gotham, Arial;
}
</style>