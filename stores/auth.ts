import { defineStore } from 'pinia'
import { ref } from 'vue'

interface IState {
  id: string | null
  user: IUser | null
  token: string | null
}

interface IUser {
  name: string | null
  path: string | null
}

interface IResponse {
  name: string
  password: string
  path: string
  _id: string
}

export const useAuthStore = defineStore('__auth', () => {
  const authState = ref<IState>({
    id: null,
    user: null,
    token: null,
  })

  const useSignIn = (args: IResponse, token: string) => {
    authState.value.id = args._id
    authState.value.token = token
    authState.value.user = {
      name: args.name,
      path: args.path,
    }
  }

  const useSignOut = () => {
    authState.value.id = null
    authState.value.token = null
    authState.value.user = null
  }

  return { authState, useSignIn, useSignOut }
},
{
  persist: {
    storage: persistedState.localStorage,
  },
})
