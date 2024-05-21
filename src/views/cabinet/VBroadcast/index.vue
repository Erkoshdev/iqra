<template>
  <div class="row">
    <div class="col col-2"></div>
    <div class="col col-8">
      <b class="title-xs">Расписание</b>
      <div class="broadcast-day" v-for="(day, dayIdx) in list" :key="dayIdx">
        <div class="broadcast-day-header">
          <div class="broadcast-day-date">{{ dayIdx }}</div>
        </div>
        <div class="broadcast-list student-broadcast-list">
          <div class="broadcast-list-header">
            <div class="broadcast-data">Время</div>
            <div class="broadcast-data">Преподаватель</div>
            <div class="broadcast-data">Тема</div>
            <div class="broadcast-data">Статус урока</div>
          </div>
          <div class="broadcast-list-row" v-for="(item, itemIdx) in day" :key="itemIdx">
            <div class="broadcast-data">{{ getTime(item.date) }}</div>
            <div class="broadcast-data"><p>{{ item.teacher.fullname }}</p></div>
            <div class="broadcast-data">
              <p>{{ item.topic }}</p>
            </div>
            <div class="broadcast-data">
              <span class="broadcast-inactive" v-if="item.status.id === 1">Не начался</span>
              <a class="btn btn-sm btn-success" v-if="item.status.id === 2" :href="item.link" target="_blank">Зайти</a>
              <span class="broadcast-completed" v-if="item.status.id === 3">Завершен</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-2"></div>
  </div>
</template>

<script>

export default {
  name: "VBroadcast",

  mounted() {
    this.fetchCourseList()
    this.getList()
  },

  data() {
    return {
      list: [],
      courseList: []
    }
  },

  methods: {
    fetchCourseList() {
      this.API.course.getList()
          .then(res => {
            this.courseList = res.data.items
          })
    },
    getList() {
      this.API.broadcast.getList()
          .then(res => {
            this.list = res.data.items
          })
    },
    getTime(date) {
      return date.split(' ').pop()
    },
  }

}
</script>

<style scoped>

</style>
