<template>
  <div class="row">
    <div class="col col-2">
      <div class="cabinet-notification">
        <b class="title-xs">Уведомления</b>
        <div class="cabinet-notification-list">
          <div class="cabinet-notification-item">
            <b>+1 пользователь</b>
            <p>Ирина Николаева создал(-а) аккаунт</p>
            <a href="#" class="absolute-link"></a>
          </div>
          <div class="cabinet-notification-item">
            <b>+1 продажа</b>
            <p>Арман Юсупов купил(-а) курс “Английский язык Pre-Intermediate” </p>
            <a href="#" class="absolute-link"></a>
          </div>
          <div class="cabinet-notification-item">
            <b>+1 пользователь</b>
            <p>Арман Юсупов создал(-а) аккаунт</p>
            <a href="#" class="absolute-link"></a>
          </div>
        </div>
        <v-button size="btn-md" type="btn-primary" @click="handleGoNotification">Открыть все</v-button>
        <div class="cabinet-notification-item cabinet-notification-empty" v-if="false">Пока тихо 🤷🏻‍♀️‍</div>
      </div>
    </div>
    <div class="col col-8">
      <div class="attendance-wrapper">
        <b class="title-xs">Посещаемость</b>
        <div class="attendance-container">
          <div class="attendance-container-header">
            <v-dropdown class="data-container-sort">
              <template #base>
                <button class="data-sort-toggle">Выберите период</button>
              </template>
              <template #dropdown="{ handleShow }">
                <div class="data-sort-list">
                  <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">1 месяц</a>
                  <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">3 месяца</a>
                  <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">пол года</a>
                  <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">за год</a>
                </div>
              </template>
            </v-dropdown>
            <v-dropdown class="data-container-sort">
              <template #base>
                <button class="data-sort-toggle">Казахстан</button>
              </template>
              <template #dropdown="{ handleShow }">
                <div class="data-sort-list">
                  <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">Россия</a>
                  <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">Узбекистан</a>
                  <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">Кыргызстан</a>
                </div>
              </template>
            </v-dropdown>
            <div class="attendance-data">
              <div class="attendance-data-item info">
                <span>Новых пользователей:</span>
                <p>114627</p>
              </div>
              <div class="attendance-data-item primary">
                <span>Средний возраст:</span>
                <p>25.5</p>
              </div>
              <div class="attendance-data-item warning">
                <span>Час пик:</span>
                <p>18:30</p>
              </div>
            </div>
          </div>
          <div class="attendance-diagram">
            <v-attendance />
          </div>
        </div>
      </div>
      <div class="data-containers-wrapper">
        <div class="data-container-col">
          <b class="title-xs">Активные пользователи</b>
          <div class="data-container">
            <div class="data-container-header">
              <div class="data-container-numbers">
                <span>Сейчас на сайте:</span>
                <b>156 708</b>
              </div>
              <v-dropdown class="data-container-sort">
                <template #base>
                  <button class="data-sort-toggle">Выберите период</button>
                </template>
                <template #dropdown="{ handleShow }">
                  <div class="data-sort-list">
                    <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">1 месяц</a>
                    <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">3 месяца</a>
                    <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">пол года</a>
                    <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">за год</a>
                  </div>
                </template>
              </v-dropdown>
            </div>
            <div class="data-container-content">
              <div class="user-badge-sm">
                <img src="" alt="">
                <div class="user-badge-sm-caption">
                  <p>Разия Абуталипова</p>
                  <ul>
                    <li>18 лет, Женщина, Алматы, Казахстан</li>
                  </ul>
                </div>
              </div>
              <div class="user-badge-sm">
                <img src="" alt="">
                <div class="user-badge-sm-caption">
                  <p>Разия Абуталипова</p>
                  <ul>
                    <li>18 лет, Женщина, Алматы, Казахстан</li>
                  </ul>
                </div>
              </div>
              <div class="user-badge-sm">
                <img src="" alt="">
                <div class="user-badge-sm-caption">
                  <p>Разия Абуталипова</p>
                  <ul>
                    <li>18 лет, Женщина, Алматы, Казахстан</li>
                  </ul>
                </div>
              </div>
              <v-button type="btn-info-light">Все пользователи</v-button>
            </div>
          </div>
        </div>
        <div class="data-container-col">
          <b class="title-xs">Продажи</b>
          <div class="data-container">
            <div class="data-container-header">
              <div class="data-container-numbers">
                <span>Прибыль за сегодня</span>
                <b>+321 415 632 тг</b>
              </div>
              <v-dropdown class="notification data-container-sort">
                <template #base>
                  <button class="data-sort-toggle">Выберите период</button>
                </template>
                <template #dropdown="{ handleShow }">
                  <div class="data-sort-list">
                    <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">1 месяц</a>
                    <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">3 месяца</a>
                    <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">пол года</a>
                    <a href="" class="data-sort-link" @click.prevent="handleClick(1, handleShow)">за год</a>
                  </div>
                </template>
              </v-dropdown>
            </div>
            <div class="data-container-content">
              <div class="earnings-list">
                <div class="earning-item success">
                  <b>+20 000 тг</b>
                  <p>Продажа курса “Английский язык Pre-Intermediate”</p>
                </div>
                <div class="earning-item danger">
                  <b>-20 000 тг</b>
                  <p>Возврат курса “Английский язык Upper-Intermediate”</p>
                </div>
                <div class="earning-item success">
                  <b>+20 000 тг</b>
                  <p>Продажа курса “Английский язык Pre-Intermediate”</p>
                </div>
                <div class="earning-item danger">
                  <b>-20 000 тг</b>
                  <p>Возврат курса “Английский язык Upper-Intermediate”</p>
                </div>
                <div class="earning-item success">
                  <b>+20 000 тг</b>
                  <p>Продажа курса “Английский язык Pre-Intermediate”</p>
                </div>
                <div class="earning-item danger">
                  <b>-20 000 тг</b>
                  <p>Возврат курса “Английский язык Upper-Intermediate”</p>
                </div>
                <div class="earning-item success">
                  <b>+20 000 тг</b>
                  <p>Продажа курса “Английский язык Pre-Intermediate”</p>
                </div>
                <div class="earning-item danger">
                  <b>-20 000 тг</b>
                  <p>Возврат курса “Английский язык Upper-Intermediate”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-2">
      <div class="adding">
        <b class="title-xs">Добавить</b>
        <div class="adding-list">
          <router-link class="adding-item primary" :to="{name: 'VAdminNewsAdd'}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Frame2" clip-path="url(#clip0_1128_14202)">
                <g id="Group">
                  <path id="Vector" d="M17.7195 10.4629C18.2963 10.0764 18.71 9.49966 18.8923 8.81909C19.0917 8.07518 18.9906 7.30024 18.6076 6.63701C18.2247 5.97377 17.6042 5.49874 16.8603 5.29938C16.1797 5.11704 15.4734 5.18688 14.8502 5.49316L13.2445 2.71193C12.9027 2.11985 12.2887 1.77476 11.607 1.78638C10.9236 1.7989 10.3245 2.16701 10.0045 2.77108C9.77976 3.19549 9.56868 3.63635 9.34523 4.10313C8.43449 6.00555 7.40226 8.1618 5.17068 9.45021L2.3032 11.1057C1.31615 11.6756 0.609135 12.5994 0.312322 13.707C0.0155569 14.8146 0.165932 15.9682 0.735791 16.9552C1.52803 18.3274 2.97037 19.0954 4.45148 19.0954C5.00225 19.0956 5.54782 18.9887 6.05784 18.7808L8.06245 22.2529C8.4772 22.9713 9.23207 23.3732 10.0074 23.3732C10.3996 23.3733 10.7849 23.2699 11.1244 23.0734C11.6413 22.7749 12.0115 22.2914 12.1668 21.7118C12.322 21.1323 12.2432 20.5284 11.9448 20.0115L9.97227 16.595C12.049 15.6077 14.2288 15.7752 16.1696 15.9252C16.686 15.9652 17.1737 16.0029 17.654 16.0204C18.3362 16.0449 18.9555 15.7107 19.308 15.1249C19.6606 14.5392 19.667 13.8362 19.3252 13.2441L17.7194 10.4628L17.7195 10.4629ZM16.5569 6.43132C16.9985 6.54963 17.3664 6.83074 17.5928 7.22294C18.0299 7.98002 17.8181 8.93627 17.1315 9.44449L15.4383 6.51166C15.7888 6.35946 16.1792 6.33007 16.557 6.43132H16.5569ZM4.44956 17.9239C3.37387 17.9238 2.32612 17.366 1.75073 16.3693C1.33739 15.6534 1.22854 14.8156 1.44435 14.0104C1.66012 13.2051 2.17326 12.534 2.88918 12.1206L5.24948 10.7579L8.36263 16.1434L5.99948 17.5078C5.51085 17.7899 4.97695 17.9239 4.44956 17.9239ZM11.0349 21.4086C10.9606 21.6858 10.7843 21.9166 10.5385 22.0586C10.0277 22.3534 9.37228 22.1779 9.07734 21.6671L7.09279 18.2297L8.94538 17.1601L10.9299 20.5975C11.0719 20.8433 11.1091 21.1314 11.0348 21.4086H11.0349ZM18.3041 14.5207C18.1708 14.7421 17.9559 14.8594 17.6969 14.8494C17.2404 14.8327 16.7642 14.7959 16.2599 14.7569C14.142 14.5933 11.7607 14.4098 9.3876 15.5749L6.25429 10.1546C8.45254 8.68043 9.48473 6.52577 10.4023 4.60919C10.6204 4.15343 10.8265 3.72293 11.0401 3.31962C11.1611 3.09119 11.37 2.9628 11.6285 2.95812L11.6431 2.95798C11.8949 2.95798 12.1028 3.0783 12.2296 3.29791L18.3104 13.8302C18.4397 14.054 18.4375 14.2993 18.3041 14.5207L18.3041 14.5207ZM16.782 3.01591L17.992 0.920038C18.1538 0.639772 18.5121 0.543725 18.7924 0.705584C19.0727 0.867397 19.1687 1.22576 19.0069 1.50598L17.7968 3.60185C17.7584 3.66851 17.7072 3.72693 17.6461 3.77379C17.5851 3.82065 17.5154 3.85502 17.4411 3.87493C17.3668 3.89485 17.2892 3.89992 17.2129 3.88986C17.1366 3.8798 17.0631 3.85481 16.9964 3.8163C16.7162 3.65449 16.6202 3.29613 16.782 3.01591ZM22.222 5.22682L20.0754 6.46619C20.0088 6.50469 19.9352 6.52968 19.8589 6.53974C19.7826 6.54979 19.7051 6.54472 19.6308 6.5248C19.5564 6.50489 19.4867 6.47052 19.4257 6.42367C19.3647 6.37682 19.3135 6.31839 19.275 6.25174C19.1132 5.97148 19.2092 5.61312 19.4894 5.45135L21.636 4.21198C21.9162 4.05012 22.2746 4.14621 22.4364 4.42643C22.5982 4.70665 22.5022 5.06505 22.222 5.22682ZM23.8368 9.44266C23.8368 9.76624 23.5745 10.0286 23.2509 10.0286H20.8307C20.5072 10.0286 20.2448 9.76629 20.2448 9.44266C20.2448 9.11904 20.5072 8.85673 20.8307 8.85673H23.2509C23.5745 8.85673 23.8368 9.11904 23.8368 9.44266Z" fill="white" stroke="white" stroke-width="0.3"/>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1128_14202">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span>Новость</span>
          </router-link>
          <router-link class="adding-item success" :to="{name: 'VAdminCourseAdd'}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.1137 16.0553C20.898 16.0553 20.6911 15.9696 20.5385 15.817C20.386 15.6645 20.3003 15.4576 20.3003 15.2418V9.81882C20.3003 9.60308 20.386 9.39618 20.5385 9.24363C20.6911 9.09107 20.898 9.00537 21.1137 9.00537C21.3295 9.00537 21.5364 9.09107 21.6889 9.24363C21.8415 9.39618 21.9272 9.60308 21.9272 9.81882V15.2418C21.9272 15.4576 21.8415 15.6645 21.6889 15.817C21.5364 15.9696 21.3295 16.0553 21.1137 16.0553Z" fill="white"/>
              <path d="M21.3035 8.63331L13.4488 4.26995C13.0061 4.0225 12.5074 3.89258 12.0003 3.89258C11.4932 3.89258 10.9945 4.0225 10.5518 4.26995L2.69711 8.63331C2.48617 8.75115 2.3105 8.92314 2.18822 9.13153C2.06593 9.33992 2.00146 9.57716 2.00146 9.81878C2.00146 10.0604 2.06593 10.2976 2.18822 10.506C2.3105 10.7144 2.48617 10.8864 2.69711 11.0043L4.67976 12.1051V17.411C4.67976 19.4609 8.47479 20.3937 12.0008 20.3937C15.5269 20.3937 19.3219 19.4609 19.3219 17.411V12.1051L21.3046 11.0043C21.5155 10.8864 21.6912 10.7144 21.8134 10.506C21.9357 10.2976 22.0002 10.0604 22.0002 9.81878C22.0002 9.57716 21.9357 9.33992 21.8134 9.13153C21.6912 8.92314 21.5155 8.75115 21.3046 8.63331H21.3035ZM17.6961 17.3958C17.5833 17.7733 15.6603 18.7668 12.0008 18.7668C8.34138 18.7668 6.41838 17.7733 6.30667 17.411V13.0086L10.5529 15.3665C11.0063 15.6182 11.5041 15.7451 12.0008 15.7451C12.4976 15.7451 12.9954 15.6192 13.4488 15.3665L17.695 13.0086V17.3969L17.6961 17.3958ZM12.6581 13.9446C12.246 14.1735 11.7546 14.1735 11.3425 13.9446L3.91403 9.8177L11.3425 5.69078C11.7546 5.46193 12.247 5.46193 12.6592 5.69078L20.0876 9.8177L12.6581 13.9446Z" fill="white"/>
            </svg>
            <span>Курс</span>
          </router-link>
          <router-link class="adding-item info" :to="{name: 'VAdminUserAdd'}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.8503 11.3132C16.0603 10.4308 16.8483 9.00262 16.8483 7.3937C16.8483 4.72008 14.6731 2.54492 11.9995 2.54492C9.32587 2.54492 7.15072 4.72008 7.15072 7.3937C7.15072 9.00262 7.93863 10.4308 9.14866 11.3132C6.14076 12.4643 3.99902 15.3806 3.99902 18.7883C3.99902 20.2588 5.19535 21.4552 6.66585 21.4552H17.3331C18.8036 21.4552 20 20.2588 20 18.7883C20 15.3806 17.8582 12.4643 14.8503 11.3132ZM8.60536 7.3937C8.60536 5.52218 10.128 3.99957 11.9995 3.99957C13.871 3.99957 15.3936 5.52218 15.3936 7.3937C15.3936 9.26522 13.871 10.7879 11.9995 10.7879C10.128 10.7879 8.60536 9.26522 8.60536 7.3937ZM17.3331 20.0005H6.66585C5.99745 20.0005 5.45367 19.4567 5.45367 18.7883C5.45367 15.1789 8.39008 12.2424 11.9995 12.2424C15.609 12.2424 18.5454 15.1788 18.5454 18.7883C18.5454 19.4567 18.0016 20.0005 17.3331 20.0005Z" fill="white"/>
            </svg>
            <span>Пользователь</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from '@/components/VButton';
import VDropdown from '@/components/VDropdown';
import VAttendance from './components/VAttendance';

export default {
  name: "VAdmin",

  components: {
    VButton,
    VDropdown,
    VAttendance
  },

  methods: {
    handleGoNotification() {
      console.log('test')
    },
    handleClick(i, callback) {
      callback()
      console.log(i)
    }
  }
}
</script>

<style scoped>



</style>
