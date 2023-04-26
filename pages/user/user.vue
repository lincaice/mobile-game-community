<template>
	<view>
		<u-navbar title="导航栏组件" :bgColor="'rgba(255,255,255,'+opacity+')'" fixed :placeholder="false"
			:safeAreaInsetTop="true" :border="false" >
			<template slot="center">
				<image src="../../static/test/hpjy.png" :style="{width:'30px',height:'30px','border-radius':'50%',opacity: opacity}">
				</image>
				<text>ab3</text>
			</template>
			<template slot="left">
				<view></view>
			</template>
			<template slot="right">
				<image @click="goDetail" src="../../static/test/edit.png" style="width: 26px;height: 26px">
				</image>
			</template>

		</u-navbar>
		<user-header></user-header>
		<u-sticky :offset-top="offsetTop+'px'"  bgColor="#fff">
			<u-tabs :list="[{
			              name: '动态',
			          }, {
			              name: '精彩时刻',
			          }]">
			</u-tabs>
		</u-sticky>
		<view style="margin: 50px 0 30px 0;">
			
			<u-empty
							mode="page"
							icon="../../static/test/empty1.png"
							text="暂无动态"
			>
			</u-empty>
		</view>
		
		<view style="height: 2000px;">
			<u-button type="primary" text="确定" @click="goLogin"></u-button>
		</view>
	</view>
</template>

<script>
	import userHeader from '@/components/user/user-header.vue'
	export default {
		components: {
			userHeader,
		},
		data() {
			return {
				opacity: 0,
				offsetTop: 0
			}
		},
		onLoad(){
			this.offsetTop = uni.getSystemInfoSync().statusBarHeight	+ 44
			// #ifdef H5
			this.offsetTop = 0
			// #endif
		},
		onPageScroll(e) { //nvue暂不支持滚动监听，可用bindingx代替
			if (e.scrollTop < 100) {
				this.opacity = e.scrollTop / 100
			} else {
				this.opacity = 1
			}
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			goDetail(){
				uni.navigateTo({
					url: '/pages/userdetail/userdetail'
				})
			}
		}
	}
</script>

<style>

</style>
