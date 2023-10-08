<template>
  <header class="py-4 flex items-center justify-between mx-7">
    <!-- Website Logo -->
    <div class="flex items-center">
      <img src="../assets/logo.svg" alt="logo" />
      <p class="ml-4 text-lg font-medium">Plate Pioneer</p>
    </div>
    <!-- NavBar (TODO) -->
    <NavBar />
  </header>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  name: 'HeaderComponent',
  components: {
    NavBar,
  },
};
</script>
