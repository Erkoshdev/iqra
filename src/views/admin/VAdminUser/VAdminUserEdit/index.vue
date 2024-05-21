<template>
  <div class="row">
    <div class="col col-2">
<!--      <a href="#" class="back-link" @click.prevent="$router.go(-1)">← Назад</a>-->
    </div>
    <div class="col col-8">
      <div class="settings-item">
        <b class="title-xs">Основная информация</b>
        <div class="settings-container three-col">
          <div class="settings-container-col profile-img-wrapper">
            <small>Фото профиля</small>
            <div class="profile-img-container">
              <div class="profile-img">
                <img src="@/assets/img/icon/user-default.svg" alt="">
              </div>
<!--              <div class="profile-img-tools">-->
<!--                <a href="#" class="profile-img-change">Изменить фото</a>-->
<!--                <a href="#" class="profile-img-delete">Удалить фото</a>-->
<!--              </div>-->
            </div>
          </div>
          <div class="settings-container-col mt-2">
            <v-input
                label="Имя"
                placeholder="Имя"
                v-model="form.firstName"
            />
            <v-input
                label="Номер телефона"
                placeholder="Номер телефона"
                v-model="form.phone"
                v-mask="'+7(###)###-##-##'"
            />
          </div>
          <div class="settings-container-col mt-2">
            <v-input
                label="Фамилия"
                placeholder="Фамилия"
                v-model="form.lastName"
            />
            <v-input
                label="E-mail"
                placeholder="E-mail"
                v-model="form.email"
            />
          </div>
          <div class="settings-container-col mt-2"></div>
          <div class="settings-container-col mt-2">
            <v-date-picker
                label="Дата рождения"
                v-model="form.birthdate"
            />
            <v-select
                label="Город"
                placeholder="Город"
                :options="regionList"
                label-name="name"
                :reduce="item => item.id"
                v-model="form.regionId"
            />
          </div>
          <div class="settings-container-col mt-2">
            <v-select
                label="Пол"
                placeholder="Пол"
                :options="genderList"
                label-name="name"
                :reduce="item => item.id"
                v-model="form.gender"
            />
            <v-select
                label="Роль"
                placeholder="Роль"
                :options="roleList"
                label-name="title"
                :reduce="item => item.id"
                v-model="form.roleId"
            />
          </div>
          <div class="settings-container-col  mt-2 align-bot">
            <v-button class="btn btn-outline-danger" @click="$router.push({name: 'VAdminUsers'})">Отменить</v-button>
          </div>
          <div class="settings-container-col mt-2">
            <v-select
                label="Образовательное учреждение"
                placeholder="Образовательное учреждение"
                v-model="form.education"
            />
            <v-input
                label="Пароль"
                type="password"
                placeholder="Пароль"
                v-model="form.password"
            />
          </div>
          <div class="settings-container-col mt-2 align-bot">
            <v-input
                label="Подтверждение пароля"
                placeholder="Подтверждение пароля"
                type="password"
                v-model="form.passwordConfirm"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col col-2">
      <div class="sidebar-btn-group">
        <v-button class="btn btn-success mt-2" v-if="isEdit" @click="handleEdit">Сохранить</v-button>
        <v-button class="btn btn-success mt-2" v-else @click="handleCreate">Сохранить</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VInput from "@/components/VInput";
import VButton from "@/components/VButton";
import VSelect from "@/components/VSelect";
import VDatePicker from "@/components/VDatePicker";

export default {
  name: "VAdminUserEdit",

  components: {
    VDatePicker,
    VInput,
    VButton,
    VSelect,
  },

  mounted() {
    if(this.isEdit) {
      this.fetchUser()
    }
    this.fetchDictionary()
  },

  data() {
    return {
      roleList: [],
      regionList: [],
      genderList: [
        {id: 1, name: 'мужчина'},
        {id: 0, name: 'женщина'}
      ],
      userId: this.$route.params.id,
      form: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        birthdate: '',
        gender: '',
        regionId: '',
        roleId: '',
        education: '',
        password: '',
        passwordConfirm: ''
      }
    }
  },

  computed: {
    isEdit() {
      return this.$route.params.id
    }
  },

  methods: {
    fetchUser() {
      this.API.user.getUserById(this.userId)
        .then(res => {
          this.form.firstName = res.data.name;
          this.form.lastName = res.data.surname;
          this.form.phone = res.data.phone;
          this.form.email = res.data.email;
          this.form.birthdate = res.data.birth_date;
          this.form.gender = res.data.gender;
          this.form.regionId = res.data.region_id;
          this.form.roleId = res.data.role_id;
        })
    },
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
    handleCreate() {
      const body = {
        name: this.form.firstName,
        surname: this.form.lastName,
        email: this.form.email,
        phone: this.form.phone.replace(/\D/g, ''),
        gender: this.form.gender,
        birth_date: this.form.birthdate,
        role_id: this.form.roleId,
        region_id: this.form.regionId,
        password: this.form.password
      }
      this.API.user.create(body)
        .then(() => {
          this.$router.push({name: 'VAdminUsers'})
        })
    },
    handleEdit() {
      const body = {
        name: this.form.firstName,
        surname: this.form.lastName,
        email: this.form.email,
        phone: this.form.phone.replace(/\D/g, ''),
        gender: this.form.gender,
        birth_date: this.form.birthdate,
        role_id: this.form.roleId,
        region_id: this.form.regionId,
      }
      this.API.user.edit(this.userId, body)
          .then(() => {
            this.$router.push({name: 'VAdminUsers'})
          })
    }
  }
}
</script>

<style scoped>

</style>
