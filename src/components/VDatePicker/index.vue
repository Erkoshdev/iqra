<template>
  <div class="form-container">
    <small v-if="label.length">{{ label }}</small>
    <date-picker
      ref="datePicker"
      :value="modelValue"
      :placeholder="placeholder"
      :format="format"
      :type="type"
      :clearable="clearable"
      :readonly="readonly"
      :disabled="disabled"
      lang="ru"
      value-type="format"
      @update:value="onInput"
    />
  </div>
</template>

<script>
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import 'vue-datepicker-next/locale/ru.es'
// import 'vue-datepicker-next/locale/kk.es'

import { defineComponent } from "vue";

export default defineComponent({
  name: "VDatePicker",

  components: {
    DatePicker
  },

  props: {
    modelValue: {
      type: [String, Date],
      default: ''
    },
    format: {
      type: String,
      default: 'DD.MM.YYYY'
    },
    placeholder: {
      type: String,
      default: 'дд.мм.гггг'
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'date'
    },
    isError: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  // computed: {
  //   lang() {
  //     return this.getLang
  //   }
  // },

  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event)
      this.$emit('change', event)
    },
  }
})

</script>

<style lang="scss">
.mx-datepicker {
  width: 100% !important;
}

.mx-input {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  border: 2px solid #BFBFBF;
  background: #FFF;
  padding: 10px 15px;
  min-height: 50px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
}

.mx-input::placeholder {
  color: #999999;
}

.mx-input:hover {
  border-color: #BFBFBF;
}

.mx-input:focus {
  border-color: #3EC965;
}

.mx-input:disabled {
  background: #fff;
  color: #000;
}

</style>
