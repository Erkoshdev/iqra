<template>
  <div class="auth-container new-pwd-container">
    <div class="auth-container-top">
<!--      <router-link class="auth-container-backlink" :to="{name: 'VResetPwd'}">← Назад</router-link>-->
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
      <div class="auth-container-title">Придумайте новый пароль</div>
      <v-input
          v-model="password"
          type="password"
          placeholder="Новый пароль"
      />
      <v-input
          v-model="passwordConfirm"
          type="password"
          placeholder="Повторите пароль"
      />
      <v-button type="btn-dark" @click="handleSave">Сохранить</v-button>
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
  name: "VNewPwd",

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
      password: '',
      passwordConfirm: ''
    }
  },

  methods: {
    handleSave() {
      console.log('pwd change')
    },
  }
}
</script>

<style scoped>

</style>
