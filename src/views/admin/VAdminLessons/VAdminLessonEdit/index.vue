<template>
  <div class="row">
    <div class="col col-2">
<!--      <a href="#" class="back-link" @click.prevent="$router.go(-1)">← Назад</a>-->
    </div>
    <div class="col col-8">
      <b class="title-xs">{{ isEdit? 'Редактировать урок': 'Новый урок' }}</b>
      <div class="redact-container lesson-redact">
        <div class="redact-container-title">
          <input type="text" placeholder="Введите название урока" v-model="name">
        </div>
        <div class="redact-container-point">
          <small>Очков за урок:</small>
          <v-input type="number" v-model="points"/>
          <small class="px-2">Время прохождения в минутах:</small>
          <v-input type="number" v-model="duration"/>
        </div>
      </div>
      <template v-if="isEdit">
        <div class="course-chapter">
          <b class="title-xs">Страницы</b>
          <div class="lesson-list">
            <v-lesson-card
                :is-editing="true"
                :is-has-open="true"
                v-for="(page, pageIdx) in lessonPages"
                :key="pageIdx"
                :name="page.name"
                :id="page.id"
                @edit="$router.push({name: 'VAdminLessonPage', query: {pageId: page.id}})"
                @delete="handleDelete"
            />
            <router-link class="add-course-link" :to="{name: 'VAdminLessonPage', params: {id: lessonId}}">
              <i class="i-plus"></i>
              Добавить  страницу
            </router-link>
          </div>
        </div>
        <div class="course-chapter">
          <b class="title-xs">Задания</b>
          <div class="lesson-list">
            <v-lesson-card
                v-for="(task, taskIdx) in lessonTasks"
                :key="taskIdx"
                :is-editing="true"
                :is-has-open="true"
                :is-task-card="true"
                :name="task.name"
                :id="task.id"
                @edit="$router.push({name: 'VAdminTaskEdit', params: {id: task.id}})"
                @delete="handleDeleteTask"
            />
            <a href="" class="add-course-link" @click.prevent="handleAddTask">
              <i class="i-plus"></i>
              Добавить  задание
            </a>
          </div>
        </div>
      </template>
      <div class="course-empty-container" v-else>
        <b>Добавление страниц и задании будет доступно после создания урока</b>
      </div>
    </div>
    <div class="col col-2">
      <div class="sidebar-btn-group">
        <v-button type="btn-success" v-if="isEdit" @click="handleEdit">Сохранить</v-button>
        <v-button type="btn-success" v-else @click="handleCreate">Создать урок</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton";
import VInput from "@/components/VInput";
import VLessonCard from "@/components/VLessonCard";

export default {
  name: "VAdminLessonEdit",

  components: {
    VLessonCard,
    VInput,
    VButton,
  },

  mounted() {
    if(this.isEdit) {
      this.fetchLesson();
    }
  },

  computed: {
    isEdit() {
      return this.$route.params.id
    }
  },

  data () {
    return {
      lessonId: this.$route.params.id,
      name: '',
      points: '',
      duration: '',
      lessonPages: [],
      lessonTasks: []
    }
  },

  methods: {
    fetchLesson() {
      this.API.lesson.getLessonById(this.lessonId)
          .then((res) => {
            this.name = res.data.name;
            this.points = res.data.points;
            this.duration = res.data.duration;
            this.lessonPages = res.data.lesson_pages;
            this.lessonTasks = res.data.tasks;
          })
    },
    handleCreate() {
      const body = {
        name: this.name,
        points: this.points,
        duration: this.duration,
        course_chapter_id: Number(this.$route.params?.chapterId),
        course_id: Number(this.$route.params?.courseId),
      }
      this.API.lesson.create(body)
        .then(res => {
          this.$router.push({name: 'VAdminLessonEdit', params: {id: res.data.id}})
        })
    },
    handleEdit() {
      const body = {
        name: this.name,
        points: this.points,
        duration: this.duration,
        course_chapter_id: Number(this.$route.query?.chapterId),
        course_id: Number(this.$route.query?.courseId),
      }
      this.API.lesson.edit(this.lessonId, body)
    },
    handleDelete(id) {
      this.vGlModal.show({
        modalName: 'v-delete-confirm-modal',
        modalTitle: '',
        modalWidth: 330,
        component: 'v-delete-confirm-modal',
        componentProps: {
          id: this.groupId,
          delete: () => {
            this.API.page.delete(id)
                .then(() => {
                  this.vGlModal.hide('v-delete-confirm-modal')
                  this.fetchLesson()
                })
          },
        }
      })
    },
    handleAddTask() {
      // this.vGlModal.show({
      //   modalName: 'v-select-task-modal',
      //   modalTitle: '',
      //   modalWidth: 920,
      //   component: 'v-select-task-modal',
      //   componentProps: {
      //     lessonId: Number(this.lessonId),
      //     addTask: (selectedIds) => {
      //       const body = {
      //         task_ids: selectedIds
      //       }
      //       this.API.lesson.addTask(this.lessonId, body)
      //           .then(() => {
      //             this.vGlModal.hide('v-select-task-modal')
      //             this.fetchLesson()
      //           })
      //     },
      //   }
      // })
      this.$router.push({name: 'VAdminTaskAdd', params: {lessonId: this.$route.params.id}})
    },
    handleDeleteTask(id) {
      this.vGlModal.show({
        modalName: 'v-delete-confirm-modal',
        modalTitle: '',
        modalWidth: 330,
        component: 'v-delete-confirm-modal',
        componentProps: {
          id: this.groupId,
          delete: () => {
            this.API.task.delete(id)
                .then(() => {
                  this.vGlModal.hide('v-delete-confirm-modal')
                  this.fetchLesson()
                })
          },
        }
      })
    },
  }
}
</script>

<style scoped>

</style>
