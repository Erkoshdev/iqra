<template>
  <div class="row">
    <div class="col col-2">
<!--      <a href="#" class="back-link" @click.prevent="$router.go(-1)">← Назад</a>-->
    </div>
    <div class="col col-8">
      <b class="title-xs">Новый урок</b>
      <div class="redact-container lesson-redact">
        <div class="redact-container-title">
          <input type="text" placeholder="Заголовок подстраницы" v-model="name">
        </div>
        <div class="redact-container-desc">
          <input type="text" placeholder="Описание подстраницы" v-model="desc">
        </div>
        <div class="redact-container-video">
          <small>Ссылка на видео:</small>
          <v-input type="text" v-model="videoUrl"/>
        </div>
      </div>
      <div class="editor-container">
        <v-editor v-model="body"/>
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
import VEditor from "@/components/VEditor";
import VInput from "@/components/VInput"

export default {
  name: "VAdminLessonPage",

  components: {
    VButton,
    VEditor,
    VInput
  },

  mounted() {
    if(this.pageId) {
      this.fetchPage()
    }
  },

  data () {
    return {
      lessonId: this.$route.params.id,
      pageId: this.$route.query.pageId,
      name: '',
      desc: '',
      videoUrl: '',
      body: '',
    }
  },

  computed: {
    isEdit() {
      return this.$route.query.pageId
    }
  },

  methods: {
    fetchPage() {
      this.API.page.getPageById(this.pageId)
        .then(res => {
          this.name = res.data.name;
          this.desc = res.data.description;
          this.videoUrl = res.data.video_url;
          this.body = res.data.body
        })
    },
    handleCreate() {
      const body = {
        name: this.name,
        description: this.desc,
        video_url: this.videoUrl,
        body: this.body,
        lesson_id: this.lessonId
      }
      this.API.page.create(body)
          .then(() => {
            console.log('test')
          })
    },
    handleEdit() {
      const body = {
        name: this.name,
        description: this.desc,
        video_url: this.videoUrl,
        body: this.body,
        lesson_id: this.lessonId
      }
      this.API.page.edit(this.pageId, body)
    }
  }
}
</script>

<style scoped>

</style>
