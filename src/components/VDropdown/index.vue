<template>
  <div class="v-dropdown">
    <div
      class="v-dropdown-base"
      @click="handleShow"
    >
      <slot name="base" :handleShow="handleShow"/>
    </div>
    <div
      v-if="show"
      class="v-dropdown-area"
    >
      <slot name="dropdown" :handleShow="handleShow"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "VDropdown",

  data() {
    return {
      show: false,
    }
  },

  mounted() {
    document.addEventListener('click', this.close);
  },

  onUnmounted() {
    document.removeEventListener('click', this.close);
  },

  methods: {
    handleShow() {
      this.show = !this.show;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.show = false;
      }
    }
  },
}
</script>

<style scoped>

</style>
