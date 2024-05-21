<template>
  <div :class="open ? 'program open' : 'program'" :style="program.color" @click="$emit('toggleOpen', index)">
    <div class="title">
      {{ program.title }}
    </div>
    <div class="content">
      <div class="content-col">
       <div class="program-info">{{program.info}}</div>
        <img :src="program.src" alt="image.alt">
      </div>
      <div class="content-col">
        <div class="content-learn-block">
          <div class="content-learn-title">
            По итогу модуля вы научитесь
          </div>
          <ul class="content-learn-list">
            <li v-for="item in program.learn" :key="item">
              — {{ item }}
            </li>
          </ul>
        </div>
        <div class="content-syllabus-block">
          <div class="content-syllabus-title">
            Программа модуля
          </div>
          <ol class="content-syllabus-list" type="1">
            <li v-for="item in program.syllabus" :key="item">
              {{ item }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VAccordianFull",
  props: ['program', 'index', 'open', 'length']
}
</script>


<style scoped>
</style>
