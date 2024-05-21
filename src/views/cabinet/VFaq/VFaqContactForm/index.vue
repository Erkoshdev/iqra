<template>
  <div class="row">
    <div class="col-2">

    </div>
    <div class="col-8">
      <div class="faq-contact-us">
          <form class="faq-contact-form">
            <div class="faq-contact-form-title">Новая заявка</div>
            <div class="faq-contact-form-subtitle">Наши специалисты ответят вам в течение 5 минут. </div>
            <label for="topic">Тема</label>
            <input type="text" placeholder="Коротко о проблеме" id="topic">
            <p>Ваш вопрос</p>
            <v-textarea
                placeholder="Опишите свой вопрос в подробностях, пожалуйста"
                :rows="6"
                v-model="textarea"
            />
            <p @click="test">Прикрепить файл</p>
            <v-button type="btn-success">Отправить</v-button>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import VTextarea from "@/components/VTextarea";
import VButton from "@/components/VButton";

export default {
  name: "VFaqContactForm",
  components: {
    VTextarea,
    VButton
  },
  methods: {
    test() {
      this.vGlModal.show({
        modalName: 'v-test-modal',
        modalTitle: '',
        modalWidth: 460,
        component: 'v-test-modal',
        componentProps: {
          imgUrl: require('@/assets/img/main/heart-3d.png'),
          header: 'Спасибо за обращение!',
          content: 'Мы ответим вам как можно скорее',
          btnContent: 'Хорошо, жду',
          test: () => {
            console.log('test')
          },
        }
      })
    }
  },
}
</script>

<style scoped>

</style>
