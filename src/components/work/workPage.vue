<template>
  <div class="container my-14 xl:my-[80px]">
    <titlePage to="#" title="НАШИ РАБОТЫ" />
    <cardPage :array="array" />
  </div>
</template>
<script setup>
import titlePage from '@/assets/helper/titlePage.vue'
import cardPage from '@/assets/helper/cardPage.vue'

import img from '@/assets/img/coffee.jpg'
import book from '@/assets/img/book.jpg'
import appointment from '@/assets/img/appointment.jpg'
const array = [
  {
    img: img,
    text: 'Актуальные юридические новости и полезные советы',
    date: '03/12/2025',
  },
  {
    img: book,
    text: 'Советы юриста: как защитить свои права?',
    date: '03/12/2025',
  },
  {
    img: appointment,
    text: 'Последние изменения в законодательстве',
    date: '03/12/2025',
  },
]
</script>
