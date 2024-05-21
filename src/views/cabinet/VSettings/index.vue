<template>
  <div class="row">
    <div class="col col-2">
<!--      <a href="#" class="back-link" @click.prevent="$router.go(-1)">← Назад</a>-->
    </div>
    <div class="col col-8">
      <b class="title-xs">Настройки аккаунта</b>
      <ul class="tab-nav three-tab">
        <li class="tab-nav-item" v-for="(item, itemIdx) in tabs" :key="itemIdx">
          <a href="#" class="tab-nav-link" :class="{active: activeTab === item.value}" @click.prevent="activeTab = item.value">
            <span v-html="item.icon"></span>
            <span class="tab-nav-link-name">{{ item.name }}</span>
          </a>
        </li>
      </ul>
      <div class="tab-content" v-if="activeTab === 'profile'">
        <div class="settings-item">
          <b class="title-xs">Основная информация</b>
          <div class="settings-container three-col">
            <div class="settings-container-col profile-img-wrapper">
              <small>Фото профиля</small>
              <div class="profile-img-container">
                <div class="profile-img">
                  <img src="@/assets/img/icon/user-default.svg" alt="">
                </div>
<!--                <div class="profile-img-tools">-->
<!--                  <a href="#" class="profile-img-change">Изменить фото</a>-->
<!--                  <a href="#" class="profile-img-delete">Удалить фото</a>-->
<!--                </div>-->
              </div>
            </div>
            <div class="settings-container-col">
              <v-input
                  label="Имя"
                  placeholder="Имя"
                  v-model="firstName"
              />
              <v-input
                  label="Номер телефона"
                  placeholder="Номер телефона"
                  v-model="phone"
                  v-mask="'+7(###)###-##-##'"
              />
            </div>
            <div class="settings-container-col">
              <v-input
                  label="Фамилия"
                  placeholder="Фамилия"
                  v-model="lastName"
              />
              <v-input
                  label="E-mail"
                  placeholder="E-mail"
                  v-model="email"
              />
            </div>
          </div>
        </div>
