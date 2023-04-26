<template>
	<view class="user-header">
		<image src="../../static/test/bg.jpg" style="width: 750rpx;height: 250px;"></image>
		<view class="user-header__mask">

		</view>
		<view class="user-header__info">
			<view class="user-header__avatar-box">
				<u-avatar :size="50" src="../../static/test/hpjy.png"></u-avatar>
				<view class="nickname">WHERE</view>
			</view>
			<view class="user-header__intro-box">
				<text class="user-header__text--base">这是我的自我介绍啊啊啊啊啊啊啊啊啊啊啊啊啊啊</text>
			</view>
			<view class="user-header__comment">
				<text class="user-header__text--large">22</text>
				<text class="user-header__text--base comment-item">关注</text>
				<text class="user-header__text--large">14</text>
				<text class="user-header__text--base comment-item">粉丝</text>
				<text class="user-header__text--large">2</text>
				<text class="user-header__text--base comment-item">动态</text>
			</view>
		</view>
			<view class="user-header__beauty"></view>
	</view>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="scss">
	.user-header {
		position: relative;
		height: 250px;

		&__mask {
			width: 750rpx;
			height: 250px;
			position: absolute;
			background-color: #000;
			opacity: .05;
			top: 0;
		}

		&__info {
			box-sizing: border-box;
			bottom: 20px;
			height: 120px;
			width: 750rpx;
			padding-left: 40rpx;
			position: absolute;

		}

		&__avatar-box {
			padding-top: 10px;
			display: flex;
			.nickname {
				display: flex;
				align-items: center;
				padding-left: 8px;
				color: #fff;
				font-size: 20px;
				font-weight: bold;
			}
		}

		&__intro-box,
		&__comment {
			box-sizing: border-box;
			padding-top: 10px;
			height: 30px;
		}



		&__comment {
			flex-direction: row;
			align-items: flex-end;

			.comment-item {
				padding-right: 16rpx;

			}
		}

		&__text {
			&--base {
				font-size: 12px;
				color: #fff;
				height: 16px;
				line-height: 16px;
			}

			&--large {
				margin: 0 2px;
				font-size: 16px;
				color: #fff;
				height: 18px;
				line-height: 18px;
			}
		}
		
		&__beauty {
			margin-top: 10px;
			height: 10px;
			width: 100%;
			background-color: #fff;
			position: absolute;
			bottom: -2px;
			border-radius: 10px 10px 0 0;
		}

	}
</style>
