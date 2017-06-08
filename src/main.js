import Vue from 'vue'

//引入模块
import App from './App'
//懒加载模块


new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})
