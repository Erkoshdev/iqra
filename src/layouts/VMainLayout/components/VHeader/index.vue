<template>
  <div class="header">
    <a
        class="sidebar-toggle"
        id="sidebarToggle"
        @click.prevent="$emit('clickMenuBtn')"
        :class="{active: isSidebar}"
    >
      <div class="sidebar-toggle-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span class="sidebar-toggle-name">Меню</span>
    </a>
<!--    <a-->
<!--        href="#"-->
<!--        class="header-search-link"-->
<!--        @click.prevent="$emit('clickSearchBtn')"-->
<!--    >-->
<!--      <i class="i-loup-black"></i>-->
<!--    </a>-->
    <a href="#" class="header-logo" @click.prevent="goToMain">
      <img class="header-lg-logo" src="@/assets/img/logo/logo-text-dark.svg" alt="">
      <img class="header-sm-logo" src="@/assets/img/logo/logo.svg" alt="">
    </a>
    <router-link class="show-as-student-link" :to="{name: 'VCabinet'}" v-if="isAdminPage">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1581_2085)">
          <path d="M21.8602 10.4093C21.6637 10.1404 16.9808 3.82617 10.9999 3.82617C5.01902 3.82617 0.335926 10.1404 0.139602 10.409C0.0488853 10.5333 0 10.6832 0 10.837C0 10.9909 0.0488853 11.1408 0.139602 11.2651C0.335926 11.5339 5.01902 17.8482 10.9999 17.8482C16.9808 17.8482 21.6637 11.5339 21.8602 11.2653C21.951 11.1411 22 10.9912 22 10.8373C22 10.6834 21.951 10.5335 21.8602 10.4093ZM10.9999 16.3976C6.59434 16.3976 2.77866 12.2067 1.64914 10.8367C2.7772 9.46541 6.58489 5.27672 10.9999 5.27672C15.4052 5.27672 19.2207 9.46687 20.3507 10.8377C19.2226 12.2089 15.4149 16.3976 10.9999 16.3976Z" fill="black"/>
          <path d="M10.9999 6.48554C8.60041 6.48554 6.6482 8.43775 6.6482 10.8372C6.6482 13.2367 8.60041 15.1889 10.9999 15.1889C13.3993 15.1889 15.3516 13.2367 15.3516 10.8372C15.3516 8.43775 13.3993 6.48554 10.9999 6.48554ZM10.9999 13.7383C9.40015 13.7383 8.09879 12.4369 8.09879 10.8372C8.09879 9.23753 9.40019 7.93613 10.9999 7.93613C12.5996 7.93613 13.901 9.23753 13.901 10.8372C13.901 12.4369 12.5996 13.7383 10.9999 13.7383Z" fill="black"/>
        </g>
        <defs>
          <clipPath id="clip0_1581_2085">
            <rect width="22" height="22" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <span>Смотреть как ученик</span>
    </router-link>
    <router-link class="header-course-link" :to="{name: 'VMyCourses'}" v-else>Все курсы</router-link>
<!--    <v-header-notification />-->
    <v-header-profile />
  </div>
</template>

<script>
// import VHeaderNotification from '../VHeaderNotification';
import VHeaderProfile from '../VHeaderProfile';

export default {
  name: "VHeader",

  components: {
    // VHeaderNotification,
    VHeaderProfile
  },

  emits: ['clickMenuBtn', 'clickSearchBtn'],

  computed: {
    isAdminPage() {
      return this.$route.meta.isAdminPage
    }
  },

  props: {
    isSidebar: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    goToMain() {
      if(this.isAdminPage) {
        this.$router.push({name: 'VAdmin'})
      } else {
        this.$router.push({name: 'VCabinet'})
      }
    },
    isMobile() {
      if(screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style scoped>

</style>
