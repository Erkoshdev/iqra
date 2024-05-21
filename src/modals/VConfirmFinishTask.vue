<template>
  <div class="modal-form confirm-task-finish">
    <svg @click="handleClose" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <path d="M20.3307 1.66663L1.66406 20.3333" stroke="black" stroke-width="3" stroke-linecap="round"/>
        <path d="M1.66927 1.66663L20.3359 20.3333" stroke="black" stroke-width="3" stroke-linecap="round"/>
      </g>
    </svg>
    <img src="@/assets/img/main/promt.png" alt="">
    <h2 class="modal-title">Завершаем?</h2>
    <p class="modal-subtitle w-75">Изменить ответы после завершения не получится</p>
    <div class="modal-actions confirm-task-finish-tools">
      <v-button @click="handleFinish" size="btn-md" type="btn-success">Да, завершить</v-button>
      <v-button @click="handleClose" size="btn-md" type="btn-outline-basic">Нет, вернуться</v-button>
    </div>
  </div>
</template>

<script>

import VButton from "@/components/VButton";

export default {
  name: "VConfirmFinishTask.vue",

  components: {
    VButton
  },

  props: {
    finish: {
      type: Function,
      default: () => {}
    }
  },

  methods: {
    handleFinish() {
      this.finish()
    },
    handleClose() {
      this.vGlModal.hide('v-confirm-finish-task-modal');
    }
  }
}
</script>

<style scoped>

</style>

