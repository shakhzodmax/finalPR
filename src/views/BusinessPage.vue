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

    <div class="flex justify-center items-center space-x-8">
      <div class="relative">
        <input type="text" id="searchName" class="block w-96 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " />
        <label for="searchName" class="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-sky-700 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Название</label>
      </div>

      <div class="button">
        <button type="button" class="text-white flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>Поиск</button>
      </div>
    </div>
      <div class="date flex justify-center mt-5">
        <div date-rangepicker class="flex items-center">
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-white dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <input name="start" type="text" class="mr-4 bg-sky-700 border placeholder-white focus:bg-transparent border-gray-300 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start">
          </div>
          <span class="mx-4 text-white">to</span>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-white dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <input name="start" type="text" class="mr-4 bg-sky-700 border placeholder-white focus:bg-transparent border-gray-300 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end">
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