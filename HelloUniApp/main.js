import App from './App'
import store from './store'
// #ifndef VUE3
import Vue from 'vue'
// main.js，注意要在use方法之后执行
import uView from '@/uni_modules/uview-ui'

// import { getImageInfo } from '@/utils/uni-app'
// import uView from 'uview-ui'

// import MescrollBody from "@/uni_modules/mescroll-uni/components/mescroll-body/mescroll-body.vue"
// import MescrollUni from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-uni.vue"
// Vue.component('mescroll-body', MescrollBody)
// Vue.component('mescroll-uni', MescrollUni)

Vue.use(uView)
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$adpid = "1111111111"
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
App.mpType = 'app'
const app = new Vue({
	store,
	uView,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	app.config.globalProperties.$adpid = "1111111111"
	app.config.globalProperties.$backgroundAudioData = {
		playing: false,
		playTime: 0,
		formatedPlayTime: '00:00:00'
	}
	return {
		app
	}
}
// #endif
