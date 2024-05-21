<template>
  <div class="row">
    <div class="col col-2">
      <!--      <a href="#" class="back-link" @click.prevent="$router.go(-1)">← Назад</a>-->
    </div>
    <div class="col col-8">
      <b class="title-l">Добавить пользователей</b>
      <b class="title-xs">Выберите пользователей</b>
      <div class="filter-bar-modal">
        <div class="filter-bar-search">
          <input
              v-model.trim="search"
              @keyup="getAllStarWarsPeople" type="text" placeholder="Поиск">
          <button class="filter-search-btn">
            <i class="i-loup-gray"></i>
          </button>
        </div>
        <div class="filter-bar-sort-modal">
          <b class="filter-bar-sort-title">Сортировка:</b>
          <div class="filter-bar-sort-list">
            <div class="filter-bar-sort-item">
              <input type="checkbox" name="sort">
              <span class="checkmark"></span>
              По алфавиту
              <span class="sort-way">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M4.5 8.25L13.5 8.25C13.95 8.25 14.25 8.55 14.25 9C14.25 9.45 13.95 9.75 13.5 9.75L4.5 9.75C4.05 9.75 3.75 9.45 3.75 9C3.75 8.55 4.05 8.25 4.5 8.25ZM6.75 3.75L11.25 3.75C11.7 3.75 12 4.05 12 4.5C12 4.95 11.7 5.25 11.25 5.25L6.75 5.25C6.3 5.25 6 4.95 6 4.5C6 4.05 6.3 3.75 6.75 3.75ZM2.25 12.75L15.75 12.75C16.2 12.75 16.5 13.05 16.5 13.5C16.5 13.95 16.2 14.25 15.75 14.25L2.25 14.25C1.8 14.25 1.5 13.95 1.5 13.5C1.5 13.05 1.8 12.75 2.25 12.75Z"
                      fill="#808080"/>
                </svg>
              </span>
            </div>
            <div class="filter-bar-sort-item">
              <input type="checkbox" name="sort">
              <span class="checkmark"></span>
              По дате
              <span class="sort-way">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M4.5 8.25L13.5 8.25C13.95 8.25 14.25 8.55 14.25 9C14.25 9.45 13.95 9.75 13.5 9.75L4.5 9.75C4.05 9.75 3.75 9.45 3.75 9C3.75 8.55 4.05 8.25 4.5 8.25ZM6.75 3.75L11.25 3.75C11.7 3.75 12 4.05 12 4.5C12 4.95 11.7 5.25 11.25 5.25L6.75 5.25C6.3 5.25 6 4.95 6 4.5C6 4.05 6.3 3.75 6.75 3.75ZM2.25 12.75L15.75 12.75C16.2 12.75 16.5 13.05 16.5 13.5C16.5 13.95 16.2 14.25 15.75 14.25L2.25 14.25C1.8 14.25 1.5 13.95 1.5 13.5C1.5 13.05 1.8 12.75 2.25 12.75Z"
                      fill="#808080"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="lesson-list">
        <div class="user-card my-2"
             v-for="(user, index) in userList"
             :key="index">
          <div class="user-info">
            <div class="user-img">
              <img v-if="user?.image" :src="user?.image" alt="">
              <img v-else src="@/assets/img/icon/user-default.svg" alt="">
            </div>
            <div class="user-name">
              <div class="user-row-name">Имя пользователя</div>
              <div class="user-row-value">{{ user?.fullname }}</div>
            </div>
            <div class="user-email">
              <div class="user-row-name">Email</div>
              <div class="user-row-value">{{ user?.email }}</div>
            </div>
          </div>
          <div class="user-activity">
            <div class="user-row-value">
              <div class="task-checkbox mx-2">
                <input :disabled="!user?.isStudent" type="checkbox" @click="handleAdd(index)"
                       value="{{user?.demo_access}}"
                       v-model="user.demo_access">
                <span class="task-checkbox-checkmark"></span>
                <span>Демо-доступ</span>
              </div>
            </div>
            <v-button v-if="!user?.isStudent" @click="handleChangeAdd(index)" type="btn-basic">Добавить</v-button>
            <v-button v-else @click="handleRemoveUserFromGroup(index)" type="btn-success">Добавлен</v-button>
          </div>
        </div>
        <v-button
            type="btn-primary"
            v-if="hasNext"
            @click="loadData"
        >
          Загрузить еще
        </v-button>
      </div>
    </div>
    <div class="col col-2">
      <div class="sidebar-btn-group">
        <v-button type="btn-info-light" @click="handleSaveList">Сохранить</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from '@/components/VButton'
import pagination from "@/mixins/pagination";

export default {
  name: "VAdminAddCourseStudents",

  components: {
    VButton
  },

  data() {
    return {
      userList: [],
      changeStatus: [],
      groupId: this.$route.params.id,
      studentList: [],
      search: "",
      demo_access: null
    }
  },

  mounted() {
    this.fetchStudents()
  },
  mixins: [pagination],
  watch() {
    if (this.search.length > 0) {
      this.getAllStarWarsPeople();
    } else
      this.fetchStudents()
  },
  methods: {
    getAllStarWarsPeople() {
      if (this.search === '') {
        this.fetchStudents()
      } else {
        const body = {
          email: this.search
        }
        this.API.user.searchByEmail(body)
            .then((res) => {
              if (res.data) {
                this.userList = []
                this.userList = res?.data
                let result = []
                result = this.userList?.map(el => {
                  if (this.studentList.find(el2 => el.id === el2.id)) {
                    el.isStudent = true;
                    el.demo_access = this.studentList.find((el3) => el.id == el3.id).demo_access;
                  }
                  return el;
                });
                this.userList = result
              }
              this.hasNext = false
            })
      }
    },
    fetchStudents() {
      this.userList = []
      this.API.group.getGroupById(this.groupId)
          .then((res) => {
            this.studentList = res?.data.users
            this.fetchUsers()
          })
    },
    fetchUsers() {
      const params = {
        page: this.currentPage
      }
      this.API.user.getList(params)
          .then(res => {
            this.userList = this.userList?.concat(res?.data?.items)
            this.hasNext = res?.data.hasNext;
            let result = []
            result = this.userList?.map(el => {
              if (this.studentList.find(el2 => el.id === el2.id)) {
                el.isStudent = true;
                el.demo_access = this.studentList.find((el3) => el.id == el3.id).demo_access;
              }
              return el;
            });
            this.userList = result
          })
    },
    handleRemoveUserFromGroup(id) {
      this.userList[id].isStudent = !this.userList[id].isStudent
      const body = {
        user_id: this.userList[id].id
      }
      this.API.group.removeUser(this.groupId, body).then(res => {
        console.log(res)
      });
    },
    handleChangeAdd(id) {
      this.userList[id].isStudent = !this.userList[id].isStudent
      const body = {
        user_id: this.userList[id].id
      }
      this.API.group.addUser(this.groupId, body).then(res => {
        console.log(res)
      });
    },
    handleAdd(id) {
      this.changeStatus.push(this.userList[id])
    },
    handleSaveList() {
      if (this.changeStatus.length > 0) {
        this.changeStatus.forEach(user => {
          const body = {
            user_id: user.id,
            demo_access: user.demo_access
          }
          this.API.group.addUser(this.groupId, body)
              .then(() => {
                this.$router.push({name: 'VAdminGroupStudentList', params: {id: this.groupId}})
              })
        })
      } else this.$router.push({name: 'VAdminGroupStudentList', params: {id: this.groupId}})

    },
    loadData() {
      this.currentPage += 1;
      this.fetchUsers()
    }
  }
}
</script>

<style scoped>

</style>
