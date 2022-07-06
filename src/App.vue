<template>
	<div class="app">
		<Test/>
	</div>
</template>

<script>
import Test from './Test.vue';
import {add} from './add';

console.log('App');
add();
export default {
	name:'App',
	components:{
		Test,
	},
	data(){
		return {
		};
	}
};
</script>

<style lang="scss">
</style>
