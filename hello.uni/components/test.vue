<template>
	<view id="myVue">
		这是test组件{{num}}
		这是父组件传递过来的数据{{title}}
		<button @click="sendNum">给父组件传值</button>
	</view>
</template>

<script>
	export default {
		name:"test",
		data() {
			return {
				num:3,
				intId:null
			};
		},
		props:['title'],
		methods:{
			sendNum(){
				console.log('给父组件传值')
				this.$emit('myEven',this.num)
			}
		},
		beforeCreate() {
			console.log('实例已经开始初始化了',this.num)
			
		},
		created() {
			// console.log(this.num)
			// this.intId=setInterval(()=>{
			// 	console.log('执行定时器')
			// },2000)
		},
		beforeMount() {
			// console.log('beforemount',document.getElementById('myVue'))
		},
		mounted() {
			// console.log('mounted',document.getElementById('myVue'))
		},
		destroyed() {
			// console.log('组件销毁了')
			// clearInterval(this.intId)
		}
	}
</script>

<style>

</style>