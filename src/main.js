import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip=false;

console.log('main');
new Vue({
	el:'#app',
	render(h){
		return h(App);
	},
});
