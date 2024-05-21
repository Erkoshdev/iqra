<template>
  <div class="row">
    <div class="col col-2">
    </div>
    <div class="col col-8">
      <b class="title-xs">Информация</b>
      <div class="redact-container">
        <div class="redact-container-title">
          <p>{{name}}</p>
        </div>
      </div>
      <div class="course-program">
        <b class="title-xs">Программа курса</b>
        <template v-for="(chapter, chapterIdx) in chapterList" :key="chapterIdx">
          <div class="course-chapter" v-if="chapter.lessons.filter(item => item.status.id === 1).length > 0">
            <b class="title-xs">{{ chapterIdx + 1 }}. {{ chapter.name }}.</b>
            <div class="lesson-list">
              <v-lesson-card
                  v-for="(lesson, lessonIdx) in chapter.lessons.filter(item => item.status.id === 1)"
                  :key="lessonIdx"
                  :name="lesson.name"
                  :id="lesson.id"
                  :is-has-open="true"
                  @edit="handleOpen(lesson.course_chapter_id, lesson.id)"
              />
            </div>
          </div>
        </template>
        <div class="course-chapter-add">
          <input type="text" placeholder="Введите название раздела" v-model="chapterName" v-if="chapterAdding">
          <v-button type="btn-success btn-square" v-if="chapterAdding" @click="handleAddChapter">Добавить</v-button>
        </div>
      </div>
    </div>
    <div class="col col-2 ">
      <div class="sidebar-btn-group">
        <router-link class="btn btn-md btn-success" :to="{name: 'VAdminGroupEdit', params: {id: id, courseId: this.courseId}}">Редактировать</router-link>
        <router-link class="btn btn-md btn-primary" :to="{name: 'VAdminGroupStudentList', params: {id: groupId}}">Участники</router-link>
        <v-button type="btn-danger" @click="handleDelete">Удалить поток</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton";
import VLessonCard from "@/components/VLessonCard";

export default {
  name: "VAdminGroup",

  components: {
    VLessonCard,
    VButton,
  },

  mounted() {
    this.fetchCourse()
    this.fetchGroup()
  },

  computed: {
    isEdit() {
      return this.$route.params.id
    }
  },

  data () {
    return {
      courseId: Number(this.$route.params?.courseId),
      groupId: Number(this.$route.params?.id),
      name: '',
      chapterAdding: false,
      chapterName: '',
      chapterList: [],
    }
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
            this.price = res.data.price;
            this.chapterList = res.data.course_chapters
          })
    },
    handleDelete() {
      this.vGlModal.show({
        modalName: 'v-delete-confirm-modal',
        modalTitle: '',
        modalWidth: 330,
        component: 'v-delete-confirm-modal',
        componentProps: {
          id: this.groupId,
          delete: () => {
            this.API.group.delete(this.groupId)
                .then(() => {
                  this.vGlModal.hide('v-delete-confirm-modal')
                  this.$router.push({name: 'VAdminCourseView', params: {id: this.courseId},})
                })
          },
        }
      })
    },
    handleOpen(chapterId, lessonId) {
      this.$router.push({name: 'VAdminLessonEdit', params: {id: lessonId}, query: {courseId: this.$route.params.id, chapterId: chapterId}})
    }
  }
}
</script>

<style scoped>

</style>
