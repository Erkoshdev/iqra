<template>
  <v-dropdown class="profile-link">
    <template #base>
      <button class="profile-link-toggle">
        <img src="@/assets/img/icon/user-default.svg" alt="">
      </button>
    </template>
    <template #dropdown="{ handleShow }">
      <div class="profile-link-menu">
        <div class="profile-link-demo">
          <b>{{ authStore.user.name }} {{ authStore.user.surname }}</b>
<!--          <span>11 класс</span>-->
        </div>
        <ul class="profile-link-tools">
          <li v-for="(item, itemIdx) in menu" :key="itemIdx">
            <a href="#" @click.prevent="handleSelect(item, handleShow)" :class="{danger: item.link === 'logout'}">
              <span class="profile-link-tools-icon" v-html="item.icon"></span>
              <span class="profile-link-tools-name">{{ item.name }}</span>
              <span class="money-text" v-if="item.price">{{ item.price }}</span>
            </a>
          </li>
        </ul>
      </div>
    </template>
  </v-dropdown>
</template>
<script>
import VDropdown from '@/components/VDropdown';
import headerProfileMenu from "@/jsons/headerProfileMenu";
import { useAuthStore } from "@/stores/auth";

export default {
  name: "VHeaderProfile",

  setup() {
    const authStore = useAuthStore()
    return {
      authStore
    }
  },

  components: {
    VDropdown
  },

  data() {
    return {
      menu: headerProfileMenu
    }
  },

  computed: {
    isAdminPage() {
      return this.$route.meta.isAdminPage
    }
  },

  methods: {
    async handleSelect(item, callback) {
      callback();
      if (this.$route.name === item.link) return;
      else if (item.link === 'logout') {
        this.API.auth.logout()
            .then(res => {
              if(!res.error) {
                this.authStore.logout();
                this.$router.push('/')
              }
            })
      } else if(item.link === 'settings' && this.isAdminPage) {
        this.$router.push({name: 'VAdminSettings'});
      } else if(item.link === 'settings' && !this.isAdminPage) {
        this.$router.push({name: 'VSettings'});
      } else {
        this.$router.push(item.link);
      }
    },
  }
}
</script>

<style scoped>

</style>
