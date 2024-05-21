<template>
  <div class="modal-form task-success-modal">
    <svg @click="handleClose" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <path d="M20.3307 1.66663L1.66406 20.3333" stroke="black" stroke-width="3" stroke-linecap="round"/>
        <path d="M1.66927 1.66663L20.3359 20.3333" stroke="black" stroke-width="3" stroke-linecap="round"/>
      </g>
    </svg>
    <img src="@/assets/img/main/barekeldi.png" alt="">
    <h2 class="modal-title">Бәрекелді!</h2>
    <p class="modal-subtitle w-75">Вы сегодня отлично поработали! На этом урок закончен.</p>
    <div class="modal-actions task-success-modal-tools">
      <v-button size="btn-md" @click="handleClose" type="btn-success">Посмотреть ошибки</v-button>
      <router-link :to="{name: 'VCourse', params: {courseId: $route.query.courseId}}" @click="handleClose" class="btn btn-md btn-outline-basic">К курсу</router-link >
    </div>
  </div>
</template>

<script>

import VButton from "@/components/VButton";

export default {
  name: "VFInishTaskModal.vue",
  components: {
    VButton
  },
  methods: {
    handleFinish() {
      this.finish()
    },
    handleClose() {
      this.vGlModal.hide('v-finish-task-modal');
    }
  }
}
</script>

<style scoped>

</style>
