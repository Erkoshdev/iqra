import { defineStore } from "pinia";

export const useCommonStore = defineStore('common', {
  state: () => ({
    lang: window.localStorage.getItem('language') || 'ru',
    validation: {},
  }),

  getters: {
    getLang: (state) => state.lang,
    hasValidationField() {
      return (field) => Array.isArray(this.validation[field]) && this.validation[field].length > 0;
    },
  },

  actions: {
    setLocale(payload) {
      this.lang = payload;
      window.localStorage.setItem('language', payload)
      window.location.reload()
    },
    addValidationError(field, value) {
      if (!Array.isArray(this.validation[field])) {
        this.validation[field] = [];
      }

      this.validation = {
        ...this.validation,
        [field]: [...value],
      };
    },
    getValidationMessage(field) {
      return (this.hasValidationField(field) && this.validation[field][0]) || '';
    },
    cleanValidationField(field) {
      if (this.validation[field]) {
        const obj = {};
        Object.keys(this.validation).forEach((item) => {
          if (field !== item) {
            obj[item] = this.validation[item];
          }
        });
        this.validation = obj;
      }
    },
  }
})
