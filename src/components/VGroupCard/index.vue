<template>
  <div class="group-card">
    <div class="group-card-name">{{ name }}</div>
    <div class="lesson-card-tools">
      <a class="lesson-card-info" @click="handleEdit">Открыть</a>
    </div>
  </div>
</template>

<script>

export default {
  name: "VGroupCard",
  props: {
    name: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: null
    },
    isSelectCard: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleEdit(id, handleShow = () => {}) {
      handleShow()
      this.$emit('edit', id)
    },
  }
}
</script>

<style scoped>

</style>