<!--        <div class="settings-item">-->
<!--          <b class="title-xs">Смена языка</b>-->
<!--          <div class="settings-container three-col">-->
<!--            <div class="settings-checkbox">-->
<!--              <input type="radio" name="lang">-->
<!--              <div class="settings-checkbox-form">-->
<!--                <img src="@/assets/img/icon/kaz.png" alt="">-->
<!--                <span>Қазақ тілі</span>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="settings-checkbox">-->
<!--              <input type="radio" name="lang">-->
<!--              <div class="settings-checkbox-form">-->
<!--                <img src="@/assets/img/icon/ru.png" alt="">-->
<!--                <span>Русский язык</span>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="settings-checkbox">-->
<!--              <input type="radio" name="lang">-->
<!--              <div class="settings-checkbox-form">-->
<!--                <img src="@/assets/img/icon/eng.png" alt="">-->
<!--                <span>English</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <v-button type="btn-outline-danger" @click="handleLogout">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_994_23020)">
              <path d="M7.98131 13.5668C8.22995 13.5668 8.46841 13.6656 8.64423 13.8414C8.82004 14.0172 8.91881 14.2557 8.91881 14.5043V16.7883C8.91912 17.1393 9.05869 17.4759 9.30687 17.7242C9.55506 17.9724 9.8916 18.1121 10.2426 18.1125H16.795C17.146 18.1121 17.4826 17.9724 17.7308 17.7242C17.9789 17.4759 18.1185 17.1393 18.1188 16.7883V3.19922C18.1185 2.84818 17.9789 2.5116 17.7308 2.26333C17.4826 2.01507 17.146 1.87541 16.795 1.875H10.2426C9.8916 1.87541 9.55506 2.01507 9.30687 2.26333C9.05869 2.5116 8.91912 2.84818 8.91881 3.19922V5.17344C8.91881 5.42208 8.82004 5.66053 8.64423 5.83635C8.46841 6.01216 8.22995 6.11094 7.98131 6.11094C7.73267 6.11094 7.49422 6.01216 7.3184 5.83635C7.14259 5.66053 7.04381 5.42208 7.04381 5.17344V3.19922C7.04485 2.35112 7.38218 1.53804 7.98185 0.938309C8.58151 0.338574 9.39454 0.00113707 10.2426 0H16.795C17.6431 0.00113707 18.4561 0.338574 19.0558 0.938309C19.6554 1.53804 19.9928 2.35112 19.9938 3.19922V16.7883C19.9928 17.6364 19.6554 18.4495 19.0558 19.0492C18.4561 19.6489 17.6431 19.9864 16.795 19.9875H10.2426C9.39454 19.9864 8.58151 19.6489 7.98185 19.0492C7.38218 18.4495 7.04485 17.6364 7.04381 16.7883V14.5043C7.04381 14.2557 7.14259 14.0172 7.3184 13.8414C7.49422 13.6656 7.73267 13.5668 7.98131 13.5668Z" fill="#F94848"/>
              <path d="M0.2829 9.31161L3.61923 5.97762C3.79278 5.80412 4.02745 5.70558 4.27285 5.70317C4.51824 5.70076 4.7548 5.79467 4.93173 5.96473C5.31063 6.32919 5.30165 6.94637 4.92977 7.31825L3.19267 9.05653H11.3177C11.5663 9.05653 11.8048 9.1553 11.9806 9.33112C12.1564 9.50693 12.2552 9.74539 12.2552 9.99403C12.2552 10.2427 12.1564 10.4811 11.9806 10.6569C11.8048 10.8328 11.5663 10.9315 11.3177 10.9315H3.19267L4.94657 12.6854C5.12243 12.8612 5.22125 13.0997 5.22129 13.3484C5.22132 13.5971 5.12258 13.8356 4.94677 14.0114C4.77096 14.1873 4.53249 14.2861 4.28382 14.2861C4.03515 14.2862 3.79665 14.1874 3.62079 14.0116L0.2829 10.6753C0.193243 10.5858 0.122112 10.4795 0.0735798 10.3625C0.0250483 10.2455 6.77109e-05 10.1201 6.77109e-05 9.99345C6.77109e-05 9.86678 0.0250483 9.74136 0.0735798 9.62436C0.122112 9.50736 0.193243 9.40108 0.2829 9.31161Z" fill="#F94848"/>
            </g>
            <defs>
              <clipPath id="clip0_994_23020">
                <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 1 20 0)"/>
              </clipPath>
            </defs>
          </svg>
          <span>Выйти из аккаунта</span>
        </v-button>
      </div>
      <div class="tab-content" v-if="activeTab === 'password'">
        <div class="settings-item">
          <b class="title-xs">Сменить пароль</b>
          <div class="settings-container two-col">
            <div class="settings-container-col">
              <v-input
                  type="password"
                  label="Старый пароль"
                  placeholder="Введите старый пароль"
                  v-model="currentPassword"
              />
            </div>
            <div class="settings-container-col">
              <v-input
                  type="password"
                  label="Новый пароль"
                  placeholder="Введите пароль"
                  v-model="newPassword"
              />
              <v-input
                  type="password"
                  label="Повторите новый пароль"
                  placeholder="Введите еще раз"
                  v-model="confirmNewPassword"
              />
            </div>
          </div>
        </div>
