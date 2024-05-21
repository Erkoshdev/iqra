<template>
  <div class="row">
    <div class="col col-2"></div>
    <div class="col col-8">
      <b class="title-xs">Участники эфира</b>
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
          <div class="user-activity-delete">
            <button class="btn-plain" @click="handleDelete(item.id)">
              <i class="icon i-delete"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-2">
      <div class="sidebar-btn-group">
        <router-link class="btn btn-md btn-primary" :to="{name: 'VAdminBroadcastMemberAdd', params: {id: broadcastId}}">Добавить</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "VAdminBroadcastMemberAdd",

  mounted() {
    this.fetchList()
  },

  data() {
    return {
      broadcastId: this.$route.params.id,
      list: []
    }
  },

  methods: {
    fetchList() {
      this.API.broadcast.getBroadcastById(this.broadcastId)
          .then(res => {
            this.list = res.data.users
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
            this.fetchList()
          })
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
