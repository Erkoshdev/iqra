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
        <router-link class="btn btn-md btn-primary" :to="{name: 'VAdminAddCourseStudents'}">Добавить</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import VCourseStudentCard from "@/components/VCourseStudentCard";

export default {
  name: "VAdminCourseStudents",

  components: {
    VCourseStudentCard,
  },

  mounted() {
    this.fetchUsers()
  },

  data() {
    return {
      courseId: this.$route.params.id,
      userList: [],
    }
  },

  methods: {
    fetchUsers() {
      this.API.course.getStudentList(this.courseId)
          .then((res) => {
            this.userList = res?.data
          })
    },
    // handleCourseStudents() {
    //   this.vGlModal.show({
    //     modalName: 'v-course-students-modal',
    //     modalTitle: '',
    //     modalWidth: 580,
    //     component: 'v-course-students-modal',
    //     componentProps: {
    //       courseId: Number(this.courseId),
    //       studentList: this.userList,
    //       handleSave: (data) => {
    //         if(data.length > 0){
    //           data.forEach(item => {
    //             this.API.course.changeAccess(this.courseId, item)
    //                 .then(() => {
    //                   this.vGlModal.hide('v-course-students-modal');
    //                   this.fetchUsers()
    //                 })
    //           })
    //         } else {
    //           this.vGlModal.hide('v-course-students-modal');
    //           this.fetchUsers()
    //         }
    //       },
    //     }
    //   })
    // },
    handleDelete(id) {
      const body = {
        user_id: id
      }
      this.API.course.changeAccess(this.courseId,body).then(res => {
        if(res)
        this.fetchUsers()
      });
    }
  },
}
</script>
<style scoped>

</style>
