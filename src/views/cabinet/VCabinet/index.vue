<template>
  <div class="row">
    <div class="col col-2">
<!--      <div class="active-course">-->
<!--        <b class="title-xs">Продолжить просмотр</b>-->
<!--        <div class="active-course-list">-->
<!--          <div class="active-course-container">-->
<!--            <div class="active-course-container-img">-->
<!--              <img src="@/assets/img/main/review_03.png" alt="">-->
<!--              <span class="play-btn"></span>-->
<!--            </div>-->
<!--            <div class="active-course-container-caption">-->
<!--              <span>Pre-Intermediate</span>-->
<!--              <b>4.1 Future Simple</b>-->
<!--            </div>-->
<!--            <a href="#" class="absolute-link"></a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="cabinet-notification student-cabinet-notification">-->
<!--        <b class="title-xs">Уведомления</b>-->
<!--        <div class="cabinet-notification-list">-->
<!--          <div class="cabinet-notification-item">-->
<!--            <b>Оставьте отзыв</b>-->
<!--            <p>Для повышения качества наших курсов просим вас оставить отзыв</p>-->
<!--            <a href="#" class="absolute-link"></a>-->
<!--          </div>-->
<!--          <div class="cabinet-notification-item">-->
<!--            <b>Оставьте отзыв</b>-->
<!--            <p>Для повышения качества наших курсов просим вас оставить отзыв</p>-->
<!--            <a href="#" class="absolute-link"></a>-->
<!--          </div>-->
<!--          <div class="cabinet-notification-item">-->
<!--            <b>Оставьте отзыв</b>-->
<!--            <p>Для повышения качества наших курсов просим вас оставить отзыв</p>-->
<!--            <a href="#" class="absolute-link"></a>-->
<!--          </div>-->
<!--        </div>-->
<!--        <v-button size="btn-md" type="btn-primary" @click="handleGoNotification">Открыть все</v-button>-->
<!--        <div class="cabinet-notification-item cabinet-notification-empty" v-if="false">Пока тихо 🤷🏻‍♀️‍</div>-->
<!--      </div>-->
    </div>
    <div class="col col-8">
<!--      <div class="offer">-->
<!--        <b class="title-xs">Специально для вас</b>-->
<!--        <div class="offer-list">-->
<!--          <div class="offer-item" style="background: #D095FF">-->
<!--            <div class="offer-img">-->
<!--              <img src="@/assets/img/main/percent.png" alt="">-->
<!--            </div>-->
<!--            <div class="offer-text">Скидка 50% на все курсы</div>-->
<!--            <i class="i-right-square"></i>-->
<!--            <a href="" class="absolute-link"></a>-->
<!--          </div>-->
<!--          <div class="offer-item" style="background: #FFB800">-->
<!--            <div class="offer-img">-->
<!--              <img src="@/assets/img/main/present-box.png" alt="">-->
<!--            </div>-->
<!--            <div class="offer-text">Бесплатные курсы</div>-->
<!--            <i class="i-right-square"></i>-->
<!--            <a href="" class="absolute-link"></a>-->
<!--          </div>-->
<!--          <div class="offer-item" style="background: #5FC5FF">-->
<!--            <div class="offer-img">-->
<!--              <img src="@/assets/img/main/certificate.png" alt="">-->
<!--            </div>-->
<!--            <div class="offer-text">Дарим Сертификат</div>-->
<!--            <i class="i-right-square"></i>-->
<!--            <a href="" class="absolute-link"></a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="my-course">
        <b class="title-xs">Мои курсы</b>
        <div class="my-course-list" v-if="myCourseList && myCourseList.length">
          <v-course-card
              v-for="(item, itemIdx) in myCourseList"
              :key="itemIdx"
              :categoryName="item.course_category?.name"
              :name="item.name"
              :id="item.id"
              :image="item.image"
              :lesson-count="item.lessons_count"
          />
<!--          <a href="#" @click="openPaymentModal" class="my-course-link">Все курсы →</a>-->
        </div>
        <div class="my-course-empty" v-else>
          У вас пока нет курсов
        </div>
      </div>
      <div class="my-news">
        <b class="title-xs">Новости</b>
        <div class="my-news-list">
          <v-news-card
            v-for="(item, itemIdx) in newsList"
            :key="itemIdx"
            :item="item"
          />
        </div>
      </div>
    </div>
    <div class="col col-2">
