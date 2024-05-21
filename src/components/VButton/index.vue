<template>
  <button
      class="btn"
      :class="[type, size]"
      @click="$emit('click')"
      :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VButton",

  emits: ['click'],

  props: {
    type: {
      type: String,
      default: 'btn-dark'
    },
    size: {
      type: String,
      default: 'btn-md',
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>

</style>
