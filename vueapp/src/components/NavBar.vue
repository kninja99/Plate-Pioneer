<template>
  <div class="flex flex-col">
    <button class="h-8 w-8 self-end fixed top-6 z-[13] md:hidden">
      <MobileIcon @click="toggleMobileNav" />
    </button>
    <nav
      class="fixed bg-polar right-0 top-0 py-14 h-[100lvh] w-[60%] z-[12] shadow-[0_8px_5px_8px_rgba(0,0,0,0.3)] animate-slideLeftToRight sm:w-[40%] flex hidden flex-col md:bg-polar md:flex md:flex-row md:relative md:top-0 md:right-0 md:bg-dark-gray md:h-auto md:w-auto md:py-0 md:animate-[none] md:shadow-[none]"
    >
      <!-- should dynmically render nav btns based off props (TODO)-->
      <NavBtn text="About" link="{ path: '/', hash: '#about' }" />
      <NavBtn text="Log In" link="/logIn" />
    </nav>
  </div>
</template>

<script>
import NavBtn from './NavBtn.vue';
import MobileIcon from './icons/MobileIcon.vue';
export default {
  name: 'NavBar',
  components: {
    NavBtn,
    MobileIcon,
  },
  methods: {
    toggleMobileNav() {
      const nav = document.querySelector('nav');
      // toggle sliding animation
      nav.classList.toggle('animate-slideLeftToRight');
      nav.classList.toggle('animate-slideRightToLeft');
      // check if class list has hidden class
      if (nav.classList.contains('hidden')) {
        nav.classList.toggle('hidden');
        // timer that fixes overflowing issue on mobile devices
        setTimeout(() => {
          nav.classList.toggle('overflow-hidden');
        }, 400);
      } else {
        // timer that fixes slide right to left animation
        setTimeout(() => {
          nav.classList.toggle('hidden');
        }, 400);
      }
    },
  },
};
</script>
