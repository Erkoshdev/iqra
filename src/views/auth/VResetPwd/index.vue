<template>
  <div class="auth-container reset-pwd-container">
    <div class="auth-container-top">
<!--      <router-link class="auth-container-backlink" :to="{name: 'VLogin'}">← Назад</router-link>-->
      <div class="auth-container-logo">
        <img src="@/assets/img/logo/logo-text-dark.svg" alt="">
      </div>
      <v-dropdown class="auth-container-lang">
        <template #base>
          <button class="auth-lang-toggle">{{ selectedLangName(commonStore.getLang) }}</button>
        </template>
        <template #dropdown="{ handleShow }">
          <ul class="auth-lang-menu">
            <li
                v-for="(item, itemIdx) in languages"
                :key="itemIdx"
            >
              <a @click.prevent="handleSelectLang(item.key, handleShow)">{{ item.label }}</a>
            </li>
          </ul>
        </template>
      </v-dropdown>
    </div>
    <div class="auth-container-content">
      <div class="auth-container-title">Восстановление пароля</div>
      <div class="auth-container-subtitle">Напишите имя пользователя или почту, и мы отправим вам ссылку на восстановления пароля</div>
      <v-input
          v-model="email"
          placeholder="E-mail"
      />
      <v-button type="btn-dark" @click="handleSend">Отправить</v-button>
    </div>
  </div>
</template>

<script>
import VDropdown from '@/components/VDropdown';
import VInput from '@/components/VInput';
import VButton from '@/components/VButton';
import { useCommonStore } from "@/stores/common";
import language from "@/mixins/language";

export default {
  name: "VResetPwd",

  setup() {
    const commonStore = useCommonStore()
    return {
      commonStore
    }
  },

  components: {
    VDropdown,
    VInput,
    VButton
  },

  mixins: [language],

  data() {
    return {
      email: '',
    }
  },

  methods: {
    handleSend() {
      console.log('send new pwd');
      this.$router.push({name: 'VNewPwd'})
    },
  }
}
</script>

<style scoped>

</style>
