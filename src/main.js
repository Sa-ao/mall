import { createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from 'components/common/Toast/Toast.vue'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import '@/icons'
const app = createApp(App)
app.use(router)
app.use(store)
app.component("Toast",toast)
//app.use(VueLazyload)
FastClick.attach(document.body)

 app.mount('#app')
// import SvgIcon from 'components/common/Svg/Svg' // svg组件
// // 注册为全局组件
// app.component('svg-icon', SvgIcon)
// const req = require.context('./icons/svg', false, /\.svg$/)
// const requireAll = requireContext => requireContext.keys().map(requireContext)
// requireAll(req)