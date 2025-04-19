<template>
  <div class="container">
    <titlePage to="#" title="ЧТО МЫ ПРЕДЛАГАЕМ?" />

    <div class="grid grid-cols-1 xl:grid-cols-4 gap-5">
      <div
        v-for="(item, index) of info"
        :key="index"
        :class="[
          'xl:w-[303px] xl:h-[471px] flex flex-col',
          index % 2 !== 0 ? 'xl:justify-end' : '',
        ]"
      >
        <div class="bg-[#F6F7F9] rounded-2xl p-5">
          <h1 class="text-[#27292A] tm text-2xl tracking-[3%] mb-5 xl:mb-[81px]">
            {{ item.title }}
          </h1>
          <p class="tr text-[22px] tracking-[3%] leading-tight text-[#27292A] mb-10 xl:mb-[113px]">
            {{ item.text }}
          </p>
          <button
            type="button"
            class="group ring-1 ring-inset ring-[#DBE3F4] rounded-[50px] py-[3px] px-[10px] cursor-pointer flex items-center gap-2 transition duration-200 hover:bg-primary hover:ring-primary"
          >
            <p
              class="text-[#27292A] text-[16px] tracking-[3%] leading-tight group-hover:text-white"
            >
              {{ item.btn }}
            </p>
            <span class="opacity-0 group-hover:opacity-100 transition duration-200">⚖️</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import titlePage from '@/assets/helper/titlePage.vue'

const info = [
  {
    title: 'Корпоративный аудит',
    text: 'Глубокий анализ и прозрачность финансов для стабильности и роста вашего бизнеса',
    btn: 'Судебные споры',
  },
  {
    title: 'Корпоративный аудит',
    text: 'Глубокий анализ и прозрачность финансов для стабильности и роста вашего бизнеса',
    btn: 'Судебные споры',
  },
  {
    title: 'Корпоративный аудит',
    text: 'Глубокий анализ и прозрачность финансов для стабильности и роста вашего бизнеса',
    btn: 'Судебные споры',
  },
  {
    title: 'Корпоративный аудит',
    text: 'Глубокий анализ и прозрачность финансов для стабильности и роста вашего бизнеса',
    btn: 'Судебные споры',
  },
]
</script>
