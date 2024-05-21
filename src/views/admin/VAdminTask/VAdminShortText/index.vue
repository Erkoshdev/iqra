<template>
  <div class="row">
    <div class="col col-2"></div>
    <div class="col col-8">
      <b class="question-title" v-if="isCreated">Редактирование вопроса (короткий текст)</b>
      <b class="question-title" v-else>Создание вопроса (короткий текст)</b>
      <b class="title-xs">Вопрос</b>
      <div class="question-text">
        <v-editor v-model="currentQuestion" />
      </div>
      <div class="question-required">
        <div class="switch">
          <input type="checkbox">
          <span class="switch-slider"></span>
        </div>
        Обязательный
      </div>
      <v-button type="btn-success btn-square" class="question-create-btn" v-if="!isCreated" @click="createQuestion">Создать вопрос</v-button>
      <v-button type="btn-success btn-square" class="question-create-btn" v-if="isCreated && isQuestionEdited" @click="editQuestion">Изменить вопрос</v-button>
      <template v-if="isCreated">
        <div class="question-answers">
          <b class="title-xs">Ответы</b>
          <div class="form-row two-form">
            <v-select
                :options="questionTypes"
                v-model="questionType"
                label-name="name"
                :clearable="false"
                :reduce="item => item.key"
            />
            <v-textarea
                id="answer"
                placeholder="Введите ответы"
                v-model="answer"
            />
          </div>
          <small class="question-answer-notice">Введите все возможные вариации ответов для данного вопроса <span style="color: #F94848">через запятую</span></small>
        </div>
        <div class="question-point">
          <span>Баллов за правильный ответ:</span>
          <div class="question-point-container">
            <input type="number" v-model="point" min="0">
            <div class="question-point-edit">
              <button class="btn-plain question-point-btn" @click="point++">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="10" height="10" fill="#D9D9D9"/>
                  <path d="M5 4L8.4641 7.75H1.5359L5 4Z" fill="#414141"/>
                </svg>
              </button>
              <button class="btn-plain question-point-btn" @click="decrementPoint">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="10" height="10" transform="matrix(1 0 0 -1 0 10)" fill="#D9D9D9"/>
                  <path d="M5 6L8.4641 2.25H1.5359L5 6Z" fill="#414141"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="question-tools">
          <v-button type="btn-info-light" @click="handleSave">Сохранить</v-button>
          <v-button type="btn-outline-basic">Отмена</v-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import VEditor from "@/components/VEditor"
import VButton from "@/components/VButton"
import VTextarea from "@/components/VTextarea"
import VSelect from "@/components/VSelect"
import resizeTextarea from "@/mixins/resizeTextarea";

export default {
  name: "VAdminShortText",

  components: {
    VEditor,
    VButton,
    VTextarea,
    VSelect,
  },

  mixins: [
      resizeTextarea
  ],

  mounted() {
    if(this.isCreated) {
      this.fetchQuestion()
    }
  },

  data() {
    return {
      currentQuestion: '',
      originalQuestion: '',
      point: 1,
      questionId: this.$route.query.questionId,
      answer: '',
      questionTypes: [
        {name: 'Содержит', key: 'more'},
        {name: 'Равно', key: 'equal'}
      ],
      questionType: 'more',
    }
  },

  computed: {
    isCreated() {
      return this.questionId || false
    },
    isQuestionEdited() {
      return JSON.stringify(this.currentQuestion) !== this.originalQuestion;
    }
  },

  methods: {
    fetchQuestion() {
      this.API.question.getTestById(this.questionId)
          .then(res => {
            this.originalQuestion = JSON.stringify(res.data.name)
            this.currentQuestion = res.data.name
            let answers = []
            res.data?.question_answers.forEach(item => {
              answers.push(item.name)
            })
            this.answer = answers.join(', ')
            if(res.data?.question_answers.length) {
              this.isAnswerEditing = true
            }
          })
          .then(() => {
            this.resize()
          })
    },
    createQuestion() {
      const body = {
        name: this.currentQuestion,
        type: 2,
        task_id: this.$route.params.id
      }
      this.API.question.create(body)
          .then((res) => {
            this.$router.push({
              name: 'VAdminShortText',
              params: {id: this.$route.params.id},
              query: {questionId: res.data.id}
            })
            this.questionId = res.data.id
            this.fetchQuestion()
          })
    },
    editQuestion() {
      const body = {
        name: this.currentQuestion,
      }
      this.API.question.edit(this.questionId, body)
          .then(() => {
            this.fetchQuestion()
          })
    },
    async handleSave() {
      if(this.answer && this.answer.length) {
        const body = {
          question_id: this.questionId,
          answers: []
        }
        this.answer = this.answer.split(',').map(Function.prototype.call, String.prototype.trim)
        this.answer.forEach(item => {
          let answer = {}
          if(item.length) {
            answer.name = item
            body.answers.push(answer)
          }
        })
        this.API.answer.create(body)
            .then(() => {
              this.fetchQuestion()
            })
            .finally(() => {
              this.$router.push({name: 'VAdminTaskEdit', params: {id: this.$route.params.id}})
            })
      } else {
        this.$notify({
          type: 'info',
          text: 'Поле ответа не может быть пустым'
        })
      }
    },
    decrementPoint() {
      if(this.point > 0) {
        this.point--
      }
    },
  }
}
</script>

<style scoped>

</style>
