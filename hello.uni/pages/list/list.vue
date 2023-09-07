<template>
	<view>
		<button type="primary" @click="setStorage">存储数据</button>
		<button type="primary" @click="getStorage">获取数据</button>
		<button type="primary" @click="removeStorage">移除数据</button>
	<button @click="get">发送get请求</button>
	<view>咱这是列表页</view>
	<view class="box-item" v-for="item in list">
		{{item}}
	</view>
	<button @click="pullDown">刷新</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:["前端","Java","UI","测试"]
			}
		},
		onPullDownRefresh() {
			console.log("触发了下拉刷新");
			setTimeout(()=>{
			this.list=["C#","Python","JavaScript","后端","Java","Python","JavaScript","后端","Java"]
			uni.stopPullDownRefresh()	
			},3000)
		},
		onReachBottom() {
			console.log("页面触底了")
			this.list=[...this.list,...['张三','李四','赵五','王六']]
		},
		methods:{
			get(){
				uni.request({
					url:"http://localhost:8082/api/getlunbo",
					success(res) {
						console.log(res)
					}
				})
			},
			pullDown(){
				uni.startPullDownRefresh()/*(setTimeout(()=>{
					this.list=['张三','李四','赵五','王六']
					uni.stopPullDownRefresh()
				},3000))*/
			},
			setStorage(){
				// uni.setStorage({
				// 	key:'id',
				// 	data:80,
				// 	success() {
				// 		console.log('存储成功')
				// 	}
				// })
				uni.setStorageSync('id',100)
			},
			getStorage(){
				// uni.getStorage({
				// 	key:"id",
				// 	success(res) {
				// 		console.log("获取成功",res)
				// 	}
				// })
				const res=uni.getStorageSync('id')
				console.log(res)
			},
			removeStorage(){
				// uni.removeStorage({
				// 	key:"id",
				// 	success() {
				// 		console.log("移除成功")
				// 	}
				// })
				uni.removeStorageSync('id')
			}
		}
		
	}
</script>

<style>
	.box-item{
		height: 100px;
		line-height: 100px;
		
	}
</style>