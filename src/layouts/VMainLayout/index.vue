<template>
  <div class="main-wrapper">
    <v-header
        @clickMenuBtn="toggleSidebar"
        @clickSearchBtn="toggleSearch"
        :isSidebar="isSidebar"
    />
    <v-sidebar
        :class="{show: isSidebar}"
        @clickNavLink="toggleSidebar"
    />
    <v-search :class="{show: isSearch}" />
    <div class="page-wrapper">
      <div class="container-md">
        <router-view />
      </div>
      <div class="overlay" :class="{show: isSidebar || isSearch}"></div>
    </div>
  </div>
</template>

<script>
import VSidebar from './components/VSidebar';
import VHeader from './components/VHeader';
import VSearch from './components/VSearch'

export default {
  name: "VMainLayout",

  components: {
    VSidebar,
    VHeader,
    VSearch
  },

  data() {
    return {
      isSidebar: false,
      isSearch: false,
    }
  },

  watch: {
    isSidebar(old, val) {
      if (val) {
        document.body.classList.remove('scroll-locked');
      } else {
        document.body.classList.add('scroll-locked');
      }
    }
  },

  methods: {
    toggleSidebar() {
      this.isSidebar = !this.isSidebar
    },
    toggleSearch() {
      this.isSearch = !this.isSearch
    },

  }
}
</script>

<style scoped>

</style>
