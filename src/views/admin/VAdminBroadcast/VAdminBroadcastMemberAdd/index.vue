<template>
  <div class="row">
    <div class="col col-2"></div>
    <div class="col col-8">
      <b class="title-xs">Участники эфира</b>
      <div class="broadcast-member-search">
        <div class="filter-bar-search">
          <input type="text" placeholder="Поиск" v-model="search">
          <button class="filter-search-btn">
            <i class="i-loup-gray"></i>
          </button>
        </div>
      </div>
      <div class="broadcast-member-sort">
        <b>Сортировка:</b>
        <div class="broadcast-member-sort-toggle">
          <v-select
              :options="courseList"
              label-name="name"
              placeholder="Выберите курс"
              :reduce="item => item.id"
              v-model="courseId"
          />
        </div>
        <div class="broadcast-member-sort-toggle">
          <v-select
              v-if="courseId && groupList.length"
              :options="groupList"
              label-name="name"
              placeholder="Выберите поток"
              :reduce="item => item.id"
              v-model="groupId"
              @input="fetchList"
          />
        </div>
      </div>
      <div class="broadcast-member-list">
        <div class="user-card my-2" v-for="(item, itemIdx) in list" :key="itemIdx">
          <div class="user-info">
            <div class="user-img">
              <img src="@/assets/img/icon/user-default.svg" alt="">
            </div>
            <div class="user-name">
              <div class="user-row-name">Имя пользователя</div>
              <div class="user-row-value">{{ item.fullname }}</div>
            </div>
          </div>
          <div class="user-activity">
            <v-button type="btn-success" size="btn-sm" v-if="item.isAdded" @click="handleDelete(item.id)">Добавлен</v-button>
            <v-button type="btn-basic" size="btn-sm" v-else @click="handleAdd(item.id)">Добавить</v-button>
          </div>
        </div>
        <v-button
            type="btn-primary"
            style="margin: 15px auto 0"
            v-if="hasNext"
            @click="loadMore"
        >
          Показать еще
        </v-button>
      </div>
    </div>
    <div class="col col-2">
      <div class="sidebar-btn-group">
        <v-button type="btn-success" @click="handleSave">Сохранить</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton"
import pagination from "@/mixins/pagination"
import VSelect from "@/components/VSelect";

export default {
  name: "VAdminBroadcastMemberList",

  components: {
    VButton,
    VSelect
  },

  mixins: [
      pagination
  ],

  mounted() {
    this.fetchList()
    this.fetchCourseList()
  },

  data() {
    return {
      broadcastId: this.$route.params.id,
      list: [],
      addedUsers: [],
      courseList: [],
      groupList: [],
      courseId: null,
      groupId: null,
      search: ''
    }
  },

  watch: {
    search() {
      this.fetchList()
    },
    courseId() {
      this.fetchGroupList(this.courseId)
      this.fetchList()
    },
    groupId() {
      this.fetchList()
    }
  },

  methods: {
    fetchCourseList() {
      this.API.course.getList()
          .then(res => {
            this.courseList = res.data.items
          })
    },
    fetchGroupList(id) {
      const params = {
        course_id: id
      }
      this.API.group.getList(params)
          .then(res => {
            this.groupList = res.data.items
          })
    },
    fetchList() {
      if(!this.courseId) {
        this.groupId = null
      }
      this.currentPage = 1
      const params = {
        course_id: this.courseId,
        group_id: this.groupId,
        name: this.search,
        page: this.currentPage
      }
      this.API.user.getStudentList(params)
          .then(res => {
            this.list = res?.data?.items
            this.hasNext = res?.data.hasNext;
          })
    },
    loadMore() {
      this.currentPage += 1;
      const params = {
        course_id: this.courseId,
        group_id: this.groupId,
        name: this.search,
        page: this.currentPage
      }
      this.API.user.getStudentList(params)
          .then(res => {
            this.list = this.list.concat(res?.data?.items)
            this.hasNext = res?.data.hasNext;
          })
    },
    handleAdd(id) {
      const body = {
        users: []
      }
      body.users.push(id)
      this.API.broadcast.addMember(this.broadcastId, body)
          .then(() => {
            body.users = []
            this.list.forEach(item => {
              if(item.id === id) {
                item.isAdded = true
              }
            })
          })
    },
    handleDelete(id) {
      const body = {
        users: []
      }
      body.users.push(id)
      this.API.broadcast.removeMember(this.broadcastId, body)
          .then(() => {
            body.users = []
            this.list.forEach(item => {
              if(item.id === id) {
                item.isAdded = false
              }
            })
          })
    },
    handleSave() {
      this.$router.push({name: 'VAdminBroadcastMemberList', params: {id: this.broadcastId}})
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
