<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('页面隐藏了')
		},
		onError:function(err){
			console.log("出现异常",err)
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url("./static/fonts/iconfont.css");
	.box1{
		background:pink;
	}
</style>
