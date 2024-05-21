<template>
  <div class="row">
    <div class="col col-2">
<!--      <a href="#" @click.prevent="$router.go(-1)" class="back-link">← Назад</a>-->
    </div>
    <div class="col col-8">
      <b class="title-xs">Урок</b>
      <div class="lesson-container">
        <div class="lesson-title">{{ title }}</div>
        <div class="lesson-subtitle">{{ desc }}</div>
        <div class="lesson-media">
          <iframe v-if="video" width="560" :src=video title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
           </div>
        <div class="lesson-content">
          <div class="lesson-section">
<!--            <b class="lesson-section-title">Глоссарий</b>-->
            <div v-html="content"></div>
<!--            <ul>-->
<!--              <li><span style="color: #1DAEFF;">courtesy</span> — behaviour that is polite and shows respect, or a polite action or remark</li>-->
<!--              <li><span style="color: #1DAEFF;">crew</span> — the people who work together on a ship, aircraft, or train</li>-->
<!--              <li><span style="color: #1DAEFF;">customs</span> — the place where your bags are examined when you are going into a country, to make sure you are not carrying anything illegal</li>-->
<!--              <li><span style="color: #1DAEFF;">cut-price</span> — cheaper than usual</li>-->
<!--              <li><span style="color: #1DAEFF;">damage</span> — harm or injury</li>-->
<!--              <li><span style="color: #1DAEFF;">declare</span> — to announce something publicly or officially</li>-->
<!--            </ul>-->
          </div>
          <div class="lesson-tools">
            <v-button
                v-if="prevPage"
                type="btn-outline-basic"
                @click="loadPrevPage"
            >
              Назад
            </v-button>
            <v-button
                v-if="nextPage"
                type="btn-success"
                @click="loadNextPage"
                style="margin-left: auto"
            >
              Дальше
            </v-button>
            <v-button
                v-if="!nextPage && taskId"
                type="btn-success"
                @click="$router.push({name: 'VTask', params: {taskId: taskId}, query: {courseId: this.$route.query.courseId, lessonId: this.$route.params.lessonId}})"
                style="margin-left: auto"
            >
              Перейти к заданиям
            </v-button>
            <v-button
                v-if="!nextPage && !taskId && !isPassed"
                type="btn-success"
                @click="handleFinishLesson"
                style="margin-left: auto"
            >
              Завершить урок
            </v-button>
            <v-button
                v-if="!nextPage && !taskId && isPassed"
                type="btn-success"
                @click="$router.push({name: 'VCourse', params: {courseId: this.$route.query.courseId}})"
                style="margin-left: auto"
            >
              Назад к курсу
            </v-button>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-2"></div>
  </div>
</template>

<script>
import VButton from "@/components/VButton";
import pagination from "@/mixins/pagination";

export default {
  name: "VLesson",

  mixins: [pagination],

  components: {
    VButton
  },

  mounted() {
    this.fetchLessonPages()
  },

  data() {
    return {
      title: '',
      desc: '',
      video: '',
      content: '',
      prevPage: null,
      nextPage: null,
      pageId: null,
      taskId: null,
      lessonStatusId: null,
    }
  },

  computed: {
    isPassed() {
      return !!(this.lessonStatusId && this.lessonStatusId === 4);
    }
  },

  methods: {
    fetchLessonPages() {
      const {courseId} = this.$route.query
      const {lessonId} = this.$route.params
      const params = {
        page: this.currentPage
      }
      this.API.page.getClientPageList(courseId, lessonId, params)
          .then(res => {
            const id = res.data.items[0].id
            this.fetchData(id)
            this.prevPage = res?.data.prev_url;
            this.nextPage = res?.data.next_url;
            this.taskId = res.data.task_id;
            this.lessonStatusId = res.data.lesson_status?.id
          })
    },
    fetchData(id) {
      this.API.page.getPageById(id)
          .then(res => {
            this.title = res.data.name;
            this.desc = res.data.description;
            this.video = res.data.video_url;
            this.content = res.data.body;
            this.pageId = res.data.id
          })
    },
    loadNextPage() {
      this.currentPage += 1;
      this.fetchLessonPages()
    },
    loadPrevPage() {
      this.currentPage -= 1;
      this.fetchLessonPages()
    },
    handleFinishLesson() {
      const body = {
        status: 4
      }
      const {lessonId} = this.$route.params
      const {courseId} = this.$route.query
      this.API.lesson.changeStatus(courseId, lessonId, body)
        .then(() => {
          this.$router.push({name: 'VCourse', params: {courseId: courseId}})
        })
    }
  }
}
</script>

<style scoped>

</style>
