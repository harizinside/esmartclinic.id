import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ILabel {
  name: string
  icon: string
  status: boolean
  order: number
  privilage: IPrivilages,
}

interface IMenu extends ILabel{
  children?: ILabel
}

interface IPrivilages {
  create: boolean
  read: boolean
  update: boolean
  delete: boolean
  import: boolean
  export: boolean
}

export const useMenuStore = defineStore('__auth', () => {
  const menuState = ref<IMenu[]>([
    {
      name: '',
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
      children: {
        name: '',
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
        }
      }
    }
  ])

  const setMenu = (args: IMenu[]) => {
    menuState.value = args
  }

  return { menuState, setMenu}
},
{
  persist: {
    storage: persistedState.localStorage,
  },
})
