<template>
	<view class="container">

		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用
			组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		<button type="default" class="btn">333</button>
		<uni-badge text="22" type="primary"></uni-badge>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		}
	}
</script>

<style>
	.btn {
		background-color: #6ff;
		/* border-radius: 20px; */
	}
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
