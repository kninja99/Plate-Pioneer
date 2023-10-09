<template>
  <div>
    <!-- Header -->
    <HeaderComponent />
    <!-- Hero Section -->
    <div class="hero-image text-polar h-[90vh]">
      <div class="flex flex-col justify-center items-center h-full mx-8">
        <p class="text-2xl sm:text-3xl">Welcome to Plate Pioneer</p>
        <div class="flex flex-col items-center justify-center max-w-lg">
          <p class="text-center my-8 sm:text-xl">
            Where Culinary Adventures Bring Families and Communities Together,
            One Flavorful Journey at a Time
          </p>
          <router-link
            class="bg-green text-polar px-10 py-1 rounded-3xl w-44 text-center hover:bg-green-hover"
            to="/"
            >Log In</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../src/components/HeaderComponent.vue';
export default {
  name: 'Home',
  components: {
    HeaderComponent,
  },
};
</script>

<style scoped>
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('./imgs/Hero.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
