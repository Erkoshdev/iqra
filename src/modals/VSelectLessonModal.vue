<template>
  <div class="select-lesson-modal">
    <b class="title-xs">Все уроки</b>
    <div class="filter-bar">
      <div class="filter-bar-search">
        <input type="text" placeholder="Поиск">
        <button class="filter-search-btn">
          <i class="i-loup-gray"></i>
        </button>
      </div>
      <div class="filter-bar-sort">
        <b class="filter-bar-sort-title">Сортировка:</b>
        <div class="filter-bar-sort-list">
          <div class="filter-bar-sort-item">
            <input type="checkbox" name="sort">
            <span class="checkmark"></span>
            По алфавиту
            <span class="sort-way">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 8.25L13.5 8.25C13.95 8.25 14.25 8.55 14.25 9C14.25 9.45 13.95 9.75 13.5 9.75L4.5 9.75C4.05 9.75 3.75 9.45 3.75 9C3.75 8.55 4.05 8.25 4.5 8.25ZM6.75 3.75L11.25 3.75C11.7 3.75 12 4.05 12 4.5C12 4.95 11.7 5.25 11.25 5.25L6.75 5.25C6.3 5.25 6 4.95 6 4.5C6 4.05 6.3 3.75 6.75 3.75ZM2.25 12.75L15.75 12.75C16.2 12.75 16.5 13.05 16.5 13.5C16.5 13.95 16.2 14.25 15.75 14.25L2.25 14.25C1.8 14.25 1.5 13.95 1.5 13.5C1.5 13.05 1.8 12.75 2.25 12.75Z" fill="#808080"/>
                </svg>
              </span>
          </div>
          <div class="filter-bar-sort-item">
            <input type="checkbox" name="sort">
            <span class="checkmark"></span>
            По дате
            <span class="sort-way">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 8.25L13.5 8.25C13.95 8.25 14.25 8.55 14.25 9C14.25 9.45 13.95 9.75 13.5 9.75L4.5 9.75C4.05 9.75 3.75 9.45 3.75 9C3.75 8.55 4.05 8.25 4.5 8.25ZM6.75 3.75L11.25 3.75C11.7 3.75 12 4.05 12 4.5C12 4.95 11.7 5.25 11.25 5.25L6.75 5.25C6.3 5.25 6 4.95 6 4.5C6 4.05 6.3 3.75 6.75 3.75ZM2.25 12.75L15.75 12.75C16.2 12.75 16.5 13.05 16.5 13.5C16.5 13.95 16.2 14.25 15.75 14.25L2.25 14.25C1.8 14.25 1.5 13.95 1.5 13.5C1.5 13.05 1.8 12.75 2.25 12.75Z" fill="#808080"/>
                </svg>
              </span>
          </div>
        </div>
      </div>
    </div>
    <div class="lesson-list">
      <v-lesson-card
        v-for="(item, itemIdx) in lessonList"
        :key="itemIdx"
        :name="item.name"
        :id="item.id"
        :is-select-card="true"
        @select="handleSelect"
      />
    </div>
    <div class="select-lesson-modal-tools">
      <v-button type="btn-outline-basic" @click="handleHide">Отмена</v-button>
      <v-button type="btn-info-light" @click="handleAdd">Добавить</v-button>
    </div>
  </div>
</template>

<script>
import VButton from '@/components/VButton'
import VLessonCard from "@/components/VLessonCard";

export default {
  name: "VTestModal",

  components: {
    VLessonCard,
    VButton
  },

  props: {
    courseId: Number,
    chapterId: Number,
    addLessons: {
      type: Function,
      default: () => {}
    }
  },

  data() {
    return {
      lessonList: [],
      selectedIds: []
    }
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.API.lesson.getList()
        .then(res => {
          this.lessonList = res.data.items
        })
    },
    handleSelect(id, isSelected) {
      if(isSelected) {
        this.selectedIds.push(id)
      } else {
        this.selectedIds = this.selectedIds.filter(item => item !== id)
      }
    },
    handleHide() {
      this.vGlModal.hide('v-select-lesson-modal')
    },
    handleAdd() {
      this.addLessons(this.selectedIds, this.chapterId)
    }
  }
}
</script>

<style scoped>

</style>
