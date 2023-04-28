<template>
	<view class="user-detail">
		<tui-list-view>
			<tui-list-cell :hover="false" arrow>
				<view class="user-detail__cell-box">
					<text class="title">昵称</text>
					<view class="content">WHERE</view>
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false" arrow>
				<view class="user-detail__cell-box">
					<text class="title">性别</text>
					<view class="content">男</view>
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false" arrow>
				<view class="user-detail__cell-box">
					<text class="title">个性签名</text>
					<view class="content">快来介绍一下自己吧!</view>
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false" arrow>
				<view class="user-detail__cell-box">
					<text class="title">背景图</text>
					<view class="content">快来上传背景图吧!</view>
				</view>
			</tui-list-cell>
		</tui-list-view>
		
		<view class="user-detail__btn-box">
			<tui-button>退出登录</tui-button>
		</view>
	</view>
</template>

<script>
	import tuiButton from "@/components/thorui/tui-button/tui-button.vue"
	import tuiListView from "@/components/thorui/tui-list-view/tui-list-view.vue"
	import tuiListCell from "@/components/thorui/tui-list-cell/tui-list-cell.vue"
	import tuiActionsheet from "@/components/thorui/tui-actionsheet/tui-actionsheet.vue"
	export default {
		components: {
			tuiListView,
			tuiListCell,
			tuiButton,
			tuiActionsheet
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.user-detail {
		&__cell-box {
			display: flex;
			.title {
				font-size: 16px;
			}
			.content {
				margin-left: auto;
				margin-right: 20rpx;
				font-size: 14px;
				color: $u-tips-color;
			}
		}
		
		&__btn-box {
			padding: 0 40rpx;
		}
	}
</style>
