<template>
  <div
    class="v-modal"
    :class="classes"
    :style="`z-index: ${this.zIndex}`"
    data-v-gl-modal
    @mousedown="handleClose"
    @mouseup="handleClose"
  >
    <div
      class="v-modal__container"
      :style="`max-width: ${this.width}px`"
    >
      <div class="v-modal__body">
        <slot
          :params="params"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";


export default {
  name: 'VGlModal',

  props: {
    title: String,
    locked: Boolean,
    name: String,
    classes: String,
    zIndex: Number,
    width: Number,
  },

  data() {
    return {
      prevTargetDataset: null,
      loading: false,
      titleHead: this.title,
      params: {},
    };
  },

  mounted() {
    const internalInstance = getCurrentInstance()
    const eventBus = internalInstance.appContext.config.globalProperties.eventBus
    eventBus.emit(`v-modal--${this.name}-mounted`);
    eventBus.on(`v-modal--${this.name}-update`, this.handleUpdate);
  },

  beforeUnmount() {
    const internalInstance = getCurrentInstance()
    const eventBus = internalInstance.appContext.config.globalProperties.eventBus
    eventBus.emit(`v-modal--${this.name}-destroy`);
    eventBus.off(`v-modal--${this.name}-update`);
  },

  methods: {
    glParentModal() {
      return true;
    },

    glClose() {
      if (!this.loading) {
        this.vGlModal.hide(this.name);
      }
    },

    glChangeTitle(title) {
      this.titleHead = title;
    },

    glLoading(bool) {
      this.loading = bool;
    },

    handleUpdate(obj) {
      this.params = obj;
    },

    handleClose(e) {
      if (e.type === 'mousedown') {
        this.prevTargetDataset = typeof e.target.dataset.vGlModal !== 'undefined' && !this.locked;
      } else if (e.type === 'mouseup') {
        if (typeof e.target.dataset.vGlModal !== 'undefined'
            && !this.locked
            && this.prevTargetDataset) {
          this.glClose();
        }
      }
    },
  },
};
</script>
