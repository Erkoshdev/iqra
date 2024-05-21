<template>
  <div class="agree-container">
    <input
        type="checkbox"
        :value="true"
        v-model="isAgree"
    >
    <span class="checkmark"></span>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "VAgreeForm",

  data() {
    return {
      isAgree: false,
    }
  },

  watch: {
    isAgree() {
      this.$emit('update:modelValue', this.isAgree);
    },
  },
}
</script>

<style scoped>

</style>
