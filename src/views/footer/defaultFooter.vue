<template>
  <div class="container mt-auto">
    <div class="p-10 bg-primary space-y-[50px] rounded-[26px]">
      <div class="max-w-[682px] mx-auto space-y-[54px]">
        <!-- TITLE -->
        <div class="tb text-6xl uppercase text-center h-[63px] text-blue-400/25">logo</div>

        <!-- FORM -->
        <div class="flex flex-col items-center gap-[30px]">
          <h1 class="tr text-4xl xl:text-5xl text-white -tracking-[2%] text-center">
            Свяжитесь с нами
          </h1>
          <p class="tr text-center text-2xl text-[#FFFFFF]/75 leading-[27px]">
            Получите профессиональную консультацию — мы всегда готовы помочь вам разобраться в
            юридических вопросах.
          </p>

          <div class="relative">
            <input
              type="email"
              class="pl-4 pr-12 ring-1 ring-inset ring-[#3F658A] rounded-[50px] xl:w-[384px] h-[52px] outline-none text-[#FFFFFF] leading-[27px] text-2xl placeholder:text-[#3F658A] bg-transparent transition-all duration-300 ease-in-out focus:ring-2 focus:ring-[#61A3D9]"
              placeholder="user@gmail.com"
            />

            <button
              type="button"
              class="absolute right-[6px] top-1/2 transfrom -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
            >
              <ArrowUpRightIcon class="text-primary w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div class="pt-5 xl:pt-10 border-t border-[#4C6F92]">
        <div class="flex flex-col xl:flex-row gap-5 xl:gap-0 items-center justify-between">
          <h2 class="tr text-[#B2CAE2] text-2xl leading-[27px]">Политика конфиденциальности</h2>
          <nav class="flex flex-col xl:flex-row items-center gap-4 xl:gap-[30px]">
            <router-link
              to="#"
              v-for="item of link"
              :key="item.to"
              class="text-white tr text-[20px] relative group"
            >
              {{ item.title }}
              <span
                class="absolute top-full left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300 rounded-2xl bg-white"
              />
            </router-link>
          </nav>
          <nav class="flex items-center gap-[14px]">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              v-for="item of social"
              :key="item.to"
              class="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[#365B7F] transition duration-300 ease-in-out transform hover:scale-110 hover:bg-gradient-to-tr hover:from-[#365B7F] hover:to-[#6FA8DC] shadow-md hover:shadow-lg"
            >
              <img :src="item.img" alt="" class="w-6 h-6" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'

const link = [
  {
    to: 'main',
    title: 'Главная',
  },
  {
    to: 'about',
    title: 'О нас',
  },
  {
    to: 'service',
    title: 'Наши услуги',
  },
  {
    to: 'tarif',
    title: 'Тарифы',
  },
  {
    to: 'contact',
    title: 'Контакты',
  },
]

import email from '@/assets/social/email.svg'
import facebook from '@/assets/social/facebook.svg'
import instagram from '@/assets/social/instagram.svg'
import linkedin from '@/assets/social/linkedin.svg'
import phone from '@/assets/social/phone.svg'
const social = [
  {
    to: 'email',
    img: email,
  },
  {
    to: 'facebook',
    img: facebook,
  },
  {
    to: 'instagram',
    img: instagram,
  },
  {
    to: 'linkedin',
    img: linkedin,
  },
  {
    to: 'phone',
    img: phone,
  },
]
</script>
