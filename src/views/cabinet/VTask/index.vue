<template>
  <div class="row">
    <div class="col col-2">
      <a href="#" class="back-link" @click.prevent="$router.go(-1)">← Назад</a>
    </div>
    <div class="col col-8">
      <div class="test-heading">
        <div class="test-title">{{ title }}</div>
        <div class="test-subtitle">{{ desc }}</div>
      </div>
      <div class="test-container" v-for="(item, itemIdx) in questions" :key="itemIdx">
        <div class="test-item">
          <div class="test-item-question">
            <span class="test-item-question-number">{{ itemIdx + 1 }}.</span>
            <p v-html="item.name"></p>
          </div>
          <div class="test-item-answer" :style="isFinished? {'pointer-events': 'none'}: ''">
            <v-radio-group
                v-if="item.type.id === 1"
                :options="item.question_answers"
                :question-id="item.id"
                :name="item.name"
                :is-finished="isFinished"
                v-model="item.user_answers[0]"
                :user-answers="item.user_answers"
                :correct-answers="getCorrectAnswers(item.question_answers)"
                @onInput="sendTestAnswer"
            />
            <v-checkbox-group
                v-if="item.type.id === 4"
                :options="item.question_answers"
                :question-id="item.id"
                :name="item.name"
                :is-finished="isFinished"
                v-model="item.user_answers"
                :user-answers="item.user_answers"
                :correct-answers="getCorrectAnswers(item.question_answers)"
                @onInput="sendTestAnswer"
            />
            <v-textarea
                v-if="item.type.id === 2"
                placeholder="Ваш ответ"
                :rows="1"
                v-model="item.user_answers[0]"
                :is-finished="isFinished"
                :user-answers="item.user_answers"
                :correct-answers="item.question_answers"
                :question-id="item.id"
                @blur="sendTestAnswer"
            />
          </div>
          <div class="test-item-correct-answer" v-if="isFinished && item.type.id === 2 && !isCorrect(item.question_answers, item.user_answers)">Правильный ответ: <b>{{ item.question_answers[0]?.name }}</b></div>
<!--          <div class="test-item-point">Баллов: 0</div>-->
        </div>
      </div>
      <div class="test-tools">
        <v-button type="btn-outline-basic" @click="$router.go(-1)">Назад</v-button>
        <router-link class="btn btn-md btn-success" v-if="isFinished" :to="{name: 'VCourse', params: {courseId: this.$route.query.courseId}}">Назад к курсу</router-link>
        <v-button type="btn-success" v-else @click="handleFinish">Завершить</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from '@/components/VButton';
import VCheckboxGroup from '@/components/VCheckboxGroup'
import VRadioGroup from "@/components/VRadioGroup";
import VTextarea from "@/components/VTextarea";
import resizeTextarea from "@/mixins/resizeTextarea";

export default {
  name: "VTask",

  components: {
    VTextarea,
    VRadioGroup,
    VButton,
    VCheckboxGroup,
  },

  mixins: [resizeTextarea],

  mounted() {
    this.fetchData()
  },

  data() {
    return {
      taskId: this.$route.params.taskId,
      title: '',
      desc: '',
      questions: [],
      isFinished: false,
    }
  },

  methods: {
    fetchData() {
      const {courseId, lessonId} = this.$route.query
      this.API.task.getClientTaskById(courseId, lessonId, this.taskId)
        .then(res => {
          this.title = res.data.name
          this.desc = res.data.description
          this.questions = res.data.questions
          this.isFinished = res.data.is_finished
        })
        .then(() => {
          this.resize()
        })
    },
    sendTestAnswer(questionId, answerId, typeId, isChecked = null) {
      const body = {
        question_id: questionId,
        user_question_answer: answerId,
        question_type_id: typeId
      }
      if(isChecked != null && !isChecked) {
        body.user_question_answer = ''
      }
      this.API.task.sendAnswer(this.taskId, body)
    },
    handleFinish() {
      const params = {
        finish: true,
      }
      this.vGlModal.show({
        modalName: 'v-confirm-finish-task-modal',
        modalTitle: '',
        modalWidth: 450,
        component: 'v-confirm-finish-task-modal',
        componentProps: {
          finish: () => {
            this.API.task.getTaskById(this.taskId, params)
                .then(res => {
                  this.title = res.data.name
                  this.desc = res.data.description
                  this.questions = res.data.questions
                  this.isFinished = res.data.is_finished
                  this.vGlModal.hide('v-confirm-finish-task-modal');
                  this.handleFinishLesson()
                })
          },
        }
      })
    },
    handleFinishLesson() {
      const body = {
        status: 4
      }
      const {courseId, lessonId} = this.$route.query
      this.API.lesson.changeStatus(courseId, lessonId, body)
          .then(() => {
            this.handleFinishTaskModal();
          })
    },
    handleFinishTaskModal() {
      this.vGlModal.show({
        modalName: 'v-finish-task-modal',
        modalTitle: '',
        modalWidth: 480,
        component: 'v-finish-task-modal',
      })
    },
    getCorrectAnswers(variants) {
      let correctAnswers = []
      variants = JSON.parse(JSON.stringify(variants))
      const trueObject = variants.find(item => item.is_correct === true);
      correctAnswers.push(trueObject?.id)
      return correctAnswers || []
    },
    isCorrect(questionAnswers, userAnswers) {
      let userAnswer = JSON.parse(JSON.stringify(userAnswers))[0]
      questionAnswers = JSON.parse(JSON.stringify(questionAnswers))
      return !!(userAnswer && questionAnswers.find(item => item.name === userAnswer));
    },
  }
}
</script>

<style scoped>

</style>
