<template>
  <div class="container mt-[50px]">
    <div class="space-y-5">
      <!-- FIRST PART -->
      <div class="grid grid-cols-[auto_518px] gap-5 items-center">
        <h1 class="text-gray-800 tr text-[48px] leading-[126%]">
          <span class="cm italic text-[#6999C8]"> Надёжная </span> юридическая
          <span class="cm italic text-[#6999C8]"> поддержка </span>, на которую можно рассчитывать в
          <span class="cm italic text-[#6999C8]"> любой ситуации </span>
        </h1>

        <div class="overflow-hidden rounded-2xl h-[230px]">
          <img
            src="@/assets/img/heroimg1.jpg"
            alt=""
            class="w-full h-full object-center object-cover"
          />
        </div>
      </div>

      <!-- SECOND PART -->
      <div class="grid grid-cols-[411px_auto] gap-5">
        <!-- FIRST PART -->
        <Splide
          :has-track="false"
          :options="options"
          class="w-[411px] h-[581px] overflow-hidden rounded-2xl relative"
          v-if="array?.length > 0"
        >
          <SplideTrack class="w-full h-full rounded-3xl overflow-hidden boxShadow">
            <SplideSlide class="w-full h-full p-0" v-for="item of array" :key="item.to">
              <img :src="`${item.img}`" alt="" class="w-full h-full object-cover object-center" />
            </SplideSlide>
          </SplideTrack>

          <div class="px-[31px] py-[26px] absolute inset-0 bottom-0 rounded-2xl">
            <div class="flex flex-col justify-between h-full">
              <!-- BUTTONS -->
              <div class="px-10">
                <div class="splide__progress h-[10px] bg-[#9CBECB] rounded-full overflow-hidden">
                  <div class="splide__progress__bar !h-full rounded-full !bg-primary" />
                </div>
              </div>

              <!-- TEXT -->
              <div class="line-clamp-3 tm text-[32px] text-white leading-tight">
                Мы <span class="cs italic"> решаем </span> правовые вопросы – вы живёте
                <span class="cs italic"> спокойно </span>
              </div>
            </div>
          </div>
        </Splide>

        <!-- SECOND PART -->
        <div
          :class="[
            'relative w-[841px] h-[581px] rounded-2xl rounded-br-[30px] overflow-hidden group',
          ]"
        >
          <img src="@/assets/img/heroimg4.jpg" alt="" class="w-full h-full object-cover" />

          <!-- TITLE -->
          <div class="absolute inset-0 p-[36px] pointer-events-none">
            <h1 class="ts text-[48px] text-white max-w-[624px] leading-tight">
              Простые решения сложных вопросов, связанных с правом
            </h1>
          </div>

          <!-- BUTTON -->
          <div
            class="absolute bottom-0 right-0 bg-white w-[40%] h-20 rounded-tl-3xl pt-5 pl-5 transform translate-y-full group-hover:translate-0 transition duration-200"
          >
            <button
              type="button"
              class="ring-1 ring-inset ring-gray-900 rounded-[50px] p-[26px] w-full h-full cursor-pointer flex items-center justify-between hover:bg-primary group/button hover:ring-primary transition duration-200"
            >
              <p
                class="tm text-2xl text-gray-900 group-hover/button:text-white transition duration-200"
              >
                Наши услуги
              </p>
              <svg
                width="69"
                height="15"
                viewBox="0 0 69 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M68.7071 8.20711C69.0976 7.81659 69.0976 7.18342 68.7071 6.7929L62.3431 0.428938C61.9526 0.0384132 61.3195 0.0384132 60.9289 0.428938C60.5384 0.819462 60.5384 1.45263 60.9289 1.84315L66.5858 7.50001L60.9289 13.1569C60.5384 13.5474 60.5384 14.1805 60.9289 14.5711C61.3195 14.9616 61.9526 14.9616 62.3431 14.5711L68.7071 8.20711ZM-8.74228e-08 8.5L68 8.50001L68 6.50001L8.74228e-08 6.5L-8.74228e-08 8.5Z"
                  fill="#1E2123"
                  class="fill-gray-900 group-hover/button:fill-white transition duration-200"
                />
              </svg>
            </button>
          </div>

          <!-- HELPERS -->
          <span
            class="absolute bottom-20 right-0 w-10 h-10 rounded-full bg-transparent shadow-[20px_20px_0_#fff] transform translate-y-[300%] group-hover:translate-0 transition duration-200"
          />
          <span
            class="absolute right-[40%] bottom-0 w-10 h-10 bg-transparent rounded-full shadow-[20px_20px_0_#fff] transform translate-y-full group-hover:translate-0 transition duration-200"
          />
          <!-- HELPERS -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const options = {
  type: 'fade',
  role: 'images',
  autoplay: true,
  interval: 3000,
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: false,
  speed: 800,
  pauseOnHover: false,
  pauseOnFocus: false,
  lazyLoad: 'nearby',
  preloadPages: 1,
  rewind: true,

  breakpoints: {
    500: {
      drag: true,
      speed: 500,
    },
  },
}

import heroimg3 from '@/assets/img/heroimg3.jpg'
import heroimg4 from '@/assets/img/heroimg4.jpg'
const array = [
  {
    to: 'first',
    img: heroimg3,
  },
  {
    to: 'second',
    img: heroimg4,
  },
]
</script>
