<template>
  <div class="row lesson-page">
    <div class="col col-2">
<!--      <a href="#" class="back-link" @click.prevent="$router.go(-1)">← Назад</a>-->
<!--      <div class="active-course">-->
<!--        <b class="title-xs">Продолжить просмотр</b>-->
<!--        <div class="active-course-list">-->
<!--          <div class="active-course-container">-->
<!--            <div class="active-course-container-img">-->
<!--              <img src="@/assets/img/main/review_03.png" alt="">-->
<!--              <span class="play-btn"></span>-->
<!--            </div>-->
<!--            <div class="active-course-container-caption">-->
<!--              <span>Pre-Intermediate</span>-->
<!--              <b>4.1 Future Simple</b>-->
<!--            </div>-->
<!--            <a href="#" class="absolute-link"></a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div class="col col-8">
      <div class="lesson-intro">
        <b class="title-xs">О курсе</b>
        <div class="lesson-intro-container">
          <div class="lesson-intro-caption">
            <b>{{ categoryName }}</b>
            <h1>{{ title }}</h1>
            <p>{{ desc }}</p>
          </div>
          <div class="lesson-intro-img">
            <img src="@/assets/img/main/book.png" alt="">
          </div>
        </div>
      </div>
      <div class="lesson-chapters">
        <b class="title-xs lesson-chapters-title">Программа курса</b>
        <template v-for="(chapter, chapterIdx) in chapters">
          <div class="lesson-wrapper" v-if="isChapterAccessible(chapter.lessons)" :key="chapterIdx">
            <b class="title-xs">{{ chapterIdx + 1 }}. {{ chapter.name }}.</b>
            <div class="lesson-list">
              <template v-for="(lesson, lessonIdx) in chapter.lessons">
                <v-lesson-card
                    v-if="lesson.status.id === 1"
                    :key="lessonIdx"
                    :name="lesson.name"
                    :id="lesson.id"
                    :status-id="lesson.pass_status.id"
                    :is-has-open="true"
                    @edit="handleOpen(lesson.id)"
                />
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="col col-2">
<!--      <div class="user-progress">-->
<!--        <b class="title-xs">Ваш прогресс</b>-->
<!--        <div class="user-progress-container">-->
<!--          <div class="progress-bar" :style="`background: conic-gradient(#3EC965 ${50}%, #DADADA 0)`">-->
<!--            <div class="progress-bar-value">75%</div>-->
<!--          </div>-->
<!--          <b>3/26 уроков</b>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="user-rating">-->
<!--        <b class="title-xs">Рейтинг</b>-->
<!--        <div class="rating-container">-->
<!--          <div class="rating-item">-->
<!--            <span class="rating-number">1</span>-->
<!--            <span class="rating-status success"></span>-->
<!--            <p class="rating-name">Маргулан Беркинбаев</p>-->
<!--          </div>-->
<!--          <div class="rating-item">-->
<!--            <span class="rating-number">1</span>-->
<!--            <span class="rating-status danger"></span>-->
<!--            <p class="rating-name">Маргулан Беркинбаев</p>-->
<!--          </div>-->
<!--          <div class="rating-item">-->
<!--            <span class="rating-number">1</span>-->
<!--            <span class="rating-status basic"></span>-->
<!--            <p class="rating-name">Маргулан Беркинбаев</p>-->
<!--          </div>-->
<!--          <div class="rating-item">-->
<!--            <span class="rating-number">1</span>-->
<!--            <span class="rating-status success"></span>-->
<!--            <p class="rating-name">Маргулан Беркинбаев</p>-->
<!--          </div>-->
<!--          <div class="rating-item">-->
<!--            <span class="rating-number">1</span>-->
<!--            <span class="rating-status danger"></span>-->
<!--            <p class="rating-name">Маргулан Беркинбаев</p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <v-button type="btn-warning">Открыть рейтинг</v-button>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
// import VButton from "@/components/VButton";
import VLessonCard from "@/components/VLessonCard";

export default {
  name: "VCourse",

  components: {
    VLessonCard,
    // VButton
  },

  mounted() {
    this.fetchData()
  },

  data() {
    return {
      categoryName: '',
      title: '',
      desc: '',
      chapters: []
    }
  },

  methods: {
    fetchData() {
      const id = this.$route.params.courseId
      this.API.course.getClientCourseById(id)
          .then((res) => {
            this.categoryName = res.data.course_category?.name;
            this.title = res.data.name;
            this.desc = res.data.description;
            this.chapters = res.data.course_chapters
          })
    },
    handleOpen(lessonId) {
      this.$router.push({name: 'VLesson', params: {lessonId: lessonId}, query: {courseId: this.$route.params.courseId }})
    },
    isChapterAccessible(lessons) {
      return lessons.find(item => item.status.id === 1)
    }
  }
}

</script>

<style scoped>

</style>
