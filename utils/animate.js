/**
 * animate的X轴甩动函数（针对 uni-transition 组件）
 * @param {Object} refs <uni-transition>组件的引用
 * @param {Number} cycleNum 左右摇动次数
 * @param {Number} shakeLen 左右摇动位移 rpx为单位
 */
export function shakeX(refs, cycleNum = 2, shakeLen = 6) {
	for (let i = 0; i < cycleNum; i++) {
		refs.step({ translateX: `${shakeLen}rpx` }, { timingFunction: 'ease', duration: 100 })
		refs.step({ translateX: `-${shakeLen}rpx` }, { timingFunction: 'ease', duration: 100 })
	}
	refs.step({ translateX: '0rpx' }, { timingFunction: 'ease', duration: 50 })
	refs.run()
}
