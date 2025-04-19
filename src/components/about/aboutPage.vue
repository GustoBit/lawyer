<template>
  <div class="mb-10 container">
    <titlePage to="#" title="О НАС" />

    <div class="grid grid-cols-1 gap-y-5 xl:grid-cols-3 xl:gap-y-10 gap-x-5">
      <div
        class="rounded-2xl rounded-tr-[38px] overflow-hidden w-full xl:w-[411px] h-[359px] relative group/card bg-primary flex items-center justify-center"
      >
        <div
          class="absolute top-0 right-0 w-[92px] h-[92px] bg-white flex justify-end rounded-bl-3xl transform xl:-translate-y-full group-hover/card:translate-y-0 transition duration-200 z-20"
        >
          <button
            type="button"
            class="ring-1 ring-inset ring-gray-800 rounded-full size-[76px] flex items-center justify-center cursor-pointer hover:bg-primary hover:ring-primary hover:text-white text-gray-800 transition duration-200"
          >
            <ArrowUpRightIcon class="w-6 h-6" />
          </button>

          <div class="absolute inset-0 pointer-events-none">
            <div class="relative w-full h-full">
              <span
                class="absolute w-10 h-10 bg-transparent right-full rounded-full shadow-[20px_-20px_0_#fff]"
              />
              <span
                class="absolute w-10 h-10 top-full right-0 bg-transparent rounded-full shadow-[20px_-20px_0_#fff]"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 class="tb text-[96px] leading-tight text-white text-center">200+</h1>
          <p class="ts leading-[140%] text-[26px] text-white">довольных клиентов</p>
        </div>
      </div>

      <div class="rounded-2xl overflow-hidden w-full h-[300px] xl:w-[411px] xl:h-[359px]">
        <img src="@/assets/img/legal.jpg" alt="" class="w-full h-full object-cover object-center" />
      </div>

      <div class="rounded-2xl overflow-hidden h-fit xl:w-[411px] xl:h-[359px]">
        <div class="xl:py-[26px]">
          <p class="tr text-2xl leading-[140%] text-gray-800">
            Юридическая компания «Lawsuit» предоставляет полный спектр правовых услуг для физических
            и юридических лиц. Мы специализируемся на защите интересов наших клиентов в различных
            отраслях права, обеспечивая и индивид подход к каждому делу.
          </p>
        </div>
      </div>

      <div class="rounded-2xl overflow-hidden h-fit xl:w-[411px] xl:h-[359px]">
        <div class="xl:py-[26px]">
          <p class="tr text-2xl leading-[140%] text-gray-800">
            Юридическая компания «Lawsuit» предоставляет полный спектр правовых услуг для физических
            и юридических лиц. Мы специализируемся на защите интересов наших клиентов в различных
            отраслях права, обеспечивая и индивид подход к каждому делу.
          </p>
        </div>
      </div>

      <div class="rounded-2xl overflow-hidden xl:w-[411px] h-[359px]">
        <img
          src="@/assets/img/appointment.jpg"
          alt=""
          class="w-full h-full object-cover object-center"
        />
      </div>

      <div
        class="rounded-2xl rounded-br-[38px] overflow-hidden xl:w-[411px] h-[359px] relative group/card bg-[#D3E3F2] flex items-center justify-center"
      >
        <div
          class="absolute bottom-0 right-0 w-[92px] h-[92px] bg-white flex items-end justify-end rounded-tl-3xl transform xl:translate-y-full group-hover/card:translate-y-0 transition duration-200 z-20"
        >
          <button
            type="button"
            class="ring-1 ring-inset ring-gray-800 rounded-full size-[76px] flex items-center justify-center cursor-pointer hover:bg-primary hover:ring-primary hover:text-white text-gray-800 transition duration-200"
          >
            <ArrowUpRightIcon class="w-6 h-6" />
          </button>

          <div class="absolute inset-0 pointer-events-none">
            <div class="relative w-full h-full">
              <span
                class="absolute w-10 h-10 bg-transparent bottom-0 right-full rounded-full shadow-[20px_20px_0_#fff]"
              />
              <span
                class="absolute w-10 h-10 bg-transparent bottom-full right-0 rounded-full shadow-[20px_20px_0_#fff]"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 class="tb text-[96px] leading-tight text-white text-center">200+</h1>
          <p class="ts leading-[140%] text-[26px] text-white">довольных клиентов</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import titlePage from '@/assets/helper/titlePage.vue'
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
</script>
