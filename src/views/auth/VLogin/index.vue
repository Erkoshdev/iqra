<template>
  <div class="auth-container login-container">
    <div class="auth-container-top">
<!--      <router-link class="auth-container-backlink" :to="{name: 'VLandingPage'}">← Назад</router-link>-->
      <div class="auth-container-logo">
        <img src="@/assets/img/logo/logo-text-dark.svg" alt="">
      </div>
<!--      <v-dropdown class="auth-container-lang">-->
<!--        <template #base>-->
<!--          <button class="auth-lang-toggle">{{ selectedLangName(commonStore.getLang) }}</button>-->
<!--        </template>-->
<!--        <template #dropdown="{ handleShow }">-->
<!--          <ul class="auth-lang-menu">-->
<!--            <li v-for="(item, itemIdx) in languages" :key="itemIdx">-->
<!--              <a @click.prevent="handleSelectLang(item.key, handleShow)">{{ item.label }}</a>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </template>-->
<!--      </v-dropdown>-->
    </div>
    <div class="auth-container-content">
      <div class="auth-container-title" style="margin-bottom: 30px">Войдите в аккаунт</div>
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
          @enter="handleLogin"
          name="email"
          required autocomplete="email"
      />
      <v-input
          v-model="password"
          placeholder="Пароль"
          type="password"
          @enter="handleLogin"
          name="password"
          required autocomplete="password"

      />
      <v-button type="btn-dark" @click="handleLogin">Войти</v-button>
      <div class="auth-container-nav">
<!--        <router-link class="text-gray" :to="{name: 'VResetPwd'}">Забыли пароль?</router-link>-->
<!--        <router-link class="text-gray" :to="{name: 'VRegister'}" style="margin: 0 auto">Зарегистрироваться</router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
// import VDropdown from '@/components/VDropdown';
import VInput from '@/components/VInput';
import VButton from '@/components/VButton';
import { useCommonStore } from "@/stores/common";
import { useAuthStore } from "@/stores/auth";
import language from "@/mixins/language";

export default {
  name: "VLogin",

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
    VButton
  },

  mixins: [language],

  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    handleLogin() {
      const body = {
        email: this.email,
        password: this.password
      }
      this.API.auth.login(body)
          .then((res) => {
            this.authStore.auth(res?.access_token);
          })
          .then(() => {
            this.API.auth.profile()
              .then(res => {
                const role = res?.role_id;
                this.authStore.setUserRole(role);
                this.authStore.setUser(res)
              })
              .then(() => {
                const role = this.authStore.getRole
                if(role === 1 || role === 2 || role === 3) {
                  this.$router.push({name: 'VAdmin'})
                } else if(role === 4 || role === 5 || role === 6) {
                  this.$router.push({name: 'VCabinet'})
                }
              })
          })
    },
  }
}
</script>

<style scoped>

</style>
