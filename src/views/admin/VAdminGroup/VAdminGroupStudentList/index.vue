<template>
  <div class="row">
    <div class="col col-2">
      <!--      <a href="#" class="back-link" @click.prevent="$router.go(-1)">← Назад</a>-->
    </div>
    <div class="col col-8">
      <b class="title-xs">Участники курса</b>
      <div class="user-list">
        <v-course-student-card
            v-for="(item, itemIdx) in userList"
            :key="itemIdx"
            :user="item"
            @edit="handleEdit"
            @delete="handleDelete"
        />
      </div>
    </div>
    <div class="col col-2">
      <div class="sidebar-btn-group">
        <router-link class="btn btn-md btn-primary" :to="{name: 'VAdminGroupStudentAdd'}">Добавить</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import VCourseStudentCard from "@/components/VCourseStudentCard";

export default {
  name: "VAdminGroupStudentList",

  components: {
    VCourseStudentCard,
  },

  mounted() {
    this.fetchUsers()
  },

  data() {
    return {
      groupId: this.$route.params.id,
      userList: [],
    }
  },

  methods: {
    fetchUsers() {
      this.API.group.getGroupById(this.groupId)
          .then((res) => {
            this.userList = res?.data.users
          })
    },
    handleDelete(id) {
      this.vGlModal.show({
        modalName: 'v-delete-confirm-modal',
        modalTitle: '',
        modalWidth: 330,
        component: 'v-delete-confirm-modal',
        componentProps: {
          id: this.groupId,
          delete: () => {
            const body = {
              user_id: id
            }
            this.API.group.removeUser(this.groupId, body).then(res => {
              if(res)
                this.vGlModal.hide('v-delete-confirm-modal')
              this.fetchUsers()
            });
          },
        }
      })
    },
  },
}
</script>
<style scoped>

</style>
