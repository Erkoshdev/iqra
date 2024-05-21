<template>
  <div class="row">
    <div class="col col-2"></div>
    <div class="col col-8">
      <div class="faq-search-bar">
        <v-search-bar></v-search-bar>
      </div>
      <div class="faq-menu-list">
        <v-faq-menu-item></v-faq-menu-item>
        <v-faq-menu-item></v-faq-menu-item>
        <v-faq-menu-item></v-faq-menu-item>
        <v-faq-menu-item></v-faq-menu-item>
        <v-faq-menu-item></v-faq-menu-item>
        <v-faq-menu-item></v-faq-menu-item>
        <v-faq-menu-item></v-faq-menu-item>
      </div>
    </div>
  </div>
</template>

<script>
import VFaqMenuItem from "./components/VFaqMenuItem";
import VSearchBar from "../../../components/VSearch";
export default {
  name: "VFaq",
  components: {
    VFaqMenuItem,
    VSearchBar
  }
}
</script>

<style scoped>

</style>
