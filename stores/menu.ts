import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ILabel {
  name: string
  href: string
  icon: string
  status: boolean
  order: number
  privilage: IPrivilages
}

interface IMenu extends ILabel {
  children?: ILabel[]
}

interface IPrivilages {
  create: boolean
  read: boolean
  update: boolean
  delete: boolean
  import: boolean
  export: boolean
}

export const useMenuStore = defineStore('__menu', () => {
  const menuState = ref<IMenu[]>([
    {
      name: '',
      href: '',
      icon: '',
      status: false,
      order: 0,
      privilage: {
        create: false,
        read: false,
        update: false,
        delete: false,
        import: false,
        export: false,
      },
      children: [],
    },
  ])

  const setMenu = (args: IMenu[]) => {
    menuState.value = args
  }

  const unsetMenu = () => {
    menuState.value = [{
      name: '',
      href: '',
      icon: '',
      status: false,
      order: 0,
      privilage: {
        create: false,
        read: false,
        update: false,
        delete: false,
        import: false,
        export: false,
      },
      children: [],
    }]
  }

  return { menuState, setMenu, unsetMenu }
},
{
  persist: {
    storage: persistedState.localStorage,
  },
})
