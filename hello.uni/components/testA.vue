<template>
	<view>
		<button @click="addNum">这是a修改b组件的数据</button>
	</view>
</template>

<script>
	export default {
		name:"testA",
		data() {
			return {
				
			};
		},
		methods:{
			addNum(){
				uni.$emit('updateNum',10)
			}
		}
	}
</script>

<style>

</style>