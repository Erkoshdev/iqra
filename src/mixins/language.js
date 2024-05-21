export default {
  data() {
    return {
      languages: [
        { label: 'Қазақша', key: 'kz' },
        { label: 'Русский', key: 'ru' },
        { label: 'English', key: 'en' }
      ]
    }
  },

  methods: {
    handleSelectLang(locale, callback) {
      callback();
      this.commonStore.setLocale(locale)
    },
    selectedLangName(locale) {
      return this.languages.find(item => item.key === locale).label
    },
  }
}
