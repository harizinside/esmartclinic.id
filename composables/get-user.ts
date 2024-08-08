interface IState {
  id: string | null
  user: IUser | null
  token: string | null
}

interface IUser {
  name: string | null
  path: string | null
}

export const useGetUser = () => {
  const userStore = useAuthStore()
  const auth = ref<IState>()
  auth.value = userStore.authState
  
  return ref(auth.value)
}
