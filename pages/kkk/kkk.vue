<template>
	<view>
		<text class='title'>我的订阅</text>
		<view class="my_flex_box">
			<view class="inner_box">
				<!-- <image src="../../static/test/和平精英.png" mode=""></image> -->
				<text>和平精英</text>
			</view>
			<view class="inner_box add">
				<!-- <image src="../../static/test/添加.png" mode=""></image> -->
				<text>订阅游戏</text>
				</view>
			<view class="inner_box"></view>
			<view class="inner_box"></view>
		</view>
		<text class='title'>我负责的</text>
		<view class="my_flex_box">
			<view class="inner_box">
				<!-- <image src="../../static/test/和平精英.png" mode=""></image> -->
				<text>和平精英</text>
			</view>
			<view class="inner_box add">
				<!-- <image src="../../static/test/添加.png" mode=""></image> -->
				<text>添加游戏</text>
				</view>
			<view class="inner_box"></view>
			<view class="inner_box"></view>
		</view>
		<text class='title'>推荐游戏</text>
		<view class="my_flex_box">
			<view class="inner_box">
				<!-- <image src="../../static/test/和平精英.png" mode=""></image> -->
				<text>和平精英</text>
			</view>
			<view class="inner_box">
				<!-- <image src="../../static/test/王者荣耀.png" mode=""></image> -->
				<text>王者荣耀</text>
			</view>
			
			<view class="inner_box"></view>
			<view class="inner_box"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #f6fafd;
	}
	.title {
		display: block;
		font-size: 16px;
		margin:20px 0 10px 4px;
		font-weight: bold;
	}
	.my_flex_box{
		display: flex;
	}
	.inner_box{
		display: flex;
		height: 210rpx;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-right: 20px;
	}
 image{
	 width: 150rpx;
	 height: 150rpx;
 }

</style>
