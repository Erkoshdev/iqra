<template>
  <div class="row">
    <div class="col col-2">
<!--      <a href="#" class="back-link" @click.prevent="$router.go(-1)">← Назад</a>-->
      <div class="adding-task" v-if="isEdit">
        <b class="title-xs">Добавить вопрос</b>
        <div class="adding-task-types">
          <a
              class="adding-task-type"
              v-for="(item, itemIdx) in taskTypes"
              :key="itemIdx"
              @click="addQuestion(item.id)"
          >
            <span v-html="item.icon"></span>
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
    <div class="col col-8">
      <b class="title-xs">Новое задание</b>
      <ul class="tab-nav three-tab">
        <li class="tab-nav-item" v-for="(item, itemIdx) in tabs" :key="itemIdx">
          <a href="#" class="tab-nav-link" :class="{active: activeTab === item.value}" @click.prevent="activeTab = item.value">
            <span v-html="item.icon"></span>
            <span class="tab-nav-link-name">{{ item.name }}</span>
          </a>
        </li>
      </ul>
      <div class="tab-content" v-if="activeTab === 'questions'">
        <div class="adding-task-name">
          <div class="adding-task-title">
            <input type="text" placeholder="Заголовок задания" v-model="name">
          </div>
          <div class="adding-task-desc">
            <input type="text" placeholder="Описание" v-model="desc">
          </div>
        </div>
        <template v-if="isEdit">
          <div class="added-task-container" v-for="(question, questionIdx) in questions" :key="questionIdx">
            <div class="adding-task-top">
              <template v-for="(item, itemIdx) in taskTypes">
                <div class="adding-task-type" :key="itemIdx" v-if="item.id === question.type.id">
                  <span v-html="item.icon"></span>
                  {{ item.name }}
                </div>
              </template>
              <button class="btn-plain added-task-copy">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1253_13186)">
                    <path d="M15.2812 17.25H7.96875C7.44685 17.2492 6.94655 17.0415 6.57751 16.6725C6.20847 16.3034 6.00079 15.8032 6 15.2812V5.71875C6.00079 5.19685 6.20847 4.69655 6.57751 4.32751C6.94655 3.95847 7.44685 3.75079 7.96875 3.75H15.2812C15.8032 3.75079 16.3034 3.95847 16.6725 4.32751C17.0415 4.69655 17.2492 5.19685 17.25 5.71875V15.2812C17.2492 15.8032 17.0415 16.3034 16.6725 16.6725C16.3034 17.0415 15.8032 17.2492 15.2812 17.25ZM15.75 5.71875C15.75 5.59443 15.7006 5.4752 15.6127 5.38729C15.5248 5.29939 15.4056 5.25 15.2812 5.25H7.96875C7.84443 5.25 7.7252 5.29939 7.63729 5.38729C7.54939 5.4752 7.5 5.59443 7.5 5.71875V15.2812C7.5 15.4056 7.54939 15.5248 7.63729 15.6127C7.7252 15.7006 7.84443 15.75 7.96875 15.75H15.2812C15.4056 15.75 15.5248 15.7006 15.6127 15.6127C15.7006 15.5248 15.75 15.4056 15.75 15.2812V5.71875Z" fill="#BFBFBF"/>
                    <path d="M2.72222 0.75H10.0272C10.4151 0.750367 10.7942 0.865122 11.1172 1.0799C11.4402 1.29468 11.6926 1.59995 11.843 1.9575C11.9205 2.1407 11.9222 2.34721 11.8475 2.53161C11.7728 2.716 11.6279 2.86317 11.4447 2.94075C11.2615 3.01833 11.055 3.01995 10.8706 2.94526C10.6862 2.87058 10.539 2.7257 10.4615 2.5425C10.426 2.45637 10.3658 2.38265 10.2886 2.3306C10.2113 2.27856 10.1204 2.25052 10.0272 2.25H2.72222C2.59696 2.2502 2.47689 2.30004 2.38833 2.38861C2.29976 2.47718 2.24991 2.59725 2.24972 2.7225V12.2775C2.24991 12.4028 2.29976 12.5228 2.38833 12.6114C2.47689 12.7 2.59696 12.7498 2.72222 12.75H4.49972C4.69863 12.75 4.88939 12.829 5.03005 12.9697C5.1707 13.1103 5.24972 13.3011 5.24972 13.5C5.24972 13.6989 5.1707 13.8897 5.03005 14.0303C4.88939 14.171 4.69863 14.25 4.49972 14.25H2.72222C2.19926 14.2494 1.69789 14.0414 1.32811 13.6716C0.95832 13.3018 0.750311 12.8005 0.749716 12.2775V2.7225C0.750311 2.19954 0.95832 1.69818 1.32811 1.32839C1.69789 0.958603 2.19926 0.750596 2.72222 0.75Z" fill="#BFBFBF"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1253_13186">
                      <rect width="18" height="18" fill="white" transform="matrix(-1 0 0 1 18 0)"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <v-dropdown class="redact-dropdown">
                <template #base>
                  <button class="btn-plain">
                    <i class="i-dots"></i>
                  </button>
                </template>
                <template #dropdown="{ handleShow }">
                  <div class="redact-dropdown-list">
                    <a href="#" class="redact-dropdown-item" @click.prevent="editQuestion(question.id, question.type.id, handleShow)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.42911 9.53701C2.34259 9.53699 2.25802 9.51133 2.18609 9.46325C2.11416 9.41518 2.0581 9.34686 2.025 9.26692C1.99189 9.18699 1.98323 9.09904 2.0001 9.01419C2.01697 8.92933 2.05863 8.85139 2.11979 8.7902L8.95661 1.95339C8.99696 1.9116 9.04524 1.87827 9.09862 1.85534C9.15199 1.83241 9.2094 1.82035 9.26749 1.81984C9.32558 1.81934 9.38319 1.83041 9.43696 1.8524C9.49073 1.8744 9.53958 1.90689 9.58065 1.94796C9.62173 1.98904 9.65422 2.03789 9.67622 2.09166C9.69821 2.14543 9.70928 2.20303 9.70878 2.26113C9.70827 2.31922 9.6962 2.37663 9.67327 2.43C9.65035 2.48338 9.61702 2.53165 9.57523 2.57201L2.73842 9.40883C2.65311 9.49414 2.54111 9.53701 2.42911 9.53701Z" fill="black"/>
                        <path d="M1.75377 12.6873C1.68849 12.6874 1.62402 12.6728 1.5651 12.6447C1.50617 12.6166 1.45428 12.5757 1.41323 12.5249C1.37218 12.4742 1.34301 12.4149 1.32786 12.3514C1.31271 12.2879 1.31196 12.2218 1.32567 12.158L2.00161 9.00731C2.01351 8.95098 2.03641 8.89756 2.06899 8.8501C2.10158 8.80264 2.14321 8.76208 2.1915 8.73074C2.23979 8.6994 2.29379 8.6779 2.35041 8.66747C2.40702 8.65704 2.46514 8.65789 2.52143 8.66996C2.57772 8.68204 2.63107 8.7051 2.67843 8.73784C2.72579 8.77057 2.76622 8.81233 2.7974 8.86072C2.82859 8.90911 2.84992 8.96318 2.86017 9.01983C2.87042 9.07648 2.86939 9.13459 2.85714 9.19084L2.1812 12.3415C2.16024 12.4393 2.10638 12.527 2.0286 12.59C1.95082 12.6529 1.85382 12.6873 1.75377 12.6873ZM4.90399 12.0114C4.81747 12.0114 4.7329 11.9857 4.66097 11.9376C4.58904 11.8896 4.53298 11.8212 4.49988 11.7413C4.46677 11.6614 4.45811 11.5734 4.47498 11.4886C4.49185 11.4037 4.53351 11.3258 4.59467 11.2646L11.4315 4.428C11.4718 4.38621 11.5201 4.35288 11.5735 4.32995C11.6269 4.30702 11.6843 4.29495 11.7424 4.29445C11.8005 4.29395 11.8581 4.30501 11.9118 4.32701C11.9656 4.34901 12.0145 4.3815 12.0555 4.42257C12.0966 4.46365 12.1291 4.5125 12.1511 4.56627C12.1731 4.62003 12.1842 4.67764 12.1837 4.73574C12.1832 4.79383 12.1711 4.85123 12.1482 4.90461C12.1252 4.95799 12.0919 5.00626 12.0501 5.04662L5.21352 11.8832C5.17292 11.9239 5.12467 11.9562 5.07155 11.9782C5.01843 12.0002 4.96148 12.0115 4.90399 12.0114Z" fill="black"/>
                        <path d="M1.75275 12.6876C1.64495 12.6871 1.5411 12.6469 1.46112 12.5746C1.38114 12.5023 1.33065 12.403 1.31932 12.2958C1.30799 12.1886 1.33663 12.081 1.39973 11.9936C1.46284 11.9062 1.55599 11.8452 1.66132 11.8222L4.81197 11.1462C4.92527 11.1223 5.04343 11.1443 5.14056 11.2073C5.23769 11.2703 5.30587 11.3693 5.33016 11.4825C5.35445 11.5957 5.33286 11.714 5.27013 11.8113C5.2074 11.9086 5.10865 11.9771 4.9955 12.0018L1.84485 12.6777C1.8146 12.6843 1.78372 12.6876 1.75275 12.6876ZM10.5032 6.41227C10.4457 6.41238 10.3888 6.40111 10.3357 6.37911C10.2826 6.35711 10.2344 6.32481 10.1939 6.28409L7.71916 3.80937C7.67737 3.76901 7.64405 3.72073 7.62112 3.66736C7.59819 3.61398 7.58612 3.55657 7.58561 3.49848C7.58511 3.44039 7.59618 3.38278 7.61818 3.32901C7.64017 3.27525 7.67266 3.2264 7.71374 3.18532C7.75482 3.14424 7.80366 3.11176 7.85743 3.08976C7.9112 3.06776 7.96881 3.05669 8.0269 3.0572C8.08499 3.0577 8.1424 3.06977 8.19578 3.0927C8.24915 3.11563 8.29743 3.14896 8.33779 3.19074L10.8125 5.66546C10.8737 5.72665 10.9153 5.80459 10.9322 5.88945C10.9491 5.9743 10.9404 6.06225 10.9073 6.14219C10.8742 6.22212 10.8181 6.29044 10.7462 6.33851C10.6743 6.38659 10.5897 6.41225 10.5032 6.41227ZM11.7407 5.17502C11.6541 5.17509 11.5694 5.14947 11.4974 5.1014C11.4254 5.05333 11.3693 4.98498 11.3361 4.90499C11.303 4.82501 11.2943 4.73699 11.3112 4.65208C11.3282 4.56716 11.3699 4.48918 11.4311 4.42799C11.6746 4.18452 11.8087 3.85487 11.8087 3.50005C11.8087 3.14524 11.6746 2.81559 11.4311 2.57212C11.1874 2.32843 10.8578 2.19434 10.503 2.19434C10.1482 2.19434 9.8185 2.32843 9.57504 2.57212C9.5344 2.61275 9.48616 2.64498 9.43307 2.66697C9.37998 2.68897 9.32308 2.70028 9.26561 2.70028C9.20815 2.70028 9.15125 2.68897 9.09816 2.66697C9.04506 2.64498 8.99683 2.61275 8.95619 2.57212C8.91556 2.53148 8.88332 2.48324 8.86133 2.43015C8.83934 2.37706 8.82802 2.32016 8.82802 2.2627C8.82802 2.20523 8.83934 2.14833 8.86133 2.09524C8.88332 2.04215 8.91556 1.99391 8.95619 1.95327C9.36482 1.54443 9.9141 1.31934 10.503 1.31934C11.0916 1.31934 11.6411 1.54443 12.0498 1.95327C12.4586 2.3619 12.6837 2.91118 12.6837 3.50005C12.6837 4.08893 12.4586 4.63821 12.0498 5.04684C12.0092 5.08754 11.9611 5.11982 11.908 5.14182C11.855 5.16382 11.7981 5.1751 11.7407 5.17502Z" fill="black"/>
                      </svg>
                      <span>Редактировать</span>
                    </a>
                    <a href="#" class="redact-dropdown-item danger" @click.prevent="deleteQuestion(question.id, handleShow)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M11.0833 4.0835C10.9286 4.0835 10.7802 4.14495 10.6709 4.25435C10.5615 4.36375 10.5 4.51212 10.5 4.66683V11.1949C10.4833 11.4899 10.3506 11.7663 10.131 11.964C9.91143 12.1616 9.62261 12.2645 9.3275 12.2502H4.6725C4.37739 12.2645 4.08857 12.1616 3.86896 11.964C3.64935 11.7663 3.51673 11.4899 3.5 11.1949V4.66683C3.5 4.51212 3.43854 4.36375 3.32915 4.25435C3.21975 4.14495 3.07138 4.0835 2.91667 4.0835C2.76196 4.0835 2.61358 4.14495 2.50419 4.25435C2.39479 4.36375 2.33333 4.51212 2.33333 4.66683V11.1949C2.34998 11.7994 2.60551 12.3726 3.04394 12.7891C3.48237 13.2055 4.06798 13.4313 4.6725 13.4168H9.3275C9.93202 13.4313 10.5176 13.2055 10.9561 12.7891C11.3945 12.3726 11.65 11.7994 11.6667 11.1949V4.66683C11.6667 4.51212 11.6052 4.36375 11.4958 4.25435C11.3864 4.14495 11.238 4.0835 11.0833 4.0835ZM11.6667 2.3335H9.33333V1.16683C9.33333 1.01212 9.27187 0.863747 9.16248 0.75435C9.05308 0.644954 8.90471 0.583496 8.75 0.583496H5.25C5.09529 0.583496 4.94692 0.644954 4.83752 0.75435C4.72812 0.863747 4.66667 1.01212 4.66667 1.16683V2.3335H2.33333C2.17862 2.3335 2.03025 2.39495 1.92085 2.50435C1.81146 2.61375 1.75 2.76212 1.75 2.91683C1.75 3.07154 1.81146 3.21991 1.92085 3.32931C2.03025 3.4387 2.17862 3.50016 2.33333 3.50016H11.6667C11.8214 3.50016 11.9697 3.4387 12.0791 3.32931C12.1885 3.21991 12.25 3.07154 12.25 2.91683C12.25 2.76212 12.1885 2.61375 12.0791 2.50435C11.9697 2.39495 11.8214 2.3335 11.6667 2.3335ZM5.83333 2.3335V1.75016H8.16667V2.3335H5.83333Z" fill="#F94848"/>
                        <path d="M6.41667 9.91667V5.83333C6.41667 5.67862 6.35521 5.53025 6.24581 5.42085C6.13642 5.31146 5.98804 5.25 5.83333 5.25C5.67862 5.25 5.53025 5.31146 5.42085 5.42085C5.31146 5.53025 5.25 5.67862 5.25 5.83333V9.91667C5.25 10.0714 5.31146 10.2197 5.42085 10.3291C5.53025 10.4385 5.67862 10.5 5.83333 10.5C5.98804 10.5 6.13642 10.4385 6.24581 10.3291C6.35521 10.2197 6.41667 10.0714 6.41667 9.91667ZM8.75 9.91667V5.83333C8.75 5.67862 8.68854 5.53025 8.57915 5.42085C8.46975 5.31146 8.32138 5.25 8.16667 5.25C8.01196 5.25 7.86358 5.31146 7.75419 5.42085C7.64479 5.53025 7.58333 5.67862 7.58333 5.83333V9.91667C7.58333 10.0714 7.64479 10.2197 7.75419 10.3291C7.86358 10.4385 8.01196 10.5 8.16667 10.5C8.32138 10.5 8.46975 10.4385 8.57915 10.3291C8.68854 10.2197 8.75 10.0714 8.75 9.91667Z" fill="#F94848"/>
                      </svg>
                      <span>Удалить</span>
                    </a>
                  </div>
                </template>
              </v-dropdown>
            </div>
            <div class="added-task-name">
              <b v-html="question.name"></b>
            </div>
            <div class="added-task-point">
              <span>Баллов за правильный ответ:</span>
              <div class="added-task-point-container">
                <input type="number" value="1" disabled>
                <div class="added-task-point-redact">
                  <button class="btn-plain added-task-point-btn">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="10" height="10" fill="#D9D9D9"/>
                      <path d="M5 4L8.4641 7.75H1.5359L5 4Z" fill="#414141"/>
                    </svg>
                  </button>
                  <button class="btn-plain added-task-point-btn">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="10" height="10" transform="matrix(1 0 0 -1 0 10)" fill="#D9D9D9"/>
                      <path d="M5 6L8.4641 2.25H1.5359L5 6Z" fill="#414141"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div class="course-empty-container" v-else>
          <b>Добавление вопросов будет доступно после создания самого задания</b>
        </div>
      </div>
      <div class="tab-content" v-if="activeTab === 'answers'">
        <div class="task-tools-container">
          <div class="task-tools-left">
            <b class="title-xs">Выберите пользователя</b>
            <v-select
                placeholder="Выберите пользователя"
                :options="taskPassedUsers"
                label-name="fullname"
                :reduce="item => item.id"
                v-model="selectedUserId"
            />
          </div>
          <div class="task-tools-middle">
            <b class="title-xs">Скачать ответы</b>
            <div class="download-answers">
              <a href="" class="download-answer-item danger">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.68678 0H17.7168L26.2175 8.86058V26.0945C26.2175 28.2534 24.4709 30 22.3194 30H7.68678C5.52787 30 3.78125 28.2534 3.78125 26.0945V3.90553C3.78121 1.74662 5.52783 0 7.68678 0Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.709 0V8.79311H26.2172L17.709 0Z" fill="#BFBFBF"/>
                  <path d="M8.12109 22.3841V16.9043H10.4524C11.0297 16.9043 11.4869 17.0617 11.8318 17.3841C12.1766 17.6989 12.349 18.1262 12.349 18.6584C12.349 19.1906 12.1766 19.6179 11.8318 19.9328C11.4869 20.2551 11.0297 20.4125 10.4524 20.4125H9.52289V22.3841H8.12109ZM9.52289 19.2207H10.295C10.5049 19.2207 10.6698 19.1757 10.7823 19.0708C10.8947 18.9733 10.9547 18.8384 10.9547 18.6585C10.9547 18.4786 10.8947 18.3436 10.7823 18.2462C10.6699 18.1412 10.5049 18.0963 10.295 18.0963H9.52289V19.2207ZM12.9262 22.3841V16.9043H14.8677C15.25 16.9043 15.6099 16.9568 15.9472 17.0692C16.2845 17.1816 16.5919 17.3391 16.8617 17.5565C17.1316 17.7664 17.349 18.0512 17.5064 18.4111C17.6563 18.7709 17.7388 19.1832 17.7388 19.6479C17.7388 20.1052 17.6563 20.5175 17.5064 20.8773C17.349 21.2371 17.1316 21.522 16.8617 21.7319C16.5918 21.9493 16.2845 22.1067 15.9472 22.2191C15.6099 22.3316 15.25 22.3841 14.8677 22.3841H12.9262ZM14.298 21.1922H14.7028C14.9202 21.1922 15.1226 21.1697 15.31 21.1172C15.4899 21.0647 15.6623 20.9823 15.8272 20.8698C15.9847 20.7574 16.1121 20.5999 16.202 20.3901C16.292 20.1802 16.337 19.9328 16.337 19.6479C16.337 19.3556 16.292 19.1082 16.202 18.8983C16.1121 18.6884 15.9847 18.531 15.8272 18.4186C15.6623 18.3061 15.4899 18.2237 15.31 18.1712C15.1226 18.1187 14.9202 18.0962 14.7028 18.0962H14.298V21.1922ZM18.4434 22.3841V16.9043H22.3415V18.0962H19.8452V18.9733H21.8392V20.1577H19.8452V22.3841H18.4434Z" fill="#E5252A"/>
                </svg>
                <span>PDF</span>
              </a>
            </div>
          </div>
        </div>
