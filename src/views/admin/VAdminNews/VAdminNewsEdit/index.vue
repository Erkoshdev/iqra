<template>
  <div class="row">
    <div class="col col-2">
<!--      <a href="#" class="back-link" @click.prevent="$router.go(-1)">← Назад</a>-->
    </div>
    <div class="col col-8">
      <b class="title-xs">{{ isEdit? 'Редактировать объявление': 'Новое объявление' }}</b>
      <div class="redact-container">
        <div class="redact-container-title">
          <input v-model="name" type="text" placeholder="Введите заголовок">
        </div>
        <div class="redact-container-row">
          <div class="redact-container-left">
            <v-textarea v-model="body"  placeholder="Описание объявления или новости" :rows="5"/>
            <div class="upload-file-container">
              <input type="file">
              <i class="i-clip"></i>
              Прикрепить файл
            </div>
          </div>
          <div class="redact-container-right">
            <div class="upload-img">
              <div class="upload-img-media">
                <input type="file">
                <div class="upload-container-img-caption">
                  <span>Картинка</span>
                  <span>120х120</span>
                </div>
                <img src="" alt="">
              </div>
              <div class="upload-img-tools">
                <button class="upload-img-btn">Изменить фото</button>
                <button class="upload-img-btn danger">Удалить фото</button>
              </div>
            </div>
          </div>
        </div>
        <div class="redact-container-row">
          <div class="redact-container-left">
<!--            <div class="multiselect-container">-->
<!--              <b class="title-xs">Отправить уведомление</b>-->
<!--              <div class="multiselect-selected-list">-->
<!--                <a href="" class="multiselect-selected-item">Все пользователи</a>-->
<!--                <a href="" class="multiselect-selected-item">Курс «Английский язык, Beginner»</a>-->
<!--                <a href="" class="multiselect-selected-item">Курс «Английский язык, Elementary»</a>-->
<!--              </div>-->
<!--            </div>-->
          </div>
          <div class="redact-container-right">
            <b class="title-xs">Дата отправки</b>
            <v-input placeholder="Выберите дату">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.04222 21.9693H18.9552C20.4138 21.9693 21.599 20.7841 21.599 19.3256V6.15099C21.599 4.69249 20.4138 3.50721 18.9552 3.50721H17.9066V2.76874C17.9066 2.36257 17.5743 2.03027 17.1681 2.03027C16.7619 2.03027 16.4296 2.36257 16.4296 2.76874V3.50721H7.56785V2.76874C7.56785 2.36257 7.23549 2.03027 6.82932 2.03027C6.42315 2.03027 6.09085 2.36257 6.09085 2.76874V3.50721H5.04222C3.58371 3.50721 2.39844 4.69249 2.39844 6.15099V19.3256C2.39844 20.7841 3.58371 21.9693 5.04222 21.9693ZM3.87544 6.15099C3.87544 5.50853 4.39976 4.98422 5.04222 4.98422H6.09085V5.72269C6.09085 6.12886 6.42315 6.46116 6.82932 6.46116C7.23549 6.46116 7.56779 6.12886 7.56779 5.72269V4.98422H16.4296V5.72269C16.4296 6.12886 16.7619 6.46116 17.1681 6.46116C17.5743 6.46116 17.9066 6.12886 17.9066 5.72269V4.98422H18.9552C19.5976 4.98422 20.122 5.50853 20.122 6.15099V8.30739H3.87544V6.15099ZM3.87544 9.78433H20.1221V19.3256C20.1221 19.968 19.5978 20.4923 18.9553 20.4923H5.04222C4.39976 20.4923 3.87544 19.968 3.87544 19.3256V9.78433Z" fill="black"/>
              </svg>
            </v-input>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-2">
      <div class="sidebar-btn-group">
        <v-button v-if="!isEdit" @click="handleCreate" type="btn-success">Опубликовать</v-button>
        <v-button v-if="isEdit" @click="handleUpdate" type="btn-success">Сохранить</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton";
import VTextarea from "@/components/VTextarea";
import VInput from "@/components/VInput";

export default {
  name: "VAdminNewsEdit",

  components: {
    VInput,
    VTextarea,
    VButton,
  },

  props: {

  },

  data () {
    return {
      id: '',
      name: '',
      body: '',
      image: null,
      created_at: null,
      editing: false,
      newsId: this.$route.params.id
    }
  },
  computed: {
    isEdit() {
      return this.$route.params.id
    },
  },

  mounted() {
    if(this.isEdit)
    this.fetchNews()
  },
  methods: {
    fetchNews() {
      this.API.news.getNewsDetails(this.newsId)
          .then((res) => {
            this.name = res.data.name;
            this.body = res.data.body
          })
    },
    handleCreate() {
      const body = {
        name: {
          "kk" : "",
          "ru" : this.name,
          "en" : ""
        },
        body: {
          "kk" : "",
          "ru" : this.body,
          "en" : ""
        },
        image: this.image,
        created_at: this.created_at
      }
      this.API.news.create(body)
          .then((res) => {
            if(!res.error) {
              this.$router.push({name: 'VAdminNews'})
            }
          })
    },
    handleUpdate() {
      const body = {
        name: {
          "kk" : "",
          "ru" : this.name,
          "en" : ""
        },
        body: {
          "kk" : "",
          "ru" : this.body,
          "en" : ""
        },
        image: this.image,
        created_at: this.created_at
      }
      this.API.news.edit(this.newsId,body)
          .then((res) => {
            if(!res.error) {
              this.$router.push({name: 'VAdminNews'})
            }
          })
    }
  }
}
</script>

<style scoped>

</style>
