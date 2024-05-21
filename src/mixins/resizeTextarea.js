export default {
  methods: {
    resize() {
      let textareaList = Array.prototype.slice.call(document.getElementsByTagName('textarea'))
      textareaList.forEach(item => {
        item.dispatchEvent(new Event("input"))
      })
    },
  }
}
