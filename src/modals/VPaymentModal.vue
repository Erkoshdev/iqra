<template>
  <div class="payment-modal-form">
    <p class="payment-modal-title">Купите курс по скидке</p>
    <p class="payment-modal-subtitle">Инструкция по покупке</p>
    <div class="payment-instruction">
      <div class="payment-instruction-step">
        <img src="@/assets/img/main/hint-1.png" alt="">
        <p>1. Нажмите на кнопку</p>
      </div>
      <div class="payment-instruction-step">
        <img src="@/assets/img/main/hint-2.png" alt="">
        <p>2. Отсканируйте QR</p>
      </div>
      <div class="payment-instruction-step">
        <img src="@/assets/img/main/hint-3.png" alt="">
        <p>3. Оплатите</p>
      </div>
    </div>
    <v-button type="btn-light-danger btn-md" @click="handle">
      <img src="@/assets/img/main/kaspi.png" alt="">
      Купить через Kaspi</v-button>
    <p class="sub-btn">Купить позже</p>
  </div>
</template>

<script>
import VButton from '@/components/VButton'

export default {
  name: "VPaymentModal",

  components: {
    VButton
  },

  props: {
    cancel: {
      type: Function,
      default: () => {}
    },
    handle: {
      type: Function,
      default: () => {}
    }
  },

  mounted() {
    this.fetchData()
  },

  methods: {
    fetchData() {
    }
  }
}
</script>

<style scoped>

</style>
