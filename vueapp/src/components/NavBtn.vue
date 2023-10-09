<template>
  <div class="flex justify-center md:mx-8">
    <router-link
      class="hover:bg-green hover:text-polar text-black px-4 py-5 text-center w-full md:rounded-3xl md:text-black md:py-1"
      :to="link"
    >
      {{ text }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    link: String,
    text: String,
  },
};
</script>
