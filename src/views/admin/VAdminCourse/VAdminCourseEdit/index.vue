<template>
  <div class="row">
    <div class="col col-2">
<!--      <a href="#" class="back-link" @click.prevent="$router.go(-1)">← Назад</a>-->
    </div>
    <div class="col col-8">
      <b class="title-xs">{{ isEdit? 'Редактировать курс': 'Новый курс' }}</b>
      <div class="redact-container">
        <div class="redact-container-title">
          <input type="text" placeholder="Введите заголовок" v-model="name">
        </div>
        <div class="redact-container-row">
          <div class="redact-container-left">
            <v-textarea placeholder="Описание объявления или новости" :rows="5" v-model="desc" id="descContainer"/>
<!--            <div class="upload-file-container">-->
<!--              <input type="file">-->
<!--              <i class="i-clip"></i>-->
<!--              Прикрепить файл-->
<!--            </div>-->
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
<!--        <div class="redact-container-row">-->
<!--          <div class="redact-container-left">-->
<!--            <b class="title-xs">Категория</b>-->
<!--            <v-select-->
<!--                placeholder="Выберите из списка"-->
<!--                :options="categories"-->
<!--                label-name="name"-->
<!--                v-model="categoryId"-->
<!--                :reduce="item => item.id"-->
<!--            />-->
<!--          </div>-->
<!--          <div class="redact-container-right">-->
<!--            <b class="title-xs">Цена (тг)</b>-->
<!--            <v-input placeholder="Введите цену" type="number" v-model="price"/>-->
<!--          </div>-->
<!--        </div>-->
      </div>
      <div class="course-program" v-if="isEdit">
        <b class="title-xs">Программа курса</b>
        <div class="course-chapter" v-for="(chapter, chapterIdx) in chapterList" :key="chapterIdx">
          <div class="course-chapter-head">
            <div class="course-chapter-name" :class="{'has-border': chapter.name_focused}">
              {{ chapterIdx + 1 }}.
              <input type="text" v-model="chapter.name" :disabled="!chapter.name_focused">
            </div>
            <div class="course-chapter-tools">
              <button class="btn-plain" v-if="!chapter.name_focused" @click="chapter.name_focused = true">
                <i class="i-pencil"></i>
              </button>
              <button class="btn-plain" v-if="!chapter.name_focused" @click="deleteChapter(chapter.id)">
                <i class="i-delete"></i>
              </button>
              <div class="chapter-demo-toggle">
                <div class="switch">
                  <input type="checkbox" v-model="chapter.demo_access" @change="changeChapterDemo(chapter.id, chapter.demo_access)">
                  <span class="switch-slider"></span>
                </div>
                <b>Демо</b>
              </div>
            </div>
          </div>
          <v-button type="btn-success" class="edit-chapter-name" v-if="chapter.name_focused" @click="editChapterName(chapter.id)">Изменить</v-button>
          <div class="lesson-list">
            <v-lesson-card
                v-for="(lesson, lessonIdx) in chapter.lessons"
                :key="lessonIdx"
                :name="lesson.name"
                :id="lesson.id"
                :is-has-open="true"
                @edit="handleOpen(lesson.course_chapter_id, lesson.id)"
            />
            <a href="" class="add-course-link" @click.prevent="handleAddLesson(chapter.id)">
              <i class="i-plus"></i>
              Добавить урок
            </a>
          </div>
        </div>
        <div class="course-chapter-add">
          <input type="text" placeholder="Введите название раздела" v-model="chapterName" v-if="chapterAdding">
          <v-button type="btn-success btn-square" v-if="chapterAdding" @click="handleAddChapter">Добавить</v-button>
          <v-button type="btn-gray btn-square" v-if="!chapterAdding" @click="chapterAdding = true">Добавить раздел</v-button>
        </div>
      </div>
      <div class="course-empty-container" v-else>
        <b>Создание разделов будет доступно после создания курса</b>
      </div>
    </div>
    <div class="col col-2">
      <div class="sidebar-btn-group">
        <v-button type="btn-success" v-if="isEdit" @click="handleEdit">Сохранить</v-button>
        <v-button type="btn-success" v-else @click="handleCreate">Создать курс</v-button>
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
  name: "VAdminCourseEdit",

  components: {
    VLessonCard,
    VTextarea,
    VButton,
  },

  mixins: [
    resizeTextarea
  ],

  mounted() {
    this.fetchCategories();
    if(this.isEdit) {
      this.fetchCourse()
    }
  },

  data () {
    return {
      categories: [],
      name: '',
      desc: '',
      categoryId: '',
      price: '',
      chapterAdding: false,
      chapterName: '',
      chapterList: [],
    }
  },

  computed: {
    isEdit() {
      return this.$route.params.id
    },
    courseId() {
      return this.$route.params.id || null
    },
  },

  methods: {
    fetchCategories() {
      this.API.courseCategories.getList()
          .then((res) => {
            this.categories = res?.data.items
          })
    },
    fetchCourse() {
      this.API.course.getCourseById(this.courseId)
          .then((res) => {
            this.desc = res.data.description;
            this.name = res.data.name;
            this.price = res.data.price;
            this.categoryId = res.data.course_category;
            this.chapterList = res.data.course_chapters;
            this.chapterList.forEach(item => {
              item.name_focused = false
            })
          })
          .then(() => {
            this.resize()
          })
    },
    handleCreate() {
      const body = {
        name: this.name,
        description: this.desc,
        course_category_id: this.categoryId,
        price: this.price
      }
      this.API.course.create(body)
        .then(res => {
          this.$router.push({name: 'VAdminCourseEdit', params: {id: res.data.id}})
        })
    },
    handleEdit() {
      const body = {
        name: this.name,
        description: this.desc,
        course_category_id: this.categoryId,
        price: this.price
      }
      this.API.course.edit(this.courseId, body)
        .then(() => {
          this.fetchCourse()
        })
    },
    handleAddChapter() {
      const body = {
        name: this.chapterName,
        course_id: this.courseId
      }
      this.API.chapter.create(this.courseId, body)
        .then(() => {
          this.chapterName = '',
          this.chapterAdding = false;
          this.fetchCourse();
        })
    },
    handleAddLesson(chapterId) {
      // this.vGlModal.show({
      //   modalName: 'v-select-lesson-modal',
      //   modalTitle: '',
      //   modalWidth: 920,
      //   component: 'v-select-lesson-modal',
      //   componentProps: {
      //     courseId: Number(this.courseId),
      //     chapterId: Number(id),
      //     addLessons: (selectedIds, chapterId) => {
      //       const body = {
      //         lesson_ids: selectedIds
      //       }
      //       this.API.chapter.addLesson(this.courseId, chapterId, body)
      //         .then(() => {
      //           this.vGlModal.hide('v-select-lesson-modal')
      //           this.fetchCourse()
      //         })
      //     },
      //   }
      // })
      this.$router.push({
        name: 'VAdminLessonAdd',
        params: {courseId: this.$route.params.id, chapterId: chapterId}
      })
    },
    handleOpen(chapterId, lessonId) {
      this.$router.push({name: 'VAdminLessonEdit', params: {id: lessonId}, query: {courseId: this.$route.params.id, chapterId: chapterId}})
    },
    changeChapterDemo(id, val) {
      const courseId = this.$route.params.id
      const body = {
        demo_access: val? 1: 0
      }
      this.API.chapter.changeDemoStatus(courseId, id, body)
    },
    editChapterName(id) {
      const name = this.chapterList.find(item => {
        return item.id === id
      }).name
      const body = {
        name: name,
        course_id: this.$route.params.id,
      }
      this.API.chapter.edit(id, body)
        .then(() => {
          this.chapterList.forEach(item => {
            if(item.id === id) {
              item.name_focused = false
            }
          })
        })
    },
    deleteChapter(id) {
      this.vGlModal.show({
        modalName: 'v-delete-confirm-modal',
        modalTitle: '',
        modalWidth: 330,
        component: 'v-delete-confirm-modal',
        componentProps: {
          id: this.groupId,
          delete: () => {
            this.API.chapter.delete(id)
                .then(() => {
                  this.vGlModal.hide('v-delete-confirm-modal')
                  this.fetchCourse();
                })
          },
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
