<template>
  <div class="my-[80px] py-4">
    <Splide
      :has-track="false"
      :extensions="{ AutoScroll }"
      :options="{
        perPage: array.length,
        type: 'loop',
        autoplay: false,
        interval: 3000,
        arrows: false,
        pagination: false,
        drag: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        lazyLoad: 'nearby',
        gap: 60,
        autoScroll: {
          speed: 0.5,
          pauseOnHover: true,
          pauseOnFocus: false,
        },
      }"
      class=""
      v-if="array?.length > 0"
    >
      <SplideTrack class="">
        <SplideSlide class="p-0 !w-fit" v-for="item of array" :key="item.to">
          <div class="w-[320px] h-[80px] overflow-hidden">
            <img :src="`${item.img}`" alt="" class="" />
          </div>
        </SplideSlide>
      </SplideTrack>
    </Splide>
  </div>
</template>
<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

import heroimg3 from '@/assets/img/heroimg3.jpg'
import heroimg4 from '@/assets/img/heroimg4.jpg'
import wiley from '@/assets/img/wiley.svg'
import springer from '@/assets/img/springer.svg'
import elsever from '@/assets/img/elsever.svg'
import taylor from '@/assets/img/taylor.svg'
const array = [
  {
    to: 'first',
    img: heroimg3,
  },
  {
    to: 'second',
    img: heroimg4,
  },
  {
    to: 'third',
    img: heroimg3,
  },
  {
    to: 'fourth',
    img: heroimg4,
  },
  {
    to: 'fifth',
    img: heroimg4,
  },
  {
    to: 'first1',
    img: taylor,
  },
  {
    to: 'second2',
    img: heroimg4,
  },
  {
    to: 'third3',
    img: heroimg3,
  },
  {
    to: 'fourth4',
    img: springer,
  },
  {
    to: 'fifth5',
    img: wiley,
  },
  {
    to: 'fifth6',
    img: elsever,
  },
]
</script>
