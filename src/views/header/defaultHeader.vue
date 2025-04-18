<template>
  <div class="container">
    <div class="flex items-center justify-between">
      <div class="text-4xl cm uppercase">logo</div>

      <div class="flex items-center gap-[46px]">
        <nav class="flex items-center gap-10">
          <router-link
            v-for="item of nav"
            :key="item.to"
            to="#"
            :class="[
              'tr text-[22px] text-gray-900 hover:text-primary',
              item.active ? 'text-primary' : '',
            ]"
          >
            {{ item.title }}
          </router-link>
        </nav>

        <button
          type="button"
          class="px-[26px] py-3 ring ring-inset ring-gray-900 rounded-[50px] tm text-2xl text-gray-900 cursor-pointer hover:bg-primary hover:ring-primary hover:text-white transition duration-200 leading-none"
        >
          Свяжитесь с нами
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const nav = [
  {
    to: 'main',
    title: 'Главная',
    active: true,
  },
  {
    to: 'about',
    title: 'О нас',
    active: false,
  },
  {
    to: 'service',
    title: 'Наши услуги',
    active: false,
  },
  {
    to: 'tarif',
    title: 'Тарифы',
    active: false,
  },
  {
    to: 'contact',
    title: 'Контакты',
    active: false,
  },
]
</script>
