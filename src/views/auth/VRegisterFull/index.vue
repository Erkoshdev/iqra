<template>
  <div class="auth-container register-full-container">
    <div class="auth-container-top">
      <div class="auth-container-logo">
        <img src="@/assets/img/logo/logo-text-dark.svg" alt="">
      </div>
    </div>
    <div class="auth-container-content">
      <div class="auth-container-title">Добро пожаловать в iqra!</div>
      <div class="auth-container-subtitle">Еще пару вопросов, чтобы завершить создание аккаунта</div>
      <div class="form-row two-form">
        <v-input
            v-model="firstName"
            placeholder="Имя"
        />
        <v-input
            v-model="lastName"
            placeholder="Фамилия"
        />
      </div>
      <v-input
          v-model="phone"
          placeholder="Номер телефона"
          v-mask="'+7(###)###-##-##'"
      />
      <v-input
          v-model="age"
          placeholder="*Возраст"
          type="number"
      />
      <v-select
          v-model="gender"
          :options="genderList"
          placeholder="Ваш пол"
          label-name="title"
          :reduce="item => item.id"
      />
<!--      <v-select-->
<!--          v-model="role"-->
<!--          :options="roleList"-->
<!--          placeholder="Кто вы"-->
<!--          label-name="title"-->
<!--          :reduce="(item) => item.id"-->
<!--      />-->
<!--      <v-select-->
<!--          :options="regionList"-->
<!--          placeholder="Город"-->
<!--          label-name="name"-->
<!--          :reduce="item => item"-->
<!--          v-model="region"-->
<!--      />-->
      <v-button type="btn-dark" @click="handleRegister">Далее</v-button>
<!--      <v-button type="btn-outline-dark" @click="handleClose">Пропустить</v-button>-->
      <div class="privacy-policy-text">
        Компания IQRA TOO обработает ваши данные в целях предоставления вам Сервиса, а также в собственных маркетинговых целях. Подробную информацию можно найти в
        <a href="">Политике конфиденциальности</a>
      </div>
    </div>
  </div>
</template>

<script>
import VInput from '@/components/VInput';
import VButton from '@/components/VButton';
import VSelect from '@/components/VSelect'
import {useAuthStore} from "@/stores/auth";

export default {
  name: "VRegisterFull",

  components: {
    VInput,
    VButton,
    VSelect
  },

  setup() {
    const authStore = useAuthStore()
    return {
      authStore
    }
  },

  data() {
    return {
      genderList: [
        {id: 1, title: 'мужчина'},
        {id: 0, title: 'женщина'}
      ],
      roleList: [],
      regionList: [],
      firstName: '',
      lastName: '',
      phone: '',
      age: null,
      gender: null,
      role: null,
      region: null,
    }
  },

  mounted() {
    this.fetchDictionary()
  },

  methods: {
    fetchDictionary() {
      this.API.role.getList()
        .then((res) => {
          this.roleList = res?.data.items
        })
      this.API.regions.getList()
        .then((res) => {
          this.regionList = res?.data.items
        })
    },
    handleRegister() {
      const body = {
        name: this.firstName,
        surname: this.lastName,
        phone: this.phone.replace(/\D/g, ''),
        gender: this.gender?.id,
        //пока временно у всех регистрирующихся роль - учитель
        role_id: 6,
        region_id: this.region?.id
      }
      this.API.auth.registerFull(body)
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
    handleClose() {
      this.$router.push({name: 'VCabinet'})
    }
  }
}
</script>

<style scoped>

</style>
