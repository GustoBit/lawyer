<template>
  <div class="mb-6 xl:mb-10 border-b border-[#BBC6CD] flex items-center justify-between">
    <h1 class="cm text-5xl xl:text-6xl text-gray-900 leading-tight">{{ title }}</h1>

    <router-link :to="to" class="hidden xl:block">
      <svg
        width="69"
        height="15"
        viewBox="0 0 69 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68.7071 8.20711C69.0976 7.81659 69.0976 7.18342 68.7071 6.7929L62.3431 0.428938C61.9526 0.0384132 61.3195 0.0384132 60.9289 0.428938C60.5384 0.819462 60.5384 1.45263 60.9289 1.84315L66.5858 7.50001L60.9289 13.1569C60.5384 13.5474 60.5384 14.1805 60.9289 14.5711C61.3195 14.9616 61.9526 14.9616 62.3431 14.5711L68.7071 8.20711ZM-8.74228e-08 8.5L68 8.50001L68 6.50001L8.74228e-08 6.5L-8.74228e-08 8.5Z"
          fill="#1E2123"
          class="fill-gray-900"
        />
      </svg>
    </router-link>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
})
</script>
