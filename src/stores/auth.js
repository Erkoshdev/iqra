import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: window.localStorage.getItem('accessToken') || '',
    user: window.localStorage.getItem('user') || '',
    userRole: null,
  }),

  getters: {
    isLoggedIn: (state) => !!state.token,
    getToken: (state) => state.token,
    getRole: (state) => state.userRole,
    getUser: (state) => typeof state.user !== 'object' ? JSON.parse(state.user) : state.user,
  },

  actions: {
    auth(payload) {
      window.localStorage.setItem('accessToken', payload)
      this.token = payload;
    },
    setUser(payload) {
      window.localStorage.setItem('user', JSON.stringify(payload))
      this.user = payload;
    },
    setUserRole(payload) {
      this.userRole = payload;
    },
    logout() {
      window.localStorage.clear();
      this.token = this.user = '';
    }
  }
})
