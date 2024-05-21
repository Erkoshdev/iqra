<template>
  <div class="main-page">
    <div class="main-header">
      <div class="lp-container">
        <div class="landing-header-row">
          <div class="landing-header-logo">
            <img src="@/assets/img/logo/logo-text-dark.svg" alt="">
          </div>
          <div class="landing-header-links">
            <a class="demo-link" @click="scrollToElement('target')">Кому подойдет</a>
            <a class="demo-link" >О курсе</a>
            <a class="demo-link" >Стоимость</a>
            <a class="demo-link">Отзывы</a>
            <a class="demo-link" @click="scrollToElement('faq')">Контакты</a>
            <router-link v-if="authStore.isLoggedIn" class="to-auth-link" :to="{name: 'VCabinet'}">Кабинет</router-link>
            <router-link v-else class="to-auth-link" :to="{name: 'VLogin'}">Войти</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="landing-content">
      <div class="lp-container">
        <div class="home" id="home">
          <svg class="yellow-bg-circle" width="770" height="770" viewBox="0 0 770 770" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1435_10010)">
              <circle cx="385" cy="385" r="169" fill="#FFCB45" fill-opacity="0.3"/>
            </g>
            <defs>
              <filter id="filter0_f_1435_10010" x="0" y="0" width="770" height="770" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="108" result="effect1_foregroundBlur_1435_10010"/>
              </filter>
            </defs>
          </svg>
          <svg class="purple-bg-circle" width="770" height="770" viewBox="0 0 770 770" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1435_10010)">
              <circle cx="385" cy="385" r="169" fill="#1A71FF" fill-opacity="0.3"/>
            </g>
            <defs>
              <filter id="filter0_f_1435_10010" x="0" y="0" width="770" height="770" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="108" result="effect1_foregroundBlur_1435_10010"/>
              </filter>
            </defs>
          </svg>
          <div class="home-caption">
            <h1>Весь курс Английского всего за 9 990 тг</h1>
            <p>+150 видеоуроков и заданий в удобном формате</p>

            <div class="home-caption-tools">
              <button class="home-caption-btn ">
                <span>Приобрести курс</span>
              </button>
              <router-link class="home-caption-link" :to="{name: 'VLogin'}">
                <span>Смотреть демо</span>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12.5" cy="12.5" r="12.5" fill="#808080"/>
                  <path d="M16.6445 11.6522C17.2708 12.0439 17.2708 12.9561 16.6445 13.3478L10.5303 17.172C9.86424 17.5886 9 17.1098 9 16.3242L9 8.67579C9 7.89021 9.86425 7.41139 10.5303 7.82797L16.6445 11.6522Z" fill="white"/>
                </svg>
              </router-link>
            </div>
          </div>
          <div class="home-img">
            <img src="@/assets/img/main/main-phone.png" alt="">
            <div class="progress-flow-card">
                <img src="@/assets/img/main/flow-1.png" alt="">
            </div>
            <div class="achieve-flow-card">
              <img src="@/assets/img/main/flow-2.png" alt="">
            </div>
            <div class="rating-flow-card">
              <img src="@/assets/img/main/flow-3.png" alt="">
            </div>
          </div>
        </div>
        <div class="target" id="target">
          <div class="section-title">Кому подойдет курс?</div>
          <div class="target-card-group">
            <div class="target-card purple-bg">
              <div class="target-card-img">
                <img src="@/assets/img/main/hat.png" alt="">
              </div>
              <div class="target-card-title">Поступающим</div>
              <div class="target-card-info">Если вы закончили школу, колледж или университет, и хотите поступить зарубеж.</div>
            </div>
            <div class="target-card blue-bg">
              <div class="target-card-img">
                <img src="@/assets/img/main/global.png" alt="">
              </div>
              <div class="target-card-title">Улетающим</div>
              <div class="target-card-info">Вы хотите работать зарубежом, и, возможно, планируете остаться там на долгое время.</div>
            </div>
            <div class="target-card red-bg">
              <div class="target-card-img">
                <img src="@/assets/img/main/junky.png" alt="">
              </div>
              <div class="target-card-title">Всем желающим</div>
              <div class="target-card-info">Английский нужен везде: от понимания зарубежных кино, музыки и книг до работы учителем.</div>
            </div>
          </div>
        </div>
        <div class="finish" id="finish">
          <div class="section-title">По окончанию вы сможете</div>
          <div class="finish-card-group">
            <div class="finish-card blue-border">
              <div class="finish-card-num blue-color">01</div>
              <div class="finish-card-title">Преодолеть языковой барьер</div>
              <div class="finish-card-info">Наши методы помогут вам легко преодолеть языковой барьер и говорить на английском с уверенностью.</div>
            </div>
            <div class="finish-card red-border">
              <div class="finish-card-num red-color">02</div>
              <div class="finish-card-title">Понимать на слух без усилий</div>
              <div class="finish-card-info">Вы научитесь легко воспринимать речь носителей языка и разбирать даже быстрые диалоги.</div>
            </div>
            <div class="finish-card purple-border">
              <div class="finish-card-num purple-color">03</div>
              <div class="finish-card-title">Писать грамотно</div>
              <div class="finish-card-info">Независимо от того, хотите ли вы улучшить свои карьерные перспективы.</div>
            </div>
            <div class="finish-card yellow-border">
              <div class="finish-card-num yellow-color">04</div>
              <div class="finish-card-title">Достичь профессиональных целей</div>
              <div class="finish-card-info">Независимо от того, хотите ли вы улучшить свои карьерные перспективы.</div>
            </div>
          </div>
        </div>
        <div class="study-process" id="study-process">
          <div class="section-title white-color">Процесс обучения</div>
          <div class="study-process-card-group">
            <div class="study-process-card">
              <div class="study-process-card-img"><img src="@/assets/img/main/pr-1.png" alt=""></div>
              <div class="study-process-card-title">Видео-уроки</div>
              <div class="study-process-card-info">Профессиональные видео-уроки с интересной и понятной подачей</div>
            </div>
            <div class="study-process-card">
              <div class="study-process-card-img"><img src="@/assets/img/main/pr-2.png" alt=""></div>
              <div class="study-process-card-title">Глоссарий</div>
              <div class="study-process-card-info">Профессиональные видео-уроки с интересной и понятной подачей</div>
            </div>
            <div class="study-process-card">
              <div class="study-process-card-img"><img src="@/assets/img/main/pr-3.png" alt=""></div>
              <div class="study-process-card-title">Задания</div>
              <div class="study-process-card-info">Профессиональные видео-уроки с интересной и понятной подачей</div>
            </div>
            <div class="study-process-card">
              <div class="study-process-card-img"><img src="@/assets/img/main/pr-4.png" alt=""></div>
              <div class="study-process-card-title">Рейтинг</div>
              <div class="study-process-card-info">Профессиональные видео-уроки с интересной и понятной подачей</div>
            </div>
            <div class="study-process-card">
              <div class="study-process-card-img"><img src="@/assets/img/main/pr-5.png" alt=""></div>
              <div class="study-process-card-title">Сертификат</div>
              <div class="study-process-card-info">Профессиональные видео-уроки с интересной и понятной подачей</div>
            </div>
            <div class="study-process-card">
              <div class="study-process-card-img"><img src="@/assets/img/main/pr-6.png" alt=""></div>
              <div class="study-process-card-title">Возврат средств</div>
              <div class="study-process-card-info">Профессиональные видео-уроки с интересной и понятной подачей</div>
            </div>
          </div>
          <div class="study-process-tools">
            <button class="study-process-btn">
              <span>Приобрести курс</span>
            </button>
            <button class="study-process-link">
              <span>Смотреть демо</span>
            </button>
          </div>
        </div>
        <div class="benefits" id="benefits">
          <div class="benefits-f-row"><div class="benefits-title">Преимущества</div></div>
          <div class="benefits-s-row">
            <div class="benefits-card-group">
              <div class="benefits-card blue-bg">
                <div class="benefits-card-img">
                  <img src="@/assets/img/main/benefit-1.png" alt=""></div>
                <div class="benefits-card-caption">
                  <div class="benefits-card-title">
                    <p>Удобная видеосвязь</p>
                  </div>
                  <div class="benefits-card-subtitle">50 минут бесплатно, 0.1 секунда задержки, интерактивная доска и быстрый чат
                  </div></div>
              </div>
              <div class="benefits-card yellow-bg">
                <div class="benefits-card-img">
                  <img src="@/assets/img/main/benefit-2.png" alt=""></div>
                <div class="benefits-card-caption">
                  <div class="benefits-card-title">
                  <p>На любом устройстве</p>
                </div>
                <div class="benefits-card-subtitle">50 минут бесплатно, 0.1 секунда задержки, интерактивная доска и быстрый чат
                </div></div>
              </div>
              <div class="benefits-card red-bg">
                <div class="benefits-card-img">
                  <img src="@/assets/img/main/benefit-3.png" alt=""></div>
                <div class="benefits-card-caption">
                  <div class="benefits-card-title">
                    <p>В любое время</p>
                  </div>
                  <div class="benefits-card-subtitle">50 минут бесплатно, 0.1 секунда задержки, интерактивная доска и быстрый чат
                  </div></div>
              </div>
              <div class="benefits-card light-orange-bg">
                <div class="benefits-card-img">
                  <img src="@/assets/img/main/benefit-4.png" alt=""></div>
                <div class="benefits-card-caption"><div class="benefits-card-title">
                  <p>Конструктор заданий</p>
                </div>
                  <div class="benefits-card-subtitle">50 минут бесплатно, 0.1 секунда задержки, интерактивная доска и быстрый чат
                  </div></div>

              </div>
              <div class="benefits-card purple-bg">
                <div class="benefits-card-img">
                  <img src="@/assets/img/main/benefit-5.png" alt=""></div>
                <div class="benefits-card-caption"><div class="benefits-card-title">
                  <p>Автопроктор</p>
                </div>
                  <div class="benefits-card-subtitle">50 минут бесплатно, 0.1 секунда задержки, интерактивная доска и быстрый чат
                  </div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="timer">
          <div class="timer-title">Успейте приобрести весь курс по 60% скидке </div>
          <div class="timer-counter">
            {{ timerOutput }}</div>
          <div class="timer-btn">Получить скидку %</div>
        </div>
      <div class="lp-container">
      <div class="programme" id="programme">
        <div class="section-title">Программа курса</div>
        <v-accordian-full v-for="(program, i) in programs" :program="program" :length="programs.length" :index="i" :key="i"

                          :open="program.open"
                          @toggleOpen="toggleOpen"></v-accordian-full>
      </div>

        <div class="info-faq" id="faq">
          <div class="faq-section">
            <p>Часто спрашивают</p>
            <br>
            <FAQ v-for="(faq, i) in faqs" :faq="faq" :length="faqs.length" :index="i" :key="i"

                 :open="faq.open"
                 @toggleOpen="toggleOpenFaq"
            ></FAQ>
          </div>
          <div class="contact-us-section">
            <div class="contact-us-card">
              <div class="contact-us-card-title text-light">Остались вопросы?
              </div>
              <div class="contact-us-card-subtitle text-light opacity">
                Оставьте заявку, мы ответим вам как можно скорее
              </div>
              <div>
                <form class="contact-us-card-form">
                  <input type="text" id="fname" name="fname" placeholder="Ваше имя">
                  <input type="text" id="lname" name="lname" placeholder="Номер телефона">
                  <input type="text" id="email" name="email" placeholder="E-mail">
                </form>
              </div>
              <div class="contact-us-card-hint text-light opacity">Отправляя заявку, вы соглашаетесь с нашей политикой конфиденциальност
              </div>
              <div class="contact-us-card-activity">
                <button class="intro-caption-btn dark contact-us-btn ">
                  <p>Отправить</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="timer">
        <div class="timer-title">Успейте приобрести весь курс по 60% скидке </div>
        <div class="timer-counter">
          {{ timerOutput }}</div>
        <div class="timer-btn">Получить скидку %</div>
      </div>
      </div>
    <div class="main-footer">
      <div class="container">
        <div class="main-footer-row">
          <div class="main-footer-col">
            <div class="main-footer-logo">
              <img src="@/assets/img/logo/logo-with-text.svg" alt="">
            </div>
            <p class="main-footer-text copyright">2023 © Все права защищены</p>
            <ul class="social-links">
              <li v-for="(item, itemIdx) in socialList" :key="itemIdx">
                <a class="social-link" :href="item.link" target="_blank">
                  <span v-html="item.icon"></span>
                </a>
              </li>
            </ul>
            <a class="main-footer-text confidentiality" href="#">Конфиденциальность</a>
          </div>
          <div class="main-footer-col">
            <b>Главная</b>
            <ul class="footer-col-list">
              <li>
                <a class="main-footer-text" href="">Кому подойдет</a>
              </li>
              <li>
                <a class="main-footer-text" href="">Тарифы</a>
              </li>
              <li>
                <a class="main-footer-text" href="">Как это работает</a>
              </li>
            </ul>
          </div>
          <div class="main-footer-col">
            <b>Сотрудничество</b>
            <ul class="footer-col-list">
              <li>
                <a class="main-footer-text" href="">Репетиторам</a>
              </li>
              <li>
                <a class="main-footer-text" href="">Онлайн-курсам</a>
              </li>
              <li>
                <a class="main-footer-text" href="">Школам</a>
              </li>
            </ul>
          </div>
          <div class="main-footer-col">
            <b>О нас</b>
            <ul class="footer-col-list">
              <li>
                <a class="main-footer-text" href="">О продукте</a>
              </li>
              <li>
                <a class="main-footer-text" href="">Отзывы</a>
              </li>
              <li>
                <a class="main-footer-text" href="">Оферта</a>
              </li>
            </ul>
          </div>
          <div class="main-footer-col">
            <b>Контакты</b>
            <ul class="footer-col-list">
              <li>
                <a class="main-footer-text" href="mailto:info@iqra.edu">info@iqra.edu</a>
              </li>
              <li>
                <a class="main-footer-text" href="tel:+77777777777">+7 (777) 777-77-77</a>
              </li>
              <li>
                <p class="main-footer-text">National Foundation Center, ул. Маркова, 61/1, Алматы, Казахстан</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import socialList from "@/jsons/socialList";
