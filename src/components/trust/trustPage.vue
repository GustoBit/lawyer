<template>
  <div class="mb-20 xl:mb-[80px] container">
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
      <div class="p-3 xl:p-[26px] bg-[#F2F6FA] rounded-3xl flex flex-col">
        <div class="space-y-[26px]">
          <div>
            <h1 class="tm text-4xl xl:text-[50px] leading-tight text-gray-900">
              Ваш надежный юридический партнер:
            </h1>
            <h1 class="cs italic text-4xl xl:text-[50px] text-primary leading-tight">
              экспертность, прозрачность, уверенность
            </h1>
          </div>

          <ul class="list-none flex flex-col gap-4">
            <li
              v-for="(item, index) of info"
              :key="index"
              class="rounded-2xl bg-[#FCFDFF] py-2 pl-2 xl:py-5 xl:pl-[23px]"
            >
              <p class="tm text-[20px] line-clamp-1 xl:text-[26px] text-primary leading-tight">
                {{ index + 1 }}. {{ item.msg }}
              </p>
            </li>
          </ul>
        </div>

        <button
          type="button"
          class="flex items-center justify-between w-[288px] rounded-[50px] bg-primary py-2 px-4 xl:py-4 xl:px-[25px] cursor-pointer group transition-all duration-300 hover:bg-primary/90 mt-10 xl:mt-auto"
        >
          <span class="tm text-2xl text-white leading-tight"> Наши услуги </span>
          <svg
            width="69"
            height="15"
            viewBox="0 0 69 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="transition-all duration-300 group-hover:translate-x-2"
          >
            <path
              d="M68.7071 8.20711C69.0976 7.81659 69.0976 7.18342 68.7071 6.7929L62.3431 0.428938C61.9526 0.0384132 61.3195 0.0384132 60.9289 0.428938C60.5384 0.819462 60.5384 1.45263 60.9289 1.84315L66.5858 7.50001L60.9289 13.1569C60.5384 13.5474 60.5384 14.1805 60.9289 14.5711C61.3195 14.9616 61.9526 14.9616 62.3431 14.5711L68.7071 8.20711ZM-8.74228e-08 8.5L68 8.50001L68 6.50001L8.74228e-08 6.5L-8.74228e-08 8.5Z"
              class="fill-white"
            />
          </svg>
        </button>
      </div>

      <div class="h-[400px] xl:w-[626px] xl:h-[767px] rounded-3xl overflow-hidden">
        <img
          src="@/assets/img/hummer.jpg"
          alt=""
          class="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const info = [
  {
    msg: 'Большой опыт работы сотрудников',
  },
  {
    msg: 'Обширный спектр юридических услуг',
  },
  {
    msg: 'Обширный спектр юридических услуг',
  },
  {
    msg: 'Высокое качество услуг',
  },
]
</script>
