<template>
  <div class="textarea-form" :class="getClass()">
    <textarea
        :placeholder="placeholder"
        :rows="rows"
        :type="type"
        :value="modelValue"
        :disabled="disabled"
        :name="name"
        :readonly="readonly"
        @input="onInput"
        @keyup.enter="$emit('enter')"
        @focus="$emit('focus')"
        @blur="$emit('blur', questionId, modelValue, 2)"
    />
  </div>
</template>

<script>

export default {
  name: "VTextarea",
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    rows: {
      type: Number,
      default: 1,
    },
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    questionId: {
      type: Number,
      default: null
    },
    isFinished: {
      type: Boolean,
      default: false
    },
    userAnswers: {
      type: Array,
      default: () => []
    },
    correctAnswers: {
      type: Array,
      default: () => []
    }
  },

  methods:{
    onInput(event) {
      this.$emit('update:modelValue', event.target.value)
      event.target.style.height = 'auto';
      event.target.style.height = event.target.scrollHeight + 'px';
    },
    getClass() {
      let className = ''
      if(this.isFinished && this.userAnswers.length && this.correctAnswers.find(item => item.name === this.userAnswers[0])) {
        return className = 'success'
      } else if(this.isFinished && !this.userAnswers.length) {
        return className = 'danger'
      } else if(this.isFinished && this.userAnswers.length && this.correctAnswers.find(item => item.name !== this.userAnswers[0])) {
        return className = 'danger'
      }
      return className;
    }
  }
}
</script>

<style scoped>

</style>
