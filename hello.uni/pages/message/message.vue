<template>
	<view>
		
	<div>hello uni</div>
	<button type="primary" @click="chooseImage">上传图片</button>
	<image v-for="item in imgArr" :src="item" @click="previewImg(item)"></image>
	<!-- #ifdef H5 -->
	<view>我希望只在H5页面中看见</view>
	<!-- #endif -->
	<!-- #ifdef MP-WEIXIN -->
	<view>我希望只在微信小程序页面中看见</view>
	<!-- #endif -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				imgArr:[]
			}
		},
		methods:{
			chooseImage(){
				uni.chooseImage({
					count:3,
					success:res=>{
						this.imgArr=res.tempFilePaths
					}
				})
			},
			previewImg(current){
				console.log(current)
				uni.previewImage({
					current,
					urls:this.imgArr,
					loop:true,
					indicator:'number'
				})
			}
			
		},
		onLoad(){
			// #ifdef H5
			console.log('我希望H5中打印')
			// #endif
			//  #ifdef MP-WEIXIN
			console.log('我希望微信小程序中打印')
			// #endif
		}
	}
</script>

<style>
	/* #ifdef H5 */
	view{
		color:pink;
	}
	/* #endif */
	/* #ifdef MP-WEIXIN*/
	view{
		color: aqua;
	}
	/* #endif */
</style>