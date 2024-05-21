<template>
  <div class="row">
    <div class="col col-2">
      <b class="title-xs">Потоки</b>
      <v-button type="btn-outline-success btn-square" @click="handleAddGroup">+ Новый поток</v-button>
      <div class="group-list">
        <v-group-card
            v-for="(group, groupIdx) in groups"
            :key="groupIdx"
            :name="group.name"
            :id="group.id"
            :is-has-open="true"
            @edit="handleOpenGroup(group.id)"
        />
      </div>
    </div>
    <div class="col col-8">
      <b class="title-xs">Информация</b>
      <div class="redact-container">
        <div class="redact-container-title">
         <p>{{name}}</p>
        </div>
        <div class="redact-container-row">
          <div class="redact-container-left">
            <div class="redact-container-desc" v-html="desc"></div>
          </div>
          <div class="redact-container-right">
            <div class="upload-img">
              <div class="upload-img-media">
                <div class="upload-container-img-caption">
                  <span>Картинка</span>
                  <span>120х120</span>
                </div>
                <img src="" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="course-program" v-if="chapterList.length">
        <b class="title-xs">Программа курса</b>
        <div class="course-chapter" v-for="(chapter, chapterIdx) in chapterList" :key="chapterIdx">
          <b class="title-xs">{{ chapterIdx + 1 }}. {{ chapter.name }}.</b>
          <div class="lesson-list">
            <v-lesson-card
                v-for="(lesson, lessonIdx) in chapter.lessons"
                :key="lessonIdx"
                :name="lesson.name"
                :id="lesson.id"
                :is-has-open="true"
                @edit="handleOpen(lesson.course_chapter_id, lesson.id)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col col-2">
      <div class="sidebar-btn-group">
        <router-link class="btn btn-md btn-success" :to="{name: 'VAdminCourseEdit', params: {id: id}}">Редактировать</router-link>
        <router-link class="btn btn-md btn-primary" :to="{name: 'VAdminCourseStudents', params: {id: id}}">Демо участники</router-link>
        <v-button type="btn-danger" @click="handleDelete">Удалить курс</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton";
import VLessonCard from "@/components/VLessonCard";
import VGroupCard from "@/components/VGroupCard";

export default {
  name: "VAdminCourseView",

  components: {
    VLessonCard,
    VButton,
    VGroupCard
  },

  mounted() {
    this.fetchCourse()
  },

  data () {
    return {
      courseId: this.$route.params.id,
      name: '',
      desc: '',
      groups: [],
      chapterList: [],
    }
  },

  methods: {
    handleAddGroup() {
      this.$router.push({
        name: 'VAdminGroupAdd',
        params: {courseId: this.$route.params.id}
      })
    },
    fetchCourse() {
      this.API.course.getCourseById(this.courseId)
          .then((res) => {
            this.desc = res.data.description.replace(/\n\r?/g, '<br />');
            this.name = res.data.name;
            this.chapterList = res.data.course_chapters;
            this.groups = res.data.groups
          })
    },
    handleDelete() {
      this.API.course.delete(this.courseId)
        .then(() => {
          this.$router.push({name: 'VAdminCourse'})
        })
    },
    handleOpen(chapterId, lessonId) {
      this.$router.push({name: 'VAdminLessonEdit', params: {id: lessonId}, query: {courseId: this.$route.params.id, chapterId: chapterId}})
    },
    handleOpenGroup(groupId) {
      this.$router.push({name: 'VAdminGroup', params: {id: groupId, courseId: this.$route.params.id}})
    }
  }
}
</script>

<style scoped>

</style>
