<template>
<div class="slide-1 hidden">
  <div class="main">
    <div class="container mx-auto">
      <div class="slider-1 mx-auto mt-navbar ">
        <div class="absolute mt-24 ml-20">
          <h1 class="text-3xl font-extrabold text-white dark:text-white md:text-5xl lg:text-3xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400 text-4xl">MYCABINET</span> - ваш персональный кабинет</h1>
          <p class="text-center text-lg font-normal text-white lg:text-xs dark:text-gray-400">Центральный депозитарий ценных бумаг представляет вам систему персонального кабинета.</p>
          <button class="ml-52 mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span class="relative px-20 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Войти в систему
          </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="slide-2">
  <div class="submain">
    <div class="container mx-auto">
      <div class="slider-1 mx-auto mt-navbar ">
        <div class="absolute mt-24 ml-20">
          <h1 class="text-3xl font-extrabold text-white dark:text-white md:text-5xl lg:text-3xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-sky-500 text-4xl">E-VOTE</span> - электронное голосование</h1>
          <p class="text-center text-lg font-normal text-white lg:text-xs dark:text-gray-400">Центральный депозитарий ценных бумаг представляет вам систему электронного голосования.</p>
          <button class="ml-40 mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-sky-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span class="relative px-20 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Войти в систему
          </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="w-full">
  <div class="flex justify-center hidden">
    <div class="item-first flex bg-slate-200 w-1/2 py-4 hover:bg-slate-300 duration-500">
      <div class="container mx-auto flex justify-center">
        <div class="first-part-one mr-10 ">
          <div class="rounded-md h-24 w-24 2xl:block xl:block lg:block md:block sm:block hidden bg-sky-800">
            <img class="" src="~@/assets/iconOne.svg" alt="pc.svg">
          </div>
        </div>
        <div class="first-part-two ">
          <div class="2xl:text-base xl:text-base lg:text-base md:lg-base text-sm">
            <p>{{$t('home-page.personal-account')}}</p>
            <p class="text-center font-black 2xl:block xl:block lg:block md:block hidden">MYCABINET</p>
          </div>
          <button onclick="location.href='http://192.168.1.42:5004'" class="2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex hidden inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="px-14 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {{$t('home-page.login-system')}}
            </span>
          </button>
          <button onclick="location.href='http://192.168.1.42:5004'" class="2xl:hidden xl:hidden lg:hidden md:hidden inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Войти
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="item-second flex bg-slate-200 w-1/2 py-4 hover:bg-slate-300 duration-500">
      <div class="container mx-auto flex justify-center">
        <div class="item-first mr-10">
          <div class="first-part-one">
            <div class="rounded-md h-24 w-24 2xl:flex xl:flex lg:flex md:flex sm:flex hidden bg-sky-800 flex justify-center items-center">
              <img class="" src="~@/assets/iconTwo.svg" alt="e-vote.svg">
            </div>
          </div>
        </div>
        <div class="first-part-two">
          <div class="2xl:text-base xl:text-base lg:text-base md:lg-base text-sm">
            <p>{{$t('home-page.electronic-voting')}}</p>
            <p class="text-center font-black font-2xl 2xl:block xl:block lg:block md:block hidden">E-VOTE</p>
          </div>
          <button onclick="location.href='http://www.evote.uz'" class="2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex hidden inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="px-16 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {{$t('home-page.login-system')}}
            </span>
          </button>
          <button onclick="location.href='http://www.evote.uz'" class="2xl:hidden xl:hidden lg:hidden md:hidden inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Войти
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <section class="bg-sky-600 text-center">
    <div class="bg-white p-8">
      <div class="text-center font-black text-2xl"><span class="text-sky-600">{{$t('home-page.our')}}</span> {{$t('home-page.services')}}</div>
      <div class="text-center">{{$t('home-page.header-intro')}}</div>
    </div>

    <div class="rounded-menus 2xl:block xl:block lg:block md:hidden hidden">
      <div class="mt-3 bg-white flex justify-center 2xl:space-x-8 2xl:py-5 2xl:text-base xl:space-x-4 xl:py-5 lg:py-2 xl:text-sm lg:text-xs lg:space-x-3 lg:py-4">
        <div class="hover:text-sky-500 duration-300">
          <a href="#">
            <img class="inline-block mx-auto rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500 hover:ring-sky-500" src="~@/assets/depServivces.png" alt="">
          </a>
          <a class="flex justify-center" href="#">{{$t('navbar.depository-services')}}</a>
        </div>

        <div class="hover:text-sky-500 duration-300">
          <a href="#">
            <img class="mx-auto rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500 hover:ring-sky-500" src="~@/assets/itServices.png" alt="">
          </a>
          <a class="flex justify-center" href="#">{{$t('navbar.information-services')}}</a>
        </div>

        <div class="hover:text-sky-500 duration-300">
          <a href="#">
            <img class="mx-auto rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500 hover:ring-sky-500" src="~@/assets/conServices.png" alt="">
          </a>
          <a class="flex justify-center" href="#">{{$t('navbar.advisory-services')}}</a>
        </div>

        <div class="hover:text-sky-500 duration-300">
          <a href="#">
            <img class="mx-auto rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500 hover:ring-sky-500" src="~@/assets/techSupport.png" alt="">
          </a>
          <a class="flex justify-center" href="#">{{$t('navbar.technical-support')}}</a>
        </div>

        <div class="hover:text-sky-500 duration-300">
          <a href="#">
            <img class="mx-auto rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500 hover:ring-sky-500" src="~@/assets/tariffs.png" alt="">
          </a>
          <a class="flex justify-center" href="#">{{$t('navbar.tarifs')}}</a>
        </div>

        <div class="hover:text-sky-500 duration-300">
          <a href="#">
            <img class="mx-auto rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500 hover:ring-sky-500" src="~@/assets/contacts.png" alt="">
          </a>
          <a class="flex justify-center" href="#">{{$t('home-page.contacts')}}</a>
        </div>
      </div>
    </div>

    <div class="2xl:hidden xl:hidden lg:hidden md:flex-row sm:flex flex-col justify-center py-4 bg-white pt-6 mt-4 ">
      <div class="firstcol">
        <div class="item ">
          <button type="button" class="w-64 flex justify-between items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {{$t('navbar.depository-services')}}
            <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        <div class="item">
          <button type="button" class="w-64 flex justify-between items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {{$t('navbar.information-services')}}
            <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        <div class="item">
          <button type="button" class="w-64 flex justify-between items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {{$t('navbar.advisory-services')}}
            <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
      </div>

      <div class="secondcol">
        <div class="item">
          <button type="button" class="w-64 flex justify-between items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {{$t('home-page.technical-supports')}}
            <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        <div class="item">
          <button type="button" class="w-64 flex justify-between items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {{$t('home-page.tarifs-services')}}
            <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        <div class="item">
          <button type="button" class="w-64 flex justify-between items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {{$t('home-page.contact-us')}}
            <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-10 text-white">
      <p class="lg:mb-8 text-justify"><span class="lg:ml-16">{{$t('home-page.body-text-1')}}</span>
      </p>
      <p class="lg:mb-8 text-justify"><span class="lg:ml-16">{{$t('home-page.body-text-2')}}</span>
      </p>
      <p class="text-justify"><span class="lg:ml-16">{{$t('home-page.body-text-3')}}</span></p>
    </div>

    <div class="bg-white p-8">
      <div class="text-center font-black text-2xl"><span class="text-sky-600">{{$t('home-page.statistics')}}</span> {{$t('home-page.csd')}}</div>
      <div class="text-center">{{$t('home-page.up-to-date')}}</div>
    </div>

    <div class="rounded-stat 2xl:flex xl:flex lg:flex md:hidden hidden mt-3 bg-white flex justify-center 2xl:space-x-8 2xl:py-5 2xl:text-base xl:space-x-4 xl:py-5 lg:py-2 xl:text-sm lg:text-xs lg:space-x-3 lg:py-4">
      <div class="container flex justify-center space-x-24">
        <div class="hover:text-sky-500 duration-300">
          <a class="lg:mb-4 flex justify-center" href="#">{{$t('home-page.securities')}}<br>{{$t('home-page.received-isin')}}</a>
          <a href="#">
            <img class="inline-block mx-auto rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500 hover:ring-sky-500" src="~@/assets/isinCFI.png" alt="isinCFI">
          </a>
        </div>

        <div class="hover:text-sky-500 duration-300">
          <a class="lg:mb-4 flex justify-center 2xl:pt-0 xl:pt-0 lg:p-2" href="#">{{$t('home-page.list')}}<br> {{$t('home-page.joint-stock')}}</a>
          <a href="#">
            <img class="mx-auto rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500 hover:ring-sky-500" src="~@/assets/society.png" alt="society">
          </a>
        </div>

        <div class="hover:text-sky-500 duration-300">
          <a class="lg:mb-4 flex justify-center" href="#">{{$t('home-page.search-information')}}<br> {{$t('home-page.isc')}}</a>
          <a href="#">
            <img class="mx-auto rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500 hover:ring-sky-500" src="~@/assets/infoCD.png" alt="infoCD">
          </a>
        </div>

        <div class="hover:text-sky-500 duration-300">
          <a class="lg:mb-4 flex justify-center" href="#">{{$t('home-page.search-information-on')}}<br> {{$t('home-page.issuers-securities')}}</a>
          <a href="#">
            <img class="mx-auto rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500 hover:ring-sky-500" src="~@/assets/emitents.png" alt="emitents">
          </a>
        </div>
      </div>
    </div>

    <div class="2xl:hidden xl:hidden lg:hidden rounded-stat-mobile">
      <div class="rounded-menus-mobile 2xl:hidden xl:hidden lg:hidden md:flex-row sm:flex flex-col py-4 bg-white pt-6 mt-4 justify-center items-center">
        <div class="firstcol">
          <div class="item ">
            <button type="button" class="w-64 flex justify-center items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              {{$t('home-page.list-of-assigned')}}
              <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>

          <div class="item">
            <button type="button" class="w-64 flex justify-center items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              {{$t('home-page.list-of-joint-stock')}}
              <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>

        </div>

        <div class="secondcol">
          <div class="item">
            <button type="button" class="w-64 flex justify-center items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              {{$t('home-page.central-bank')}}
              <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>

          <div class="item">
            <button type="button" class="w-64 flex justify-center items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              {{$t('home-page.search-for-issuers')}}
              <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="text-center font-black text-2xl text-white py-6 2xl:block xl:block hidden">{{$t('home-page.new-articles')}}</div>

    <div class="2xl:flex xl:flex hidden container mx-auto flex justify-center space-x-12">
      <div class="w-52 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="mx-auto rounded-t-lg" src="~@/assets/digest.png" alt="" />
        </a>
        <div class="p-5">
          <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
            <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
            25.10.20222
          </span>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{$t('home-page.Depo-news')}}</p>
          <button class="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {{$t('home-page.download')}}
            </span>
          </button>
        </div>
      </div>

      <div class="w-52 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="mx-auto rounded-t-lg" src="~@/assets/digest.png" alt="" />
        </a>
        <div class="p-5">
          <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
            <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
            25.10.20222
          </span>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{$t('home-page.Depo-digest')}}</p>
          <button class="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {{$t('home-page.download')}}
            </span>
          </button>
        </div>
      </div>

      <div class="w-52 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="mx-auto rounded-t-lg" src="~@/assets/digest.png" alt="" />
        </a>
        <div class="p-5">
          <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
            <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
            25.10.20222
          </span>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{$t('home-page.Depo-digest')}}</p>
          <button class="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {{$t('home-page.download')}}
            </span>
          </button>
        </div>
      </div>

      <div class="w-52 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="mx-auto rounded-t-lg" src="~@/assets/digest.png" alt="" />
        </a>
        <div class="p-5">
          <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
            <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
            25.10.20222
          </span>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{$t('home-page.Depo-digest')}}</p>
          <button class="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {{$t('home-page.download')}}
            </span>
          </button>
        </div>
      </div>

      <div class="w-52 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="mx-auto rounded-t-lg" src="~@/assets/digest.png" alt="" />
        </a>
        <div class="p-5">
          <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
            <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
            25.10.20222
          </span>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{$t('home-page.Depo-digest')}}</p>
          <button class="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {{$t('home-page.download')}}
            </span>
          </button>
        </div>
      </div>

    </div>

    <div class="text-center font-black text-2xl text-white py-6 2xl:block xl:block hidden">{{$t('home-page.last-news')}}</div>

    <div class="2xl:flex xl:flex hidden container mx-auto flex justify-center space-x-12 pb-6 text-smd">
      <div class="w-52 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
          <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
            <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
            25.10.20222
          </span>
          <p class="mb-3 font-bold font-normal text-gray-700 dark:text-gray-400">{{$t('home-page.Depo-news')}}</p>
          <p class="mb-3 font-sm text-gray-700 dark:text-gray-400">{{$t('home-page.overviews')}}</p>
          <button class="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {{$t('home-page.watch')}}
            </span>
          </button>
        </div>
      </div>

      <div class="w-52 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
          <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
            <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
            25.10.20222
          </span>
          <p class="mb-3 font-bold font-normal text-gray-700 dark:text-gray-400">{{$t('home-page.Depo-news')}}</p>
          <p class="mb-3 font-sm text-gray-700 dark:text-gray-400">{{$t('home-page.overviews')}}</p>
          <button class="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {{$t('home-page.watch')}}
            </span>
          </button>
        </div>
      </div>

      <div class="w-52 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
          <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
            <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
            25.10.20222
          </span>
          <p class="mb-3 font-bold font-normal text-gray-700 dark:text-gray-400">{{$t('home-page.Depo-news')}}</p>
          <p class="mb-3 font-sm text-gray-700 dark:text-gray-400">{{$t('home-page.overviews')}}</p>
          <button class="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {{$t('home-page.watch')}}
            </span>
          </button>
        </div>
      </div>

      <div class="w-52 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
          <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
            <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
            25.10.20222
          </span>
          <p class="mb-3 font-bold font-normal text-gray-700 dark:text-gray-400">{{$t('home-page.Depo-news')}}</p>
          <p class="mb-3 font-sm text-gray-700 dark:text-gray-400">{{$t('home-page.overviews')}}</p>
          <button class="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {{$t('home-page.watch')}}
            </span>
          </button>
        </div>
      </div>

      <div class="w-52 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
          <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
            <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
            25.10.20222
          </span>
          <p class="mb-3 font-bold font-normal text-gray-700 dark:text-gray-400">{{$t('home-page.Depo-news')}}</p>
          <p class="mb-3 font-sm text-gray-700 dark:text-gray-400">{{$t('home-page.overviews')}}</p>
          <button class="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {{$t('home-page.watch')}}
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>

</div>
</template>

<style scoped>
*{
  font-family: "Gotham Pro", Gotham, Arial;
}
.main{
  height: 300px;
  background: url("@/assets/mycabbg.png");
  background-repeat: no-repeat;
  background-position: center;
}
.submain{
  height: 300px;
  background: url("@/assets/evotebg.png");
  background-repeat: no-repeat;
  background-position: center;
}
</style>