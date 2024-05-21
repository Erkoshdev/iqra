<template>
  <div class="checkbox-group">
    <label
        v-for="(option, index) in options"
        :key="index"
        class="checkbox-item"
    >
      <span class="checkbox-item-text">{{ option.name }}</span>
      <input
          type="checkbox"
          :name="name"
          :value="option.id"
          v-model="selectedOption"
          @click="$emit('onInput', questionId, option.id, 4, $event.target.checked)"
      >
      <span class="checkmark" :class="getClasses(option.id)"/>
    </label>
  </div>
</template>

<script>
export default {
  name: 'VCheckboxGroup',

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
    }
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
}
</script>

<style scoped>

</style>
