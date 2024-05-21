<template>
  <div class="main-page">
    <div class="main-header">
      <div class="container">
        <div class="main-header-row">
          <button class="menu-toggle">Меню</button>
          <button class="lang-toggle">Рус</button>
          <div class="main-header-logo">
            <img src="@/assets/img/logo/logo.svg" alt="">
          </div>
          <a class="demo-link" href="">Демо</a>
          <router-link v-if="authStore.isLoggedIn" class="auth-link" :to="{name: 'VCabinet'}">Кабинет</router-link>
          <router-link v-else class="auth-link" :to="{name: 'VLogin'}">Войти</router-link>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="container">
        <div class="intro">
          <div class="intro-caption">
            <h1>Универсальная платформа для образования.</h1>
            <div class="intro-caption-tools">
              <button class="intro-caption-btn danger ">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_388_1186)">
                    <path
                        d="M15 6.05859C9.26818 6.05859 4.07027 9.19453 0.234735 14.2881C-0.0782449 14.7054 -0.0782449 15.2884 0.234735 15.7057C4.07027 20.8054 9.26818 23.9414 15 23.9414C20.7318 23.9414 25.9297 20.8054 29.7653 15.7119C30.0782 15.2946 30.0782 14.7116 29.7653 14.2942C25.9297 9.19453 20.7318 6.05859 15 6.05859ZM15.4112 21.2964C11.6063 21.5357 8.46425 18.3998 8.70359 14.5888C8.89997 11.4467 11.4468 8.89996 14.5888 8.70358C18.3937 8.46424 21.5357 11.6002 21.2964 15.4112C21.0939 18.5471 18.5471 21.0939 15.4112 21.2964ZM15.2209 18.3875C13.1712 18.5164 11.4774 16.8288 11.6125 14.7791C11.7168 13.0853 13.0914 11.7168 14.7852 11.6063C16.8349 11.4774 18.5287 13.1651 18.3937 15.2148C18.2832 16.9147 16.9086 18.2832 15.2209 18.3875Z"
                        fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_388_1186">
                      <rect width="30" height="30" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span>Смотреть демо</span>
              </button>
              <router-link class="intro-caption-btn dark" :to="{name: 'VLogin'}">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M9 0C6.383 0 4.25391 2.1291 4.25391 4.74609C4.25391 7.36309 6.383 9.49219 9 9.49219C11.617 9.49219 13.7461 7.36309 13.7461 4.74609C13.7461 2.1291 11.617 0 9 0ZM14.9051 12.5928C13.6057 11.2734 11.8831 10.5469 10.0547 10.5469H7.94531C6.11691 10.5469 4.39432 11.2734 3.09495 12.5928C1.80193 13.9057 1.08984 15.6387 1.08984 17.4727C1.08984 17.7639 1.32595 18 1.61719 18H16.3828C16.674 18 16.9102 17.7639 16.9102 17.4727C16.9102 15.6387 16.1981 13.9057 14.9051 12.5928Z"
                      fill="white"/>
                </svg>
                <span>Войти в аккаунт</span>
              </router-link>
            </div>
          </div>
          <div class="intro-img">
            <img src="@/assets/img/main/intro-img.png" alt="">
          </div>
        </div>
        <div class="info-slider">
          <div class="info-slider-nav">
            <ul class="slider-nav-list">
              <li>
                <p data-id="1" @mouseover="switchImage(1)">Видео-уроки
                </p>
              </li>
              <li>
                <p data-id="2" @mouseover="switchImage(2)">Групповые звонки
                </p>
              </li>
              <li>
                <p @mouseover="switchImage(3)">Домашние задания
                </p></li>
              <li>
                <p @mouseover="switchImage(4)">Конструктор тестов
                </p></li>
              <li>
                <p @mouseover="switchImage(5)">Автопроктори
                </p></li>
              <li>
                <p>И многое другое
                  <span>
                </span>
                </p></li>
            </ul>
          </div>
          <div class="info-slider-item">
            <img v-if="image" :key="image.id" class="image" :src="image.src" alt="image.alt">
          </div>
        </div>
        <div class="info-role">
          <div class="role-title">
            <h1>Подойдет, если вы</h1>
          </div>
          <div class="role-school" @mouseover="showByIndex = 1" @mouseout="showByIndex = null">
            <p class="role-card-title text-light">ВУЗ/Школа/Бизнес</p>
            <p class="role-card-subtitle">Обучайте всем предметам, создавайте классы и следите за успеваемостью</p>
            <div class="role-card-footer">
              <transition name="fade">
                <a v-show="showByIndex === 1">
                  <span>Демо »</span>
                </a>
              </transition>
              <img src="@/assets/img/main/School.png" alt="">
            </div>
          </div>
          <div class="role-course" @mouseover="showByIndex = 2" @mouseout="showByIndex = null">
            <p class="role-card-title text-light">Курс</p>
            <p class="role-card-subtitle">Запишите лекции, проводите вебинары и дарите сертификаты</p>
            <div class="role-card-footer">
              <transition name="fade">
                <a v-show="showByIndex === 2">
                  <span>Демо »</span>
                </a>
              </transition>
              <img src="@/assets/img/main/Office_worker.png" alt="">
            </div>
          </div>
          <div class="role-teacher" @mouseover="showByIndex = 3" @mouseout="showByIndex = null">
            <p class="role-card-title text-light">Учитель</p>
            <p class="role-card-subtitle">Делитесь расписанием, ставьте дедлайны и проводите видео-занятия с
              учениками</p>
            <div class="role-card-footer">
              <transition name="fade">
                <a v-show="showByIndex === 3">
                  <span>Демо »</span>
                </a>
              </transition>
              <img src="@/assets/img/main/Teacher.png" alt="">
            </div>
          </div>
          <div class="role-student" @mouseover="showByIndex = 4" @mouseout="showByIndex = null">
            <p class="role-card-title text-light">Ученик</p>
            <p class="role-card-subtitle">Обучайтесь у лучших преподавателей, выбирайте понравившиеся курсы и получайте
              бонусы</p>
            <div class="role-card-footer">
              <transition name="fade">
                <a v-show="showByIndex === 4">
                  <span>Демо »</span>
                </a>
              </transition>
              <img src="@/assets/img/main/Technologist.png" alt="">
            </div>
          </div>
          <div class="role-parent" @mouseover="showByIndex = 5" @mouseout="showByIndex = null">
            <p class="role-card-title text-light">Родитель</p>
            <p class="role-card-subtitle">Следите за успеваемостью ребенка, находите полезные курсы для себя</p>
            <div class="role-card-footer">
              <transition name="fade">
                <a v-show="showByIndex === 5">
                  <span>Демо »</span>
                </a>
              </transition>
              <img src="@/assets/img/main/Office_worker_man.png" alt="">
            </div>
          </div>
        </div>
        <div class="info-reason">
          <div class="reason-f-row">
            <p>Причины выбрать iqra</p>
            <button class="intro-caption-btn danger ">
              <span>Попробуйте сами</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
                <path
                    d="M6.11345 0H9.60084L15 5.4786L9.60084 11H6.11345L9.7479 7.31907V6.76265H0V4.21595H9.7479V3.65953L6.11345 0Z"
                    fill="white"/>
              </svg>
            </button>
          </div>
          <div class="reason-s-row">
            <div class="reason-card-group">
              <div class="reason-card">
                <div class="reason-card-title">
                  <p>Удобная видеосвязь</p>
                </div>
                <div class="reason-card-subtitle">
                  <p>50 минут бесплатно, 0.1 секунда задержки, интерактивная доска и быстрый чат</p>
                </div>
                <p class="reason-card-num">01</p>
              </div>
              <div class="reason-card">
                <div class="reason-card-title">
                  <p>На любом устройстве</p>
                </div>
                <div class="reason-card-subtitle">
                  <p>50 минут бесплатно, 0.1 секунда задержки, интерактивная доска и быстрый чат</p>
                </div>
                <p class="reason-card-num">02</p>
              </div>
              <div class="reason-card">
                <div class="reason-card-title">
                  <p>В любое время</p>
                </div>
                <div class="reason-card-subtitle">
                  <p>50 минут бесплатно, 0.1 секунда задержки, интерактивная доска и быстрый чат</p>
                </div>
                <p class="reason-card-num">03</p>
              </div>
              <div class="reason-card">
                <div class="reason-card-title">
                  <p>Конструктор заданий</p>
                </div>
                <div class="reason-card-subtitle">
                  <p>50 минут бесплатно, 0.1 секунда задержки, интерактивная доска и быстрый чат</p>
                </div>
                <p class="reason-card-num">04</p>
              </div>
              <div class="reason-card">
                <div class="reason-card-title">
                  <p>Автопроктор</p>
                </div>
                <div class="reason-card-subtitle">
                  <p>50 минут бесплатно, 0.1 секунда задержки, интерактивная доска и быстрый чат</p>
                </div>
                <p class="reason-card-num">05</p>
              </div>
            </div>
          </div>
        </div>

        <div class="info-review">
          <div class="info-review-block-1">
            <p>Что говорят клиенты</p>
          </div>
          <div class="info-review-block-2">
            <div class="review_card">
              <img src="@/assets/img/main/review_01.png" alt="">
              <div class="review-card-footer">
                <p>Сабина, ученица</p>
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="58" height="58" rx="29" fill="white"/>
                  <path
                      d="M34.6378 23.6127C38.9641 26.007 41.1273 27.2042 41.1273 29C41.1273 30.7957 38.9641 31.9929 34.6378 34.3873L29.7706 37.0809C25.4443 39.4753 23.2811 40.6725 21.6588 39.7746C20.0364 38.8767 20.0364 36.4823 20.0364 31.6936L20.0364 26.3063C20.0364 21.5176 20.0364 19.1232 21.6588 18.2254C23.2811 17.3275 25.4443 18.5247 29.7706 20.919L34.6378 23.6127Z"
                      fill="#3EC9C1"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="info-review-block-3">
            <div class="review-card">
              <img src="@/assets/img/main/review_02.png" alt="">
              <div class="review-card-footer">
                <p>Арман, репетитор</p>
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="58" height="58" rx="29" fill="white"/>
                  <path
                      d="M34.6378 23.6127C38.9641 26.007 41.1273 27.2042 41.1273 29C41.1273 30.7957 38.9641 31.9929 34.6378 34.3873L29.7706 37.0809C25.4443 39.4753 23.2811 40.6725 21.6588 39.7746C20.0364 38.8767 20.0364 36.4823 20.0364 31.6936L20.0364 26.3063C20.0364 21.5176 20.0364 19.1232 21.6588 18.2254C23.2811 17.3275 25.4443 18.5247 29.7706 20.919L34.6378 23.6127Z"
                      fill="#3EC9C1"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="info-review-block-4">
            <div class="review_card">
              <img src="@/assets/img/main/review_03.png" alt="">
              <div class="review-card-footer">
                <p>Акбота, автор курса</p>
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="58" height="58" rx="29" fill="white"/>
                  <path
                      d="M34.6378 23.6127C38.9641 26.007 41.1273 27.2042 41.1273 29C41.1273 30.7957 38.9641 31.9929 34.6378 34.3873L29.7706 37.0809C25.4443 39.4753 23.2811 40.6725 21.6588 39.7746C20.0364 38.8767 20.0364 36.4823 20.0364 31.6936L20.0364 26.3063C20.0364 21.5176 20.0364 19.1232 21.6588 18.2254C23.2811 17.3275 25.4443 18.5247 29.7706 20.919L34.6378 23.6127Z"
                      fill="#3EC9C1"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="info-payment">
          <div class="info-payment-card-group">
            <div class="div1">Тарифы</div>
            <div class="div2">
              <div class="payment-card blue-outline-card" @mouseover="showByIndex = 5" @mouseout="showByIndex = null">
                <p class="payment-card-title">Базовый</p>
                <p class="payment-card-subtitle">Подойдет репетиторам</p>
                <ul class="payment-card-list opacity">
                  <li>+ Видео-звонки по 50 минут</li>
                  <li>+ Составление расписания</li>
                  <li>+ 5 видов тестирования</li>
                  <li>+ До 3 учеников</li>
                  <li>+ Домашние задания</li>
                </ul>

                <div class="payment-card-footer">
                  <p class="price">Бесплатно</p>
                  <transition name="fade">
                    <button v-show="showByIndex === 5" class="outline-btn ">
                      <span>Мне подходит »</span>
                    </button>
                  </transition>
                </div>
              </div>
            </div>
            <div class="div3">
              <div class="payment-card  blue-filled-card" @mouseover="showByIndex = 6" @mouseout="showByIndex = null">
                <p class="payment-card-title">Стандарт</p>
                <p class="payment-card-subtitle">Подойдет для курсов</p>
                <ul class="payment-card-list">
                  <li class="opacity">+ Все Базовые функции</li>
                  <li>+ Безлимитные видео-звонки</li>
                  <li>+ Собственный поддомен</li>
                  <li>+ 10 видов тестирования</li>
                  <li>+ До 50 учеников и учителей</li>
                  <li>+ Автопроктор</li>
                </ul>
                <div class="payment-card-footer">
                  <p class="price">от 100000тг<span class="opacity"> /год</span></p>

                  <transition name="fade">
                    <button v-show="showByIndex === 6" class="outline-btn light-outline ">
                      <span>Мне подходит »</span>
                    </button>

                  </transition>
                </div>
              </div>
            </div>
            <div class="div4">
              <div class="payment-card  dark-filled-card" @mouseover="showByIndex = 7" @mouseout="showByIndex = null">
                <p class="payment-card-title">Премиум</p>
                <p class="payment-card-subtitle">Подойдет ВУЗ-ам, школам и бизнесу</p>
                <ul class="payment-card-list">
                  <li class="opacity">+ Все Базовые и Стандартные функции</li>
                  <li>+ Моментальная тех. поддержка</li>
                  <li>+ Собственный домен</li>
                  <li>+ 20 видов тестирования</li>
                  <li>+ до 1000 пользователей</li>
                  <li>+ Сертификаты</li>
                </ul>

                <div class="payment-card-footer">
                  <p class="price">от 300000тг<span class="opacity"> /год</span></p>
                  <transition name="fade">

                    <button v-show="showByIndex === 7" class="outline-btn light-outline dark-brd">
                      <span>Мне подходит »</span>
                    </button>
                  </transition>
                </div>
              </div>
            </div>
          </div>
          <button class="payment-btn">
            <span>Нужен уникальный тариф?</span>
          </button>
        </div>

        <div class="info-help">
          <div class="faq-block">
            <p>Часто спрашивают</p>
            <br>
            <FAQ v-for="(faq, i) in faqs" :faq="faq" :length="faqs.length" :index="i" :key="i"

                 :open="faq.open"
                 @toggleOpen="toggleOpen"
            ></FAQ>
          </div>
          <div class="contact-us-block">
            <div class="contact-us-card">
              <div class="contact-us-card-title text-light">
                <p>Напишите нам</p>
              </div>
              <div class="contact-us-card-subtitle text-light opacity">
                <p>Не нашли ответа на свой вопрос? Оставьте свои контакты, и мы свяжемся через несколько минут </p>
              </div>
              <div>
                <form class="contact-us-card-form">
                  <input type="text" id="fname" name="fname" placeholder="Ваше имя">
                  <input type="text" id="lname" name="lname" placeholder="Номер телефона">
                  <input type="text" id="lname" name="lname" placeholder="О чем вопрос?">
                </form>
              </div>
              <div class="contact-us-card-hint text-light opacity">
                <p>Нажимая на кнопку «Отправить», вы даете согласие на обработку ваших данных. Подробнее</p>
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
import faq from "@/jsons/faq";
import sliderImages from "@/jsons/sliderImages";
import FAQ from "@/components/VAccordian";
import { useAuthStore } from "@/stores/auth";

export default {
  name: "VMainPage",

  setup() {
    const authStore = useAuthStore()
    return {
      authStore
    }
  },

  el: '#mouse',
  components: {
    FAQ
  },
  data() {
    return {
      socialList: socialList,
      showByIndex: null,
      faqs: faq,
      sliderImages: sliderImages,
      index: 0,
      image: null,
    }
  },

  mounted() {
    this.switchImage();
    this.image = this.sliderImages[0];
  },
  methods: {
    switchImage(i) {
      this.image = this.sliderImages[i - 1];
      this.index = i - 1;
    },
    toggleOpen: function (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index == i) {
          faq.open = !faq.open;
        } else {
          faq.open = false
        }
        return faq;
      })
    },
  }
}
</script>

<style scoped>
</style>
