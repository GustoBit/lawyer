<template>
  <section class="py-10 flex flex-col">
    <defaultHeader />
    <main>
      <router-view />
    </main>
    <defaultFooter />
  </section>
</template>
<script setup>
import defaultHeader from '@/views/header/defaultHeader.vue'
import defaultFooter from '@/views/footer/defaultFooter.vue'
</script>