<!--        <div class="settings-item">-->
<!--          <b class="title-xs">Вход через сервисы</b>-->
<!--          <div class="settings-container three-col">-->
<!--            <div class="settings-checkbox">-->
<!--              <input type="radio" name="lang">-->
<!--              <div class="settings-checkbox-form">-->
<!--                <i class="i-google"></i>-->
<!--                <span>Отвязать от Google</span>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="settings-checkbox">-->
<!--              <input type="radio" name="lang">-->
<!--              <div class="settings-checkbox-form">-->
<!--                <i class="i-facebook"></i>-->
<!--                <span>Привязать к Facebook</span>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="settings-checkbox">-->
<!--              <input type="radio" name="lang">-->
<!--              <div class="settings-checkbox-form">-->
<!--                <i class="i-apple"></i>-->
<!--                <span>Привязать к Apple ID</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
<!--      <div class="tab-content" v-if="activeTab === 'pay'">-->
<!--        <div class="settings-item">-->
<!--          <b class="title-xs">Способ оплаты</b>-->
<!--          <div class="settings-container two-col payment-card-container">-->
<!--            <div class="settings-container-col">-->
<!--              <small>Мои карты</small>-->
<!--              <v-input-->
<!--                  v-model="card1"-->
<!--                  :disabled="true"-->
<!--              >-->
<!--                <button class="delete-payment-card">-->
<!--                  <i class="i-delete"></i>-->
<!--                </button>-->
<!--              </v-input>-->
<!--              <v-input-->
<!--                  v-model="card2"-->
<!--                  :disabled="true"-->
<!--              >-->
<!--                <button class="delete-payment-card">-->
<!--                  <i class="i-delete"></i>-->
<!--                </button>-->
<!--              </v-input>-->
<!--            </div>-->
<!--            <div class="settings-container-col">-->
<!--              <small>Добавить новую карту</small>-->
<!--              <v-input-->
<!--                  placeholder="16 цифр на лицевой части карты"-->
<!--                  v-model="cardNumber"-->
<!--                  v-mask="'#### #### #### ####'"-->
<!--              />-->
<!--              <v-input-->
<!--                  placeholder="Имя на карте Латиницей"-->
<!--                  v-model="cardName"-->
<!--              />-->
<!--              <div class="form-row two-form">-->
<!--                <v-input-->
<!--                    placeholder="CVV/CVC"-->
<!--                    v-model="cvv"-->
<!--                    v-mask="'###'"-->
<!--                />-->
<!--                <v-input-->
<!--                    placeholder="Дата окончания"-->
<!--                    v-model="validityDate"-->
<!--                    v-mask="'##.##'"-->
<!--                />-->
<!--              </div>-->
<!--              <v-button type="btn-success" class="add-card-btn">Добавить</v-button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="tab-content" v-if="activeTab === 'notice'">
        <div class="settings-item">
          <b class="title-xs">Уведомления из сайта</b>
          <div class="settings-container three-col">
            <div class="settings-container-col">
              <div class="notice-toggle-form">
                <p>Объявления</p>
                <div class="switch">
                  <input type="checkbox">
                  <span class="switch-slider"></span>
                </div>
              </div>
            </div>
            <div class="settings-container-col">
              <div class="notice-toggle-form">
                <p>Новые курсы</p>
                <div class="switch">
                  <input type="checkbox">
                  <span class="switch-slider"></span>
                </div>
              </div>
            </div>
            <div class="settings-container-col">
              <div class="notice-toggle-form">
                <p>Новые курсы</p>
                <div class="switch">
                  <input type="checkbox">
                  <span class="switch-slider"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-2">
      <v-button v-if="activeTab === 'profile'" type="btn-success" class="settings-save-btn" @click="changeProfile">Сохранить</v-button>
      <v-button v-if="activeTab === 'password'" type="btn-success" class="settings-save-btn" @click="changePassword">Сохранить</v-button>
    </div>
  </div>
</template>

<script>
import VInput from "@/components/VInput";
import VButton from "@/components/VButton";
import { useAuthStore } from "@/stores/auth";

