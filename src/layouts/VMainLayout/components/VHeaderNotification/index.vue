<template>
  <v-dropdown class="notification">
    <template #base>
      <button class="notification-toggle active">
        <i class="i-notification"></i>
      </button>
    </template>
    <template #dropdown>
      <div class="notification-menu">
        <ul class="notification-list">
          <li class="notification-item">
            <a href="#" class="notification-link">
              <b>Окончание подписки</b>
              <p>Напоминаем, что необходимо продлить подписку, чтобы пользоваться всеми функциями сайта</p>
              <span class="notification-item-arrow"></span>
            </a>
          </li>
          <li class="notification-item">
            <a href="#" class="notification-link">
              <b>Окончание подписки</b>
              <p>Напоминаем, что необходимо продлить подписку, чтобы пользоваться всеми функциями сайта</p>
              <span class="notification-item-arrow"></span>
            </a>
          </li>
          <li class="notification-item">
            <a href="#" class="notification-link">
              <b>Окончание подписки</b>
              <p>Напоминаем, что необходимо продлить подписку, чтобы пользоваться всеми функциями сайта</p>
              <span class="notification-item-arrow"></span>
            </a>
          </li>
        </ul>
        <v-button size="btn-sm" type="btn-primary">Открыть все</v-button>
      </div>
    </template>
  </v-dropdown>
</template>

<script>
import VDropdown from '@/components/VDropdown'
import VButton from "@/components/VButton";

export default {
  name: "VHeaderNotification",

  components: {
    VButton,
    VDropdown
  }
}
</script>

<style scoped>

</style>
