<template>
  <div class="application-modal-form">
    <p class="application-modal-title">Оставьте заявку</p>
    <p class="application-modal-subtitle">Наш менеджер свяжется с вами и поможет осуществить оплату</p>
    <v-input
        placeholder="Ваше имя"
        v-model="firstName"
    />
    <v-input
        placeholder="Номер телефона"
        v-mask="'+7(###)###-##-##'"
        v-model="phone"
    />
    <v-button @click="handleApplication" type="btn-dark-w-100">Отправить</v-button>
  </div>
</template>

<script>
import VButton from '@/components/VButton'
import VInput from "@/components/VInput";

export default {
  name: "VApplicationModal",

  components: {
    VButton,
    VInput
  },

  props: {
    courseId: Number,
  },

  data() {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      roleId: '',
    }
  },

  mounted() {
    this.fetchUserData()
  },

  methods: {
    fetchUserData() {
      this.API.auth.profile()
          .then(res => {
            this.firstName = res.name;
            this.lastName = res.surname;
            this.phone = res.phone;
            this.roleId = res.role_id
          })
    },
    handleApplication() {
      const body = {
        name: this.firstName,
        surname: this.lastName,
        phone: this.phone.replace(/\D/g, ''),
        role_id: this.roleId
      }
      this.API.auth.registerFull(body).then(res => {
        if(res){
          const body = {
            course_id: this.courseId,
          }
          this.API.applications.create(body)
            .then(() => {
              this.vGlModal.hide('v-application-modal')
            })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
