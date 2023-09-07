<template>
	<view>
		<view>导航跳转的学习</view>
		<navigator url="/pages/detail/detail?id=80&age=19">跳转至详情页</navigator>
		<navigator url="../message/message" open-type="switchTab">跳转至信息页1</navigator>
		<navigator url="../contact/contact" open-type="switchTab">跳转至我的</navigator>
		<navigator url="/pages/detail/detail" open-type="redirect">跳转至详情页2</navigator>
		<button @click="goDetail" type="primary">跳转至详情页</button>
		<button @click="goMessage" type="primary">跳转至信息页</button>
		<button @click="redirectDetail">跳转至详情页并关闭当前页面</button>
	</view>
</template>2

<script>
	export default{
		onUnload() {
			console.log("导航页面卸载了")
		},
		methods:{
			//编程式导航跳转
			goDetail(){
			uni.navigateTo({
				url:"/pages/detail/detail?id=90&age=18"
			})
			},
			goMessage(){
				uni.switchTab({
					url:'/pages/message/message'
				})
			},
			redirectDetail(){
				uni.redirectTo({
					url:'/pages/detail/detail'
				})
			}
		}
		
	}
</script>

<style>
</style>