<!--        <div class="task-point">-->
<!--          <b>Всего баллов: 5/10</b>-->
<!--        </div>-->
        <template v-if="answers && answers.length">
          <div class="test-container" v-for="(item, itemIdx) in answers" :key="itemIdx">
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
                />
              </div>
              <div class="test-item-correct-answer" v-if="isFinished && !item.user_correct && item.question_answer">Правильный ответ: <b>{{ item.question_answer.name[0] }}</b></div>
              <!--          <div class="test-item-point">Баллов: 0</div>-->
            </div>
          </div>
        </template>
      </div>
      <div class="tab-content" v-if="activeTab === 'settings'">
        <div class="task-tools-container">
          <div class="task-tools-left">
            <b class="title-xs">Время на сдачу</b>
            <v-select
              placeholder="Выберите время"
            />
          </div>
          <div class="task-tools-middle">
            <b class="title-xs">Скачать вопросы</b>
            <div class="download-answers">
              <a href="" class="download-answer-item info">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.6839 0H17.7217L26.2186 8.86494V26.0973C26.2186 28.2529 24.4715 30 22.3159 30H7.6839C5.52833 30 3.78125 28.2529 3.78125 26.0973V3.90265C3.78125 1.74711 5.52833 0 7.6839 0Z" fill="white"/>
                  <path opacity="0.302" fill-rule="evenodd" clip-rule="evenodd" d="M17.7109 0V8.79212H26.22L17.7109 0Z" fill="white"/>
                  <path d="M7.40625 21.4057V16.4394H9.16549C9.51733 16.4394 9.84494 16.492 10.1483 16.5891C10.4516 16.6902 10.7266 16.8358 10.9733 17.0299C11.22 17.224 11.4141 17.4829 11.5557 17.8064C11.6972 18.1299 11.77 18.502 11.77 18.9226C11.77 19.3432 11.6972 19.7153 11.5557 20.0388C11.4141 20.3623 11.22 20.6212 10.9733 20.8153C10.7266 21.0094 10.4516 21.155 10.1483 21.2561C9.84494 21.3532 9.51736 21.4057 9.16549 21.4057H7.40625ZM8.64783 20.3259H9.01584C9.21401 20.3259 9.40005 20.3017 9.56584 20.2572C9.7357 20.2087 9.88936 20.1318 10.035 20.0307C10.1805 19.9296 10.2938 19.784 10.3747 19.5939C10.4596 19.4079 10.5 19.1814 10.5 18.9226C10.5 18.6638 10.4596 18.4373 10.3747 18.2472C10.2938 18.0612 10.1805 17.9156 10.035 17.8145C9.88936 17.7093 9.7357 17.6366 9.56584 17.588C9.40005 17.5435 9.21401 17.5192 9.01584 17.5192H8.64783V20.3259ZM14.7829 21.4624C14.0348 21.4624 13.416 21.2197 12.9266 20.7385C12.4373 20.2572 12.1946 19.6506 12.1946 18.9226C12.1946 18.1947 12.4373 17.588 12.9266 17.1068C13.416 16.6255 14.0348 16.3829 14.7829 16.3829C15.519 16.3829 16.1297 16.6256 16.619 17.1068C17.1043 17.5881 17.347 18.1947 17.347 18.9226C17.347 19.6506 17.1043 20.2572 16.619 20.7385C16.1297 21.2197 15.519 21.4624 14.7829 21.4624ZM13.8285 19.9701C14.0752 20.2451 14.3906 20.3826 14.7748 20.3826C15.159 20.3826 15.4704 20.2451 15.7171 19.9701C15.9638 19.691 16.0851 19.3432 16.0851 18.9226C16.0851 18.502 15.9638 18.1542 15.7171 17.8751C15.4704 17.6001 15.159 17.4626 14.7748 17.4626C14.3906 17.4626 14.0752 17.6001 13.8285 17.8751C13.5818 18.1542 13.4564 18.502 13.4564 18.9226C13.4564 19.3432 13.5818 19.691 13.8285 19.9701ZM20.2992 21.4624C19.5753 21.4624 18.9727 21.2359 18.4955 20.791C18.0142 20.3421 17.7757 19.7193 17.7757 18.9226C17.7757 18.1299 18.0183 17.5071 18.5036 17.0582C18.993 16.6093 19.5875 16.3828 20.2993 16.3828C20.9423 16.3828 21.468 16.5405 21.8846 16.86C22.2971 17.1755 22.5357 17.5961 22.5964 18.1218L21.3427 18.3766C21.2901 18.1016 21.1647 17.8792 20.9706 17.7134C20.7765 17.5475 20.55 17.4626 20.2912 17.4626C19.9353 17.4626 19.64 17.588 19.4014 17.8428C19.1628 18.1016 19.0415 18.4575 19.0415 18.9226C19.0415 19.3876 19.1628 19.7435 19.3974 19.9983C19.636 20.2571 19.9312 20.3825 20.2911 20.3825C20.5499 20.3825 20.7724 20.3098 20.9544 20.1642C21.1364 20.0186 21.2496 19.8245 21.2981 19.5818L22.5802 19.873C22.4629 20.3745 22.204 20.7627 21.7996 21.0417C21.3993 21.3208 20.8978 21.4624 20.2992 21.4624Z" fill="#0263D1"/>
                </svg>
                <span>Word</span>
              </a>
              <a href="" class="download-answer-item danger">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.68678 0H17.7168L26.2175 8.86058V26.0945C26.2175 28.2534 24.4709 30 22.3194 30H7.68678C5.52787 30 3.78125 28.2534 3.78125 26.0945V3.90553C3.78121 1.74662 5.52783 0 7.68678 0Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.709 0V8.79311H26.2172L17.709 0Z" fill="#BFBFBF"/>
                  <path d="M8.12109 22.3841V16.9043H10.4524C11.0297 16.9043 11.4869 17.0617 11.8318 17.3841C12.1766 17.6989 12.349 18.1262 12.349 18.6584C12.349 19.1906 12.1766 19.6179 11.8318 19.9328C11.4869 20.2551 11.0297 20.4125 10.4524 20.4125H9.52289V22.3841H8.12109ZM9.52289 19.2207H10.295C10.5049 19.2207 10.6698 19.1757 10.7823 19.0708C10.8947 18.9733 10.9547 18.8384 10.9547 18.6585C10.9547 18.4786 10.8947 18.3436 10.7823 18.2462C10.6699 18.1412 10.5049 18.0963 10.295 18.0963H9.52289V19.2207ZM12.9262 22.3841V16.9043H14.8677C15.25 16.9043 15.6099 16.9568 15.9472 17.0692C16.2845 17.1816 16.5919 17.3391 16.8617 17.5565C17.1316 17.7664 17.349 18.0512 17.5064 18.4111C17.6563 18.7709 17.7388 19.1832 17.7388 19.6479C17.7388 20.1052 17.6563 20.5175 17.5064 20.8773C17.349 21.2371 17.1316 21.522 16.8617 21.7319C16.5918 21.9493 16.2845 22.1067 15.9472 22.2191C15.6099 22.3316 15.25 22.3841 14.8677 22.3841H12.9262ZM14.298 21.1922H14.7028C14.9202 21.1922 15.1226 21.1697 15.31 21.1172C15.4899 21.0647 15.6623 20.9823 15.8272 20.8698C15.9847 20.7574 16.1121 20.5999 16.202 20.3901C16.292 20.1802 16.337 19.9328 16.337 19.6479C16.337 19.3556 16.292 19.1082 16.202 18.8983C16.1121 18.6884 15.9847 18.531 15.8272 18.4186C15.6623 18.3061 15.4899 18.2237 15.31 18.1712C15.1226 18.1187 14.9202 18.0962 14.7028 18.0962H14.298V21.1922ZM18.4434 22.3841V16.9043H22.3415V18.0962H19.8452V18.9733H21.8392V20.1577H19.8452V22.3841H18.4434Z" fill="#E5252A"/>
                </svg>
                <span>PDF</span>
              </a>
            </div>
          </div>
          <div class="task-tools-right">
            <v-button type="btn-outline-danger">Удалить задание</v-button>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-2">
      <div class="sidebar-btn-group">
        <v-button type="btn-success" v-if="isEdit" @click="handleEdit">Сохранить</v-button>
        <v-button type="btn-success" v-else @click="handleCreate">Создать задание</v-button>
        <v-button type="btn-info-light">
          <i class="i-eye-white"></i>
          <span>Предпросмотр</span>
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton";
import VSelect from "@/components/VSelect";
import VDropdown from "@/components/VDropdown";
import VRadioGroup from "@/components/VRadioGroup";
import VTextarea from "@/components/VTextarea";
import taskTabs from "@/jsons/taskTabs";
import taskTypes from "@/jsons/taskTypes";
import resizeTextarea from "@/mixins/resizeTextarea";
import VCheckboxGroup from "@/components/VCheckboxGroup/index.vue";

