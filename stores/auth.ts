import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'

interface IState {
  id: Ref<string | null>
  user: Ref<IUser | null>
  token: Ref<string | null>
}

interface IUser {
  name: Ref<string | null>
  path: Ref<string | null>
}

interface IResponse {
  name: string
  password: string
  path: string
  _id: string
}

export const useAuthStore = defineStore('auth', {
  state: (): IState => {
    return {
      id: ref(null),
      user: ref(null),
      token: ref(null),
    }
  },
  actions: {
    signin(args: IResponse, token: string) {
      this.id = args._id
      this.token = token
      this.user = {
        name: ref(args.name),
        path: ref(args.path),
      }
    },
    signout() {
      this.id = null
      this.token = null
      this.user = null
    },
  },
  getters: {
    getUsers: state => state.user,
    getToken: state => state.token,
    getId: state => state.id,
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
