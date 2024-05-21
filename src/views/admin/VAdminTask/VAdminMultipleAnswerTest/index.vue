<template>
  <div class="row">
    <div class="col col-2"></div>
    <div class="col col-8">
      <b class="question-title" v-if="isCreated">Редактирование вопроса (несколько вариантов)</b>
      <b class="question-title" v-else>Создание вопроса (несколько вариантов)</b>
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
          <div class="question-answer" v-for="(item, itemIdx) in answers" :key="itemIdx">
            <span class="question-answer-drag">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" viewBox="0 0 10 26" fill="none">
              <circle cx="5" cy="6" r="2" fill="#BFBFBF"/>
              <circle cx="5" cy="12.8418" r="2" fill="#BFBFBF"/>
              <circle cx="5" cy="19.6836" r="2" fill="#BFBFBF"/>
            </svg>
            </span>
            <v-input v-model="item.name" disabled/>
            <div class="question-answer-correct">
              <input type="checkbox" disabled v-model="item.is_correct">
              <span class="question-answer-correct-checkmark"></span>
            </div>
            <button class="btn-plain delete-question-answer" @click="deleteAnswer(item.id)">
              <i class="i-delete"></i>
            </button>
          </div>
          <div class="question-answer question-answer-create" v-if="!isCreation">
            <v-input v-model="answer"/>
            <div class="question-answer-correct">
              <input type="checkbox" v-model="isCorrect">
              <span class="question-answer-correct-checkmark"></span>
              <span class="question-answer-correct-text">верный</span>
            </div>
          </div>
          <v-button type="btn-success btn-square" v-if="isCreation" @click="isCreation = !isCreation">Добавить вариант</v-button>
          <v-button type="btn-success btn-square" v-else @click="createAnswer" :disabled="!answer.length">Сохранить</v-button>
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
          <v-button type="btn-info-light" @click="$router.push({name: 'VAdminTaskEdit', params: {id: this.$route.params.id}})">Сохранить</v-button>
          <v-button type="btn-outline-basic">Отмена</v-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import VEditor from "@/components/VEditor"
import VButton from "@/components/VButton"
import VInput from "@/components/VInput"

export default {
  name: "VAdminMultipleAnswerTest",

  components: {
    VEditor,
    VButton,
    VInput,
  },

  data() {
    return {
      currentQuestion: '',
      originalQuestion: '',
      answers: [],
      isCreation: true,
      point: 1,
      questionId: this.$route.query.questionId,
      answer: '',
      isCorrect: false,
      isQuestionEditing: false,
    }
  },

  mounted() {
    if(this.isCreated) {
      this.fetchQuestion()
    }
  },

  computed: {
    isCreated() {
      return this.questionId || false
    },
    isQuestionEdited() {
      return JSON.stringify(this.currentQuestion) !== this.originalQuestion;
    },
  },

  methods: {
    fetchQuestion() {
      this.API.question.getTestById(this.questionId)
          .then(res => {
            this.originalQuestion = JSON.stringify(res.data.name)
            this.currentQuestion = res.data.name
            this.answers = res.data.question_answers
          })
    },
    createQuestion() {
      const body = {
        name: this.currentQuestion,
        type: 4,
        task_id: this.$route.params.id,
      }
      this.API.question.create(body)
          .then((res) => {
            this.$router.push({
              name: 'VAdminMultipleAnswerTest',
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
    async createAnswer() {
      const body = {
        question_id: this.questionId,
        answers: [],
      }
      let answer = {}
      answer.name = this.answer
      answer.is_correct = this.isCorrect? 1: 0
      body.answers.push(answer)
      this.API.answer.create(body)
          .then(() => {
            this.answer = ''
            this.isCorrect = false
            this.fetchQuestion()
            this.isCreation = true
          })
    },
    deleteAnswer(id) {
      this.API.answer.delete(id)
        .then(() => {
          this.fetchQuestion()
        })
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
