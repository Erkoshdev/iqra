<template>
  <div class="sidebar">
    <ul class="navbar">
      <li
          class="navbar-item"
          v-for="(link, linkIdx) in menu"
          :key="linkIdx"
      >
        <a
            v-if="link.children && link.children.length"
            :class="['navbar-link', {'active': link.isOpen}]"
            href="#"
            @click.prevent="link.isOpen = !link.isOpen"
        >
          <span class="navbar-link-icon" v-html="link.icon"></span>
          <span class="navbar-link-name">{{ link.name }}</span>
          <span class="navbar-link-arrow" v-if="link.children.length">
            <i class="i-chevron-down-dark"></i>
          </span>
        </a>
        <a v-else href="#" class="navbar-link" @click.prevent="handleSelect(link.url)">
          <span class="navbar-link-icon" v-html="link.icon"></span>
          <span class="navbar-link-name">{{ link.name }}</span>
        </a>
        <ul class="sub-navbar" v-if="link.children" v-show="link.isOpen">
          <li class="navbar-item" v-for="(sublink, sublinkIdx) in link.children" :key="sublinkIdx">
            <router-link class="navbar-link" :to="sublink.url">
              <span class="navbar-link-icon" v-html="sublink.icon"></span>
              <span class="navbar-link-name">{{ sublink.name }}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import navbar from "@/jsons/navbar";
import adminNavbar from "@/jsons/adminNavbar";

export default {
  name: "VSidebar",

  computed: {
    menu() {
      if(this.$route.meta.isAdminPage) {
        return adminNavbar
      } else {
        return navbar
      }
    }
  },

  methods: {
    handleSelect(url) {
      this.$router.push({name: url})
      this.$emit('clickNavLink')
    }
  }
}
</script>

<style scoped>

</style>
