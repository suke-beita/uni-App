<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<test v-if="flag" :title="title" @myEven="getNum"></test>
		<button @click="checkTest" type="primary">切换test组件</button>
		<test-a></test-a>
		<test-b></test-b>
		<uni-calendar 
		    :insert="true"
		    :lunar="true" 
		    :start-date="'2023-3-2'"
		    :end-date="'2023-11-11'"
		    @change="change"
		    >
		</uni-calendar>
	</view>
</template>

<script>
	import test from "../../components/test.vue"
	import testA from "../../components/testA.vue"
	import testB from "../../components/testB.vue"
	import uniCalender from '@/uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				flag:true
			}
		},
		onLoad(option) {
			console.log("页面加载了",option)
		},
		onShow() {
			console.log("页面展示了")
		},
		onReady() {
			console.log("页面初次渲染完成")
		},
		onHide() {
			console.log("页面隐藏了")
		},
		methods: {
			checkTest(){
				this.flag=!this.flag
			},
			getNum(num){
				console.log(num)
			},
			change(e){
				console.log('触发了change',e)
			}
		},
		components:{
			test,
			"test-a":testA,
			"test-b":testB,
			uniCalender
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
