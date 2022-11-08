<template>
  <div class="main h-mainPng bg-no-repeat bg-center">
    <div class="container mx-auto text-white text-center">
      <div class="pt-mainPt 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-2xl font-black mb-1">{{$t('navbar.about-us')}}</div>
      <div class="2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-sm text-sm">{{$t('navbar.about-us-intro')}}</div>
      <div class="h-14 bg-sky-600  2xl:mt-24 xl:mt-24 lg:mt-14 md:mt-14 flex justify-start items-center px-8 2xl:block xl:block lg:block md:block hidden rounded-md">
        <nav class="flex px-5 py-3 text-white 2xl:text-base xl:text-base lg:text-base md:text-sm " aria-label="broadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-10">
            <li class="inline-flex items-center ">
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
                <span class="ml-1 text-md font-medium">{{$t('navbar.ceo-message')}}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="header">
   <div class="container mx-auto">
          <div class="flex justify-center items-end mt-20">
              <div class="flex flex-col">
                <div class="flex 2xl:justify-end xl:justify-end lg:justify-end md:justify-end sm:justify-end justify-center ">
                  <div class="w-3 h-1 bg-gray-400"></div>
                  <div class="w-5 h-1 bg-green-400"></div>
                  <div class="w-3 h-1 bg-sky-400"></div>
                </div>
                <div class="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl font-bold mb-14 text-center">{{$t('navbar.ceo-message')}}</div>
              </div>
          </div>
        </div>
    </div>
  
  <div class="divider bg-sky-600 py-8">
    <div class="container mx-auto">
      <figure class="mx-auto max-w-screen-md text-center px-2">
        <blockquote class="flex justify-center items-center">
          <img class="rounded-lg 2xl:block xl:block lg:block md:block sm:block hidden" src="~@/assets/ceo.png" alt="">
          <div class="flex-col">
            <svg aria-hidden="true" class="mx-auto mb-3 w-12 h-12 text-white dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
            <p class="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-lg  text-lg   italic font-medium text-gray-900 dark:text-white">{{$t('ceo-message.body-text')}}</p>
            <figcaption class="flex justify-center items-center mt-6 space-x-3">
              <div class="flex items-center divide-x-2 divide-white dark:divide-gray-700">
                <cite class="pr-3 font-medium text-gray-900 dark:text-white 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-sm">{{$t('ceo-message.director-name')}}</cite>
                <cite class="pl-3  font-light text-white dark:text-gray-400 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-sm">{{$t('ceo-message.general-manager')}}</cite>
              </div>
            </figcaption>
          </div>
        </blockquote>
      </figure>
    </div>
  </div>
  <div class="main-text">
    <div class="container mx-auto 2xl:px-24 xl:px-24 lg:px-24 md:px-24 sm:px-24 px-2 text-justify text-sm py-20">
      <span class="text-sky-600 font-bold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-sm ">{{$t('ceo-message.central-depository')}}</span> {{$t('ceo-message.footer-text-1')}}
      <br><br>
      {{$t('ceo-message.footer-text-2')}}
      <br><br>
      <div class="text-center">
        <span class="text-sky-600 font-black 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-xl text-xl">{{$t('ceo-message.footer-text-3')}}</span>
      </div>
      <br><br>
       {{$t('ceo-message.footer-text-4')}}
      <br><br>
      {{$t('ceo-message.thanks')}}
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.main{
  background: url("@/assets/aboutUs.png");
}
*{
  font-family: "Gotham Pro", Gotham, Arial;
}
</style>