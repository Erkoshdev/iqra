<template>
  <div class="radio-group">
    <label
        v-for="(option, index) in options"
        :key="index"
        class="radio-item"
    >
      <span class="radio-item-text">{{ option.name }}</span>
      <input
          type="radio"
          :name="name"
          :value="option.id"
          v-model="selectedOption"
          @click="$emit('onInput', questionId, option.id, 1)"
      >
      <span class="checkmark" :class="getClasses(option.id)"/>
    </label>
  </div>
</template>

<script>
export default {
  name: "VRadioGroup",

  props: {
    options: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: '',
    },
    userAnswers: {
      type: Array,
      default: () => []
    },
    correctAnswers: {
      type: Array,
      default: () => []
    },
    modelValue: Number,
    questionId: {
      type: Number,
      default: null
    },
    isFinished: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      selectedOption: this.modelValue,
    };
  },

  watch: {
    selectedOption() {
      this.$emit('update:modelValue', this.selectedOption);
    },
    modelValue(newValue) {
      this.selectedOption = newValue;
    },
  },

  methods: {
    getClasses(key) {
      let className = '';
      if (this.isFinished && this.correctAnswers.includes(key) && this.userAnswers?.length) {
        return className = 'success';
      } else if (this.isFinished && this.userAnswers[0]?.includes(key) && this.userAnswers?.length) {
        return className = 'danger';
      }
      return className;
    },
  }
};
</script>

<style scoped>

</style>
