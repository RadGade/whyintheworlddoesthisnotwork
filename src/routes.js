import Home from './home.svelte'
import Page2 from './page-2.svelte'


const routes = [
  {
    name: '/',
    component: Home
  },
  { name: 'page2', component: Page2},
]

export { routes }