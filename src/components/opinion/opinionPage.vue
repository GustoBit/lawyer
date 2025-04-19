<template>
  <div class="container mt-20 xl:mt-[80px]">
    <titlePage to="#" title="ЧТО ДУМАЮТ О НАС?" />

    <div class="grid grid-cols-1 xl:grid-cols-[411px_821px] gap-2 xl:gap-10 relative">
      <div>
        <Splide
          ref="splideFirstRef"
          :has-track="false"
          :options="options"
          class="w-full h-[300px] xl:w-[411px] xl:h-[474px]"
        >
          <SplideTrack class="w-full h-full">
            <SplideSlide
              class="w-full h-full p-0 relative"
              v-for="(item, index) of info"
              :key="index"
            >
              <div class="h-full overflow-hidden rounded-2xl">
                <img :src="`${item.img}`" alt="" class="w-full h-full object-cover object-center" />
              </div>
              <div class="absolute inset-0 p-[26px] flex flex-col">
                <h1 class="mt-auto tr text-2xl tracking-[3%] text-white">- {{ item.author }}</h1>
              </div>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>

      <div class="mt-0 xl:mt-[108px]">
        <Splide ref="splideSecondRef" :has-track="false" :options="options" class="">
          <SplideTrack class="">
            <SplideSlide
              class="grid grid-cols-1 xl:grid-cols-[607px_175px] gap-10 items-end"
              v-for="(item, index) of info"
              :key="index"
            >
              <div class="xl:space-y-14">
                <div class="hidden xl:block">
                  <svg
                    width="58"
                    height="44"
                    viewBox="0 0 58 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[48px] h-[34px] xl:w-[58px] xl:h-[44px]"
                  >
                    <path
                      d="M27.5625 1.5L26.335 3.72461L15.0352 24.2061C16.7692 24.6619 18.2348 25.4968 19.3477 26.7764H19.3486C20.8412 28.3934 21.5938 30.3506 21.5938 32.5684C21.5937 35.3214 20.6175 37.676 18.6562 39.5146L18.6367 39.5322L18.6182 39.5488C16.7058 41.2222 14.4559 42.0762 11.9316 42.0762C9.11672 42.0761 6.69164 41.2523 4.7793 39.5293L4.40332 39.1729C2.46099 37.2305 1.50003 34.7871 1.5 31.9521C1.5 29.1922 2.30509 26.337 3.82422 23.4072L3.83398 23.3896C5.36498 20.5318 7.2061 16.9521 9.3584 12.6475L14.4365 2.33691L14.8486 1.5H27.5625ZM55.2832 1.5L54.0557 3.72461L42.7549 24.2061C44.4889 24.6619 45.9545 25.4968 47.0674 26.7764H47.0684C48.561 28.3934 49.3145 30.3506 49.3145 32.5684C49.3144 35.3214 48.3372 37.676 46.376 39.5146L46.3574 39.5322L46.3379 39.5488C44.4256 41.2221 42.1765 42.0761 39.6523 42.0762C36.6495 42.0762 34.0895 41.1393 32.123 39.1729C30.1808 37.2305 29.2198 34.7871 29.2197 31.9521C29.2197 29.1922 30.0248 26.337 31.5439 23.4072L31.5537 23.3896C33.0847 20.5318 34.9258 16.9521 37.0781 12.6475L42.1562 2.33691L42.5684 1.5H55.2832Z"
                      fill="#2E5072"
                      stroke="#2E5072"
                      stroke-width="3"
                    />
                  </svg>
                </div>

                <div class="space-y-3 xl:space-y-[28px]">
                  <div class="tm text-xl xl:text-[26px] text-[#27292A] tracking-[3%]">
                    {{ item.text }}
                  </div>
                  <div class="flex items-center justify-between">
                    <p class="text-[#546B81] tr text-2xl tracking-[3%] hidden xl:inline">
                      - {{ item.author }}
                    </p>
                    <button
                      type="button"
                      class="bg-[#F6F7F9] rounded-full flex items-center justify-center size-[43px] text-[#27292A] hover:bg-primary hover:text-white cursor-pointer xl:hidden"
                      @click="goLeft"
                    >
                      <ArrowLeftIcon class="w-5 h-5" />
                    </button>

                    <div class="ts text-2xl tracking-[3%] leading-tight">
                      <span class="text-[#27292A]"> {{ index + 1 }} / </span
                      ><span class="text-[#8C9CAA]">
                        {{ info?.length }}
                      </span>
                    </div>

                    <button
                      type="button"
                      class="bg-[#F6F7F9] rounded-full flex items-center justify-center size-[43px] text-[#27292A] hover:bg-primary hover:text-white cursor-pointer xl:hidden"
                      @click="goRight"
                    >
                      <ArrowRightIcon class="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div class="w-[175px] h-[220px] xl:block overflow-hidden rounded-2xl relative hidden">
                <img
                  :src="info[(index + 1) % info.length].img"
                  alt=""
                  class="w-full h-full object-cover object-center"
                />
                <div class="absolute inset-0 flex flex-col pb-4 pl-4">
                  <p class="mt-auto text-[#F6F7F9] tr text-[16px] tracking-[3%]">
                    - {{ info[(index + 1) % info.length].author }}
                  </p>
                </div>
              </div>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>

      <div class="hidden xl:block absolute right-0 top-28">
        <div class="flex items-center gap-[5px]">
          <button
            type="button"
            class="bg-[#F6F7F9] rounded-full flex items-center justify-center size-[43px] text-[#27292A] hover:bg-primary hover:text-white cursor-pointer"
            @click="goLeft"
          >
            <ArrowLeftIcon class="w-5 h-5" />
          </button>
          <button
            type="button"
            class="bg-[#F6F7F9] rounded-full flex items-center justify-center size-[43px] text-[#27292A] hover:bg-primary hover:text-white cursor-pointer"
            @click="goRight"
          >
            <ArrowRightIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import titlePage from '@/assets/helper/titlePage.vue'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'

import { ref } from 'vue'
const splideFirstRef = ref()
const splideSecondRef = ref()

const goRight = () => {
  if (splideFirstRef.value && splideSecondRef.value) {
    splideFirstRef.value.splide.go('>')
    splideSecondRef.value.splide.go('>')
  }
}
const goLeft = () => {
  if (splideFirstRef.value && splideSecondRef.value) {
    splideFirstRef.value.splide.go('<')
    splideSecondRef.value.splide.go('<')
  }
}

const options = {
  type: 'loop',
  role: 'card',
  autoplay: false,
  arrows: false,
  lazyLoad: 'nearby',
  perPage: 1,
  pagination: false,
  gap: 20,
  drag: false,
}

import first from '@/assets/img/msg.jpg'
import igor from '@/assets/img/igor.jpg'
import appointment from '@/assets/img/igor.jpg'
const info = [
  {
    img: first,
    author: 'Анна Соколова',
    text: 'Профессионализм на высшем уровне! Юристы компании помогли мне выиграть сложное дело в суде. Всё было чётко, грамотно и без лишних переживаний. Спасибо за поддержку!',
  },
  {
    img: igor,
    author: 'Игорь Смирнов',
    text: 'Профессионализм на высшем уровне! Юристы компании помогли мне выиграть сложное дело в суде. Всё было чётко, грамотно и без лишних переживаний. Спасибо за поддержку!',
  },
  {
    img: appointment,
    author: 'Eshmetov Azimjon',
    text: 'Профессионализм на высшем уровне! Юристы компании помогли мне выиграть сложное дело в суде. Всё было чётко, грамотно и без лишних переживаний. Спасибо за поддержку!',
  },
]
</script>
