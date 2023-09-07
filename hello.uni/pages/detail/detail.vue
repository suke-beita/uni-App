<template>
	<!-- <view>
		<text selectable="" space="ensp">唱 歌跳舞打篮球</text>
		<view>
			
		<text>&lt;</text>
		</view>
	</view> -->
	<view class="box1" hover-class="box-active1">
		<view class="box2" hover-class="box-active2" hover-stop-propagation="" :hover-start-time="3000">
			大盒子
		</view>
		<!-- <button>按钮</button>
		<button size="mini">按钮</button>
		<button type="primary">按钮</button>
		<button plain="">按钮</button>
		 <button disabled>按钮</button>
		 <button loading></button> -->
		 <image src="../../static/cxk.gif"></image>
		 <image src="../../static/cxk.gif" mode="aspectFit"></image>
		 <image src="../../static/cxk.gif" mode="aspectFill"></image>
	</view>
</template>

<script>
	export default{
		onLoad(option) {
			console.log(option)
		}
	}
</script>

<style>
	.box1{
		width: 200px;
		height: 200px;
		background-color: brown;
	}
	.box2{
		width: 100px;
		height: 80px;
		background-color: aqua;
	}
	.box-active1{
		background-color: darkgreen;
	}
	.box-active2{
		background-color: black;
	}
</style>