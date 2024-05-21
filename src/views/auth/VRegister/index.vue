<template>
  <div class="auth-container register-container">
    <div class="auth-container-top">
<!--      <router-link class="auth-container-backlink" :to="{name: 'VLogin'}">← Назад</router-link>-->
      <div class="auth-container-logo">
        <img src="@/assets/img/logo/logo-text-dark.svg" alt="">
      </div>
<!--      <v-dropdown class="auth-container-lang">-->
<!--        <template #base>-->
<!--          <button class="auth-lang-toggle">{{ selectedLangName(commonStore.getLang) }}</button>-->
<!--        </template>-->
<!--        <template #dropdown="{ handleShow }">-->
<!--          <ul class="auth-lang-menu">-->
<!--            <li-->
<!--                v-for="(item, itemIdx) in languages"-->
<!--                :key="itemIdx"-->
<!--            >-->
<!--              <a @click.prevent="handleSelectLang(item.key, handleShow)">{{ item.label }}</a>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </template>-->
<!--      </v-dropdown>-->
    </div>
    <div class="auth-container-content">
      <div class="auth-container-title" style="margin-bottom: 30px">Создайте аккаунт</div>
<!--      <div class="auth-account">-->
<!--        <button class="auth-account-btn">-->
<!--          <i class="i-google"></i>-->
<!--          <span>через Google</span>-->
<!--        </button>-->
<!--        <button class="auth-account-btn">-->
<!--          <i class="i-facebook"></i>-->
<!--          <span>через Facebook</span>-->
<!--        </button>-->
<!--        <button class="auth-account-btn">-->
<!--          <i class="i-apple"></i>-->
<!--          <span>через Apple ID</span>-->
<!--        </button>-->
<!--      </div>-->
<!--      <span class="or-text">- Или -</span>-->
      <v-input
          v-model="email"
          placeholder="E-mail"
      />
      <v-input
          v-model="password"
          placeholder="Пароль"
          type="password"
      />
      <v-agree-form v-model="isAgree">
        Принимаю условия <a href="https://madtest.ru/terms-of-services" target="_blank">Пользовательского соглашения</a>
      </v-agree-form>
      <v-button type="btn-dark" @click="handleRegister" :disabled="!isAgree">Создать аккаунт</v-button>
      <div class="auth-container-nav">
        <span class="text-gray">Уже есть аккаунт?</span>
        <router-link class="text-dark" :to="{name: 'VLogin'}">Войти</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import VDropdown from '@/components/VDropdown';
import VInput from '@/components/VInput';
import VAgreeForm from '@/components/VAgreeForm';
import VButton from '@/components/VButton';
import { useCommonStore } from "@/stores/common";
import { useAuthStore } from "@/stores/auth";
import language from "@/mixins/language";

export default {
  name: "VRegister",

  setup() {
    const commonStore = useCommonStore()
    const authStore = useAuthStore()
    return {
      commonStore,
      authStore
    }
  },

  components: {
    // VDropdown,
    VInput,
    VAgreeForm,
    VButton
  },

  mixins: [language],

  data() {
    return {
      email: '',
      password: '',
      isAgree: false
    }
  },

  methods: {
    handleRegister() {
      const body = {
        email: this.email,
        password: this.password
      }
      this.API.auth.register(body)
          .then((res) => {
            this.authStore.auth(res?.access_token)
            this.$router.push({name: 'VRegisterFull'})
          })
    },
  }
}
</script>

<style scoped>

</style>
