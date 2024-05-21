<template>
  <div class="my-course-item">
    <div class="my-course-caption">
      <div class="my-course-primary">{{ categoryName }}</div>
      <div class="my-course-secondary">{{ name }}</div>
      <div class="my-course-additional">{{ lessonCount }} уроков</div>
    </div>
    <div class="my-course-progress" v-if="hasProgress">
      <div class="progress-bar" :style="`background: conic-gradient(#3EC965 ${50}%, #DADADA 0)`">
        <div class="progress-bar-value">75%</div>
      </div>
    </div>
    <div class="my-course-img" v-else>
      <img v-if="image" :src="image" alt="">
    </div>
    <router-link class="absolute-link" v-if="isAdmin" :to="{name: 'VAdminCourseView', params: {id: id}}"></router-link>
    <router-link class="absolute-link" v-else :to="{name: 'VCourse', params: {courseId: id}}"></router-link>
  </div>
</template>

<script>
export default {
  name: "VCourseCard",

  props: {
    categoryName: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    lessonCount: {
      type: Number,
      default: 0,
    },
    id: {
      type: Number,
      default: null
    },
    image: {
      type: String,
      default: ''
    },
    hasProgress: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
