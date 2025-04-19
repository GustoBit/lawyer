<template>
  <div class="container">
    <titlePage to="#" title="НАШИ РАБОТЫ" />

    <div
      :class="[
        'h-[626px] rounded-2xl overflow-hidden relative',
        'pt-[23px] px-[26px] pb-[63px]',
        `bg-[url(@/assets/img/heroimg4.jpg)] bg-center bg-no-repeat bg-cover`,
      ]"
    >
      <!-- OPACITY -->
      <span class="bg-[#F6F7F9]/60 absolute inset-0 pointer-events-none" />

      <!-- TITLES -->
      <div class="grid grid-cols-2 xl:flex justify-between relative z-10">
        <div class="xl:max-w-[277px]">
          <div class="tm text-2xl xl:text-[50px] leading-[114%] text-[#27292A] line-clamp-1">Работы по</div>
          <h1 class="text-[#1D466C] text-2xl xl:text-[50px] cs italic leading-[114%] line-clamp-2">
            Гражданскому кодексу
          </h1>
        </div>
        <div class="xl:max-w-354px]">
          <div class="tm text-2xl xl:text-[50px] leading-[114%] text-[#27292A] xl:text-end line-clamp-1">
            Работы по
          </div>
          <h1 class="text-[#1D466C] text-2xl xl:text-[50px] cs italic leading-[114%] line-clamp-2">
            Трудовому кодексу
          </h1>
        </div>
      </div>

      <!-- ELEMENTS -->
      <div class="absolute inset-0 z-10">
        <div class="w-full h-full flex items-center justify-center">
          <div class="xl:size-[506px] flex items-center justify-center relative">
            <div
              class="size-[300px] xl:size-[410px] rounded-full bg-[#3C6A97]/50 flex items-center justify-center relative"
            >
              <div>
                <h1 class="text-[#F6F7F9] cm text-7xl xl:text-[105px] leading-none">5823</h1>
                <p class="text-[#E3F0FC] ts text-2xl tracking-[3%] text-center">Запросов</p>
              </div>
            </div>
            <rightTop />
            <bottomRight />
            <bottomLeft />
            <topLeft />
            <rightLine />
            <leftLine />

            <div class="absolute top-[115%] right-[55%] xl:-right-[334px] xl:bottom-[115px]">
              <div class="bg-[#F6F7F9] p-2 xl:py-[18px] xl:px-[37px] rounded-2xl">
                <h1 class="text-primary cm text-4xl xl:text-[51px] text-center leading-none line-clamp-1">
                  2315
                </h1>
                <div
                  class="text-[#546B81] tr text-lg xl:text-[21px] tracking-[3%] w-[160px] xl:w-[183px] text-center leading-none line-clamp-2"
                >
                  Работах одержали победу
                </div>
              </div>
            </div>
            <div class="absolute top-[115%] left-[55%] xl:-left-[321px] xl:bottom-[170px]">
              <div class="bg-[#F6F7F9] p-2 xl:py-[18px] xl:px-[37px] rounded-2xl">
                <h1 class="text-primary cm text-4xl xl:text-[51px] text-center leading-none line-clamp-1">
                  2344
                </h1>
                <div
                  class="text-[#546B81] tr text-lg xl:text-[21px] tracking-[3%] w-[160px] xl:w-[183px] text-center leading-none line-clamp-2"
                >
                  Работах одержали победу
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ELEMENTS -->
    </div>
  </div>
</template>
<script setup>
import titlePage from '@/assets/helper/titlePage.vue'
import rightTop from '@/assets/percent/rightTop.vue'
import bottomRight from '@/assets/percent/bottomRight.vue'
import bottomLeft from '@/assets/percent/bottomLeft.vue'
import topLeft from '@/assets/percent/topLeft.vue'
import rightLine from '@/assets/percent/rightLine.vue'
import leftLine from '@/assets/percent/leftLine.vue'
</script>
