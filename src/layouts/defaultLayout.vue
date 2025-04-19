<template>
  <section class="flex flex-col py-4 xl:py-10">
    <defaultHeader />
    <main class="flex-1">
      <router-view />
    </main>
    <defaultFooter />
  </section>
</template>
<script setup>
import defaultHeader from '@/views/header/defaultHeader.vue'
import defaultFooter from '@/views/footer/defaultFooter.vue'
</script>

