<template>
  <component :is="layout">
    <router-view />
  </component>
  <VGlWrapper />
  <Notifications />
</template>

<script>
import VEmptyLayout from './layouts/VEmptyLayout'
import VPageLayout from './layouts/VPageLayout'
import VMainLayout from './layouts/VMainLayout'
import VGlWrapper from './components/VGlModal/components/VGlModalWrapper'

export default {
  name: 'App',

  components: {
    VEmptyLayout,
    VPageLayout,
    VMainLayout,
    VGlWrapper
  },

  computed: {
    layout() {
      return ('v-' + this.$route.meta.layout || 'main') + '-layout'
    }
  }

}
</script>

<style>

</style>
