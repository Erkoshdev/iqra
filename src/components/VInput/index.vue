<template>
  <div class="form-container">
    <small v-if="label.length">{{ label }}</small>
    <div class="form-control" :class="{'is-focus': isFocus}">
      <input
          :type="isHidden ? type : 'text'"
          :value="modelValue"
          :name="name"
          :placeholder="placeholder"
          :disabled="disabled"
          v-mask="vMask"
          :readonly="readonly"
          @input="onInput"
          @keyup.enter="$emit('enter')"
          @focus="onFocusInput"
          @blur="onBlurInput"
      >
      <button class="toggle-pwd" v-if="type === 'password'" @click.prevent="isHidden = !isHidden">
        <i class="i-eye-closed" v-if="isHidden"></i>
        <i class="i-eye" v-else></i>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VInput",

  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    vMask: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isHidden: true,
      isFocus: false,
    }
  },

  mounted() {
    window.document.getElementById(this.name)?.value;
  },

  watch: {
    modelValue: {
      immediate: true,
      handler(val) {
        this.isBlur = !!val;
      }
    }
  },

  methods: {
    onInput($event) {
      this.$emit('update:modelValue', $event.target.value)
    },
    onFocusInput() {
      this.isFocus = true;
    },
    onBlurInput() {
      this.isFocus = false;
      this.isBlur = true;
    },
  }
}
</script>

<style scoped>

</style>
