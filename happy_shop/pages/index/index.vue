<template>
	<view class="onePage">
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item">
				<view class="iconfont icon-ziyuan"></view>
				<text>哈皮超市</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>哈皮客服</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-shipin"></view>
				<text>哈皮视频</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-tupian"></view>
				<text>哈皮图片</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<view class="goods_list">
				<view class="goods_item" v-for="item in goods" :key="item.id">
					<image :src="item.img_url"></image>
					<view class="price">
						<text>￥{{item.sell_price}}</text>
						<text>￥{{item.market_price}}</text>
					</view>
					<view class="name">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers:[],
				goods:[]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		methods: {
			//获取轮播图的数据
			async getSwipers(){
			/* 	console.log('获取轮播图的数据')
				uni.request({
					url:'http://localhost:8082/api/getlunbo',
					success:(res)=> {
						console.log(res)
						if(res.data.status!==0){
							return uni.showToast({
								title:"获取数据失败"
							})
						}
						this.swipers=res.data.message
					}
				})
			}*/
				const res= await this.$myRequest({
					url:'/api/getlunbo'
				})
				this.swipers=res.data.message
			},
			//获取热门商品列表数据
			async getHotGoods(){
				const res=await this.$myRequest({
					url:'/api/getgoods?pageindex=1'
				})
				this.goods=res.data.message
			}
		}
	}
</script>

<style lang="scss">
	.onePage{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
		.nav{
			display: flex;
			.nav_item{
				width:25%;
				text-align: center;
				text{
					font-size: 30rpx;
				}
				view{
					width: 120rpx;
					height: 120rpx;
					background: #b50e03;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}
			}
		}
		
		.hot_goods{
			background: #eee;
			overflow: hidden;
			margin-top: 10px;
			.tit{
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background-color: #fff;
				margin: 10rpx 0;
			}
			
			.goods_list{
				padding:0 15rpx;
				display:flex;
				flex-wrap: wrap;
				justify-content: space-between;
				.goods_item{
					background: #fff;
					width: 355rpx;
					margin: 10rpx 0;
					padding: 15rpx;
					box-sizing: border-box;
					image{
						width: 80%;
						height:150rpx;
						display:block;
						margin:auto;
					}
					.price{
						color: $shop-color;
						font-size: 33rpx;
						margin: 15rpx 0;
						text:nth-child(2){
							color:#ccc;
							font-size: 28rpx;
							margin-left: 10rpx;
							text-decoration: line-through;
						}
					}
					
					.name{
						font-size: 30rpx;
						line-height: 50rpx;
						padding-bottom: 15rpx;
						padding-top: 10rpx;
					}
				}
			}
		}
	}
</style>
