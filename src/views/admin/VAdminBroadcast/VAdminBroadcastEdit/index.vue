<template>
  <div class="row">
    <div class="col col-2"></div>
    <div class="col col-8">
      <b class="title-xs" v-if="isEdit">Редактировать эфир</b>
      <b class="title-xs" v-else>Создать эфир</b>
      <div class="broadcast-detail">
        <div class="broadcast-detail-form">
          <b>Выберите курс</b>
          <v-custom-select
              :disabled="isStarted || isFinished"
              placeholder="Все курсы"
              v-model="courseId"
              label-name="name"
              :options="courseList"
              :reduce="item => item.id"
          />
        </div>
        <div class="broadcast-detail-form">
          <b>Тема эфира</b>
          <v-input
              :disabled="isStarted || isFinished"
              placeholder="Например, неправильные глаголы"
              v-model="topic"
          />
        </div>
        <div class="broadcast-detail-form">
          <b>Дата начала</b>
          <v-date-picker
              :disabled="isStarted || isFinished"
              type="datetime"
              format="DD.MM.YYYY HH:mm"
              placeholder="Выберите дату"
              v-model="date"
          />
        </div>
      </div>
      <div class="broadcast-started-info" v-if="isStarted">* Нельзя редактировать эфир, если он уже начался</div>
      <div class="broadcast-started-info" v-if="isFinished">Эфир уже закончился</div>
    </div>
    <div class="col col-2">
      <div class="sidebar-btn-group">
        <template v-if="isStarted">
          <a class="btn btn-md btn-primary" :href="link" target="_blank">Перейти</a>
          <v-button type="btn-success" @click="handleFinish">Завершить</v-button>
        </template>
        <template v-else-if="isFinished">
          <router-link class="btn btn-md btn-basic" :to="{name: 'VAdminBroadcast'}">Назад</router-link>
        </template>
        <template v-else>
          <v-button type="btn-success" v-if="!isEdit" @click="handleCreate">Сохранить</v-button>
          <v-button type="btn-outline-basic" v-if="!isEdit" @click="$router.push({name: 'VAdminBroadcast'})">Отмена</v-button>
          <v-button type="btn-success" v-if="isEdit" @click="handleEdit">Сохранить</v-button>
          <router-link class="btn btn-md btn-primary" v-if="isEdit" :to="{name: 'VAdminBroadcastMemberList', params: {id: broadcastId}}">Участники</router-link>
          <v-button type="btn-danger" v-if="isEdit" @click="handleDelete">Удалить</v-button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton"
import VDatePicker from "@/components/VDatePicker"
import VInput from "@/components/VInput";
import VCustomSelect from "@/components/VSelect/index.vue";

export default {
  name: "VAdminBroadcastEdit",

  components: {
    VCustomSelect,
    VButton,
    VDatePicker,
    VInput
  },

  mounted() {
    this.fetchCourseList()
    if(this.isEdit) {
      this.fetchBroadcast()
    }
  },

  data() {
    return {
      courseList: [],
      topic: '',
      date: '',
      courseId: '',
      broadcastId: this.$route.params.id,
      isStarted: false,
      isFinished: false,
      link: ''
    }
  },

  computed: {
    isEdit() {
      return !!this.$route.params.id
    },
  },

  methods: {
    fetchCourseList() {
      this.API.course.getList()
          .then(res => {
            this.courseList = res.data.items
          })
    },
    fetchBroadcast() {
      this.API.broadcast.getBroadcastById(this.broadcastId)
          .then(res => {
            this.topic = res.data.topic
            this.courseId = res.data.course_id
            this.date = res.data.date
            if(res.data.status.id === 2) {
              this.isStarted = true
            }
            if(res.data.status.id === 3) {
              this.isFinished = true
            }
            this.link = res.data.link
          })
    },
    handleCreate() {
      const body = {
        course_id: this.courseId,
        date: this.date,
        topic: this.topic
      }
      this.API.broadcast.create(body)
        .then(() => {
          this.$router.push({name: 'VAdminBroadcast'})
        })
    },
    handleEdit() {
      const body = {
        course_id: this.courseId,
        date: this.date,
        topic: this.topic
      }
      this.API.broadcast.edit(this.broadcastId, body)
    },
    handleDelete() {
      this.API.broadcast.delete(this.broadcastId)
          .then(() => {
            this.$router.push({name: 'VAdminBroadcast'})
          })
    },
    handleFinish() {
      this.API.broadcast.end(this.broadcastId)
          .then(() => {
            this.isStarted = false
            this.fetchBroadcast()
          })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