export default {
  name: "VSettings",

  setup() {
    const authStore = useAuthStore()
    return {
      authStore
    }
  },

  components: {
    VButton,
    VInput
  },

  data() {
    return {
      activeTab: 'profile',
      tabs: [
        {
          icon: '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
              '<path d="M15.3356 10.1127C15.2776 10.0534 15.2084 10.0062 15.132 9.97399C15.0556 9.94174 14.9735 9.92502 14.8905 9.92481C14.8076 9.92459 14.7255 9.94089 14.6489 9.97275C14.5723 10.0046 14.5028 10.0514 14.4445 10.1104C14.3862 10.1693 14.3402 10.2393 14.3092 10.3163C14.2782 10.3932 14.2629 10.4755 14.264 10.5585C14.2652 10.6414 14.2828 10.7233 14.3159 10.7993C14.349 10.8754 14.3969 10.9441 14.4569 11.0014C14.9871 11.5232 15.4078 12.1456 15.6943 12.8322C15.9807 13.5187 16.1272 14.2556 16.125 14.9995C16.125 15.7639 13.9337 16.8745 10.5 16.8745C7.06625 16.8745 4.875 15.7633 4.875 14.9983C4.87287 14.2594 5.01733 13.5275 5.30002 12.8448C5.58271 12.1622 5.99801 11.5424 6.52187 11.0214C6.58157 10.9637 6.62918 10.8948 6.66194 10.8185C6.69469 10.7423 6.71193 10.6603 6.71266 10.5773C6.71338 10.4943 6.69756 10.412 6.66614 10.3352C6.63471 10.2584 6.5883 10.1886 6.52962 10.1299C6.47094 10.0712 6.40116 10.0248 6.32435 9.99339C6.24753 9.96196 6.16523 9.94615 6.08225 9.94687C5.99926 9.94759 5.91725 9.96483 5.841 9.99759C5.76474 10.0303 5.69578 10.078 5.63812 10.1377C4.99772 10.7747 4.49005 11.5324 4.14449 12.3669C3.79893 13.2015 3.62236 14.0963 3.625 14.9995C3.625 17.0295 7.16687 18.1245 10.5 18.1245C13.8331 18.1245 17.375 17.0295 17.375 14.9995C17.3778 14.0902 17.1988 13.1894 16.8486 12.3502C16.4984 11.511 15.984 10.7503 15.3356 10.1127Z" fill="#000"/>\n' +
              '<path d="M10.5 10.625C11.3653 10.625 12.2112 10.3684 12.9306 9.88768C13.6501 9.40695 14.2108 8.72367 14.542 7.92424C14.8731 7.12482 14.9597 6.24515 14.7909 5.39648C14.6221 4.54781 14.2054 3.76826 13.5936 3.15641C12.9817 2.54456 12.2022 2.12788 11.3535 1.95907C10.5049 1.79026 9.62519 1.8769 8.82576 2.20803C8.02633 2.53916 7.34305 3.09992 6.86232 3.81938C6.38159 4.53885 6.125 5.38471 6.125 6.25C6.12632 7.40992 6.58768 8.52195 7.40787 9.34213C8.22805 10.1623 9.34008 10.6237 10.5 10.625ZM10.5 3.125C11.1181 3.125 11.7223 3.30828 12.2362 3.65166C12.7501 3.99504 13.1506 4.4831 13.3871 5.05412C13.6236 5.62514 13.6855 6.25347 13.565 6.85966C13.4444 7.46585 13.1467 8.02267 12.7097 8.45971C12.2727 8.89675 11.7158 9.19438 11.1097 9.31496C10.5035 9.43553 9.87513 9.37365 9.30411 9.13713C8.7331 8.9006 8.24504 8.50006 7.90166 7.98616C7.55828 7.47226 7.375 6.86807 7.375 6.25C7.37599 5.4215 7.70555 4.62723 8.29139 4.04139C8.87722 3.45555 9.6715 3.12599 10.5 3.125Z" fill="#000"/>\n' +
              '</svg>',
          name: 'Профиль',
          value: 'profile',
        },
        {
          icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
              '<path d="M9.99998 1.33301C7.29164 1.33301 5.12497 3.49968 5.12497 6.20802V8.37469C4.20414 8.37469 3.49997 9.07886 3.49997 9.99969V17.0414C3.49997 17.9622 4.20414 18.6664 5.12497 18.6664H14.875C15.7958 18.6664 16.5 17.9622 16.5 17.0414V9.99969C16.5 9.07886 15.7958 8.37469 14.875 8.37469V6.20802C14.875 3.49968 12.7083 1.33301 9.99998 1.33301ZM15.4167 9.99969V17.0414C15.4167 17.3664 15.2 17.583 14.875 17.583H5.12497C4.79997 17.583 4.58331 17.3664 4.58331 17.0414V9.99969C4.58331 9.67469 4.79997 9.45802 5.12497 9.45802H14.875C15.2 9.45802 15.4167 9.67469 15.4167 9.99969ZM6.20831 8.37469V6.20802C6.20831 4.09551 7.88748 2.41634 9.99998 2.41634C12.1125 2.41634 13.7917 4.09551 13.7917 6.20802V8.37469H6.20831Z" fill="black"/>\n' +
              '<path d="M9.99997 11.083C9.07914 11.083 8.37497 11.7872 8.37497 12.708C8.37497 13.4122 8.8083 14.008 9.45831 14.2247V15.4164C9.45831 15.7414 9.67497 15.958 9.99997 15.958C10.325 15.958 10.5416 15.7414 10.5416 15.4164V14.2247C11.1916 14.008 11.625 13.4122 11.625 12.708C11.625 11.7872 10.9208 11.083 9.99997 11.083ZM9.99997 13.2497C9.67497 13.2497 9.45831 13.033 9.45831 12.708C9.45831 12.383 9.67497 12.1663 9.99997 12.1663C10.325 12.1663 10.5416 12.383 10.5416 12.708C10.5416 13.033 10.325 13.2497 9.99997 13.2497Z" fill="black"/>\n' +
              '</svg>\n',
          name: 'Пароль',
          value: 'password',
        },
        // {
        //   icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        //       '<path d="M17.8125 3.125H2.1875C0.981328 3.125 0 4.10633 0 5.3125V14.6875C0 15.8937 0.981328 16.875 2.1875 16.875H17.8125C19.0187 16.875 20 15.8937 20 14.6875V5.3125C20 4.10633 19.0187 3.125 17.8125 3.125ZM2.1875 4.375H17.8125C18.3294 4.375 18.75 4.79559 18.75 5.3125V6.5625H1.25V5.3125C1.25 4.79559 1.67059 4.375 2.1875 4.375ZM17.8125 15.625H2.1875C1.67059 15.625 1.25 15.2044 1.25 14.6875V7.8125H18.75V14.6875C18.75 15.2044 18.3294 15.625 17.8125 15.625Z" fill="black"/>\n' +
        //       '<path d="M4.375 13.75H3.75C3.40484 13.75 3.125 13.4702 3.125 13.125V12.5C3.125 12.1548 3.40484 11.875 3.75 11.875H4.375C4.72016 11.875 5 12.1548 5 12.5V13.125C5 13.4702 4.72016 13.75 4.375 13.75Z" fill="black"/>\n' +
        //       '</svg>\n',
        //   name: 'Оплата',
        //   value: 'pay',
        // },
        {
          icon: '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
              '<path d="M18.1725 14.2341L17.0854 12.6703C16.937 12.4577 16.8572 12.2049 16.8566 11.9456V7.45757C16.8566 5.77159 16.1868 4.15467 14.9947 2.9625C13.8025 1.77034 12.1856 1.10059 10.4996 1.10059C8.81361 1.10059 7.19669 1.77034 6.00452 2.9625C4.81236 4.15467 4.14261 5.77159 4.14261 7.45757V11.9456C4.14199 12.2049 4.06214 12.4577 3.91376 12.6703L2.82671 14.2341C2.66212 14.4165 2.55388 14.6426 2.51509 14.8852C2.47631 15.1278 2.50863 15.3764 2.60815 15.601C2.70768 15.8256 2.87014 16.0166 3.07589 16.1508C3.28165 16.285 3.52188 16.3568 3.76754 16.3574H7.38467C7.53057 17.0759 7.92039 17.7219 8.48808 18.1859C9.05576 18.6499 9.76641 18.9033 10.4996 18.9033C11.2328 18.9033 11.9434 18.6499 12.5111 18.1859C13.0788 17.7219 13.4686 17.0759 13.6145 16.3574H17.2316C17.4773 16.3568 17.7175 16.285 17.9233 16.1508C18.129 16.0166 18.2915 15.8256 18.391 15.601C18.4906 15.3764 18.5229 15.1278 18.4841 14.8852C18.4453 14.6426 18.3371 14.4165 18.1725 14.2341ZM10.4996 17.6287C10.1061 17.6276 9.72264 17.5049 9.4017 17.2772C9.08076 17.0496 8.83808 16.7283 8.70692 16.3574H12.2923C12.1611 16.7283 11.9184 17.0496 11.5975 17.2772C11.2765 17.5049 10.8931 17.6276 10.4996 17.6287ZM3.76754 15.086C3.79628 15.0593 3.82187 15.0294 3.84383 14.997L4.9563 13.395C5.25307 12.9698 5.41278 12.4641 5.414 11.9456V7.45757C5.414 6.10879 5.9498 4.81525 6.90354 3.86152C7.85727 2.90778 9.15081 2.37198 10.4996 2.37198C11.8484 2.37198 13.1419 2.90778 14.0956 3.86152C15.0494 4.81525 15.5852 6.10879 15.5852 7.45757V11.9456C15.5864 12.4641 15.7461 12.9698 16.0429 13.395L17.1554 14.997C17.1773 15.0294 17.2029 15.0593 17.2316 15.086H3.76754Z" fill="black"/>\n' +
              '</svg>\n',
          name: 'Уведомления',
          value: 'notice',
        }
      ],
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      roleId: '',
      lang: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      card1: '1234 56** **** 8484',
      card2: '1234 56** **** 8484',
      cardNumber: '',
      cardName: '',
      cvv: '',
      validityDate: '',
    }
  },

  mounted() {
    this.fetchUserData()
  },

  methods: {
    fetchUserData() {
      this.API.auth.profile()
        .then(res => {
          this.firstName = res.name;
          this.lastName = res.surname;
          this.phone = res.phone;
          this.email = res.email;
          this.roleId = res.role_id
        })
    },
    changeProfile() {
      const body = {
        name: this.firstName,
        surname: this.lastName,
        phone: this.phone.replace(/\D/g, ''),
        role_id: this.roleId
      }
      this.API.auth.registerFull(body)
    },
    changePassword() {
      const body = {
        current_password: this.currentPassword,
        new_password: this.newPassword,
        new_password_confirmation: this.confirmNewPassword
      }
      this.API.auth.changePassword(body)
    },
    handleLogout() {
      this.API.auth.logout()
        .then(res => {
          if(!res.error) {
            this.authStore.logout();
            this.$router.push('/')
          }
        })
    },

    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style scoped>

</style>
