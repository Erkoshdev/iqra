<template>
  <div class="form-container">
    <small v-if="label && label.length">{{ label }}</small>
    <div class="form-control">
      <v-select
          :components="{OpenIndicator}"
          :options="options"
          v-model="selected"
          :label="labelName"
          :placeholder="placeholder"
          :ref="name"
          :clearable="clearable"
          :reduce="reduce"
          :multiple="multiple"
          :searchable="searchable"
          :disabled="disabled"
      >
        <template v-slot:no-options>
          <div class="vs-select__no-options">
            Нет данных
          </div>
        </template>
      </v-select>
    </div>
  </div>
</template>

<script>
import {h} from 'vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  name: "VCustomSelect",

  components: {
    vSelect
  },

  data() {
    return {
      selected: this.modelValue,
      OpenIndicator: {
        render: () => h('i', {class: {'i-select-icon': true}}),
      },
    }
  },

  props: {
    label: {
      type: String,
    },
    labelName: {
      type: String,
      default: 'name'
    },
    placeholder: {
      type: String,
      default: '',
    },
    name: {
      type: String,
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      default: null,
    },
    clearable: {
      type: Boolean,
      default: true
    },
    reduce: {
      type: Function,
    },
    multiple: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },

  emits: ['update:modelValue', 'input'],

  watch: {
    modelValue: {
      immediate: true,
      handler(val) {
        this.selected = val
      }
    },
    selected() {
      this.$emit('update:modelValue', this.selected);
    },
  },
}
</script>

<style lang="scss">
.v-select {
  width: 100%;
}

.vs__dropdown-toggle {
  padding: 0;
  border: none;
  align-items: center;
  width: 100%;
}

.vs__actions {
  padding: 0;
  height: fit-content;
  margin-left: auto;
}

.vs__selected-options {
  padding: 0;
  flex-wrap: nowrap;
  max-width: calc(100% - 30px);
}

.vs__search, .vs__search:focus {
  padding: 0;
  margin: 0;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  border: none;
}

.form-control input.vs__search {
  width: 0;
}

.vs__selected {
  padding: 0;
  margin: 0;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  max-width: 100%;
  border: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
}

.vs--single.vs--open .vs__selected {
  position: static;
}

.vs__dropdown-menu {
  top: calc(100% + 15px);
  left: -15px;
  width: calc(100% + 30px);
}

.vs__dropdown-option {
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
}

.i-select-icon {
  background: url("../../assets/img/icon/chevron-down.svg");
  width: 12px;
  height: 6px;
}

.vs--disabled .vs__dropdown-toggle {
  background: transparent;
}

</style>
