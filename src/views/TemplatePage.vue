<template>
  <div class="main h-mainPng bg-no-repeat bg-center">
    <div class="container mx-auto text-white text-center">
      <div class="pt-mainPt text-4xl font-black mb-1">О нас</div>
      <div>Финансовая инвестиционная инфраструктура, поддерживающая рост рынка капитала Республики Узбекистан</div>
      <div class="h-14 bg-sky-600 mt-24 flex justify-start items-center px-8">
        <nav class="flex px-5 py-3 text-white" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-10">
            <li class="inline-flex items-center">
              <a href="#" class="inline-flex items-center text-md font-medium hover:text-slate-300">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Главный экран
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="ml-1 text-md font-medium">О нас</span>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="ml-1 text-md font-medium">Руководство</span>
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
            <div class="text-2xl font-bold mb-16">Обращение генерального директора</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="divider bg-sky-700 py-8">
    <div class="container mx-auto">
      <div class="flex justify-center items-center space-x-20">
        <div class="first">
          <img class="w-64" src="~@/assets/ceo.png" alt="">
        </div>
        <div class="second">
          <div class="header text-2xl font-italic font-bold text-justify text-white">
            “Чтобы сохранить общественное доверие благодаря инновациям в области устойчивого управления, мы обещаем выполнять наши социальные обязанности как государственное учреждение.”
          </div>

          <div class="subheader mt-5">
            Абдужаббаров Ш.Я.
          </div>
          <div class="position">
            Генеральный директор
          </div>
        </div>
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