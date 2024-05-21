<template>
  <div class="row">
    <div class="col col-2"></div>
    <div class="col col-8">
      <div class="news-card">
        <div class="news-card-caption news-card-info">
          <div class="news-details-card-title">{{ newsDetails.name}}</div>
          <div class="news-details-card-content">{{ newsDetails.body}}</div>
          <div class="news-details-card-activity">
            <button class="btn btn-md btn-access">
              <span>Записаться</span>
            </button>
          </div>
        </div>
        <div class="news-details-img">
          <img src="@/assets/img/main/news-card-img.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VNewsItem",
  data() {
    return {
      id: this.$route.params.id,
      newsDetails: {
        id: 0,
        name: String,
        body: String
      }
    }
  },mounted() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      this.API.news.getNewsDetails(this.id,'ru')
          .then((res) => {
            this.newsDetails = res?.data
          })
    },
  }
}
</script>

<style scoped>

</style>
