<template>
  <div class="auth-wrapper" v-cloak>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "VEmptyLayout"
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
