<template>
  <div class="grid grid-cols-1 xl:grid-cols-3 gap-5">
    <div v-for="item of array" :key="item.text">
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

        <img
          :src="item.img"
          alt=""
          class="w-full h-full object-cover object-center rounded-2xl overflow-hidden [mask-image:linear-gradient(to_top_left,black_85%,transparent)]"
        />
      </div>

      <h1 class="mt-2 mb-1 xl:mt-[26px] xl:mb-4 text-[#27292A] tm tracking-[3%] text-2xl">
        {{ item.text }}
      </h1>
      <p class="text-[#6E7A80] tm tracking-[3%] text-2xl">{{ item.date }}</p>
    </div>
  </div>
</template>
<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
defineProps({
  array: {
    type: Array,
    required: true,
  },
})
</script>
