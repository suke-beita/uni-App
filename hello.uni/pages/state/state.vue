<template>
	<view>
		<view>
			数据绑定
		</view>
		<view>
			{{message+1}}
		</view>
		<br/>
		<image src="../../static/cxk.gif" mode="aspectFit"></image>
		<image v-bind:src="imgUrl" mode="aspectFit"></image>
		<view v-for="(item,index) in arr" :key="item.id">
			名字：{{item.name}}，年龄:{{item.age}}
		</view>
		<button type="primary" v-on:click="clickHandle(20,$event)">
			按钮
		</button>
	</view>
	
</template>

<script>
	export default {
		data(){
			return{
				message:1,
				imgUrl:"../../static/cxk.gif",
				arr:[
					{
						name:'赵志德',
						age:20,
						id:1
					},
					{
						name:'赵二',
						age:20,
						id:2
					},
					{
						name:'赵三',
						age:20,
						id:3
					}
				]
			}
		},
		methods:{
			clickHandle(num,e){
				console.log(num,e)
			}
		}
	}
</script>

<style>
</style>