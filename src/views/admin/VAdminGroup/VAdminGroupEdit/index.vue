<template>
  <div class="row">
    <div class="col col-2"></div>
    <div class="col col-8">
      <b class="title-xs">{{ isEdit? 'Редактировать группу': 'Новая группа' }}</b>
      <div class="redact-container">
        <div class="redact-container-title">
          <p>Название</p>
        </div>
        <div class="redact-container-row">
          <div class="redact-container-left">
            <v-textarea placeholder="Введите название группы" :rows="5" v-model="name"/>
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
      </div>
      <div class="course-program" v-if="isEdit">
        <b class="title-xs">Программа курса</b>
        <div class="course-chapter" v-for="(chapter, chapterIdx) in chapterList" :key="chapterIdx">
          <div class="course-chapter-head">
            <div class="course-chapter-name">
              {{ chapterIdx + 1 }}. {{ chapter.name }}.
            </div>
          </div>
          <v-button type="btn-success" class="edit-chapter-name" v-if="chapter.name_focused" @click="editChapterName(chapter.id)">Изменить</v-button>
          <div class="lesson-list">
            <v-lesson-card
                v-for="(lesson, lessonIdx) in chapter.lessons"
                :key="lessonIdx"
                :name="lesson.name"
                :id="lesson.id"
                :statusAccessId="lesson.status.id"
                :is-editing-access="true"
                @edit="handleOpen(lesson.course_chapter_id, lesson.id)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col col-2">
      <div class="sidebar-btn-group">
        <v-button type="btn-success" v-if="isEdit" @click="handleEdit">Сохранить</v-button>
        <v-button type="btn-success" v-else @click="handleCreate">Сохранить</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton";
import VTextarea from "@/components/VTextarea";
import VLessonCard from "@/components/VLessonCard";
import resizeTextarea from "@/mixins/resizeTextarea";

export default {
  name: "VAdminGroupEdit",

  components: {
    VLessonCard,
    VTextarea,
    VButton,
  },

  mixins: [
    resizeTextarea
  ],

  mounted() {
    if(this.isEdit) {
      this.fetchCourse()
      this.fetchGroup()
    }
  },

  data () {
    return {
      name: '',
      chapterName: '',
      chapterList: [],
      courseId:  this.$route.params?.courseId,
      groupId:  this.$route.params?.id,
    }
  },

  computed: {
    isEdit() {
      return this.$route.params.id
    },
  },

  methods: {
    fetchGroup() {
      this.API.group.getGroupById(this.groupId)
          .then((res) => {
            this.name = res.data.name;
          })
    },
    fetchCourse() {
      this.API.course.getByGroup(this.courseId, this.groupId)
          .then((res) => {
            this.chapterList = res.data.course_chapters;
          })
          .then(() => {
            this.resize()
          })
    },
    handleCreate() {
      const body = {
        name: this.name,
        course_id: this.courseId,
      }
      this.API.group.create(body)
          .then(() => {
            this.$router.push({name: 'VAdminCourseView', params: {id: this.courseId}})
          })
    },
    handleEdit() {
      const body = {
        name: this.name,
        course_id: this.courseId,
      }
      this.API.group.edit(this.groupId, body)
          .then(() => {
            this.$router.push({name: 'VAdminGroup', params: {id: this.groupId, courseId: this.courseId}})
          })
    },
    handleOpen(chapterId, lessonId) {
      this.$router.push({name: 'VAdminLessonEdit', params: {id: lessonId}, query: {courseId: this.$route.params.id, chapterId: chapterId}})
    },
  }
}
</script>

<style scoped>

</style>