export default {
  name: "VAdminTaskEdit",

  components: {
    VCheckboxGroup,
    VButton,
    VSelect,
    VDropdown,
    VRadioGroup,
    VTextarea
  },

  mixins: [resizeTextarea],

  data() {
    return {
      tabs: taskTabs,
      taskTypes: taskTypes,
      activeTab: 'questions',
      name: '',
      desc: '',
      taskId: this.$route.params.id,
      questions: [],
      taskPassedUsers: [],
      selectedUserId: null,
      answers: [],
      isFinished: true
    }
  },

  mounted() {
    if(this.isEdit) {
      this.fetchTask();
      this.fetchUsers();
    }
  },

  watch: {
    selectedUserId(val) {
      if(val) {
        this.fetchTaskAnswers()
      } else {
        this.answers = []
      }
    }
  },

  computed: {
    isEdit() {
      return this.$route.params.id
    }
  },

  methods: {
    handleCreate() {
      const body = {
        name: this.name,
        description: this.desc,
        lesson_id: this.$route.params.lessonId,
      }
      this.API.task.create(body)
          .then(res => {
            this.$router.push({name: 'VAdminTaskEdit', params: {id: res.data.id}})
          })
    },
    fetchTask() {
      this.API.task.getTaskById(this.taskId)
          .then((res) => {
            this.name = res.data.name;
            this.desc = res.data.description;
            this.questions = res.data.questions;
          })
          .then(() => {
            this.resize()
          })
    },
    handleEdit() {
      const body = {
        name: this.name,
        description: this.desc,
      }
      this.API.task.edit(this.taskId, body)
    },
    addQuestion(id) {
      switch (id) {
        case 1:
          this.$router.push({name: 'VAdminSingleAnswerTest'})
          break
        case 2:
          this.$router.push({name: 'VAdminShortText'})
          break
        case 4:
          this.$router.push({name: 'VAdminMultipleAnswerTest'})
          break
        case 5:
          this.$router.push({name: 'VAdminAudio'})
          break
      }
    },
    editQuestion(id, typeId, callback) {
      callback();
      switch (typeId) {
        case 1:
          this.$router.push({name: 'VAdminSingleAnswerTest', query: {questionId: id}})
          break
        case 2:
          this.$router.push({name: 'VAdminShortText', query: {questionId: id}})
          break
        case 4:
          this.$router.push({name: 'VAdminMultipleAnswerTest', query: {questionId: id}})
          break
      }
    },
    deleteQuestion(id, callback) {
      callback();
      this.API.question.delete(id)
          .then(() => {
            this.fetchTask()
          })
    },
    fetchUsers () {
      this.API.task.getTaskUsers(this.taskId)
        .then(res => {
          this.taskPassedUsers = res.data
        })
    },
    fetchTaskAnswers() {
      this.API.task.getTaskById(this.taskId, {user_id: this.selectedUserId})
        .then(res => {
          this.answers = res.data.questions;
        })
        .then(() => {
          this.resize()
        })
    },
    getCorrectAnswers(variants) {
      let correctAnswers = []
      variants = JSON.parse(JSON.stringify(variants))
      const trueObject = variants.find(item => item.is_correct === true);
      correctAnswers.push(trueObject?.id)
      return correctAnswers || []
    },
  }
}
</script>

<style scoped>

</style>
