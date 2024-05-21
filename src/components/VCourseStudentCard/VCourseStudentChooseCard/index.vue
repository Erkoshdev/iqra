<template>
  <div class="user-card">
    <div class="user-info">
      <div class="user-img">
        <img v-if="user.image" :src="user.image" alt="">
        <img v-else src="@/assets/img/icon/user-default.svg" alt="">
      </div>
      <div class="user-name">
        <div class="user-row-name">Имя пользователя</div>
        <div class="user-row-value">{{ user.name }}</div>
      </div>
    </div>
    <div class="user-activity">
      <v-button type="btn-success">Добавлен</v-button>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton";

export default {
  name: "VCourseStudentChooseCard",
  components: {
    VButton
  },
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
}
</script>

<style scoped>

</style>