<!--      <div class="plan">-->
<!--        <b class="title-xs">Задачи на сегодня</b>-->
<!--        <div class="plan-container">-->
<!--          <div class="plan-item">-->
<!--            <label class="checkbox-item">-->
<!--              <input type="checkbox">-->
<!--              <span class="checkbox-item-text">Выполнить домашку</span>-->
<!--              <span class="checkmark"></span>-->
<!--            </label>-->
<!--            <div class="plan-item-detail">-->
<!--              <div class="plan-item-meta plan-item-time">до 18:00</div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="plan-item">-->
<!--            <label class="checkbox-item">-->
<!--              <input type="checkbox">-->
<!--              <span class="checkbox-item-text">Покормить своего пёсика</span>-->
<!--              <span class="checkmark"></span>-->
<!--            </label>-->
<!--            <div class="plan-item-detail">-->
<!--              <div class="plan-item-meta plan-item-time">до 18:00</div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="plan-item">-->
<!--            <label class="checkbox-item">-->
<!--              <input type="checkbox">-->
<!--              <span class="checkbox-item-text">Купить еще курс</span>-->
<!--              <span class="checkmark"></span>-->
<!--            </label>-->
<!--            <div class="plan-item-detail">-->
<!--              <div class="plan-item-meta plan-item-time">до 18:00</div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="plan-item">-->
<!--            <label class="checkbox-item">-->
<!--              <input type="checkbox">-->
<!--              <span class="checkbox-item-text">Очень длинная задача, которая не помаещается в 3 строчки</span>-->
<!--              <span class="checkmark"></span>-->
<!--            </label>-->
<!--            <div class="plan-item-detail">-->
<!--              <div class="plan-item-meta plan-item-time">до 18:00</div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="plan-item">-->
<!--            <button class="add-plan-btn">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">-->
<!--                <path d="M10 2V17" stroke="#BFBFBF" stroke-width="2" stroke-linecap="round"/>-->
<!--                <path d="M17.5 9.5L2.5 9.5" stroke="#BFBFBF" stroke-width="2" stroke-linecap="round"/>-->
<!--              </svg>-->
<!--              Добавить задачу-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="plan">-->
<!--        <b class="title-xs" >Прошлые задачи</b>-->
<!--        <div class="plan-container">-->
<!--          <div class="plan-item">-->
<!--            <label class="checkbox-item">-->
<!--              <input type="checkbox">-->
<!--              <span class="checkbox-item-text">Закончить курс</span>-->
<!--              <span class="checkmark"></span>-->
<!--            </label>-->
<!--            <div class="plan-item-detail">-->
<!--              <div class="plan-item-meta plan-item-date">21.08.2023</div>-->
<!--              <div class="plan-item-meta plan-item-time">до 18:00</div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="plan-item">-->
<!--            <label class="checkbox-item">-->
<!--              <input type="checkbox">-->
<!--              <span class="checkbox-item-text">Закончить курс</span>-->
<!--              <span class="checkmark"></span>-->
<!--            </label>-->
<!--            <div class="plan-item-detail">-->
<!--              <div class="plan-item-meta plan-item-date">21.08.2023</div>-->
<!--              <div class="plan-item-meta plan-item-time">до 18:00</div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="plan-item">-->
<!--            <label class="checkbox-item">-->
<!--              <input type="checkbox">-->
<!--              <span class="checkbox-item-text">Закончить курс</span>-->
<!--              <span class="checkmark"></span>-->
<!--            </label>-->
<!--            <div class="plan-item-detail">-->
<!--              <div class="plan-item-meta plan-item-date">21.08.2023</div>-->
<!--              <div class="plan-item-meta plan-item-time">до 18:00</div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="plan-item">-->
<!--            <label class="checkbox-item">-->
<!--              <input type="checkbox">-->
<!--              <span class="checkbox-item-text">Закончить курс</span>-->
<!--              <span class="checkmark"></span>-->
<!--            </label>-->
<!--            <div class="plan-item-detail">-->
<!--              <div class="plan-item-meta plan-item-date">21.08.2023</div>-->
<!--              <div class="plan-item-meta plan-item-time">до 18:00</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import VNewsCard from '@/components/VNewsCard';
import VCourseCard from '@/components/VCourseCard'

export default {
  name: "VCabinet",

  components: {
    VNewsCard,
    VCourseCard
  },

  data() {
    return {
      newsList: [],
      myCourseList: [],
    }
  },

  mounted() {
    this.fetchMyCourses();
    this.fetchNews();
  },

  methods: {
    fetchNews() {
      this.API.news.getList()
          .then((res) => {
            this.newsList = res?.data.items
          })
    },
    fetchMyCourses() {
      this.API.course.getClientCourseList()
          .then((res) => {
            this.myCourseList = res?.data.group_courses.concat(res?.data.personal_courses)
          })
    },

    // openPaymentModal() {
    //   this.vGlModal.show({
    //     modalName: 'v-payment-modal',
    //     modalTitle: '',
    //     modalWidth: 640,
    //     component: 'v-payment-modal',
    //     componentProps: {
    //       openPaymentModal: () => {
    //       },
    //     }
    //   })
    // }
  }
}
</script>

<style scoped>



</style>
