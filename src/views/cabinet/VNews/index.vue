<template>
    <div class="row">
    <div class="col col-2"></div>
    <div class="col col-8">
        <b class="title-xs">Новости</b>
        <div class="news-card-group">
          <v-news-card
              v-for="(item, itemIdx) in newsList"
              :key="itemIdx"
              :item="item"
          />
        </div>
    </div>
</div>
</template>

<script>
import VNewsCard from "@/components/VNewsCard";

export default {
  name: "VNews",

  components: {
    VNewsCard
  },
  data() {
    return {
      newsList: []
    }
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      this.API.news.getList()
          .then((res) => {
            this.newsList = res?.data.items
          })
    },
  }
}
</script>

<style scoped>

</style>
