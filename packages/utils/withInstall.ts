import type { App, Component, Plugin } from 'vue'

export const withInstall = <T extends Component>(main: T) => {
  (main as SFCWithInstall<T>).install = (app: App) => {
    const name = main.name
    name && app.component(name, main)
  }
  return main as SFCWithInstall<T>
}

export type SFCWithInstall<T> = T & Plugin