import programs from "@/jsons/programs";
import { useAuthStore } from "@/stores/auth";
import VAccordianFull from "@/views/VLandingPage/components/VAccordianFull";
import FAQ from "@/components/VAccordian";
import faq from "@/jsons/faq";

export default {
  name: "VLandingPage",
  components: {VAccordianFull,FAQ},
  setup() {
    const authStore = useAuthStore()
    return {
      authStore
    }
  },

  el: '#mouse',
  data() {
    return {
      socialList: socialList,
      showByIndex: null,
      index: 0,
      faqs: faq,
      programs: programs,
      image: null,
      countDownToTime : new Date("Sep 26, 2023 00:00:00").getTime(),
      timerOutput:  null
    }
  },
  methods: {
    redirectToLogin() {
      if(!this.authStore.isLoggedIn) {
        this.$router.push({name: 'VLogin'})
      } else {
        this.$router.push({name: 'VAdmin'})
      }
    },
    scrollToElement(id) {
      const container = document.getElementById(id);
      container.scrollIntoView({behavior: 'smooth'});
    },
    toggleOpen: function (index) {
      this.programs = this.programs.map((program, i) => {
        if (index == i) {
          program.open = !program.open;
        } else {
          program.open = false
        }
        return program;
      })
    },
    toggleOpenFaq: function (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index == i) {
          faq.open = !faq.open;
        } else {
          faq.open = false
        }
        return faq;
      })
    },
    startTimer: function () {
      const timeNow = new Date().getTime();
      const timeDifference = this.countDownToTime - timeNow;
      const millisecondsInOneSecond = 1000;
      const millisecondsInOneMinute = millisecondsInOneSecond * 60;
      const millisecondsInOneHour = millisecondsInOneMinute * 60;
      const millisecondsInOneDay = millisecondsInOneHour * 24;
      const remainderDifferenceInHours = (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
      const remainderDifferenceInMinutes = (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
      const remainderDifferenceInSeconds = (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;
      const remainingHours = Math.floor(remainderDifferenceInHours);
      const remainingMinutes = Math.floor(remainderDifferenceInMinutes);
      const remainingSeconds = Math.floor(remainderDifferenceInSeconds);
      this.timerOutput = remainingHours + ": " + remainingMinutes + ": " + remainingSeconds;
    }
  },
  mounted() {
    this.redirectToLogin()
    setInterval(() => { this.startTimer() }, 1000);
  },

}
</script>

<style scoped>
</style>
