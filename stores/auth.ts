import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    id: null,
    user: {},
    token: null,
  }),
  actions: {
    signin() {
    },
    signout() {
    },
    online() {
    },
  },
  getters: {
    getUsers: state => state,
    getToken: state => state.token,
  },
})
