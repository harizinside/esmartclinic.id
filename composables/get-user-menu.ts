interface ILabel {
  name: string
  href: string
  icon: string
  status: boolean
  order: number
  privilage: IPrivilages,
}

interface IMenu extends ILabel{
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

export const useGetUserMenu = () => {
  const menuStore = useMenuStore()
  const menu = ref<IMenu[]>()
  menu.value = menuStore.menuState

  return ref(menu.value)
}
