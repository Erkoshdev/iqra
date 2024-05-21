import { h, getCurrentInstance, resolveComponent } from 'vue';

export default {
  name: 'VGlModalWrapper',

  data() {
    return {
      items: [],
      zIndex: 999,
    };
  },

  mounted() {
    const internalInstance = getCurrentInstance()
    const eventBus = internalInstance.appContext.config.globalProperties.eventBus
    eventBus.on('v-modal--show', this.addModal);
    eventBus.on('v-modal--hide', this.removeModal);
    eventBus.on('v-modal--hide-all', this.removeModalAll);
  },

  beforeUnmount() {
    const internalInstance = getCurrentInstance()
    const eventBus = internalInstance.appContext.config.globalProperties.eventBus
    eventBus.off('v-modal--show', this.addModal);
    eventBus.off('v-modal--hide', this.removeModal);
    eventBus.off('v-modal--hide-all', this.removeModalAll);
  },

  watch: {
    items(val) {
      if (val.length > 0) {
        window.document.body.classList.add('v-modal__lock-scroll');
      } else {
        window.document.body.classList.remove('v-modal__lock-scroll');
      }
    },
  },

  methods: {
    addModal(obj = {
      modalName: '',
      modalLocked: false,
      modalTitle: '',
      modalClasses: '',
      modalCustom: false,
      modalOverlayDisable: false,
      modalWidth: 0,
      component: '',
      componentProps: {},
    }) {
      this.items.push(obj);
    },

    removeModal(modalName) {
      this.items = this.items.filter((item) => item.modalName !== modalName);
    },

    removeModalAll() {
      this.items = [];
    },

    elModalWindow(obj = {
      modalName: '',
      modalLocked: false,
      modalTitle: '',
      modalClasses: '',
      modalWidth: 0,
      component: '',
      componentProps: {},
    }, idx) {
      const VModal = resolveComponent('v-modal')
      return h(VModal, {
          key: obj.modalName,
          name: obj.modalName,
          locked: obj.modalLocked,
          title: obj.modalTitle,
          classes: obj.modalClasses,
          width: obj.modalWidth,
          zIndex: this.zIndex + idx + 1,
        },
        {
          default: ({ params }) => this.elComponent(obj, params),
        }
      );
    },

    elCustomModal(obj = {
      modalName: '',
      modalLocked: false,
      modalTitle: '',
      modalClasses: '',
      component: '',
      componentProps: {},
    }, idx) {
      return h(obj.component, {
        key: obj.modalName,
        name: obj.modalName,
        locked: obj.modalLocked,
        title: obj.modalTitle,
        classes: obj.modalClasses,
        zIndex: this.zIndex + idx + 1,
        width: obj.modalWidth,
        ...obj.componentProps,
      });
    },

    elComponent(obj = {
      component: '',
      componentProps: {},
    }, params) {
      const modal = resolveComponent(obj.component)
      return h(modal, {
        modalName: obj.modalName,
        ...obj.componentProps,
        ...params,
      });
    },
  },

  render() {
    return h('div', {
      class: 'v-modal-wrapper',
    }, [
      (this.items.length > 0 && !this.items[this.items.length - 1].modalOverlayDisable)
      && h('div', {
        class: 'v-modal__overlay',
        style: `z-index: ${this.zIndex + this.items.length}`,
      }),
      h('transition-group', {
        name: 'transition--fade',
        tag: 'div',
      },
        this.items.map((item, itemIdx) => {
        if (item.modalCustom) {
          return this.elCustomModal(item, itemIdx);
        }
        return this.elModalWindow(item, itemIdx);
      })
      ),
    ]);
  }
};
